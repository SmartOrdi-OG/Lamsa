module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = process.env.FAL_API_KEY;
  if (!FAL_API_KEY) return res.status(500).json({ error: 'API key not configured' });

  try {
    const { image_data, mime_type } = req.body;
    if (!image_data) return res.status(400).json({ error: 'No image data' });

    const base64 = image_data.split(',')[1];
    const buffer = Buffer.from(base64, 'base64');
    const contentType = mime_type || 'image/jpeg';

    const response = await fetch('https://fal.run/fal-ai/upload', {
      method: 'POST',
      headers: { 'Authorization': `Key ${FAL_API_KEY}`, 'Content-Type': contentType },
      body: buffer
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ error: 'Upload failed', details: err });
    }

    const data = await response.json();
    return res.status(200).json({ url: data.url || data.file_url });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
