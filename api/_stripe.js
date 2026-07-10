import Stripe from 'stripe';

const STRIPE_SECRET_KEY = (process.env.STRIPE_SECRET_KEY || '').trim();

export const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;

// credits -> price in EUR cents. Bulk packages carry a discount over the
// €1/credit base rate.
export const CREDIT_PACKAGES = {
  x1:  { credits: 1,  amountCents: 100, label: '1 Design' },
  x5:  { credits: 5,  amountCents: 400, label: '5 Designs' },
  x10: { credits: 10, amountCents: 700, label: '10 Designs' }
};
