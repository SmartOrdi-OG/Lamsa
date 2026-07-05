export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) return res.status(500).json({ error: 'FAL_API_KEY not configured' });

  const { prompt, image_url, num_images = 1, guidance_scale = 3.5, aspect_ratio = '16:9' } = req.body;

  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  try {
    const falRes = await fetch('https://fal.run/fal-ai/flux-pro/kontext', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${FAL_API_KEY}`
      },
      body: JSON.stringify({
        prompt,
        image_url: image_url || undefined,
        num_images,
        guidance_scale,
        aspect_ratio,
        output_format: 'jpeg',
        safety_tolerance: '2'
      })
    });

    if (!falRes.ok) {
      const err = await falRes.text();
      console.error('fal.ai error:', falRes.status, err);
      return res.status(falRes.status).json({ error: 'Generation failed', details: err });
    }

    const data = await falRes.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error('Generate error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
