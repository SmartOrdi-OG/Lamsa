// Fetches a generated-image URL (hosted on fal.ai's own CDN) server-side and
// streams it back same-origin with a forced download filename. The frontend
// used to `fetch()` the fal.ai URL directly from the browser, which silently
// fails on desktop when fal.ai's CDN doesn't send permissive CORS headers —
// the browser blocks the cross-origin read, and the save button falls back
// to just opening the image in a new tab instead of downloading it. Fetching
// server-side sidesteps CORS entirely since it's a normal server-to-server
// request, not a browser one.
import { logError } from './_db.js';

const ALLOWED_HOST_SUFFIXES = ['.fal.media', '.fal.run', 'fal.media', 'fal.run'];

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { url, filename } = req.query;
  if (!url) return res.status(400).json({ error: 'url is required' });

  let parsed;
  try {
    parsed = new URL(url);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid url' });
  }

  const hostOk = ALLOWED_HOST_SUFFIXES.some(function (suffix) {
    return parsed.hostname === suffix.replace(/^\./, '') || parsed.hostname.endsWith(suffix);
  });
  if (!hostOk) return res.status(400).json({ error: 'url host not allowed' });

  try {
    const upstream = await fetch(parsed.toString());
    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: 'Failed to fetch image' });
    }

    const contentType = upstream.headers.get('content-type') || 'image/jpeg';
    const safeName = (filename || 'lamsa-design.jpg').replace(/[^a-zA-Z0-9._-]/g, '_');

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${safeName}"`);
    res.setHeader('Cache-Control', 'private, max-age=3600');

    const buffer = Buffer.from(await upstream.arrayBuffer());
    return res.status(200).send(buffer);
  } catch (err) {
    console.error('[api/download-image] error:', err.message);
    await logError('download-image', err.message, err.stack);
    return res.status(500).json({ error: err.message });
  }
}
