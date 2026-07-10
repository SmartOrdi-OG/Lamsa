import { redis, ensureWelcomeCredit } from './_db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const email = (req.query.email || '').toString().trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  if (!redis) {
    console.error('[credits] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  try {
    const credits = await ensureWelcomeCredit(email);
    return res.status(200).json({ email, credits });
  } catch (err) {
    console.error('[credits] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
