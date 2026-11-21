import crypto from 'crypto';
import {
  redis, addRating, getGenerationCount, getUserSubscription, setUserSubscription, getDesignHistory, logError,
  getEngineerEntitlement, setEngineerEntitlement, listEngineerProjects, getEngineerProject, saveEngineerProject, deleteEngineerProject
} from './_db.js';
import { requireSessionEmail, getUser, deleteUser, getSessionTokenFromRequest, destroySession, clearSessionCookie } from './_auth.js';
import { APPLE_IAP_PLANS } from './_stripe.js';

// A project blob is user-authored JSON (rooms/openings/furniture/stairs) —
// unlike every other value this file writes, its size isn't fixed, so it
// gets its own guard rather than trusting the client.
const MAX_ENGINEER_PROJECT_BYTES = 500 * 1024;

function hasEngineerAccess(entitlement) {
  return !!entitlement && (entitlement.status === 'active' || entitlement.status === 'trialing');
}

// Reads the authoritative post-purchase state straight from RevenueCat
// right after the iOS app's native purchase sheet closes, rather than
// waiting on its webhook — closes the race between "the SDK says this
// succeeded" and "our DB has been updated yet". app_user_id is always our
// own session email (see ios-app's capacitor-iap-bridge, which calls
// Purchases.logIn(email) right after login), the same identity Stripe
// purchases are already keyed by.
async function fetchRevenueCatSubscriber(appUserId) {
  const apiKey = (process.env.REVENUECAT_SECRET_API_KEY || '').trim();
  if (!apiKey) throw new Error('REVENUECAT_SECRET_API_KEY not configured');

  const resp = await fetch('https://api.revenuecat.com/v1/subscribers/' + encodeURIComponent(appUserId), {
    headers: { Authorization: 'Bearer ' + apiKey }
  });
  if (!resp.ok) throw new Error('RevenueCat subscriber lookup failed: ' + resp.status);
  const data = await resp.json();
  return (data && data.subscriber) || null;
}

// Maps one RevenueCat `subscriptions[productId]` entry to the same record
// shape stripe-webhook.js writes (status/plan/currentPeriodEnd/trialEnd),
// so every existing `hasEngineerAccess`/`hasAccess`-style check elsewhere
// keeps working unchanged regardless of which payment platform granted it.
function revenueCatSubToRecord(email, plan, sub) {
  const expiresAt = sub.expires_date ? new Date(sub.expires_date).getTime() : null;
  const isExpired = expiresAt !== null && expiresAt < Date.now();
  return {
    email,
    plan,
    status: isExpired ? 'canceled' : (sub.period_type === 'trial' ? 'trialing' : 'active'),
    platform: 'apple',
    appleProductId: sub.product_identifier || null,
    currentPeriodEnd: expiresAt ? Math.floor(expiresAt / 1000) : null,
    trialEnd: (!isExpired && sub.period_type === 'trial' && expiresAt) ? Math.floor(expiresAt / 1000) : null
  };
}

// Shown only to the team account — this is a site-wide number, not
// something any other logged-in user should see on their own /api/me call.
const STATS_VISIBLE_EMAILS = new Set(['team@smartordi.eu']);

