export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) return res.status(500).json({ error: 'FAL_API_KEY not configured' });

  const { prompt, image_url, num_images = 1, guidance_scale = 3.5, aspect_ratio = '16:9' } = req.body;

  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

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

  console.log('Submitting to fal.ai queue:', JSON.stringify(body));

  try {
    const falRes = await fetch('https://queue.fal.run/fal-ai/flux-pro/kontext', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${FAL_API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!falRes.ok) {
      const err = await falRes.text();
      console.error('fal.ai queue submit error:', falRes.status, err);
      return res.status(falRes.status).json({ error: 'Generation failed', details: err });
    }

    const data = await falRes.json();
    console.log('fal.ai queue submit response:', JSON.stringify(data));
    return res.status(200).json(data);

  } catch (err) {
    console.error('Generate error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
