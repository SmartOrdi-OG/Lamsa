# Lamsa — TODO

## ✅ Done
- [x] Add a `README.md` explaining the app, local dev setup, and required env vars.
- [x] Remove the 3D room planner (`planner.html`, `test3d.html`, `js/three.min.js`, `js/OrbitControls.js`) and all related UI/JS in `lamsa-bilingual.html`.
- [x] Add a 2D floor plan editor in its place — draws the room from the Length/Width inputs and lets the user tap a wall to place/remove door and window markers, feeding a description into the AI prompt.
- [x] Remove the "Detect Furniture" / "Place It Yourself" module from `rearrange.html` and its `api/detect-furniture.js` endpoint, keeping only the "AI Decides" (Rearrange Only / Full Redesign) flow.
- [x] Fix regeneration crash: generating a second design in the same session silently threw on a null `#resultPlaceholder` (removed from the DOM by the first result render) and left the UI stuck on the loading spinner forever. `doGenerate()` now recreates the placeholder before each run.
- [x] Restore the "Start New Design" button's CSS, accidentally dropped when `.planner-clear-btn` was removed with the 3D planner.
- [x] Fix "Full Redesign" in Quick Rearrange producing near-identical output to the source photo — rewrote `FULL_REDESIGN_PROMPT` with mandatory, itemized change instructions (mirroring the working Rearrange Only prompt) and raised `guidance_scale` to 7.5 for that mode.
- [x] Fix the same regeneration-crash bug in `rearrange.html` (same `#resultPlaceholder` removal issue as `lamsa-bilingual.html`, found while working on the item below).
- [x] Add "Nearby Stores" — `data/furniture-stores.json` (furniture retailers by Gulf + Europe country) and `js/nearby-stores.js` (a vanilla-JS render function, since the app isn't Next.js/React) render a "Shop similar pieces" list under the generated result in both `lamsa-bilingual.html` and `rearrange.html`. Each entry is plain text (no logos) with a "View on map" link to a Google Maps search (`target="_blank" rel="noopener noreferrer"`, no paid API). Country is inferred from the currency already selected in the designer (or browser locale on `rearrange.html`, which has no currency selector). Furniture-type-based matching is stubbed for later, once Claude Vision furniture detection exists again — today it always shows the general per-country list.
- [x] Fix the 2D floor plan showing stale door/window markers from a previous, unrelated visit — it was persisting `fpItems` to `localStorage` indefinitely while every other room-info field (type, area, dimensions, style, notes...) resets on a fresh page load. It's now in-memory only for the current page load, consistent with the rest of the form.

## 💡 Suggestions
_(لسا ما في شي)_

## Auth & security
- [ ] Replace fake client-side auth in `lamsa-auth.html` (login/register just write `localStorage.lamsa_user`, no server call) with a real backend: password hashing, session tokens, and server-side validation.
- [ ] Add an auth guard check on `rearrange.html`, not just the main app — right now anyone can open it directly without logging in.
- [ ] Rate-limit `api/generate.js`, `api/upload.js`, and `api/status.js` — nothing currently stops repeated calls from burning FAL credits.

## API / backend
- [ ] Add request body validation (size limits, allowed `mime_type`, `aspect_ratio` enum) to `api/generate.js` and `api/upload.js` before forwarding to fal.ai.
- [ ] Centralize the fal.ai queue polling logic shared by `api/generate.js` and `api/status.js` instead of duplicating the base URL/queue handling.
- [ ] Replace `console.log`/`console.error` debug statements in `api/*.js` with a proper logger (or strip them for production).
- [ ] Delete the stray duplicate `upload.js` at the repo root — it's an unused copy of `api/upload.js` (only `api/` is routed per `vercel.json`).

## Project hygiene
- [ ] Add a `package.json` (or document Vercel's default Node runtime) so dependencies/scripts aren't implicit.
- [ ] Add a `.gitignore` (env files, `node_modules`, editor artifacts).
- [ ] Add basic tests for the `api/*.js` handlers (mock fal.ai responses, verify status codes and error paths).

## Frontend
- [ ] Consolidate the growing pile of inline "BUG N fix" comments in `lamsa-bilingual.html` (scroll-lock, panel reset) into named, testable functions instead of ad-hoc patches.
- [ ] `lamsa-bilingual.html` is ~160KB of inline HTML/CSS/JS — consider splitting into separate JS/CSS files for maintainability.
- [ ] Add the 2D floor plan's door/window strings to the non-English/Arabic translation dictionaries in `lamsa-bilingual.html` (they currently fall back to English).

## Product
- [ ] Decide on and implement password reset flow (`forgotPass` string exists in translations but has no handler).
