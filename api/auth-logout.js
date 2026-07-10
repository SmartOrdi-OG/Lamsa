import { getSessionTokenFromRequest, destroySession, clearSessionCookie } from './_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const token = getSessionTokenFromRequest(req);
    await destroySession(token);
    clearSessionCookie(res, req);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[auth-logout] error:', err.message);
    return res.status(500).json({ error: 'Logout failed' });
  }
}
