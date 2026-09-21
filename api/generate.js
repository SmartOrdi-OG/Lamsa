import { redis, deductCredit, addCredits, ensureWelcomeCredit, incrementGenerationCount } from './_db.js';
import { requireSessionEmail } from './_auth.js';
import { randomUUID } from 'crypto';

// Temporary QA bypass while the team tests the redesign-strength fix and
// other in-flight UI work without burning through the single free credit.
// Scoped to one account (rather than a global bypass) so it can't be
// abused by other users while active. Remove once testing is done.
const CREDIT_BYPASS_EMAILS = new Set(['team@smartordi.eu']);

// Two-stage pipeline instead of two independent models racing on the same
// source photo: Flux Kontext Pro (fast, cheap, consistent) does the first
// full redesign pass, then Nano Banana Pro (Gemini 3 Pro Image; better at
// reasoning about lighting/object relationships) polishes THAT result
// instead of starting over from the original photo. One coherent final
// image instead of two independent, sometimes unrelated, opinions.
const FLUX_SUBMIT_URL = 'https://queue.fal.run/fal-ai/flux-pro/kontext';
const NANO_SUBMIT_URL = 'https://queue.fal.run/fal-ai/nano-banana-pro/edit';

function refineTokenKey(token) {
  return 'lamsa:refine:' + token;
}

function buildFluxBody({ prompt, image_url, count, guidance_scale, aspect_ratio, strength }) {
  const body = {
    prompt,
    image_url: image_url || undefined,
    num_images: count,
    guidance_scale,
    aspect_ratio,
    output_format: 'jpeg',
    safety_tolerance: '2'
  };
  // strength (0-1) caps how much the output is allowed to differ from
  // image_url, independent of guidance_scale (which only controls how
  // closely the model follows the prompt). fal.ai defaults this to 0.1 when
  // omitted — far too conservative for a full room redesign — so only the
  // caller's explicit choice is forwarded, and only when there's a source
  // image to edit.
  if (image_url && typeof strength === 'number') {
    body.strength = strength;
  }
  return body;
}

function buildNanoBody({ prompt, image_url, count }) {
  const body = {
    prompt,
    num_images: count,
    output_format: 'jpeg'
  };
  if (image_url) body.image_urls = [image_url];
  return body;
}

