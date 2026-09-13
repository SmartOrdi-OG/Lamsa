import { addCredits, markEventProcessed } from './_db.js';
import { answerPreCheckoutQuery, STARS_PACKAGES, telegramConfigured, TELEGRAM_WEBHOOK_SECRET } from './_telegram.js';

// Receives Telegram Bot API updates (registered once via setWebhook — see
// the project README/setup notes). Always answers 200 quickly: Telegram
// retries a webhook that doesn't, and there's nothing a client could exploit
// by forcing retries of an idempotent handler.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  if (!telegramConfigured) {
    console.error('[telegram-webhook] TELEGRAM_BOT_TOKEN not configured');
    return res.status(500).send('Telegram not configured');
  }

  // setWebhook is called with a secret_token, which Telegram then echoes
  // back on every request — the only signal this request actually came from
  // Telegram and not an arbitrary caller who found the URL.
  if (!TELEGRAM_WEBHOOK_SECRET || req.headers['x-telegram-bot-api-secret-token'] !== TELEGRAM_WEBHOOK_SECRET) {
    console.error('[telegram-webhook] missing/invalid secret token header');
    return res.status(401).send('Unauthorized');
  }

  const update = req.body || {};

  try {
    if (update.pre_checkout_query) {
      // Fixed catalog, no stock/fraud checks needed — always approve.
      await answerPreCheckoutQuery(update.pre_checkout_query.id, true);
      return res.status(200).json({ received: true });
    }

    const payment = update.message && update.message.successful_payment;
    if (payment) {
      const isNewEvent = await markEventProcessed('tg:' + payment.telegram_payment_charge_id);
      if (!isNewEvent) {
        console.log('[telegram-webhook] duplicate delivery of charge', payment.telegram_payment_charge_id, '- skipping credit grant');
        return res.status(200).json({ received: true, duplicate: true });
      }

      let email, packageId;
      try {
        const parsed = JSON.parse(payment.invoice_payload);
        email = parsed.email;
        packageId = parsed.package;
      } catch (e) {
        console.error('[telegram-webhook] unparseable invoice_payload:', payment.invoice_payload);
        return res.status(200).json({ received: true, skipped: 'bad payload' });
      }

      const pkg = STARS_PACKAGES[packageId];
      if (!email || !pkg) {
        console.error('[telegram-webhook] payload missing email/unknown package:', payment.invoice_payload);
        return res.status(200).json({ received: true, skipped: 'missing email/unknown package' });
      }

      const newBalance = await addCredits(email, pkg.credits);
      console.log('[telegram-webhook] granted', pkg.credits, 'credits to', email, '- new balance:', newBalance);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[telegram-webhook] handler error:', err.message);
    // Still 200: Telegram would otherwise retry indefinitely, and this
    // already logged for investigation.
    return res.status(200).json({ received: true, error: err.message });
  }
}
