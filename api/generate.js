export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const FAL_API_KEY = process.env.FAL_API_KEY;
  if (!FAL_API_KEY) {
    return res.status(500).json({ error: 'FAL_API_KEY not configured' });
  }

  try {
    const {
      prompt,
      image_url,
      num_images = 1,
      guidance_scale = 7.5,
      num_inference_steps = 50,
      image_size = 'landscape_16_9',
      safety_tolerance = '2'
    } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'prompt is required' });
    }

    // If image is base64, upload it first
    let finalImageUrl = image_url;
    if (image_url && image_url.startsWith('data:')) {
      const base64 = image_url.split(',')[1];
      const buffer = Buffer.from(base64, 'base64');
      const uint8Array = new Uint8Array(buffer);
      const mimeType = image_url.match(/data:([^;]+)/)?.[1] || 'image/jpeg';

      const uploadRes = await fetch('https://rest.fal.ai/storage/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Key ${FAL_API_KEY}`,
          'Content-Type': mimeType,
          'Accept': 'application/json'
        },
        body: uint8Array
      });

      if (uploadRes.ok) {
        const uploadData = await uploadRes.json();
        finalImageUrl = uploadData.url || uploadData.file_url || uploadData.access_url || image_url;
      } else {
        // Use base64 directly as fallback
        finalImageUrl = image_url;
      }
    }

    const body = {
      prompt,
      num_images,
      guidance_scale,
      num_inference_steps,
      image_size,
      safety_tolerance
    };

    if (finalImageUrl) body.image_url = finalImageUrl;

    const response = await fetch('https://fal.run/fal-ai/flux-pro/kontext', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${FAL_API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('fal.ai generate error:', response.status, errText);
      return res.status(response.status).json({ error: 'fal.ai error', details: errText });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error('generate error:', err.message);
    return res.status(500).json({ error: 'Generation failed', details: err.message });
  }
}
