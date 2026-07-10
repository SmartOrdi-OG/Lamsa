import { redis, ensureWelcomeCredit } from './_db.js';
import { requireSessionEmail } from './_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[credits] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  // Balance is only ever looked up for the logged-in session's own email —
  // never an arbitrary email from the query string, or anyone could read
  // anyone else's balance.
  const email = await requireSessionEmail(req);
  if (!email) return res.status(401).json({ error: 'Not logged in' });

  try {
    const credits = await ensureWelcomeCredit(email);
    return res.status(200).json({ email, credits });
  } catch (err) {
    console.error('[credits] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
