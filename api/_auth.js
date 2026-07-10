import crypto from 'crypto';
import { redis } from './_db.js';

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
const SCRYPT_KEYLEN = 64;
const COOKIE_NAME = 'lamsa_session';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function userKey(email) {
  return 'lamsa:user:' + email.trim().toLowerCase();
}

function sessionKey(token) {
  return 'lamsa:session:' + token;
}

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

// Returns null if the email is already registered.
export async function createUser({ username, email, password, country }) {
  const key = userKey(email);
  const existing = await redis.get(key);
  if (existing) return null;

  const { salt, hash } = await hashPassword(password);
  const user = {
    username,
    email: email.trim().toLowerCase(),
    passwordSalt: salt,
    passwordHash: hash,
    country: country || null,
    createdAt: new Date().toISOString()
  };
  await redis.set(key, user);
  return user;
}

export async function getUser(email) {
  return redis.get(userKey(email));
}

export async function createSession(email) {
  const token = crypto.randomBytes(32).toString('hex');
  await redis.set(sessionKey(token), email.trim().toLowerCase(), { ex: SESSION_TTL_SECONDS });
  return token;
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
