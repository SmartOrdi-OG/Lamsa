import crypto from 'crypto';
import { redis } from './_db.js';

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
const SCRYPT_KEYLEN = 64;
const COOKIE_NAME = 'lamsa_session';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sends the "forgot password" email via Resend's HTTP API (no SDK — one
// fetch call, keeps the dependency list small). Resolves to false without
// throwing if RESEND_API_KEY isn't set, so callers can report a clear
// "email service not configured" error instead of a raw 500.
export async function sendPasswordResetEmail(toEmail, resetUrl) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || 'Lamsa <onboarding@resend.dev>',
      to: toEmail,
      subject: 'Reset your Lamsa password',
      html:
        '<p>Someone requested a password reset for your Lamsa account.</p>' +
        '<p><a href="' + resetUrl + '">Click here to set a new password</a> (link expires in 30 minutes).</p>' +
        '<p>If you didn\'t request this, you can ignore this email.</p>'
    })
  });
  if (!res.ok) {
    console.error('[sendPasswordResetEmail] Resend API error:', res.status, await res.text());
    return false;
  }
  return true;
}

function userKey(email) {
  return 'lamsa:user:' + email.trim().toLowerCase();
}

function usernameKey(username) {
  return 'lamsa:username:' + username.trim().toLowerCase();
}

function sessionKey(token) {
  return 'lamsa:session:' + token;
}

function resetKey(token) {
  return 'lamsa:pwreset:' + token;
}

const RESET_TTL_SECONDS = 60 * 30; // 30 minutes

export function hashPassword(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString('hex');
    crypto.scrypt(password, salt, SCRYPT_KEYLEN, (err, derivedKey) => {
      if (err) return reject(err);
      resolve({ salt, hash: derivedKey.toString('hex') });
    });
  });
}

export function verifyPassword(password, salt, hash) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, SCRYPT_KEYLEN, (err, derivedKey) => {
      if (err) return reject(err);
      const hashBuf = Buffer.from(hash, 'hex');
      const derivedBuf = Buffer.from(derivedKey);
      if (hashBuf.length !== derivedBuf.length) return resolve(false);
      resolve(crypto.timingSafeEqual(hashBuf, derivedBuf));
    });
  });
}

// Returns { error: 'email_taken' | 'username_taken' } if either is already
// registered, or { user } on success. Username uniqueness is
// case-insensitive (usernameKey lowercases), matching how login resolves it.
export async function createUser({ username, email, password, country }) {
  const key = userKey(email);
  const existingEmail = await redis.get(key);
  if (existingEmail) return { error: 'email_taken' };

  const uKey = usernameKey(username);
  const existingUsername = await redis.get(uKey);
  if (existingUsername) return { error: 'username_taken' };

  const { salt, hash } = await hashPassword(password);
  const normalizedEmail = email.trim().toLowerCase();
  const user = {
    username,
    email: normalizedEmail,
    passwordSalt: salt,
    passwordHash: hash,
    country: country || null,
    createdAt: new Date().toISOString()
  };
  await redis.set(key, user);
  await redis.set(uKey, normalizedEmail);
  return { user };
}

// Telegram Mini App users have no email/password — they're identified by
// their Telegram user id instead, under a synthetic "email" key ('tg:<id>')
// that every other function here (sessions, credits, etc.) can key on
// exactly like a real email without knowing the difference. No entry in the
// username index: Telegram users always log back in via initData, never a
// username/password form.
export async function getOrCreateTelegramUser(tgUser) {
  const email = 'tg:' + tgUser.id;
  const key = userKey(email);
  const existing = await redis.get(key);
  if (existing) return { user: existing, isNew: false };

  const user = {
    username: tgUser.username || tgUser.first_name || ('tg_' + tgUser.id),
    email,
    telegramId: tgUser.id,
    createdAt: new Date().toISOString()
  };
  await redis.set(key, user);
  return { user, isNew: true };
}

