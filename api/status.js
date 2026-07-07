export default async function handler(req, res) {
  console.log('[api/status] handler invoked, method:', req.method, 'query:', req.query);

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const FAL_API_KEY = (process.env.FAL_API_KEY || '').trim().replace(/\s+/g, '');
  if (!FAL_API_KEY) {
    console.error('[api/status] FAL_API_KEY not configured');
    return res.status(500).json({ error: 'FAL_API_KEY not configured' });
  }

  const { request_id, mode } = req.query;
  if (!request_id) return res.status(400).json({ error: 'request_id is required' });

  const base = 'https://queue.fal.run/fal-ai/flux-pro/kontext/requests/' + request_id;
  const url = mode === 'result' ? base : (base + '/status');

  console.log('[api/status] fetching:', url);

  try {
    const falRes = await fetch(url, {
      headers: { 'Authorization': `Key ${FAL_API_KEY}` }
    });

    console.log('[api/status] fal.ai http status:', falRes.status);

    const data = await falRes.json();

    if (!falRes.ok) {
      console.error('[api/status] fal.ai status/result error:', falRes.status, JSON.stringify(data));
      return res.status(falRes.status).json({ error: 'Status check failed', details: data });
    }

    console.log('[api/status] fal.ai response:', mode === 'result' ? '(result payload, images: ' + (data.images ? data.images.length : 0) + ')' : JSON.stringify(data));

    return res.status(200).json(data);

  } catch (err) {
    console.error('[api/status] Status error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
