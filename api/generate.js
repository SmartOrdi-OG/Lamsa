export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const FAL_API_KEY = process.env.FAL_API_KEY;
  if (!FAL_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { prompt, image_url, num_images, guidance_scale, num_inference_steps, image_size, safety_tolerance } = req.body;

    let finalImageUrl = image_url;

    // If base64 data URL — upload to fal storage first
    if (image_url && image_url.startsWith('data:')) {
      const matches = image_url.match(/^data:([^;]+);base64,(.+)$/);
      if (!matches) {
        return res.status(400).json({ error: 'Invalid image format' });
      }
      const mimeType = matches[1];
      const base64Data = matches[2];
      const buffer = Buffer.from(base64Data, 'base64');

      // Upload to fal storage
      const uploadRes = await fetch('https://rest.alpha.fal.ai/storage/upload/initiate', {
        method: 'POST',
        headers: {
          'Authorization': `Key ${FAL_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content_type: mimeType,
          file_name: 'room.jpg'
        })
      });

      if (!uploadRes.ok) {
        // Fallback: try direct upload endpoint
        const uploadDirect = await fetch('https://fal.run/fal-ai/upload', {
          method: 'POST',
          headers: {
            'Authorization': `Key ${FAL_API_KEY}`,
            'Content-Type': mimeType
          },
          body: buffer
        });
        if (uploadDirect.ok) {
          const uploadData = await uploadDirect.json();
          finalImageUrl = uploadData.url || uploadData.file_url;
        }
      } else {
        const uploadData = await uploadRes.json();
        // PUT the file to the presigned URL
        await fetch(uploadData.upload_url, {
          method: 'PUT',
          headers: { 'Content-Type': mimeType },
          body: buffer
        });
        finalImageUrl = uploadData.file_url;
      }
    }

    // Generate with fal.ai
    const response = await fetch('https://fal.run/fal-ai/flux-pro/kontext', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Key ${FAL_API_KEY}`
      },
      body: JSON.stringify({
        prompt,
        image_url: finalImageUrl,
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
    console.error('generate error:', err);
    return res.status(500).json({ error: 'Generation failed', details: err.message });
  }
}
