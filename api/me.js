import { redis, addRating } from './_db.js';
import { requireSessionEmail, getUser } from './_auth.js';

// POST here (action: 'rate') is the in-app star-rating widget's submit —
// piggybacked on this endpoint rather than a new API file, since Vercel's
// Hobby plan caps serverless functions at 12 and this project is already
// at that limit (see api/telegram.js for the same reasoning).
export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[me] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  try {
    const email = await requireSessionEmail(req);
    if (!email) return res.status(401).json({ error: 'Not logged in' });

    if (req.method === 'POST') {
      const { action, rating, comment } = req.body || {};
      if (action !== 'rate') return res.status(400).json({ error: 'Unknown action' });

      const ratingNum = parseInt(rating, 10);
      if (!(ratingNum >= 1 && ratingNum <= 5)) {
        return res.status(400).json({ error: 'rating must be an integer from 1 to 5' });
      }

      await addRating(email, ratingNum, comment);
      return res.status(200).json({ ok: true });
    }

    const user = await getUser(email);
    if (!user) return res.status(401).json({ error: 'Not logged in' });

    return res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    console.error('[me] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
