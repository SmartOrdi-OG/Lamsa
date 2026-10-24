import crypto from 'crypto';
import { Redis } from '@upstash/redis';

// Vercel's own KV product was sunset in favor of the Marketplace Upstash
// integration, which can inject either naming depending on how it was
// provisioned — support both instead of guessing wrong.
const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = (REDIS_URL && REDIS_TOKEN) ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN }) : null;

function creditsKey(email) {
  return 'lamsa:credits:' + email.trim().toLowerCase();
}

export async function getCredits(email) {
  const val = await redis.get(creditsKey(email));
  if (val === null || val === undefined) return 0;
  return typeof val === 'number' ? val : parseInt(val, 10) || 0;
}

// New emails get 1 free credit the first time their balance is checked,
// mirroring the "1 free design included" promise already in the UI copy.
// Returns the current (possibly newly-granted) balance.
export async function ensureWelcomeCredit(email) {
  const key = creditsKey(email);
  const wasNew = await redis.set(key, 1, { nx: true });
  if (wasNew === 'OK' || wasNew === true) return 1;
  return getCredits(email);
}

export async function addCredits(email, amount) {
  return redis.incrby(creditsKey(email), amount);
}

// In-app rating (1-5 stars, shown once per device after a successful
// generation). Appended to a single list rather than keyed per-user —
// there's no need to look one up by email, only to read them all back for
// review, and a user re-rating (a fresh device/browser) just adds another
// entry rather than needing an upsert.
export async function addRating(email, rating, comment) {
  const entry = JSON.stringify({
    email,
    rating,
    comment: (comment || '').slice(0, 500),
    at: new Date().toISOString()
  });
  await redis.rpush('lamsa:ratings', entry);
}

// The Upstash REST client auto-parses values that look like JSON on read,
// so a list entry written as a JSON string can come back either as that
// string or already as an object depending on SDK version — this normalizes
// either shape instead of assuming one.
function parseListEntry(entry) {
  if (entry && typeof entry === 'object') return entry;
  try { return JSON.parse(entry); } catch (e) { return null; }
}

export async function getAllRatings() {
  const raw = await redis.lrange('lamsa:ratings', 0, -1);
  return raw.map(parseListEntry).filter(Boolean);
}

const ERRORS_KEY = 'lamsa:errors';
const MAX_DISTINCT_ERRORS = 300; // guards against unbounded growth from errors with highly variable messages

// Best-effort error log for the admin page — every API handler's catch
// block calls this alongside its existing console.error so failures are
// visible without digging through Vercel's own runtime logs. Stored as a
// hash keyed by a fingerprint of (source + message) rather than a plain
// list, so the same recurring failure (e.g. fal.ai down) collapses into one
// row with a "happened Nx" count instead of flooding the admin page with
// hundreds of near-identical entries. A logging failure here is swallowed
// rather than replacing the real error response the caller was already
// about to send.
function fingerprint(source, message) {
  return crypto.createHash('sha1').update(source + '|' + String(message).slice(0, 120)).digest('hex').slice(0, 7);
}

export async function logError(source, message, stack) {
  if (!redis) return;
  try {
    const fp = fingerprint(source, message);
    const key = ERRORS_KEY + ':' + fp;
    const existing = await redis.get(key);
    const now = new Date().toISOString();
    const entry = existing
      ? { ...existing, count: (existing.count || 1) + 1, lastAt: now }
      : {
          id: fp,
          source,
          message: String(message).slice(0, 500),
          stack: stack ? String(stack).slice(0, 2000) : null,
          count: 1,
          firstAt: now,
          lastAt: now
        };
    await redis.set(key, entry);
    await redis.zadd(ERRORS_KEY + ':index', { score: Date.now(), member: fp });
    // Trim the index (and the distinct-error hashes it no longer references)
    // once the number of distinct fingerprints grows past the cap, oldest
    // first — a safety net against unbounded key growth, not a normal path.
    const total = await redis.zcard(ERRORS_KEY + ':index');
    if (total > MAX_DISTINCT_ERRORS) {
      const stale = await redis.zrange(ERRORS_KEY + ':index', 0, total - MAX_DISTINCT_ERRORS - 1);
      if (stale.length) {
        await redis.zrem(ERRORS_KEY + ':index', ...stale);
        await redis.del(...stale.map((id) => ERRORS_KEY + ':' + id));
      }
    }
  } catch (e) {
    // logging is never allowed to break the caller's actual error response
  }
}

