import { stripe } from './_stripe.js';
import { addCredits, markEventProcessed } from './_db.js';

// Stripe signature verification needs the exact raw request bytes — Vercel's
// default JSON body parser would re-serialize the body and break the
// signature check, so it's disabled here and the body is read manually.
export const config = {
  api: {
    bodyParser: false
  }
};

async function readRawBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const STRIPE_WEBHOOK_SECRET = (process.env.STRIPE_WEBHOOK_SECRET || '').trim();
  if (!stripe || !STRIPE_WEBHOOK_SECRET) {
    console.error('[stripe-webhook] Stripe not configured (missing key or webhook secret)');
    return res.status(500).send('Stripe not configured');
  }

  const rawBody = await readRawBody(req);
  const signature = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('[stripe-webhook] signature verification failed:', err.message);
    return res.status(400).send('Webhook signature verification failed: ' + err.message);
  }

  console.log('[stripe-webhook] received event:', event.type, event.id);

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const email = (session.customer_email || (session.metadata && session.metadata.email) || '').trim().toLowerCase();
      const credits = parseInt((session.metadata && session.metadata.credits) || '0', 10);

      if (!email || !credits) {
        console.error('[stripe-webhook] session missing email/credits in metadata:', session.id);
        return res.status(200).json({ received: true, skipped: 'missing email/credits' });
      }

      const isNewEvent = await markEventProcessed(event.id);
      if (!isNewEvent) {
        console.log('[stripe-webhook] duplicate delivery of event', event.id, '- skipping credit grant');
        return res.status(200).json({ received: true, duplicate: true });
      }

      const newBalance = await addCredits(email, credits);
      console.log('[stripe-webhook] granted', credits, 'credits to', email, '- new balance:', newBalance);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[stripe-webhook] handler error:', err.message);
    return res.status(500).send('Webhook handler error');
  }
}
