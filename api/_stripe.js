import Stripe from 'stripe';
import { getUserSubscription, setUserSubscription, addCredits } from './_db.js';

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

// Apple In-App Purchase product id -> the same internal plan this product
// corresponds to on the Stripe side, so webhook/sync code resolves "which
// plan was this" the same way existing Stripe code does. `kind` picks which
// entitlement record (`setEngineerEntitlement` vs `setUserSubscription`) and
// `plan` is the ENGINEER_PLANS/SUBSCRIPTION_PLANS key to credit against.
export const APPLE_IAP_PLANS = {
  'com.lamsaai.app.engineers.annual': { kind: 'engineer', plan: 'annual' },
  'com.lamsaai.app.credits.weekly': { kind: 'credits', plan: 'weekly' },
  'com.lamsaai.app.credits.monthly': { kind: 'credits', plan: 'monthly' }
};

// Grants this period's credits exactly once per billing period, then writes
// the subscription record — shared by api/me.js's sync_apple_entitlement
// (called right after a client-side purchase) and
// api/stripe-webhook.js's RevenueCat branch (renewals/cancellations), which
// can both observe the same period. Comparing against the stored
// currentPeriodEnd is what keeps that from double-granting: once credited,
// the record's currentPeriodEnd matches the new one and the second caller
// just re-writes the (unchanged) record without crediting again.
export async function grantAppleCreditsIfNewPeriod(email, record) {
  const existing = await getUserSubscription(email);
  const alreadyCredited = existing &&
    existing.platform === 'apple' &&
    existing.appleProductId === record.appleProductId &&
    existing.currentPeriodEnd === record.currentPeriodEnd;

  if (!alreadyCredited && (record.status === 'active' || record.status === 'trialing')) {
    const planInfo = SUBSCRIPTION_PLANS[record.plan];
    if (planInfo && planInfo.credits) await addCredits(email, planInfo.credits);
  }
  await setUserSubscription(email, record);
}
