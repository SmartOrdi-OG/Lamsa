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