async function submitToFal(FAL_API_KEY, url, body) {
  const falRes = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Key ${FAL_API_KEY}`
    },
    body: JSON.stringify(body)
  });

  const rawText = await falRes.text();
  let data;
  try {
    data = rawText ? JSON.parse(rawText) : {};
  } catch (parseErr) {
    throw new Error('Non-JSON response from fal.ai (' + falRes.status + '): ' + rawText.slice(0, 300));
  }

  if (!falRes.ok) {
    throw new Error('fal.ai submit failed (' + falRes.status + '): ' + rawText.slice(0, 300));
  }
  if (!data.request_id) {
    throw new Error('fal.ai submit response missing request_id: ' + rawText.slice(0, 300));
  }
  return data.request_id;
}

export default async function handler(req, res) {
  console.log('[api/generate] handler invoked, method:', req.method);

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) {
    console.error('[api/generate] FAL_API_KEY not configured');
    return res.status(500).json({ error: 'FAL_API_KEY not configured' });
  }

  const { prompt, image_url, num_images = 1, guidance_scale = 3.5, aspect_ratio = '16:9', strength, refine_token, reference_image_url } = req.body;

  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  if (!redis) {
    console.error('[api/generate] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  // The email that gets billed/credited comes only from the verified
  // session cookie, never from the request body — a client-supplied email
  // can't be trusted to spend or refund someone else's credits.
  const normalizedEmail = await requireSessionEmail(req);
  if (!normalizedEmail) {
    return res.status(401).json({ error: 'Please log in', code: 'not_logged_in' });
  }

  // === STYLE-REFERENCE STAGE (Inspirations Gallery) ===
  // Applies a curated inspirations-gallery style photo to the user's own
  // room photo via Nano Banana Pro's multi-image input, skipping Flux
  // entirely — a single model call is enough since this isn't a full
  // from-scratch redesign, just a style transfer onto the user's existing
  // room. Costs the same 1 credit as a normal generation.
  if (reference_image_url) {
    if (!image_url) return res.status(400).json({ error: 'image_url is required' });

    await ensureWelcomeCredit(normalizedEmail);

    if (CREDIT_BYPASS_EMAILS.has(normalizedEmail)) {
      await addCredits(normalizedEmail, 1);
    }

    const newBalance = await deductCredit(normalizedEmail);
    if (newBalance === null) {
      console.log('[api/generate] blocked - no credits remaining for', normalizedEmail);
      return res.status(402).json({ error: 'No credits remaining', code: 'no_credits' });
    }
    console.log('[api/generate] deducted 1 credit from', normalizedEmail, '(style-reference) - remaining:', newBalance);

    const nanoBody = buildNanoBody({ prompt, image_url, count: 1 });
    nanoBody.image_urls = [image_url, reference_image_url];
    console.log('[api/generate] style-reference stage — submitting to nano-banana-pro:', JSON.stringify(nanoBody));

    try {
      const request_id = await submitToFal(FAL_API_KEY, NANO_SUBMIT_URL, nanoBody);
      await incrementGenerationCount();
      return res.status(200).json({ requests: [{ model: 'nano', request_id }] });
    } catch (err) {
      console.error('[api/generate] style-reference submit failed:', err.message);
      try {
        await addCredits(normalizedEmail, 1);
      } catch (refundErr) {
        console.error('[api/generate] refund failed for', normalizedEmail, '-', refundErr.message);
      }
      return res.status(502).json({ error: err.message });
    }
  }

  // === REFINE STAGE ===
  // The frontend calls back in here with a token minted by the initial
  // stage below, once Flux's own result is ready, asking Nano Banana Pro to
  // polish it. No credit is deducted here — the whole two-stage pipeline
  // costs 1 credit total, charged up front in the initial stage. The token
  // is tied to the session that paid for it and only good for as many
  // calls as images Flux actually produced (up to 3, when the user asked
  // for multiple design variations), so this branch can't be called on its
  // own as a free generation.
  if (refine_token) {
    if (!image_url) return res.status(400).json({ error: 'image_url is required for the refine stage' });

    const tokenKey = refineTokenKey(refine_token);
    const tokenData = await redis.get(tokenKey);
    if (!tokenData || tokenData.email !== normalizedEmail || tokenData.remaining <= 0) {
      return res.status(403).json({ error: 'Invalid or expired refine token' });
    }

    const remaining = tokenData.remaining - 1;
    if (remaining <= 0) {
      await redis.del(tokenKey);
    } else {
      await redis.set(tokenKey, { email: normalizedEmail, remaining }, { ex: 600 });
    }

    const nanoBody = buildNanoBody({ prompt, image_url, count: 1 });
    console.log('[api/generate] refine stage — submitting to nano-banana-pro:', JSON.stringify(nanoBody));

    try {
      const request_id = await submitToFal(FAL_API_KEY, NANO_SUBMIT_URL, nanoBody);
      await incrementGenerationCount();
      return res.status(200).json({ requests: [{ model: 'nano', request_id }] });
    } catch (err) {
      console.error('[api/generate] refine submit failed:', err.message);
      return res.status(502).json({ error: err.message });
    }
  }

  // === INITIAL STAGE ===
  // Defensive fallback — the welcome credit is normally granted right at
  // registration, but this covers any account that predates that or was
  // created some other way. A no-op if the balance already exists.
  await ensureWelcomeCredit(normalizedEmail);

  if (CREDIT_BYPASS_EMAILS.has(normalizedEmail)) {
    // Top up by 1 right before the deduction below spends it — net zero
    // effect on the stored balance, just guarantees it's never 0.
    await addCredits(normalizedEmail, 1);
  }

  const newBalance = await deductCredit(normalizedEmail);
  if (newBalance === null) {
    console.log('[api/generate] blocked - no credits remaining for', normalizedEmail);
    return res.status(402).json({ error: 'No credits remaining', code: 'no_credits' });
  }
  console.log('[api/generate] deducted 1 credit from', normalizedEmail, '- remaining:', newBalance);

  // Submit to the fal.ai QUEUE instead of the synchronous endpoint. These
  // generations regularly take 15-30s+, which exceeds Vercel's serverless
  // function timeout on the sync endpoint (the function gets killed
  // mid-request and the frontend is left spinning forever). The queue
  // endpoint returns a request_id immediately; the frontend polls
  // /api/status for completion, then calls back in here with a
  // refine_token once Flux's result is ready.
  const count = Math.max(1, Number(num_images) || 1);
  const fluxBody = buildFluxBody({ prompt, image_url, count, guidance_scale, aspect_ratio, strength });
  console.log('[api/generate] submitting to flux:', JSON.stringify(fluxBody));

  let request_id;
  try {
    request_id = await submitToFal(FAL_API_KEY, FLUX_SUBMIT_URL, fluxBody);
    await incrementGenerationCount(count);
  } catch (err) {
    console.error('[api/generate] flux submit failed:', err.message);
    try {
      await addCredits(normalizedEmail, 1);
    } catch (refundErr) {
      console.error('[api/generate] refund failed for', normalizedEmail, '-', refundErr.message);
    }
    return res.status(502).json({ error: err.message });
  }

  const refineToken = randomUUID();
  // 10 minutes comfortably covers the ~2.5 minute max poll window for
  // Flux's own result plus normal user latency before the frontend calls
  // back in for the refine stage. `remaining` allows one refine call per
  // image Flux actually produces (the frontend requested `count`, but a
  // partial fal.ai response could return fewer).
  await redis.set(refineTokenKey(refineToken), { email: normalizedEmail, remaining: count }, { ex: 600 });

  return res.status(200).json({ requests: [{ model: 'flux', request_id }], refineToken });
}
