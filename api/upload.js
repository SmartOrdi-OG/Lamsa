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

    // Use Uint8Array instead of Buffer for Node 24 compatibility
    const uint8Array = new Uint8Array(buffer);

    const response = await fetch('https://rest.fal.ai/storage/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${FAL_API_KEY}`,
        'Content-Type': contentType,
        'Accept': 'application/json'
      },
      body: uint8Array
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('fal upload failed:', response.status, errText);
      // Fallback: return base64 directly so generate can still proceed
      return res.status(200).json({ url: image_data });
    }

    const data = await response.json();
    const url = data.url || data.file_url || data.access_url;

    if (!url) {
      console.error('No URL in fal response:', JSON.stringify(data));
      return res.status(200).json({ url: image_data });
    }

    return res.status(200).json({ url });

  } catch (err) {
    console.error('upload error:', err.message);
    // Fallback: return base64 so generate can still proceed
    return res.status(200).json({ url: req.body?.image_data });
  }
}
