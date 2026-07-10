# Lamsa (لمستي)

Lamsa is an AI interior design web app. A user uploads photos of a room, describes
its dimensions and door/window layout, picks a style/budget/mood, and gets back an
AI-generated redesign of that same room. It also offers a lighter "quick rearrange"
flow that only repositions (or fully redesigns) the furniture already visible in a
single photo.

The whole app is static HTML/CSS/vanilla JS pages served by Vercel, backed by a
handful of Vercel serverless functions under `api/` that call fal.ai (image
generation), Stripe (one-time credit purchases), and Upstash Redis (credit
balances).

## Live flow

1. **`lamsa-auth.html`** — login / registration screen, backed by real
   server-side accounts and sessions (see [Authentication](#authentication)).
2. **`lamsa-bilingual.html`** — the main designer. A 5-step form:
   - Upload up to 5 room photos
   - Room info: type, area, length/width, and a 2D floor plan editor where you tap
     the room outline to mark door/window positions
   - Furniture budget & currency
   - Style and color palette
   - Mood and free-text notes
   
   Submitting builds a detailed prompt from all of the above and sends it to
   `/api/generate`, then polls `/api/status` until the redesigned image is ready.
   Each generation spends 1 credit (see [Credits & payments](#credits--payments)).
   The result view also shows a "Shop similar pieces" panel — a static per-country
   list of real furniture retailers with a Google Maps search link for each
   (`js/nearby-stores.js` + `data/furniture-stores.json`; no paid maps API).
3. **`rearrange.html`** — "Quick Rearrange": upload one photo, choose *Rearrange
   Only* (move existing furniture, add/remove nothing) or *Full Redesign*, and
   generate. Also spends 1 credit per generation.
4. **`index.html`** — redirects to `lamsa-auth.html`.

The app supports 7 languages (Arabic, English, German, Spanish, Turkish, French,
Italian, Russian) via a client-side translation dictionary; Arabic renders RTL.

## API (`api/`)

All endpoints are Vercel serverless functions (Node, `export default async function
handler(req, res)`).

| Endpoint | Method | Purpose |
|---|---|---|
| `POST /api/auth-register` | POST | Creates an account (`{ username, email, password, country }`), hashes the password (scrypt), starts a session, sets the `lamsa_session` cookie, grants the 1 free welcome credit. `409` if the email is already registered. |
| `POST /api/auth-login` | POST | Verifies `{ email, password }` against the stored hash, starts a session, sets the `lamsa_session` cookie. Returns a generic `401` for both "no such account" and "wrong password" (no user enumeration). |
| `POST /api/auth-logout` | POST | Destroys the current session and clears the cookie. |
| `GET /api/me` | GET | Returns `{ username, email }` for the current session, or `401` if not logged in. Used by every protected page's auth guard. |
| `POST /api/upload` | POST | Uploads a base64 image to fal.ai's CDN storage, returns a public `url`. |
| `POST /api/generate` | POST | Requires a valid session. Deducts 1 credit from the logged-in user, then submits a `{ prompt, image_url, strength }` job to fal.ai's `flux-pro/kontext` queue, returns a `request_id`. Refunds the credit if the fal.ai submission itself fails. Returns `401` if not logged in, `402` if the user has no credits left. |
| `GET /api/status` | GET | Polls fal.ai's queue for a `request_id` (`?mode=result` fetches the final image once status is `COMPLETED`). |
| `GET /api/credits` | GET | Returns `{ email, credits }` for the current session. `401` if not logged in. |
| `POST /api/create-checkout-session` | POST | Requires a valid session. Creates a Stripe Checkout Session (one-time payment) for `{ package, return_page }`, returns `{ url }` to redirect the browser to. `401` if not logged in. |
| `POST /api/stripe-webhook` | POST | Verifies the Stripe signature and, on `checkout.session.completed`, credits the paying email's balance. Idempotent against duplicate webhook deliveries. |

## Authentication

Accounts are real and server-verified — not a localStorage fake.

- **Passwords**: hashed with Node's built-in `crypto.scrypt` (random per-user
  salt, `crypto.timingSafeEqual` for comparison). Never stored in plaintext,
  never sent back to the client.
- **Sessions**: an opaque random token (`crypto.randomBytes(32)`) is stored in
  Upstash Redis as `lamsa:session:<token> → email` with a 30-day TTL, and
  delivered to the browser as an `httpOnly; SameSite=Lax` cookie (`Secure` too,
  outside of `localhost`). JavaScript on the page can never read the token.
- **Identity source of truth**: every protected endpoint (`/api/generate`,
  `/api/credits`, `/api/create-checkout-session`) reads the user's identity
  *only* from that session cookie via `requireSessionEmail()` in `api/_auth.js`
  — never from an `email` field in the request body or query string. This is
  what actually stops one person from spending or charging another person's
  credits by guessing/typing their email.
- **Page guards**: `lamsa-bilingual.html` and `rearrange.html` call `GET
  /api/me` on load and redirect to `lamsa-auth.html` if it 401s. A cached
  `{username, email}` in `localStorage` is used only to avoid a login-screen
  flash before that check resolves — it has no authority on its own.
- **Google / Apple sign-in** buttons are present in the UI but not wired to a
  real OAuth backend yet; they show an honest "coming soon" message instead of
  faking a logged-in state.

## Credits & payments

Generation is metered with a simple one-time-purchase credit system — no
subscriptions. New emails get 1 free credit; each `/api/generate` call spends 1.

- **Pricing** (`api/_stripe.js` → `CREDIT_PACKAGES`): 1 credit / €1, 5 credits / €4,
  10 credits / €7.
- **Identity**: credits are keyed by the email on the user's verified server
  session (see [Authentication](#authentication)) — not a client-supplied
  field, so they can't be spent or purchased on someone else's behalf.
- **Storage**: balances live in Upstash Redis (`api/_db.js`), not localStorage,
  so they can't be reset by clearing browser storage.
- **Payment methods**: Stripe Checkout with `payment_method_types` left
  unspecified, so it auto-includes whatever the Stripe Dashboard has enabled for
  the account's country — typically cards plus Apple Pay / Google Pay. Stripe
  does **not** natively support GCC-local rails (mada, STC Pay); a supplementary
  PSP (Moyasar, Tap, HyperPay, PayTabs) would be needed for those specifically.

### One-time setup required (not done by this codebase)

1. **Stripe account** — create one at [dashboard.stripe.com](https://dashboard.stripe.com)
   with your company's legal/tax details. Copy the secret key into
   `STRIPE_SECRET_KEY`.
2. **Stripe webhook** — in the Stripe Dashboard, add an endpoint pointing at
   `https://<your-domain>/api/stripe-webhook`, subscribed to
   `checkout.session.completed`. Copy its signing secret into
   `STRIPE_WEBHOOK_SECRET`.
3. **Upstash Redis** — in the Vercel dashboard, add the Upstash integration from
   the Marketplace (Vercel's own KV product was sunset) and connect it to this
   project. It auto-injects `KV_REST_API_URL` / `KV_REST_API_TOKEN` (or
   `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` if provisioned directly
   via Upstash) — `api/_db.js` reads either naming.

## Environment variables

| Variable | Required by | Description |
|---|---|---|
| `FAL_API_KEY` | `api/upload.js`, `api/generate.js`, `api/status.js` | fal.ai API key used for image generation and storage. |
| `ANTHROPIC_API_KEY` | (currently unused by any endpoint) | Reserved for Claude-vision features. |
| `STRIPE_SECRET_KEY` | `api/create-checkout-session.js`, `api/stripe-webhook.js` | Stripe secret key (test or live). |
| `STRIPE_WEBHOOK_SECRET` | `api/stripe-webhook.js` | Signing secret for the `checkout.session.completed` webhook endpoint. |
| `KV_REST_API_URL` / `UPSTASH_REDIS_REST_URL` | `api/_db.js` (credits, webhook idempotency) | Upstash Redis REST URL — auto-injected by the Vercel Marketplace Upstash integration. |
| `KV_REST_API_TOKEN` / `UPSTASH_REDIS_REST_TOKEN` | `api/_db.js` | Upstash Redis REST token — auto-injected alongside the URL above. |

Set these in your Vercel project settings, or in a local `.env` file when running
with `vercel dev`.

## Local development

This is a static site with serverless API routes, deployed on Vercel. There's no
build step for the frontend, but the API functions now depend on npm packages
(`stripe`, `@upstash/redis`), so install them once:

```bash
npm install
npm i -g vercel
vercel dev
```

This serves the HTML pages and proxies `/api/*` to the functions in `api/`, so the
upload/generate/status calls work locally exactly as they do in production.

Opening the `.html` files directly (e.g. via `file://` or a plain static server)
works for UI/layout iteration, but any `/api/*` call will fail without `vercel dev`
or a deployed backend.

## Deployment

The project deploys to Vercel as-is. `vercel.json` routes `/api/*` to the
serverless functions, serves any `*.html` path directly, and redirects `/` to
`lamsa-auth.html`.

## Project structure

```
├── index.html            # redirects to lamsa-auth.html
├── lamsa-auth.html        # login / register
├── lamsa-bilingual.html   # main designer (upload, floor plan, style, generate)
├── rearrange.html         # quick rearrange / full redesign from one photo
├── assets/
│   ├── favicon-32.png / favicon-16.png / apple-touch-icon.png  # browser tab / home-screen icon
│   └── logo-mark.png      # icon-only mark (transparent), used in the nav logo
├── data/
│   └── furniture-stores.json  # store names by country (Gulf + Europe)
├── js/
│   └── nearby-stores.js  # shared "shop similar pieces" render logic
├── api/
│   ├── auth-register.js   # create account, hash password, start session
│   ├── auth-login.js      # verify password, start session
│   ├── auth-logout.js     # destroy session
│   ├── me.js               # who's logged in, from the session cookie
│   ├── upload.js          # image upload → fal.ai storage
│   ├── generate.js        # deduct a credit, submit a generation job to fal.ai
│   ├── status.js          # poll job status / fetch result
│   ├── credits.js         # get the logged-in user's credit balance
│   ├── create-checkout-session.js  # start a Stripe Checkout session
│   ├── stripe-webhook.js  # grant credits once Stripe confirms payment
│   ├── _auth.js           # password hashing + session helpers (not a route)
│   ├── _db.js             # Upstash Redis client + credit helpers (not a route)
│   └── _stripe.js         # Stripe client + credit package pricing (not a route)
├── package.json
└── vercel.json
```

## Known limitations

- **No password reset flow yet.** A user who forgets their password has no
  self-service way to recover the account.
- **Google / Apple sign-in aren't wired up.** The buttons exist but only show
  a "coming soon" message — see [Authentication](#authentication).
- No automated tests.

See `TODO.md` for the fuller list of planned hardening work.
