export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const FAL_API_KEY = process.env.FAL_API_KEY;
  if (!FAL_API_KEY) {
    return res.status(500).json({ error: 'FAL_API_KEY not configured' });
  }

  try {
    const { image_data, mime_type } = req.body;

    if (!image_data || !image_data.startsWith('data:')) {
      return res.status(400).json({ error: 'Invalid image data' });
    }

    const base64 = image_data.split(',')[1];
    const buffer = Buffer.from(base64, 'base64');
    const contentType = mime_type || 'image/jpeg';

    // Try the correct fal.ai storage upload endpoint
    const response = await fetch('https://rest.fal.ai/storage/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${FAL_API_KEY}`,
        'Content-Type': contentType,
        'Accept': 'application/json'
      },
      body: buffer
    });

    if (!response.ok) {
      // Fallback: try v2 endpoint
      const response2 = await fetch('https://fal.run/fal-ai/storage/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Key ${FAL_API_KEY}`,
          'Content-Type': contentType
        },
        body: buffer
      });

      if (!response2.ok) {
        const errText = await response2.text();
        console.error('fal upload error:', errText);
        // Return base64 as fallback so generate can still try
        return res.status(200).json({ url: image_data });
      }

      const data2 = await response2.json();
      return res.status(200).json({ url: data2.url || data2.file_url });
    }

    const data = await response.json();
    return res.status(200).json({ url: data.url || data.file_url });

  } catch (err) {
    console.error('upload error:', err);
    // Fallback: return base64 directly
    return res.status(200).json({ url: req.body?.image_data });
  }
}
