# Lamsa — iOS app (Capacitor wrapper)

A thin native shell around the live site (`https://lamsa-ai.com` — see
`capacitor.config.json`'s `server.url`). There's no local web content to
build or keep in sync: the app always loads the real, current site, so a
new app build is only needed for icon/splash/native-config changes, not
for ordinary site updates.

## What's here

- `ios/App/` — the generated Xcode project (`App.xcodeproj` — Swift Package
  Manager, not CocoaPods; there's no `.xcworkspace`).
- `resources/` — the 1024×1024 source icon and splash screens
  `@capacitor/assets` generated the real asset catalogs from.
- `../codemagic.yaml` (repo root — Codemagic only auto-detects it there,
  not inside a subfolder) — a cloud build pipeline (no Mac needed on your
  end). It sets `working_directory: ios-app` so every build step still
  runs from here.

## Building without a Mac: Codemagic

1. Go to https://codemagic.io, sign up, and connect this GitHub repo.
2. Codemagic will detect the repo root's `codemagic.yaml` and offer the
   **ios-release** workflow.
3. Under the app's **Code signing** settings in Codemagic, connect your
   Apple Developer account (Apple ID + an App Store Connect API key you
   generate in App Store Connect → Users and Access → Keys). Codemagic
   handles certificate/profile creation automatically from there — you
   never need Xcode yourself.
4. Under **Publishing → App Store Connect**, add that same API key so
   Codemagic can upload the build to TestFlight automatically
   (`submit_to_testflight: true` in `codemagic.yaml`; flip
   `submit_to_app_store` to `true` once you're ready for a real release
   instead of just a TestFlight build).
5. Start a build. Codemagic runs `npm ci && npx cap sync ios`, builds the
   `.ipa`, signs it, and uploads it — all in the cloud.

## Before you submit for review — known risks to settle first

These aren't code bugs; they're Apple App Store policy questions that
need a decision before (or the app risks rejection after) submission:

1. **Payments — Engineers plan fixed, credit packs still pending.** The
   Engineers $300/year plan now goes through real Apple In-App Purchase on
   iOS (via RevenueCat — see `iap-bridge/`, `api/_stripe.js`'s
   `APPLE_IAP_PLANS`, and the `sync_apple_entitlement` action in
   `api/me.js`), satisfying guideline 3.1.1 for that plan. The credits
   packs (weekly/monthly) still link out to Stripe on iOS too — same
   rejection risk as before for those specifically, until they get the same
   treatment (tracked as a follow-up; the pattern is now proven end-to-end
   on the Engineers plan, so it's mostly repetition from here). Web and
   Android are unaffected either way — both keep using Stripe for
   everything, gated by `window.isCapacitorApp` being false there.

   **One-time manual setup needed before this actually works** (code alone
   isn't enough):
   - App Store Connect → Subscriptions: confirm the Paid Apps Agreement is
     signed, then create subscription group "Lamsa Engineers" with product
     `com.lamsaai.app.engineers.annual` ($300/year, 14-day free trial).
   - A RevenueCat account/project connected to App Store Connect, with an
     entitlement mapped to that product.
   - Three Vercel environment variables: `REVENUECAT_PUBLIC_SDK_KEY`
     (client-safe, served via `/api/me?view=config`),
     `REVENUECAT_SECRET_API_KEY` (server-side REST calls),
     `REVENUECAT_WEBHOOK_SECRET` (must match RevenueCat's configured
     webhook Authorization header exactly — point RevenueCat's webhook at
     the existing `/api/stripe-webhook` URL; it now handles both
     providers, see that file's `handleRevenueCatEvent`).

~~2. Google Sign-In / 3. Missing "Sign in with Apple"~~ — **fixed**:
confirmed via a real TestFlight install that Google's Identity Services
JS library does refuse to run inside this Capacitor WebView (blank
`accounts.google.com` page). Rather than building native plugins for
both, `js/platform.js`'s `window.isCapacitorApp` flag (mirrors the
existing `window.isAndroidTWA` pattern) now hides the Google and Apple
buttons entirely inside the iOS app shell — only email/password shows,
which already works end-to-end. This also resolves guideline 4.8 (it
only applies when a third-party social login is actually offered).
Google Sign-In is untouched on the regular website. A native
Capacitor Google/Apple Sign-In plugin remains a possible follow-up if
social login on iOS is wanted later.
