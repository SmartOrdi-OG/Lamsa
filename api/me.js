import { redis } from './_db.js';
import { requireSessionEmail, getUser } from './_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[me] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  try {
    const email = await requireSessionEmail(req);
    if (!email) return res.status(401).json({ error: 'Not logged in' });

    const user = await getUser(email);
    if (!user) return res.status(401).json({ error: 'Not logged in' });

    return res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    console.error('[me] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
