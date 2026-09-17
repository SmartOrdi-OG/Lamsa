import { redis } from './_db.js';
import { stripe, CREDIT_PACKAGES } from './_stripe.js';
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

  const { package: packageId, return_page } = req.body || {};

  const pkg = CREDIT_PACKAGES[packageId];
  if (!pkg) return res.status(400).json({ error: 'Unknown credit package' });

  // Send the user back to whichever page they started the purchase from.
  // Validated against an allowlist rather than trusting an arbitrary
  // client-supplied path, since this becomes a redirect target.
  const ALLOWED_RETURN_PAGES = ['lamsa-bilingual.html', 'rearrange.html'];
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
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: 'Lamsa — ' + pkg.label },
          unit_amount: pkg.amountCents
        },
        quantity: 1
      }],
      // Read back by the webhook to know who to credit and by how much —
      // Checkout Sessions don't require a pre-existing Stripe Customer.
      metadata: {
        email: email,
        package: packageId,
        credits: String(pkg.credits)
      },
      success_url: origin + '/' + returnPage + '?checkout=success',
      cancel_url: origin + '/' + returnPage + '?checkout=cancel'
    };
    if (EMAIL_RE.test(email)) stripeParams.customer_email = email;

    const session = await stripe.checkout.sessions.create(stripeParams);

    console.log('[create-checkout-session] created session', session.id, 'for', email, packageId);
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('[create-checkout-session] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
