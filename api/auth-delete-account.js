import { redis } from './_db.js';
import {
  resolveLoginEmail, getUser, verifyPassword, deleteUser,
  getSessionTokenFromRequest, destroySession, clearSessionCookie
} from './_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[auth-delete-account] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: 'Please enter your email or username and password' });
  }

  try {
    // Same generic error whether the identifier is unknown or the password
    // is wrong — don't let a deletion attempt reveal which accounts exist.
    const genericError = () => res.status(401).json({ error: 'Invalid email/username or password' });

    const resolvedEmail = await resolveLoginEmail(email);
    if (!resolvedEmail) return genericError();

    const user = await getUser(resolvedEmail);
    if (!user) return genericError();

    const valid = await verifyPassword(password, user.passwordSalt, user.passwordHash);
    if (!valid) return genericError();

    await deleteUser(resolvedEmail);

    const token = getSessionTokenFromRequest(req);
    await destroySession(token);
    clearSessionCookie(res, req);

    console.log('[auth-delete-account] deleted account for', resolvedEmail);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[auth-delete-account] error:', err.message);
    return res.status(500).json({ error: 'Account deletion failed' });
  }
}
