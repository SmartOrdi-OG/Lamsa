import { redis, logError } from './_db.js';
import {
  resolveLoginEmail, getUser, verifyPassword, createSession, setSessionCookie,
  deleteUser, getSessionTokenFromRequest, destroySession, clearSessionCookie,
  createPasswordResetToken, resetPasswordWithToken, sendPasswordResetEmail,
  verifyGoogleIdToken, verifyAppleIdToken, getOrCreateOAuthUser
} from './_auth.js';

// action: 'delete', 'request_reset', 'reset_password' and 'oauth' are
// piggybacked on this endpoint (rather than new API files) for the same
// reason api/me.js does it for 'rate' — Vercel's Hobby plan caps serverless
// functions at 12 and this project is already at that limit. 'delete' is the
// password-verified account deletion used by the public delete-account.html
// page; 'request_reset'/'reset_password' back the "Forgot password?" flow,
// neither of which take a password up front, so they're handled before the
// email+password check every other action needs; 'oauth' is Google/Apple
// sign-in, which takes a provider ID token instead of email+password.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[auth-login] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  // The `email` field accepts either an email address or a username — kept
  // as `email` for frontend/API compatibility, resolved below.
  const { email, password, action, token, newPassword, provider, idToken, fullName } = req.body || {};

  if (action === 'request_reset') return handleRequestReset(req, res, email);
  if (action === 'reset_password') return handleResetPassword(req, res, token, newPassword);
  if (action === 'oauth') return handleOAuthLogin(req, res, provider, idToken, fullName);

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
    await logError('auth-login', err.message, err.stack);
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
    await logError('auth-login:request_reset', err.message, err.stack);
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
    await logError('auth-login:reset_password', err.message, err.stack);
    return res.status(500).json({ error: 'Could not reset your password' });
  }
}

// Google/Apple sign-in: the frontend already got an identity token straight
// from the provider's own JS SDK (no redirect hop, no client secret) — this
// just verifies it server-side and finds-or-creates the account by its
// verified email, same session as an email/password login from here on.
async function handleOAuthLogin(req, res, provider, idToken, fullName) {
  if (provider !== 'google' && provider !== 'apple') {
    return res.status(400).json({ error: 'Unknown sign-in provider' });
  }
  if (!idToken) return res.status(400).json({ error: 'Missing sign-in token' });

  try {
    const claims = provider === 'google'
      ? await verifyGoogleIdToken(idToken)
      : await verifyAppleIdToken(idToken);

    const { user, isNew } = await getOrCreateOAuthUser({
      email: claims.email,
      name: claims.name || fullName || null,
      provider
    });

    const token = await createSession(user.email);
    setSessionCookie(res, req, token);

    console.log('[auth-login] oauth', provider, isNew ? 'created' : 'logged in', user.email);
    return res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    console.error('[auth-login] oauth error:', err.message);
    await logError('auth-login:oauth', err.message, err.stack);
    return res.status(401).json({ error: 'Sign-in failed — please try again' });
  }
}
