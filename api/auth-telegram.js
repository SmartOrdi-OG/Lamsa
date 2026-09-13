import { redis, ensureWelcomeCredit } from './_db.js';
import { getOrCreateTelegramUser, createSession, setSessionCookie } from './_auth.js';
import { verifyTelegramInitData, telegramConfigured } from './_telegram.js';

// Logs a Telegram Mini App user in (creating their account on first visit)
// straight from the signed initData Telegram.WebApp hands the page — no
// password, no form. Mirrors auth-login/auth-register's response shape so
// the frontend can reuse the same post-login code path.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!redis) {
    console.error('[auth-telegram] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }
  if (!telegramConfigured) {
    console.error('[auth-telegram] TELEGRAM_BOT_TOKEN not configured');
    return res.status(500).json({ error: 'Telegram login not configured' });
  }

  const { initData } = req.body || {};
  const tgUser = verifyTelegramInitData(initData);
  if (!tgUser) return res.status(401).json({ error: 'Invalid Telegram login data' });

  try {
    const user = await getOrCreateTelegramUser(tgUser);
    const token = await createSession(user.email);
    setSessionCookie(res, req, token);
    await ensureWelcomeCredit(user.email);

    console.log('[auth-telegram] logged in', user.email);
    return res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    console.error('[auth-telegram] error:', err.message);
    return res.status(500).json({ error: 'Login failed' });
  }
}
