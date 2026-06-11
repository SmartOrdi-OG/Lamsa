export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) {
    return res.status(500).json({ error: 'FAL_API_KEY not configured' });
  }

  try {
    const {
      prompt,
      image_url,
      num_images = 1,
      guidance_scale = 7.5,
      num_inference_steps = 40,
      image_size = 'landscape_16_9',
      safety_tolerance = '2'
    } = req.body;

    if (!prompt) return res.status(400).json({ error: 'prompt is required' });

    // Upload image if base64
    let finalImageUrl = image_url;
    if (image_url && image_url.startsWith('data:')) {
      const base64 = image_url.split(',')[1];
      const uint8Array = new Uint8Array(Buffer.from(base64, 'base64'));
      const mimeType = image_url.match(/data:([^;]+)/)?.[1] || 'image/jpeg';
      const uploadRes = await fetch('https://rest.fal.ai/storage/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Key ${FAL_API_KEY}`,
          'Content-Type': mimeType
        },
        body: uint8Array
      });
      if (uploadRes.ok) {
        const d = await uploadRes.json();
        finalImageUrl = d.url || d.file_url || image_url;
      }
    }

    // Single direct call to flux-2-flex (original fast model, ~30s)
    const response = await fetch('https://fal.run/fal-ai/flux-2-flex', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${FAL_API_KEY}`
      },
      body: JSON.stringify({
        prompt,
        image_url: finalImageUrl,
        num_images,
        guidance_scale,
        num_inference_steps,
        image_size,
        safety_tolerance,
        strength: 0.35,
        enable_safety_checker: false
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Generation error:', response.status, errText);
      return res.status(response.status).json({ error: 'Generation failed', details: errText });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error('generate error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
