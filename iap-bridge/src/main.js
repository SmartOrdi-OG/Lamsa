// Bundled into js/capacitor-iap-bridge.js and loaded via a plain <script>
// tag by pages that can trigger a purchase. Outside the Capacitor iOS app
// (regular website, Android) every exported function is a harmless no-op —
// window.isCapacitorApp (js/platform.js) is only true inside that app shell,
// and purchase()/restorePurchases() both short-circuit on it before ever
// touching the native plugin bridge.
import { Purchases } from '@revenuecat/purchases-capacitor';

let configuredForEmail = null;
let configuring = null;

// Called once per page load, right after the page already knows the
// logged-in user's email (e.g. from its own /api/me check) — ties
// RevenueCat's customer record directly to the same email Stripe
// subscriptions are already keyed by, so api/me.js's sync_apple_entitlement
// action can look either up the same way. Safe to call redundantly (e.g.
// from a page that also calls it explicitly) — configuredForEmail guards
// against re-configuring for the same user.
async function init(email, apiKey) {
  if (!window.isCapacitorApp || !email || !apiKey) return;
  if (configuredForEmail === email) return;
  await Purchases.configure({ apiKey, appUserID: email });
  configuredForEmail = email;
}

// Lazily configures RevenueCat from the session's own /api/me + config
// endpoints, so pages don't each need to wire up their own init() call —
// purchase()/restorePurchases() below just call this first. Concurrent
// calls share one in-flight request rather than configuring twice.
async function ensureConfigured() {
  if (configuredForEmail) return true;
  if (configuring) return configuring;

  configuring = (async () => {
    try {
      const [meRes, cfgRes] = await Promise.all([
        fetch('/api/me', { credentials: 'include' }),
        fetch('/api/me?view=config')
      ]);
      if (!meRes.ok) return false;
      const me = await meRes.json();
      const cfg = await cfgRes.json();
      if (!me.email || !cfg.revenueCatPublicSdkKey) return false;
      await init(me.email, cfg.revenueCatPublicSdkKey);
      return !!configuredForEmail;
    } catch (e) {
      return false;
    } finally {
      configuring = null;
    }
  })();
  return configuring;
}

async function syncWithBackend() {
  const res = await fetch('/api/me', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'sync_apple_entitlement' })
  });
  let data = null;
  try { data = await res.json(); } catch (e) { /* no body */ }
  if (!res.ok) return { ok: false, error: (data && data.error) || 'Could not confirm the purchase — please try again' };
  return { ok: true, entitlement: data && data.entitlement };
}

// productId is one of APPLE_IAP_PLANS' keys in api/_stripe.js (e.g.
// "com.lamsaai.app.engineers.annual") — the caller already knows which
// plan it wants, so this skips RevenueCat's Offerings/Packages abstraction
// (one less thing to configure in the RevenueCat dashboard) and buys the
// StoreKit product directly.
async function purchase(productId) {
  if (!window.isCapacitorApp) return { ok: false, error: 'Not available outside the iOS app' };
  if (!(await ensureConfigured())) return { ok: false, error: 'Please sign in and try again' };
  try {
    const { products } = await Purchases.getProducts({ productIdentifiers: [productId] });
    if (!products || !products.length) return { ok: false, error: 'This plan is not available for purchase right now' };
    await Purchases.purchaseStoreProduct({ product: products[0] });
    return await syncWithBackend();
  } catch (err) {
    if (err && err.userCancelled) return { ok: false, cancelled: true };
    return { ok: false, error: (err && err.message) || 'Purchase failed' };
  }
}

// Required by App Store guideline 3.1.2 for any subscription — surfaced as
// a "Restore Purchases" action wherever the purchase button lives.
async function restorePurchases() {
  if (!window.isCapacitorApp) return { ok: false, error: 'Not available outside the iOS app' };
  if (!(await ensureConfigured())) return { ok: false, error: 'Please sign in and try again' };
  try {
    await Purchases.restorePurchases();
    return await syncWithBackend();
  } catch (err) {
    return { ok: false, error: (err && err.message) || 'Restore failed' };
  }
}

window.LamsaIAP = { init, purchase, restorePurchases };
