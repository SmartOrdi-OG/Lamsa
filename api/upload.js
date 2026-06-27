export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) return res.status(500).json({ error: 'FAL_API_KEY not configured' });

  try {
    const { image_data, mime_type = 'image/jpeg' } = req.body;
    if (!image_data) return res.status(400).json({ error: 'image_data required' });

    const base64 = image_data.includes(',') ? image_data.split(',')[1] : image_data;
    const uint8Array = new Uint8Array(Buffer.from(base64, 'base64'));

    const uploadRes = await fetch('https://rest.fal.ai/storage/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${FAL_API_KEY}`,
        'Content-Type': mime_type
      },
      body: uint8Array
    });

    if (!uploadRes.ok) {
      const err = await uploadRes.text();
      console.error('FAL upload error:', uploadRes.status, err);
      return res.status(uploadRes.status).json({ error: 'FAL upload failed', details: err });
    }

    const data = await uploadRes.json();
    const url = data.url || data.file_url || data.access_url;

    if (!url) return res.status(500).json({ error: 'No URL in response', data });

    return res.status(200).json({ url });

  } catch (err) {
    console.error('Upload error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
