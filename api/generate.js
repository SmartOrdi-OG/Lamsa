const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args)).catch(() => globalThis.fetch(...args));

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = process.env.FAL_API_KEY;
  if (!FAL_API_KEY) return res.status(500).json({ error: 'API key not configured' });

  try {
    const { prompt, image_url, num_images, guidance_scale, num_inference_steps, image_size, safety_tolerance } = req.body;

    let finalImageUrl = image_url;

    // If base64 — upload to fal storage first
    if (image_url && image_url.startsWith('data:')) {
      const matches = image_url.match(/^data:([^;]+);base64,(.+)$/);
      if (matches) {
        const mimeType = matches[1];
        const buffer = Buffer.from(matches[2], 'base64');
        const uploadRes = await fetch('https://fal.run/fal-ai/upload', {
          method: 'POST',
          headers: { 'Authorization': `Key ${FAL_API_KEY}`, 'Content-Type': mimeType },
          body: buffer
        });
        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          finalImageUrl = uploadData.url || uploadData.file_url || image_url;
        }
      }
    }

    const response = await fetch('https://fal.run/fal-ai/flux-pro/kontext', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Key ${FAL_API_KEY}` },
      body: JSON.stringify({
        prompt, image_url: finalImageUrl,
        num_images: num_images || 1,
        guidance_scale: guidance_scale || 7.5,
        num_inference_steps: num_inference_steps || 50,
        image_size: image_size || 'landscape_16_9',
        safety_tolerance: safety_tolerance || '2'
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Generation failed', details: err.message });
  }
};
