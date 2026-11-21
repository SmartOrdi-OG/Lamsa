import { stripe, APPLE_IAP_PLANS } from './_stripe.js';
import { addCredits, markEventProcessed, logError, setUserSubscription, setEngineerEntitlement } from './_db.js';

// Stripe signature verification needs the exact raw request bytes — Vercel's
// default JSON body parser would re-serialize the body and break the
// signature check, so it's disabled here and the body is read manually.
// RevenueCat's webhook (handled in the same file below — see
// handleRevenueCatEvent — there's no serverless function slot free for a
// separate file, the Hobby-plan 12-function cap is exactly full) doesn't
// need raw bytes, but reads the body the same way for simplicity.
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

// RevenueCat's own webhook, forwarding Apple IAP subscription lifecycle
// events — kept in this same file/URL as Stripe's webhook (see the comment
// on `config` above). Auth here is a plain shared-secret compare (the exact
// string configured as RevenueCat's "Authorization header" value), not
// Stripe-style HMAC, so it needs none of the raw-body signature machinery
// above — just the already-read rawBody, JSON-parsed.
async function handleRevenueCatEvent(rawBody, req, res) {
  const REVENUECAT_WEBHOOK_SECRET = (process.env.REVENUECAT_WEBHOOK_SECRET || '').trim();
  if (!REVENUECAT_WEBHOOK_SECRET) {
    console.error('[stripe-webhook] REVENUECAT_WEBHOOK_SECRET not configured');
    return res.status(500).send('RevenueCat webhook not configured');
  }
  if ((req.headers['authorization'] || '') !== REVENUECAT_WEBHOOK_SECRET) {
    console.error('[stripe-webhook] RevenueCat webhook auth mismatch');
    return res.status(401).send('Unauthorized');
  }

  let payload;
  try {
    payload = JSON.parse(rawBody.toString('utf8'));
  } catch (err) {
    return res.status(400).send('Invalid JSON');
  }

  const event = payload && payload.event;
  if (!event) return res.status(200).json({ received: true, skipped: 'no event' });

  console.log('[stripe-webhook] received RevenueCat event:', event.type, event.id);

  // app_user_id is always our own session email — see ios-app's
  // capacitor-iap-bridge, which calls Purchases.logIn(email) right after
  // login, the same identity Stripe subscriptions are already keyed by.
  const email = (event.app_user_id || '').trim().toLowerCase();
  const planInfo = APPLE_IAP_PLANS[event.product_id];
  if (!email || !planInfo) {
    return res.status(200).json({ received: true, skipped: 'unknown email or product' });
  }

  const isNewEvent = await markEventProcessed('revenuecat:' + event.id);
  if (!isNewEvent) {
    console.log('[stripe-webhook] duplicate delivery of RevenueCat event', event.id, '- skipping');
    return res.status(200).json({ received: true, duplicate: true });
  }

  // EXPIRATION is the definitive "access should end" signal — CANCELLATION
  // alone just means auto-renew was turned off while the current paid
  // period (or trial) continues, so it must NOT downgrade status early.
  const status = event.type === 'EXPIRATION'
    ? 'canceled'
    : (String(event.period_type || '').toLowerCase() === 'trial' ? 'trialing' : 'active');

  const record = {
    email, plan: planInfo.plan, status,
    platform: 'apple', appleProductId: event.product_id,
    currentPeriodEnd: event.expiration_at_ms ? Math.floor(event.expiration_at_ms / 1000) : null,
    trialEnd: (status === 'trialing' && event.expiration_at_ms) ? Math.floor(event.expiration_at_ms / 1000) : null
  };

  if (planInfo.kind === 'engineer') {
    await setEngineerEntitlement(email, record);
  } else {
    await setUserSubscription(email, record);
  }
  console.log('[stripe-webhook] RevenueCat', event.type, 'for', email, '-> status', status);
  return res.status(200).json({ received: true });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  // Stripe always sends its HMAC signature on this header; RevenueCat never
  // does, so this alone safely tells the two providers' requests apart
  // without a separate URL/route for each.
  if (!req.headers['stripe-signature']) {
    const rawBody = await readRawBody(req);
    return handleRevenueCatEvent(rawBody, req, res);
  }

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
      const isEngineer = (subscription.metadata && subscription.metadata.kind) === 'engineer';
      const credits = parseInt((subscription.metadata && subscription.metadata.credits) || '0', 10);

      // The Engineers plan is checked (and can short-circuit) before the
      // credits guard below, since its invoices legitimately carry no/zero
      // credits — falling through to that guard would silently skip every
      // real Engineers purchase.
      if (isEngineer) {
        if (!email) {
          console.error('[stripe-webhook] engineer subscription missing email in metadata:', subscriptionId);
          return res.status(200).json({ received: true, skipped: 'missing email' });
        }

        const isNewEvent = await markEventProcessed(event.id);
        if (!isNewEvent) {
          console.log('[stripe-webhook] duplicate delivery of event', event.id, '- skipping entitlement grant');
          return res.status(200).json({ received: true, duplicate: true });
        }

        await setEngineerEntitlement(email, {
          email, plan, status: subscription.status,
          subscriptionId, customerId: subscription.customer,
          currentPeriodEnd: subscription.current_period_end || null,
          trialEnd: subscription.trial_end || null
        });
        console.log('[stripe-webhook] granted Engineers access to', email, '- status:', subscription.status);
        return res.status(200).json({ received: true });
      }

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
      const isEngineer = (subscription.metadata && subscription.metadata.kind) === 'engineer';

      if (email && isEngineer) {
        await setEngineerEntitlement(email, {
          email, plan, status: subscription.status,
          subscriptionId: subscription.id, customerId: subscription.customer,
          currentPeriodEnd: subscription.current_period_end || null,
          trialEnd: subscription.trial_end || null
        });
        console.log('[stripe-webhook] engineer subscription', subscription.id, 'for', email, '-> status', subscription.status);
      } else if (email) {
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
