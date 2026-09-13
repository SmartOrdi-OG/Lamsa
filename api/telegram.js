import { redis, addCredits, ensureWelcomeCredit, markEventProcessed } from './_db.js';
import { getOrCreateTelegramUser, createSession, setSessionCookie, requireSessionEmail } from './_auth.js';
import {
  verifyTelegramInitData, telegramConfigured, TELEGRAM_WEBHOOK_SECRET,
  createInvoiceLink, answerPreCheckoutQuery, STARS_PACKAGES
} from './_telegram.js';

// One file, not three — Vercel's Hobby plan caps a deployment at 12
// serverless functions, and this project was already at 11. Login,
// invoice creation, and the bot webhook are each simple enough that
// dispatching on ?action= here costs nothing but a deploy slot saved.
export default async function handler(req, res) {
  const action = req.query.action;
  if (action === 'login') return handleLogin(req, res);
  if (action === 'invoice') return handleInvoice(req, res);
  if (action === 'webhook') return handleWebhook(req, res);
  return res.status(400).json({ error: 'Unknown action' });
}

// Logs a Telegram Mini App user in (creating their account on first visit)
// straight from the signed initData Telegram.WebApp hands the page — no
// password, no form. Mirrors auth-login/auth-register's response shape so
// the frontend can reuse the same post-login code path.
async function handleLogin(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[telegram/login] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }
  if (!telegramConfigured) {
    console.error('[telegram/login] TELEGRAM_BOT_TOKEN not configured');
    return res.status(500).json({ error: 'Telegram login not configured' });
  }

  const { initData } = req.body || {};
  const tgUser = verifyTelegramInitData(initData);
  if (!tgUser) return res.status(401).json({ error: 'Invalid Telegram login data' });

  try {
    const user = await getOrCreateTelegramUser(tgUser);
    const token = await createSession(user.email);
    setSessionCookie(res, req, token);
    await ensureWelcomeCredit(user.email);

    console.log('[telegram/login] logged in', user.email);
    return res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    console.error('[telegram/login] error:', err.message);
    return res.status(500).json({ error: 'Login failed' });
  }
}

async function handleInvoice(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!telegramConfigured) {
    console.error('[telegram/invoice] TELEGRAM_BOT_TOKEN not configured');
    return res.status(500).json({ error: 'Telegram payments not configured' });
  }
  if (!redis) {
    console.error('[telegram/invoice] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  // Same rule as create-checkout-session.js: always the logged-in session's
  // own email, never a client-supplied one.
  const email = await requireSessionEmail(req);
  if (!email) return res.status(401).json({ error: 'Please log in' });

  const { package: packageId } = req.body || {};
  const pkg = STARS_PACKAGES[packageId];
  if (!pkg) return res.status(400).json({ error: 'Unknown credit package' });

  try {
    // Read back by the bot webhook (as successful_payment.invoice_payload)
    // to know who to credit and by how much.
    const payload = JSON.stringify({ email, package: packageId });
    const url = await createInvoiceLink({
      title: 'Lamsa — ' + pkg.label,
      description: pkg.label + ' for Lamsa AI interior design',
      payload,
      stars: pkg.stars
    });

    console.log('[telegram/invoice] created invoice for', email, packageId);
    return res.status(200).json({ url });
  } catch (err) {
    console.error('[telegram/invoice] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}

// Receives Telegram Bot API updates (registered once via setWebhook — see
// the PR description for the exact curl command). Always answers 200
// quickly: Telegram retries a webhook that doesn't, and there's nothing a
// client could exploit by forcing retries of an idempotent handler.
async function handleWebhook(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  if (!telegramConfigured) {
    console.error('[telegram/webhook] TELEGRAM_BOT_TOKEN not configured');
    return res.status(500).send('Telegram not configured');
  }

  // setWebhook is called with a secret_token, which Telegram then echoes
  // back on every request — the only signal this request actually came from
  // Telegram and not an arbitrary caller who found the URL.
  if (!TELEGRAM_WEBHOOK_SECRET || req.headers['x-telegram-bot-api-secret-token'] !== TELEGRAM_WEBHOOK_SECRET) {
    console.error('[telegram/webhook] missing/invalid secret token header');
    return res.status(401).send('Unauthorized');
  }

  const update = req.body || {};

  try {
    if (update.pre_checkout_query) {
      // Fixed catalog, no stock/fraud checks needed — always approve.
      await answerPreCheckoutQuery(update.pre_checkout_query.id, true);
      return res.status(200).json({ received: true });
    }

    const payment = update.message && update.message.successful_payment;
    if (payment) {
      const isNewEvent = await markEventProcessed('tg:' + payment.telegram_payment_charge_id);
      if (!isNewEvent) {
        console.log('[telegram/webhook] duplicate delivery of charge', payment.telegram_payment_charge_id, '- skipping credit grant');
        return res.status(200).json({ received: true, duplicate: true });
      }

      let email, packageId;
      try {
        const parsed = JSON.parse(payment.invoice_payload);
        email = parsed.email;
        packageId = parsed.package;
      } catch (e) {
        console.error('[telegram/webhook] unparseable invoice_payload:', payment.invoice_payload);
        return res.status(200).json({ received: true, skipped: 'bad payload' });
      }

      const pkg = STARS_PACKAGES[packageId];
      if (!email || !pkg) {
        console.error('[telegram/webhook] payload missing email/unknown package:', payment.invoice_payload);
        return res.status(200).json({ received: true, skipped: 'missing email/unknown package' });
      }

      const newBalance = await addCredits(email, pkg.credits);
      console.log('[telegram/webhook] granted', pkg.credits, 'credits to', email, '- new balance:', newBalance);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[telegram/webhook] handler error:', err.message);
    // Still 200: Telegram would otherwise retry indefinitely, and this
    // already logged for investigation.
    return res.status(200).json({ received: true, error: err.message });
  }
}
