import { redis } from './_db.js';
import {
  resolveLoginEmail, getUser, verifyPassword, createSession, setSessionCookie,
  deleteUser, getSessionTokenFromRequest, destroySession, clearSessionCookie,
  createPasswordResetToken, resetPasswordWithToken, sendPasswordResetEmail
} from './_auth.js';

// action: 'delete', 'request_reset' and 'reset_password' are piggybacked on
// this endpoint (rather than new API files) for the same reason api/me.js
// does it for 'rate' — Vercel's Hobby plan caps serverless functions at 12
// and this project is already at that limit. 'delete' is the
// password-verified account deletion used by the public delete-account.html
// page; 'request_reset'/'reset_password' back the "Forgot password?" flow,
// neither of which take a password up front, so they're handled before the
// email+password check every other action needs.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[auth-login] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  // The `email` field accepts either an email address or a username — kept
  // as `email` for frontend/API compatibility, resolved below.
  const { email, password, action, token, newPassword } = req.body || {};

  if (action === 'request_reset') return handleRequestReset(req, res, email);
  if (action === 'reset_password') return handleResetPassword(req, res, token, newPassword);

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

// Always reports success (unless the mail service itself is down) whether
// or not the address has an account, so this can't be used to probe which
// emails are registered.
async function handleRequestReset(req, res, email) {
  if (!email) return res.status(400).json({ error: 'Please enter your email or username' });

  try {
    const resolvedEmail = await resolveLoginEmail(email);
    if (resolvedEmail) {
      const resetToken = await createPasswordResetToken(resolvedEmail);
      const origin = (req.headers['x-forwarded-proto'] || 'https') + '://' + req.headers.host;
      const resetUrl = origin + '/lamsa-auth.html?reset=' + resetToken;

      const sent = await sendPasswordResetEmail(resolvedEmail, resetUrl);
      if (!sent) {
        console.error('[auth-login] request_reset: email service not configured or failed for', resolvedEmail);
        return res.status(500).json({ error: 'Email service not configured' });
      }
      console.log('[auth-login] sent password reset email to', resolvedEmail);
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[auth-login] request_reset error:', err.message);
    return res.status(500).json({ error: 'Could not process your request' });
  }
}

async function handleResetPassword(req, res, token, newPassword) {
  if (!token || !newPassword) {
    return res.status(400).json({ error: 'Missing reset token or new password' });
  }
  if (newPassword.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }

  try {
    const didReset = await resetPasswordWithToken(token, newPassword);
    if (!didReset) {
      return res.status(400).json({ error: 'This reset link is invalid or has expired' });
    }
    console.log('[auth-login] password reset completed for token', token.slice(0, 8) + '...');
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[auth-login] reset_password error:', err.message);
    return res.status(500).json({ error: 'Could not reset your password' });
  }
}