// Login accepts either an email or a username. Resolves either to the email
// that actually keys the user record — a plain string match on EMAIL_RE
// decides which one was given, since usernames never contain '@'.
export async function resolveLoginEmail(identifier) {
  const trimmed = (identifier || '').trim();
  if (!trimmed) return null;
  if (EMAIL_RE.test(trimmed)) return trimmed.toLowerCase();
  return redis.get(usernameKey(trimmed));
}

export async function getUser(email) {
  return redis.get(userKey(email));
}

// Permanently removes an account and everything keyed on it (Google Play
// requires an in-app way to delete an account). Ratings and the site-wide
// generation counter are anonymous aggregates and stay. The caller destroys
// the current session separately; any other session for this email just
// stops resolving to a user (getUser returns null -> /api/me 401s).
export async function deleteUser(email) {
  const normalized = email.trim().toLowerCase();
  const user = await redis.get(userKey(normalized));
  const refCode = await redis.get('lamsa:refcode_owner:' + normalized);
  const keys = [
    userKey(normalized),
    'lamsa:credits:' + normalized,
    'lamsa:refcode_owner:' + normalized,
    'lamsa:referrals:' + normalized
  ];
  if (user && user.username && !user.telegramId) keys.push(usernameKey(user.username));
  if (refCode) keys.push('lamsa:refcode:' + refCode);
  await redis.del(...keys);
}

export async function createSession(email) {
  const token = crypto.randomBytes(32).toString('hex');
  await redis.set(sessionKey(token), email.trim().toLowerCase(), { ex: SESSION_TTL_SECONDS });
  return token;
}

// "Forgot password" token: a one-time code mailed to the user, redeemed by
// resetPasswordWithToken() below. Deliberately separate from session tokens
// (shorter TTL, single use, never accepted as a login credential).
export async function createPasswordResetToken(email) {
  const token = crypto.randomBytes(32).toString('hex');
  await redis.set(resetKey(token), email.trim().toLowerCase(), { ex: RESET_TTL_SECONDS });
  return token;
}

// Verifies the token, sets the new password, and burns the token so it
// can't be replayed. Returns false for an unknown/expired/already-used token.
export async function resetPasswordWithToken(token, newPassword) {
  const email = await redis.get(resetKey(token));
  if (!email) return false;

  const key = userKey(email);
  const user = await redis.get(key);
  if (!user) return false;

  const { salt, hash } = await hashPassword(newPassword);
  user.passwordSalt = salt;
  user.passwordHash = hash;
  await redis.set(key, user);
  await redis.del(resetKey(token));
  return true;
}

export async function destroySession(token) {
  if (!token) return;
  await redis.del(sessionKey(token));
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  const cookies = {};
  header.split(';').forEach(function (pair) {
    const idx = pair.indexOf('=');
    if (idx === -1) return;
    const k = pair.slice(0, idx).trim();
    const v = pair.slice(idx + 1).trim();
    if (k) cookies[k] = decodeURIComponent(v);
  });
  return cookies;
}

export function getSessionTokenFromRequest(req) {
  return parseCookies(req)[COOKIE_NAME] || null;
}

// Resolves the authenticated, verified email for a request — the only
// identity source api/generate.js, api/credits.js, and
// api/create-checkout-session.js should trust. A client-supplied email in
// the request body/query is never sufficient on its own.
export async function requireSessionEmail(req) {
  const token = getSessionTokenFromRequest(req);
  if (!token) return null;
  return redis.get(sessionKey(token));
}

function cookieAttrs(req) {
  const isLocal = !!(req && req.headers.host && req.headers.host.indexOf('localhost') !== -1);
  const attrs = ['Path=/', 'HttpOnly', 'SameSite=Lax'];
  if (!isLocal) attrs.push('Secure');
  return attrs;
}

export function setSessionCookie(res, req, token) {
  const attrs = [COOKIE_NAME + '=' + token, 'Max-Age=' + SESSION_TTL_SECONDS].concat(cookieAttrs(req));
  res.setHeader('Set-Cookie', attrs.join('; '));
}

export function clearSessionCookie(res, req) {
  const attrs = [COOKIE_NAME + '=', 'Max-Age=0'].concat(cookieAttrs(req));
  res.setHeader('Set-Cookie', attrs.join('; '));
}
