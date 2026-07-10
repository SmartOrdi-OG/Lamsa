# Lamsa (لمستي)

Lamsa is an AI interior design web app. A user uploads photos of a room, describes
its dimensions and door/window layout, picks a style/budget/mood, and gets back an
AI-generated redesign of that same room. It also offers a lighter "quick rearrange"
flow that only repositions (or fully redesigns) the furniture already visible in a
single photo.

The whole app is static HTML/CSS/vanilla JS pages served by Vercel, backed by a
handful of Vercel serverless functions under `api/` that call fal.ai (image
generation) and Anthropic's Claude (vision).

## Live flow

1. **`lamsa-auth.html`** — login / registration screen. Note: authentication is
   currently client-side only (see [Known limitations](#known-limitations)).
2. **`lamsa-bilingual.html`** — the main designer. A 5-step form:
   - Upload up to 5 room photos
   - Room info: type, area, length/width, and a 2D floor plan editor where you tap
     the room outline to mark door/window positions
   - Furniture budget & currency
   - Style and color palette
   - Mood and free-text notes
   
   Submitting builds a detailed prompt from all of the above and sends it to
   `/api/generate`, then polls `/api/status` until the redesigned image is ready.
3. **`rearrange.html`** — "Quick Rearrange": upload one photo, choose *Rearrange
   Only* (move existing furniture, add/remove nothing) or *Full Redesign*, and
   generate.
4. **`index.html`** — redirects to `lamsa-auth.html`.

The app supports 7 languages (Arabic, English, German, Spanish, Turkish, French,
Italian, Russian) via a client-side translation dictionary; Arabic renders RTL.

## API (`api/`)

All endpoints are Vercel serverless functions (Node, `export default async function
handler(req, res)`).

| Endpoint | Method | Purpose |
|---|---|---|
| `POST /api/upload` | POST | Uploads a base64 image to fal.ai's CDN storage, returns a public `url`. |
| `POST /api/generate` | POST | Submits a `{ prompt, image_url }` job to fal.ai's `flux-pro/kontext` queue, returns a `request_id`. |
| `GET /api/status` | GET | Polls fal.ai's queue for a `request_id` (`?mode=result` fetches the final image once status is `COMPLETED`). |

## Environment variables

| Variable | Required by | Description |
|---|---|---|
| `FAL_API_KEY` | `api/upload.js`, `api/generate.js`, `api/status.js` | fal.ai API key used for image generation and storage. |
| `ANTHROPIC_API_KEY` | (currently unused by any endpoint) | Reserved for Claude-vision features. |

Set these in your Vercel project settings, or in a local `.env` file when running
with `vercel dev`.

## Local development

This is a static site with serverless API routes, deployed on Vercel — there's no
build step or bundler.

```bash
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
├── api/
│   ├── upload.js          # image upload → fal.ai storage
│   ├── generate.js        # submit a generation job to fal.ai
│   └── status.js          # poll job status / fetch result
└── vercel.json
```

## Known limitations

- **Auth is client-side only.** `lamsa-auth.html` writes `{ username, loggedIn }`
  to `localStorage` on login/register — there's no server-side account, password
  hashing, or session validation. Don't rely on it to gate access to anything
  sensitive.
- No automated tests.

See `TODO.md` for the fuller list of planned hardening work.
