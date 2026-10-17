import { redis } from './_db.js';
import {
  resolveLoginEmail, getUser, verifyPassword, createSession, setSessionCookie,
  deleteUser, getSessionTokenFromRequest, destroySession, clearSessionCookie
} from './_auth.js';

// action: 'delete' is piggybacked on this endpoint (rather than a new API
// file) for the same reason api/me.js does it for 'rate' — Vercel's Hobby
// plan caps serverless functions at 12 and this project is already at that
// limit. It's the password-verified account deletion used by the public
// delete-account.html page (for Google Play's required "request deletion"
// link), distinct from the session-based DELETE /api/me used by the in-app
// "Delete Account" button.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[auth-login] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  // The `email` field accepts either an email address or a username — kept
  // as `email` for frontend/API compatibility, resolved below.
  const { email, password, action } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Please enter your email or username and password' });
  }

  try {
    // Same generic error whether the identifier is unknown or the password
    // is wrong — don't let a login/deletion attempt reveal which accounts exist.
    const genericError = () => res.status(401).json({ error: 'Invalid email/username or password' });

    const resolvedEmail = await resolveLoginEmail(email);
    if (!resolvedEmail) return genericError();

    const user = await getUser(resolvedEmail);
    if (!user) return genericError();

    const valid = await verifyPassword(password, user.passwordSalt, user.passwordHash);
    if (!valid) return genericError();

    if (action === 'delete') {
      await deleteUser(resolvedEmail);
      await destroySession(getSessionTokenFromRequest(req));
      clearSessionCookie(res, req);
      console.log('[auth-login] deleted account for', resolvedEmail);
      return res.status(200).json({ ok: true });
    }

    const token = await createSession(resolvedEmail);
    setSessionCookie(res, req, token);

    console.log('[auth-login] logged in', resolvedEmail);
    return res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    console.error('[auth-login] error:', err.message);
    return res.status(500).json({ error: action === 'delete' ? 'Account deletion failed' : 'Login failed' });
  }
}
