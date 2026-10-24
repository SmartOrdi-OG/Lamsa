import { redis, getAllRatings, getRecentErrors, clearErrors, getGenerationCount } from './_db.js';
import { stripe } from './_stripe.js';

export default async function handler(req, res) {
  // The admin page (lamsa-admin.html) POSTs here rather than to its own API
  // file — unrelated to fal.ai status polling, but Vercel's Hobby plan caps
  // serverless functions at 12 and this project is already at that limit
  // (see api/me.js and api/auth-login.js for the same reasoning). GET stays
  // the existing fal.ai status/result proxy untouched below.
  if (req.method === 'POST') return handleAdmin(req, res);

  console.log('[api/status] handler invoked, method:', req.method, 'query:', req.query);

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) {
    console.error('[api/status] FAL_API_KEY not configured');
    return res.status(500).json({ error: 'FAL_API_KEY not configured' });
  }

  const { request_id, mode, model } = req.query;
  if (!request_id) return res.status(400).json({ error: 'request_id is required' });

  // NOTE: the queue's status/result endpoints live under each model's base
  // app path, NOT under the specific sub-route used to submit the job (e.g.
  // fal-ai/flux-pro, not fal-ai/flux-pro/kontext; fal-ai/nano-banana-pro, not
  // fal-ai/nano-banana-pro/edit) — fal.ai's own submit response returns
  // status_url/response_url without the sub-route. Hitting the sub-route
  // path returns an empty 405 body, which used to crash this handler's JSON
  // parsing. `model` picks which app's base to poll; defaults to flux for
  // any caller that predates the two-model comparison feature.
  const APP_BASES = {
    flux: 'https://queue.fal.run/fal-ai/flux-pro/requests/',
    nano: 'https://queue.fal.run/fal-ai/nano-banana-pro/requests/'
  };
  const base = (APP_BASES[model] || APP_BASES.flux) + request_id;
  const url = mode === 'result' ? base : (base + '/status');

  console.log('[api/status] fetching:', url);

  try {
    const falRes = await fetch(url, {
      headers: { 'Authorization': `Key ${FAL_API_KEY}` }
    });

    console.log('[api/status] fal.ai http status:', falRes.status);

    const rawText = await falRes.text();
    let data;
    try {
      data = rawText ? JSON.parse(rawText) : {};
    } catch (parseErr) {
      console.error('[api/status] non-JSON response from fal.ai:', rawText);
      return res.status(502).json({ error: 'Unexpected response from fal.ai', raw: rawText });
    }

    if (!falRes.ok) {
      console.error('[api/status] fal.ai status/result error:', falRes.status, JSON.stringify(data));
      return res.status(falRes.status).json({ error: 'Status check failed', details: data });
    }

    console.log('[api/status] fal.ai response:', mode === 'result' ? '(result payload, images: ' + (data.images ? data.images.length : 0) + ')' : JSON.stringify(data));

    return res.status(200).json(data);

  } catch (err) {
    console.error('[api/status] Status error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}

// Single shared password (ADMIN_PASSWORD env var) rather than a per-user
// login — this is an internal ops page, not a customer-facing account
// system, so there's no session/user to tie it to.
async function handleAdmin(req, res) {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!ADMIN_PASSWORD) {
    console.error('[api/status admin] ADMIN_PASSWORD not configured');
    return res.status(500).json({ error: 'Admin not configured' });
  }

  const { adminPassword, view } = req.body || {};
  if (adminPassword !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Wrong password' });
  }

  if (!redis) return res.status(500).json({ error: 'Database not configured' });

  try {
    if (view === 'ratings') {
      const ratings = await getAllRatings();
      const count = ratings.length;
      const sum = ratings.reduce((s, r) => s + (Number(r.rating) || 0), 0);
      const average = count ? Math.round((sum / count) * 100) / 100 : 0;
      return res.status(200).json({ count, average, ratings: ratings.slice(-200).reverse() });
    }

    if (view === 'errors') {
      const errors = await getRecentErrors(200);
      return res.status(200).json({ errors });
    }

    if (view === 'clear_errors') {
      await clearErrors();
      return res.status(200).json({ ok: true });
    }

    if (view === 'config') {
      const checks = await Promise.all([
        checkDatabase(),
        checkFal(),
        checkStripe(),
        checkStripeWebhook(),
        checkResend(),
        checkTelegram()
      ]);
      return res.status(200).json({
        totalGenerations: await getGenerationCount(),
        commit: (process.env.VERCEL_GIT_COMMIT_SHA || '').slice(0, 7) || null,
        allOk: checks.every((c) => c.ok),
        checks
      });
    }

    return res.status(400).json({ error: 'Unknown view' });
  } catch (err) {
    console.error('[api/status admin] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}

// Each check below is intentionally either a real live call (cheap/free
// ones: Redis, Telegram's getMe, Stripe's balance read) or a presence-only
// check (fal.ai and Resend, where even a minimal real call costs money or
// sends an actual email) — labeled accordingly so the admin page is honest
// about what was actually verified.
async function checkDatabase() {
  if (!redis) return { key: 'database', label: 'Database (Redis)', ok: false, detail: 'not configured' };
  try {
    const probeKey = 'lamsa:admin:healthcheck';
    const value = Date.now().toString();
    await redis.set(probeKey, value, { ex: 10 });
    const readBack = await redis.get(probeKey);
    const ok = String(readBack) === value;
    return { key: 'database', label: 'Database (Redis)', ok, detail: ok ? 'write and read back succeeded' : 'write/read mismatch' };
  } catch (err) {
    return { key: 'database', label: 'Database (Redis)', ok: false, detail: err.message };
  }
}

function checkFal() {
  const ok = !!process.env.FAL_API_KEY;
  return { key: 'fal', label: 'AI generation (fal.ai)', ok, detail: ok ? 'set (not called — a test call costs credit)' : 'missing' };
}

async function checkStripe() {
  if (!stripe) return { key: 'stripe', label: 'Payment (Stripe)', ok: false, detail: 'STRIPE_SECRET_KEY missing' };
  try {
    const balance = await stripe.balance.retrieve();
    const mode = (balance.livemode === false) ? 'test mode' : 'live mode';
    return { key: 'stripe', label: 'Payment (Stripe)', ok: true, detail: mode + ', key authenticates' };
  } catch (err) {
    return { key: 'stripe', label: 'Payment (Stripe)', ok: false, detail: err.message };
  }
}

function checkStripeWebhook() {
  const ok = !!(process.env.STRIPE_WEBHOOK_SECRET || '').trim();
  return { key: 'stripe-webhook', label: 'Payment webhook secret', ok, detail: ok ? 'set' : 'missing' };
}

function checkResend() {
  const ok = !!process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  return {
    key: 'resend',
    label: 'Password reset email (Resend)',
    ok,
    detail: ok ? ('set, sends from ' + (from || 'the Resend default address') + ' (not called — a test call sends a real email)') : 'missing'
  };
}

async function checkTelegram() {
  const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
  if (!token) return { key: 'telegram', label: 'Telegram login', ok: false, detail: 'TELEGRAM_BOT_TOKEN missing' };
  try {
    const res = await fetch('https://api.telegram.org/bot' + token + '/getMe');
    const data = await res.json();
    if (!data.ok) return { key: 'telegram', label: 'Telegram login', ok: false, detail: 'getMe rejected the token' };
    return { key: 'telegram', label: 'Telegram login', ok: true, detail: 'bot @' + data.result.username + ' reachable' };
  } catch (err) {
    return { key: 'telegram', label: 'Telegram login', ok: false, detail: err.message };
  }
}
