import { redis, ensureWelcomeCredit } from './_db.js';
import { EMAIL_RE, createUser, createSession, setSessionCookie } from './_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[auth-register] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  const { username, email, password, country } = req.body || {};

  if (!username || typeof username !== 'string' || username.trim().length < 2) {
    return res.status(400).json({ error: 'Please enter a valid username' });
  }
  const normalizedEmail = (email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(normalizedEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email' });
  }
  if (!password || typeof password !== 'string' || password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }

  try {
    const user = await createUser({ username: username.trim(), email: normalizedEmail, password, country });
    if (!user) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    const token = await createSession(normalizedEmail);
    setSessionCookie(res, req, token);
    await ensureWelcomeCredit(normalizedEmail); // grant the "1 free design" immediately, not lazily on first balance check

    console.log('[auth-register] created account for', normalizedEmail);
    return res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    console.error('[auth-register] error:', err.message);
    return res.status(500).json({ error: 'Registration failed' });
  }
}
