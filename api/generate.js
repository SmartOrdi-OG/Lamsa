export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) return res.status(500).json({ error: 'FAL_API_KEY not configured' });

  const { prompt, image_url, num_images = 1, request_id } = req.body;

  // MODE 2: Poll status
  if (request_id) {
    try {
      const model = image_url ? 'flux-kontext-pro' : 'flux-pro';
      const resultRes = await fetch(
        `https://queue.fal.run/fal-ai/${model}/requests/${request_id}`,
        { headers: { 'Authorization': `Key ${FAL_API_KEY}` } }
      );
      const result = await resultRes.json();
      return res.status(200).json(result);
    } catch (err) {
      // Try both endpoints
      try {
        const r2 = await fetch(
          `https://queue.fal.run/fal-ai/flux-kontext-pro/requests/${request_id}`,
          { headers: { 'Authorization': `Key ${FAL_API_KEY}` } }
        );
        return res.status(200).json(await r2.json());
      } catch(e) {
        return res.status(500).json({ error: err.message });
      }
    }
  }

  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  try {
    let finalImageUrl = image_url;

    // Upload base64 image if provided
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

    // Choose model based on whether we have an image
    const model = finalImageUrl ? 'flux-kontext-pro' : 'flux-pro';
    const body = finalImageUrl
      ? { prompt, image_url: finalImageUrl, num_images, guidance_scale: 3.5, num_inference_steps: 28, output_format: 'jpeg', safety_tolerance: '2' }
      : { prompt, num_images, guidance_scale: 3.5, num_inference_steps: 28, output_format: 'jpeg', safety_tolerance: '2', image_size: 'landscape_16_9' };

    const submitRes = await fetch(`https://queue.fal.run/fal-ai/${model}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Key ${FAL_API_KEY}` },
      body: JSON.stringify(body)
    });

    if (!submitRes.ok) {
      const err = await submitRes.text();
      return res.status(submitRes.status).json({ error: 'Submit failed', details: err });
    }

    const submitted = await submitRes.json();
    return res.status(200).json({ request_id: submitted.request_id, status: 'IN_QUEUE', model });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
