import { stripe } from './_stripe.js';
import { addCredits, markEventProcessed, logError, setUserSubscription } from './_db.js';

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
    await logError('stripe-webhook:signature', err.message, err.stack);
    return res.status(400).send('Webhook signature verification failed: ' + err.message);
  }

  console.log('[stripe-webhook] received event:', event.type, event.id);

  try {
    // Fires once per billing period — the subscription's first invoice
    // (created the moment checkout completes) and every renewal after it —
    // so granting credits here alone covers both without double-granting
    // against a separate checkout.session.completed handler.
    if (event.type === 'invoice.payment_succeeded') {
      const invoice = event.data.object;
      const subscriptionId = invoice.subscription ||
        (invoice.parent && invoice.parent.subscription_details && invoice.parent.subscription_details.subscription);

      if (!subscriptionId) {
        // Not a subscription invoice (e.g. a one-off invoice) — nothing to grant.
        return res.status(200).json({ received: true, skipped: 'no subscription on invoice' });
      }

      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const email = ((subscription.metadata && subscription.metadata.email) || '').trim().toLowerCase();
      const plan = (subscription.metadata && subscription.metadata.plan) || null;
      const credits = parseInt((subscription.metadata && subscription.metadata.credits) || '0', 10);

      if (!email || !credits) {
        console.error('[stripe-webhook] subscription missing email/credits in metadata:', subscriptionId);
        return res.status(200).json({ received: true, skipped: 'missing email/credits' });
      }

      const isNewEvent = await markEventProcessed(event.id);
      if (!isNewEvent) {
        console.log('[stripe-webhook] duplicate delivery of event', event.id, '- skipping credit grant');
        return res.status(200).json({ received: true, duplicate: true });
      }

      const newBalance = await addCredits(email, credits);
      await setUserSubscription(email, {
        email, plan, status: subscription.status,
        subscriptionId, customerId: subscription.customer,
        currentPeriodEnd: subscription.current_period_end || null
      });
      console.log('[stripe-webhook] granted', credits, 'credits to', email, '- new balance:', newBalance);
    }

    // Keeps the per-email subscription record (used by
    // create-checkout-session.js to block a second overlapping
    // subscription) in sync with cancellations and other status changes
    // that don't themselves produce a new invoice.
    if (event.type === 'customer.subscription.updated' || event.type === 'customer.subscription.deleted') {
      const subscription = event.data.object;
      const email = ((subscription.metadata && subscription.metadata.email) || '').trim().toLowerCase();
      const plan = (subscription.metadata && subscription.metadata.plan) || null;

      if (email) {
        await setUserSubscription(email, {
          email, plan, status: subscription.status,
          subscriptionId: subscription.id, customerId: subscription.customer,
          currentPeriodEnd: subscription.current_period_end || null
        });
        console.log('[stripe-webhook] subscription', subscription.id, 'for', email, '-> status', subscription.status);
      }
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[stripe-webhook] handler error:', err.message);
    await logError('stripe-webhook:handler', err.message, err.stack);
    return res.status(500).send('Webhook handler error');
  }
}
