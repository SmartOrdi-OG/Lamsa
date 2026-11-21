# Lamsa — iOS app (Capacitor wrapper)

A thin native shell around the live site (`https://lamsa-ai.com` — see
`capacitor.config.json`'s `server.url`). There's no local web content to
build or keep in sync: the app always loads the real, current site, so a
new app build is only needed for icon/splash/native-config changes, not
for ordinary site updates.

## What's here

- `ios/App/` — the generated Xcode project (App.xcworkspace once CocoaPods
  has run).
- `resources/` — the 1024×1024 source icon and splash screens
  `@capacitor/assets` generated the real asset catalogs from.
- `codemagic.yaml` — a cloud build pipeline (no Mac needed on your end).

## Building without a Mac: Codemagic

1. Go to https://codemagic.io, sign up, and connect this GitHub repo.
2. Codemagic will detect `ios-app/codemagic.yaml` and offer the
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
5. Start a build. Codemagic runs `pod install`, builds the `.ipa`, signs
   it, and uploads it — all in the cloud.

## Before you submit for review — known risks to settle first

These aren't code bugs; they're Apple App Store policy questions that
need a decision before (or the app risks rejection after) submission:

1. **Payments.** The app currently links out to Stripe for the Engineers
   $250/year plan and credit packs, the same pattern already in use on
   Google Play. Apple's guideline 3.1.1 requires in-app digital
   purchases to go through Apple's own In-App Purchase (StoreKit) unless
   you qualify for and have been granted the "External Purchase Link"
   entitlement (US only today, and it still carries a fee). Submitting
   with a bare external Stripe link is a real rejection risk — it may
   simply get flagged, where Android enforcement has been looser.
2. **Google Sign-In may not work at all.** The login page uses Google's
   own Identity Services JS library, which Google explicitly blocks
   inside embedded WebViews (exactly what this Capacitor wrapper uses) —
   it's not a Capacitor-specific bug, it's enforced on Google's end
   based on the user agent. If this matters, the fix is a native
   Capacitor Google Sign-In plugin (opens the system browser/native
   flow instead of the in-page JS widget), not something this wrapper
   does by default.
3. **Missing "Sign in with Apple."** Apple's guideline 4.8 requires
   offering Sign in with Apple as an equivalent option on any app that
   offers a third-party social login (Google qualifies). Right now
   Google is wired up for real but Apple's button is a visual
   placeholder only ("coming soon") — this alone is a common, very
   likely rejection reason that will need the real Sign in with Apple
   flow implemented first.

None of these are addressed by this scaffold — they need an explicit
decision (accept the risk and see what Apple's review says, same as the
Android approach, or fix them first) before submitting for review.