export async function getRecentErrors(limit = 200) {
  const ids = await redis.zrange(ERRORS_KEY + ':index', 0, -1, { rev: true });
  const capped = ids.slice(0, limit);
  if (!capped.length) return [];
  const entries = await Promise.all(capped.map((id) => redis.get(ERRORS_KEY + ':' + id)));
  return entries.filter(Boolean);
}

export async function clearErrors() {
  const ids = await redis.zrange(ERRORS_KEY + ':index', 0, -1);
  if (ids.length) await redis.del(...ids.map((id) => ERRORS_KEY + ':' + id));
  await redis.del(ERRORS_KEY + ':index');
}

// Atomically decrements by 1 only if the balance is > 0. Returns the new
// balance, or null if there were no credits to spend.
const DEDUCT_SCRIPT = `
local key = KEYS[1]
local balance = tonumber(redis.call('GET', key) or '0')
if balance <= 0 then
  return -1
end
return redis.call('DECRBY', key, 1)
`;

export async function deductCredit(email) {
  const result = await redis.eval(DEDUCT_SCRIPT, [creditsKey(email)], []);
  return result === -1 ? null : result;
}

// Site-wide running total of AI generations actually submitted to fal.ai
// (Flux + Nano, across the main designer, refine stage, and the
// Inspirations Gallery style-reference stage) — incremented once per
// successful submission, right alongside the credit deduction it belongs
// to. Started fresh from whenever this was added, so it doesn't cover
// generations made before.
const GENERATIONS_TOTAL_KEY = 'lamsa:stats:generations_total';

export async function incrementGenerationCount(by = 1) {
  await redis.incrby(GENERATIONS_TOTAL_KEY, by);
}

export async function getGenerationCount() {
  const val = await redis.get(GENERATIONS_TOTAL_KEY);
  return typeof val === 'number' ? val : parseInt(val, 10) || 0;
}

// Idempotency guard for Stripe webhook retries — the first call for a given
// event id succeeds (returns true), duplicate deliveries return false.
export async function markEventProcessed(eventId) {
  const ok = await redis.set('lamsa:stripe_event:' + eventId, '1', { nx: true, ex: 60 * 60 * 24 * 30 });
  return ok === 'OK' || ok === true;
}

function referralCodeKey(code) {
  return 'lamsa:refcode:' + code;
}

function referralOwnerKey(email) {
  return 'lamsa:refcode_owner:' + email.trim().toLowerCase();
}

function referralCountKey(email) {
  return 'lamsa:referrals:' + email.trim().toLowerCase();
}

// Every user gets one stable short code the first time it's asked for
// (shown on their own invite link), generated lazily rather than at
// account creation so it also backfills accounts created before this
// existed. NX on the code->owner mapping guards the astronomically
// unlikely random collision by just retrying with a fresh code.
export async function getOrCreateReferralCode(email) {
  const ownerKey = referralOwnerKey(email);
  const existing = await redis.get(ownerKey);
  if (existing) return existing;

  const code = crypto.randomBytes(4).toString('hex');
  const stored = await redis.set(referralCodeKey(code), email.trim().toLowerCase(), { nx: true });
  if (stored !== 'OK' && stored !== true) return getOrCreateReferralCode(email);

  await redis.set(ownerKey, code);
  return code;
}

export async function resolveReferralCode(code) {
  if (!code || typeof code !== 'string') return null;
  return redis.get(referralCodeKey(code.trim()));
}

export async function getReferralCount(email) {
  const val = await redis.get(referralCountKey(email));
  return typeof val === 'number' ? val : parseInt(val, 10) || 0;
}

// Grants the invite bonus (1 credit to each side) the first time a given
// new-user email is recorded as referred — the NX guard makes this safe to
// call from a retried request (Telegram login re-runs on every open) without
// paying out more than once for the same signup.
export async function recordReferral(referrerEmail, newUserEmail) {
  const guardKey = 'lamsa:referred_recorded:' + newUserEmail.trim().toLowerCase();
  const first = await redis.set(guardKey, referrerEmail.trim().toLowerCase(), { nx: true });
  if (first !== 'OK' && first !== true) return false;

  await redis.incr(referralCountKey(referrerEmail));
  await addCredits(referrerEmail, 1);
  await addCredits(newUserEmail, 1);
  return true;
}
