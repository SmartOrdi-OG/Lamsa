export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) return res.status(500).json({ error: 'FAL_API_KEY not configured' });

  const { prompt, image_url, num_images = 1, request_id } = req.body;

  // MODE 2: Check status of existing request
  if (request_id) {
    const statusRes = await fetch(`https://queue.fal.run/fal-ai/flux-kontext-pro/requests/${request_id}`, {
      headers: { 'Authorization': `Key ${FAL_API_KEY}` }
    });
    const status = await statusRes.json();
    return res.status(200).json(status);
  }

  // MODE 1: Submit new request
  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  try {
    // Upload base64 image if needed
    let finalImageUrl = image_url;
    if (image_url && image_url.startsWith('data:')) {
      const base64 = image_url.split(',')[1];
      const uint8Array = new Uint8Array(Buffer.from(base64, 'base64'));
      const mimeType = image_url.match(/data:([^;]+)/)?.[1] || 'image/jpeg';
      const uploadRes = await fetch('https://rest.fal.ai/storage/upload', {
        method: 'POST',
        headers: { 'Authorization': `Key ${FAL_API_KEY}`, 'Content-Type': mimeType },
        body: uint8Array
      });
      if (uploadRes.ok) {
        const d = await uploadRes.json();
        finalImageUrl = d.url || d.file_url || image_url;
      }
    }

    // Submit to fal queue — returns immediately
    const submitRes = await fetch('https://queue.fal.run/fal-ai/flux-kontext-pro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Key ${FAL_API_KEY}` },
      body: JSON.stringify({
        prompt, image_url: finalImageUrl, num_images,
        guidance_scale: 3.5, num_inference_steps: 28,
        output_format: 'jpeg', safety_tolerance: '2'
      })
    });

    if (!submitRes.ok) {
      const err = await submitRes.text();
      return res.status(submitRes.status).json({ error: 'Submit failed', details: err });
    }

    const submitted = await submitRes.json();
    return res.status(200).json({ request_id: submitted.request_id, status: 'IN_QUEUE' });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
