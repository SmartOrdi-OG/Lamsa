import crypto from 'crypto';

const TELEGRAM_BOT_TOKEN = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
export const TELEGRAM_WEBHOOK_SECRET = (process.env.TELEGRAM_WEBHOOK_SECRET || '').trim();

export const telegramConfigured = !!TELEGRAM_BOT_TOKEN;

// Credits -> Telegram Stars price. Stars are Telegram's own in-app currency
// (users buy them from Telegram with real money at Telegram's rate), so
// these are just catalog prices, roughly matching the existing EUR packages
// in _stripe.js at ~50 Stars per euro — adjust freely, there's no external
// payment provider to keep in sync with.
export const STARS_PACKAGES = {
  x1:  { credits: 1,  stars: 50,  label: '1 Design' },
  x5:  { credits: 5,  stars: 200, label: '5 Designs' },
  x10: { credits: 10, stars: 350, label: '10 Designs' }
};

const API_BASE = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN;

async function callTelegramApi(method, payload) {
  const res = await fetch(API_BASE + '/' + method, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!data.ok) throw new Error('Telegram API ' + method + ' failed: ' + (data.description || res.status));
  return data.result;
}

export function createInvoiceLink({ title, description, payload, stars }) {
  return callTelegramApi('createInvoiceLink', {
    title,
    description,
    payload,
    provider_token: '', // empty for Telegram Stars (XTR) — there's no external provider
    currency: 'XTR',
    prices: [{ label: title, amount: stars }]
  });
}

export function answerPreCheckoutQuery(preCheckoutQueryId, ok, errorMessage) {
  const body = { pre_checkout_query_id: preCheckoutQueryId, ok };
  if (!ok && errorMessage) body.error_message = errorMessage;
  return callTelegramApi('answerPreCheckoutQuery', body);
}

// Verifies the initData string Telegram.WebApp.initData hands the frontend,
// per Telegram's documented check: https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
// Returns the parsed Telegram user object, or null if missing/invalid/stale.
export function verifyTelegramInitData(initData) {
  if (!TELEGRAM_BOT_TOKEN || !initData || typeof initData !== 'string') return null;

  const params = new URLSearchParams(initData);
  const hash = params.get('hash');
  if (!hash) return null;
  params.delete('hash');

  const dataCheckString = Array.from(params.keys())
    .sort()
    .map((key) => key + '=' + params.get(key))
    .join('\n');

  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(TELEGRAM_BOT_TOKEN).digest();
  const computedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

  const hashBuf = Buffer.from(hash, 'hex');
  const computedBuf = Buffer.from(computedHash, 'hex');
  if (hashBuf.length !== computedBuf.length || !crypto.timingSafeEqual(hashBuf, computedBuf)) return null;

  // Reject stale initData (e.g. replayed from an old screenshot/log) older
  // than 24h, mirroring Telegram's own recommendation.
  const authDate = parseInt(params.get('auth_date') || '0', 10);
  if (!authDate || Date.now() / 1000 - authDate > 86400) return null;

  try {
    const user = JSON.parse(params.get('user') || 'null');
    if (!user || !user.id) return null;
    return user;
  } catch (e) {
    return null;
  }
}
