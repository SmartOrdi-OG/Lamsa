import Stripe from 'stripe';

const STRIPE_SECRET_KEY = (process.env.STRIPE_SECRET_KEY || '').trim();

export const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;

// Recurring plans — each renewal grants `credits` fresh credits (they don't
// stack into a rollover balance cap, same as the old one-time packages
// just re-granted automatically instead of manually). Monthly is priced
// well below the weekly per-credit rate to reward the longer commitment.
export const SUBSCRIPTION_PLANS = {
  weekly:  { credits: 10, amountCents: 599,  label: 'Weekly',  interval: 'week',  intervalCount: 1 },
  monthly: { credits: 40, amountCents: 1499, label: 'Monthly', interval: 'month', intervalCount: 1 }
};

// A separate, flat access-only plan for the Engineers section — no credits
// are ever granted for this, so it's kept out of SUBSCRIPTION_PLANS rather
// than given a credits:0 field there, to avoid a webhook bug that reads
// `credits` from the wrong map and silently no-ops a real purchase.
export const ENGINEER_PLANS = {
  annual: { amountCents: 30000, label: 'Engineers Annual', interval: 'year', intervalCount: 1, trialDays: 14 }
};
