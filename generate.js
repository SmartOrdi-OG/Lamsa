export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) return res.status(500).json({ error: 'FAL_API_KEY not configured' });

  const { prompt, image_url, num_images = 1, request_id } = req.body;

  // MODE 2: Poll status
  if (request_id) {
    try {
      const statusRes = await fetch(
        `https://queue.fal.run/fal-ai/flux-pro/kontext/requests/${request_id}/status`,
        { headers: { 'Authorization': `Key ${FAL_API_KEY}` } }
      );
      const status = await statusRes.json();

      if (status.status === 'COMPLETED') {
        const resultRes = await fetch(
          `https://queue.fal.run/fal-ai/flux-pro/kontext/requests/${request_id}`,
          { headers: { 'Authorization': `Key ${FAL_API_KEY}` } }
        );
        return res.status(200).json(await resultRes.json());
      }

      if (status.status === 'FAILED') {
        return res.status(500).json({ error: 'Generation failed' });
      }

      return res.status(200).json({ status: status.status || 'IN_PROGRESS' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // MODE 1: Submit — pass base64 directly (no upload needed)
  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  try {
    const submitRes = await fetch('https://queue.fal.run/fal-ai/flux-pro/kontext', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${FAL_API_KEY}`
      },
      body: JSON.stringify({
        prompt,
        image_url: image_url || undefined, // base64 data URI works directly
        num_images,
        guidance_scale: 3.5,
        num_inference_steps: 28,
        output_format: 'jpeg',
        safety_tolerance: '2'
      })
    });

    if (!submitRes.ok) {
      const err = await submitRes.text();
      console.error('Submit error:', submitRes.status, err);
      return res.status(submitRes.status).json({ error: 'Submit failed', details: err });
    }

    const submitted = await submitRes.json();
    return res.status(200).json({ request_id: submitted.request_id, status: 'IN_QUEUE' });

  } catch (err) {
    console.error('Generate error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