// POST here (action: 'rate') is the in-app star-rating widget's submit —
// piggybacked on this endpoint rather than a new API file, since Vercel's
// Hobby plan caps serverless functions at 12 and this project is already
// at that limit (see api/telegram.js for the same reasoning). DELETE here
// permanently deletes the logged-in account, for the same reason.
export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });

  // Public, unauthenticated config for the login screen (Google/Apple
  // Client IDs aren't secrets — they're meant to be read by the browser —
  // so this needs no session and no database, unlike everything else here.
  if (req.method === 'GET' && req.query.view === 'config') {
    return res.status(200).json({
      googleClientId: process.env.GOOGLE_CLIENT_ID || null,
      appleClientId: process.env.APPLE_CLIENT_ID || null,
      revenueCatPublicSdkKey: process.env.REVENUECAT_PUBLIC_SDK_KEY || null
    });
  }

  if (!redis) {
    console.error('[me] Upstash Redis not configured');
    return res.status(500).json({ error: 'Database not configured' });
  }

  try {
    const email = await requireSessionEmail(req);
    if (!email) return res.status(401).json({ error: 'Not logged in' });

    if (req.method === 'DELETE') {
      await deleteUser(email);
      await destroySession(getSessionTokenFromRequest(req));
      clearSessionCookie(res, req);
      return res.status(200).json({ ok: true });
    }

    if (req.method === 'POST') {
      const { action, rating, comment, projectId, project } = req.body || {};

      if (action === 'rate') {
        const ratingNum = parseInt(rating, 10);
        if (!(ratingNum >= 1 && ratingNum <= 5)) {
          return res.status(400).json({ error: 'rating must be an integer from 1 to 5' });
        }
        await addRating(email, ratingNum, comment);
        return res.status(200).json({ ok: true });
      }

      // Called by ios-app's capacitor-iap-bridge right after a native
      // StoreKit purchase/restore completes — see fetchRevenueCatSubscriber
      // above for why this exists instead of relying on the async webhook
      // alone (that still runs, as a backstop for renewals/cancellations
      // the app isn't open to witness).
      if (action === 'sync_apple_entitlement') {
        let subscriber;
        try {
          subscriber = await fetchRevenueCatSubscriber(email);
        } catch (err) {
          console.error('[me] sync_apple_entitlement failed:', err.message);
          await logError('me:sync_apple_entitlement', err.message, err.stack);
          return res.status(502).json({ error: 'Could not verify the purchase with Apple right now — it will sync automatically shortly.' });
        }

        const subscriptions = (subscriber && subscriber.subscriptions) || {};
        let granted = null;
        for (const [productId, sub] of Object.entries(subscriptions)) {
          const planInfo = APPLE_IAP_PLANS[productId];
          if (!planInfo) continue; // not a product this app recognizes (yet)

          const record = revenueCatSubToRecord(email, planInfo.plan, sub);
          if (planInfo.kind === 'engineer') {
            await setEngineerEntitlement(email, record);
          } else {
            await setUserSubscription(email, record);
          }
          granted = record;
        }

        if (!granted) return res.status(404).json({ error: 'No matching Apple purchase found yet — try again in a moment' });
        return res.status(200).json({ ok: true, entitlement: granted });
      }

      // Engineers section project save/delete — gated server-side on the
      // entitlement regardless of what the client-side UI already hid,
      // since that's cosmetic only.
      if (action === 'engineer_save' || action === 'engineer_delete') {
        const entitlement = await getEngineerEntitlement(email);
        if (!hasEngineerAccess(entitlement)) return res.status(403).json({ error: 'Engineers access required' });

        if (action === 'engineer_delete') {
          if (!projectId) return res.status(400).json({ error: 'projectId is required' });
          await deleteEngineerProject(email, projectId);
          return res.status(200).json({ ok: true });
        }

        if (!project || typeof project !== 'object') return res.status(400).json({ error: 'project is required' });
        const serialized = JSON.stringify(project);
        if (serialized.length > MAX_ENGINEER_PROJECT_BYTES) {
          return res.status(413).json({ error: 'Project is too large to save' });
        }
        const id = projectId || crypto.randomUUID();
        const blob = { project, updatedAt: new Date().toISOString() };
        await saveEngineerProject(email, id, blob);
        return res.status(200).json({ ok: true, projectId: id });
      }

      return res.status(400).json({ error: 'Unknown action' });
    }

    // History screen's design grid — folded into this GET handler (rather
    // than a new /api/*.js file) for the same Hobby-plan 12-function-cap
    // reason as everything else here.
    if (req.query.view === 'history') {
      const designs = await getDesignHistory(email, 60);
      return res.status(200).json({ designs });
    }

    // Engineers section's project list/load — same reasoning as `view=history`.
    if (req.query.view === 'engineer') {
      const entitlement = await getEngineerEntitlement(email);
      if (!hasEngineerAccess(entitlement)) return res.status(403).json({ error: 'Engineers access required' });

      if (req.query.projectId) {
        const blob = await getEngineerProject(email, req.query.projectId);
        if (!blob) return res.status(404).json({ error: 'Project not found' });
        return res.status(200).json({ project: blob.project, updatedAt: blob.updatedAt });
      }
      const projects = await listEngineerProjects(email);
      return res.status(200).json({ projects });
    }

    const user = await getUser(email);
    if (!user) return res.status(401).json({ error: 'Not logged in' });

    const response = { username: user.username, email: user.email };
    if (STATS_VISIBLE_EMAILS.has(email)) {
      response.totalGenerations = await getGenerationCount();
    }
    // Settings screen's subscription-status row — read-only here, so no
    // separate endpoint is needed just to check it.
    response.subscription = await getUserSubscription(email);
    // Lets the Engineers app's own bootstrap decide paywall vs. editor from
    // this same call, without a separate request.
    response.engineerSubscription = await getEngineerEntitlement(email);
    return res.status(200).json(response);
  } catch (err) {
    console.error('[me] error:', err.message);
    await logError('me', err.message, err.stack);
    return res.status(500).json({ error: err.message });
  }
}
