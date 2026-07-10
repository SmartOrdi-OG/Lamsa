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

// Idempotency guard for Stripe webhook retries — the first call for a given
// event id succeeds (returns true), duplicate deliveries return false.
export async function markEventProcessed(eventId) {
  const ok = await redis.set('lamsa:stripe_event:' + eventId, '1', { nx: true, ex: 60 * 60 * 24 * 30 });
  return ok === 'OK' || ok === true;
}
