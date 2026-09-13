import { redis } from './_db.js';
import { requireSessionEmail } from './_auth.js';
import { createInvoiceLink, STARS_PACKAGES, telegramConfigured } from './_telegram.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!telegramConfigured) {
    console.error('[telegram-create-invoice] TELEGRAM_BOT_TOKEN not configured');
    return res.status(500).json({ error: 'Telegram payments not configured' });
  }
  if (!redis) {
    console.error('[telegram-create-invoice] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  // Same rule as create-checkout-session.js: always the logged-in session's
  // own email, never a client-supplied one.
  const email = await requireSessionEmail(req);
  if (!email) return res.status(401).json({ error: 'Please log in' });

  const { package: packageId } = req.body || {};
  const pkg = STARS_PACKAGES[packageId];
  if (!pkg) return res.status(400).json({ error: 'Unknown credit package' });

  try {
    // Read back by the bot webhook (as successful_payment.invoice_payload)
    // to know who to credit and by how much.
    const payload = JSON.stringify({ email, package: packageId });
    const url = await createInvoiceLink({
      title: 'Lamsa — ' + pkg.label,
      description: pkg.label + ' for Lamsa AI interior design',
      payload,
      stars: pkg.stars
    });

    console.log('[telegram-create-invoice] created invoice for', email, packageId);
    return res.status(200).json({ url });
  } catch (err) {
    console.error('[telegram-create-invoice] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
