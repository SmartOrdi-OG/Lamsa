export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) return res.status(500).json({ error: 'FAL_API_KEY not configured' });

  try {
    const { image_data, mime_type = 'image/jpeg' } = req.body;
    if (!image_data) return res.status(400).json({ error: 'image_data required' });

    const base64 = image_data.includes(',') ? image_data.split(',')[1] : image_data;
    const uint8Array = new Uint8Array(Buffer.from(base64, 'base64'));

    const initiateRes = await fetch('https://rest.fal.ai/storage/upload/initiate?storage_type=fal-cdn-v3', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${FAL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content_type: mime_type, file_name: 'room.jpg' })
    });

    if (!initiateRes.ok) {
      const err = await initiateRes.text();
      console.error('FAL upload initiate error:', initiateRes.status, err);
      return res.status(initiateRes.status).json({ error: 'FAL upload initiate failed', details: err });
    }

    const { upload_url, file_url } = await initiateRes.json();

    const putRes = await fetch(upload_url, {
      method: 'PUT',
      headers: { 'Content-Type': mime_type },
      body: uint8Array
    });

    if (!putRes.ok) {
      const err = await putRes.text();
      console.error('FAL upload PUT error:', putRes.status, err);
      return res.status(putRes.status).json({ error: 'FAL upload failed', details: err });
    }

    if (!file_url) return res.status(500).json({ error: 'No file_url in response' });

    return res.status(200).json({ url: file_url });

  } catch (err) {
    console.error('Upload error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
