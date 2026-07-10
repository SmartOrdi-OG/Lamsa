import { redis } from './_db.js';
import { EMAIL_RE, getUser, verifyPassword, createSession, setSessionCookie } from './_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[auth-login] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  const { email, password } = req.body || {};
  const normalizedEmail = (email || '').trim().toLowerCase();

  if (!EMAIL_RE.test(normalizedEmail) || !password) {
    return res.status(400).json({ error: 'Please enter your email and password' });
  }

  try {
    const user = await getUser(normalizedEmail);
    // Same generic error whether the email is unknown or the password is
    // wrong — don't let a login attempt reveal which accounts exist.
    const genericError = () => res.status(401).json({ error: 'Invalid email or password' });

    if (!user) return genericError();

    const valid = await verifyPassword(password, user.passwordSalt, user.passwordHash);
    if (!valid) return genericError();

    const token = await createSession(normalizedEmail);
    setSessionCookie(res, req, token);

    console.log('[auth-login] logged in', normalizedEmail);
    return res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    console.error('[auth-login] error:', err.message);
    return res.status(500).json({ error: 'Login failed' });
  }
}
