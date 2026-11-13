import { redis, logError, getUserSubscription } from './_db.js';
import { stripe, SUBSCRIPTION_PLANS } from './_stripe.js';
import { requireSessionEmail, EMAIL_RE } from './_auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!stripe) {
    console.error('[create-checkout-session] STRIPE_SECRET_KEY not configured');
    return res.status(500).json({ error: 'STRIPE_SECRET_KEY not configured' });
  }
  if (!redis) {
    console.error('[create-checkout-session] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  // The purchase is always credited to the logged-in session's own email —
  // never a client-supplied one, or a purchase could be misdirected to
  // (or spoofed against) an account the buyer doesn't own.
  const email = await requireSessionEmail(req);
  if (!email) return res.status(401).json({ error: 'Please log in' });

  const { plan: planId, return_page } = req.body || {};

  const plan = SUBSCRIPTION_PLANS[planId];
  if (!plan) return res.status(400).json({ error: 'Unknown subscription plan' });

  // One active recurring charge per user at a time — otherwise a double
  // click (or subscribing to the other plan without realizing one is
  // already running) would leave the buyer with two separate Stripe
  // subscriptions billing them in parallel.
  const existing = await getUserSubscription(email);
  if (existing && (existing.status === 'active' || existing.status === 'trialing')) {
    return res.status(409).json({ error: 'You already have an active subscription. Cancel it first to switch plans.' });
  }

  // Send the user back to whichever page they started the purchase from.
  // Validated against an allowlist rather than trusting an arbitrary
  // client-supplied path, since this becomes a redirect target.
  const ALLOWED_RETURN_PAGES = ['lamsa-bilingual.html', 'rearrange.html', 'inspirations.html'];
  const returnPage = ALLOWED_RETURN_PAGES.includes(return_page) ? return_page : 'lamsa-bilingual.html';

  // Prefer the request's own origin so this works the same in preview
  // deployments as it does in production, without a hardcoded domain.
  const origin = req.headers.origin || ('https://' + req.headers.host);

  try {
    // Telegram-logged-in users are identified internally by a synthetic
    // 'tg:<id>' key, not a real address — Stripe's customer_email is
    // validated as an actual email format and rejects that outright.
    // Omitting it just means Stripe Checkout asks the buyer for an email
    // itself (for the receipt); crediting the right account never depends
    // on it — see metadata.email below, which the webhook reads first.
    const stripeParams = {
      mode: 'subscription',
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: 'Lamsa — ' + plan.label + ' Subscription' },
          unit_amount: plan.amountCents,
          recurring: { interval: plan.interval, interval_count: plan.intervalCount }
        },
        quantity: 1
      }],
      // Set on the Subscription itself (not just this Checkout Session) so
      // every invoice it ever produces — the first one and every renewal —
      // carries the same email/plan/credits the webhook reads to know who
      // to credit and by how much. Checkout Sessions don't require a
      // pre-existing Stripe Customer.
      subscription_data: {
        metadata: { email: email, plan: planId, credits: String(plan.credits) }
      },
      metadata: { email: email, plan: planId, credits: String(plan.credits) },
      success_url: origin + '/' + returnPage + '?checkout=success',
      cancel_url: origin + '/' + returnPage + '?checkout=cancel'
    };
    if (EMAIL_RE.test(email)) stripeParams.customer_email = email;

    const session = await stripe.checkout.sessions.create(stripeParams);

    console.log('[create-checkout-session] created session', session.id, 'for', email, planId);
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('[create-checkout-session] error:', err.message);
    await logError('create-checkout-session', err.message, err.stack);
    return res.status(500).json({ error: err.message });
  }
}
