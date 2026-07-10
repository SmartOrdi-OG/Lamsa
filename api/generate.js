import { redis, deductCredit, addCredits } from './_db.js';

export default async function handler(req, res) {
  console.log('[api/generate] handler invoked, method:', req.method);

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) {
    console.error('[api/generate] FAL_API_KEY not configured');
    return res.status(500).json({ error: 'FAL_API_KEY not configured' });
  }

  const { prompt, image_url, num_images = 1, guidance_scale = 3.5, aspect_ratio = '16:9', strength, email } = req.body;

  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  const normalizedEmail = (email || '').trim().toLowerCase();
  if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  if (!redis) {
    console.error('[api/generate] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  const newBalance = await deductCredit(normalizedEmail);
  if (newBalance === null) {
    console.log('[api/generate] blocked - no credits remaining for', normalizedEmail);
    return res.status(402).json({ error: 'No credits remaining', code: 'no_credits' });
  }
  console.log('[api/generate] deducted 1 credit from', normalizedEmail, '- remaining:', newBalance);

  // Submit to the fal.ai QUEUE instead of the synchronous endpoint. Flux Kontext Pro
  // generations regularly take 15-30s+, which exceeds Vercel's serverless function
  // timeout on the sync endpoint (the function gets killed mid-request and the
  // frontend is left spinning forever). The queue endpoint returns a request_id
  // immediately; the frontend polls /api/status for completion.
  const body = {
    prompt,
    image_url: image_url || undefined,
    num_images,
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

  console.log('[api/generate] submitting to fal.ai queue:', JSON.stringify(body));

  try {
    const falRes = await fetch('https://queue.fal.run/fal-ai/flux-pro/kontext', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${FAL_API_KEY}`
      },
      body: JSON.stringify(body)
    });

    console.log('[api/generate] fal.ai queue submit http status:', falRes.status);

    if (!falRes.ok) {
      const err = await falRes.text();
      console.error('[api/generate] fal.ai queue submit error:', falRes.status, err);
      await addCredits(normalizedEmail, 1); // refund - the job was never actually queued
      return res.status(falRes.status).json({ error: 'Generation failed', details: err });
    }

    const data = await falRes.json();
    console.log('[api/generate] fal.ai queue submit response:', JSON.stringify(data));
    console.log('[api/generate] request_id:', data.request_id);
    return res.status(200).json(data);

  } catch (err) {
    console.error('[api/generate] Generate error:', err.message);
    await addCredits(normalizedEmail, 1); // refund - the job was never actually queued
    return res.status(500).json({ error: err.message });
  }
}
