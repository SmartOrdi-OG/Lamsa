# Lamsa — TODO

## Auth & security
- [ ] Replace fake client-side auth in `lamsa-auth.html` (login/register just write `localStorage.lamsa_user`, no server call) with a real backend: password hashing, session tokens, and server-side validation.
- [ ] Add auth guard checks on `planner.html` and `rearrange.html`, not just the main app — right now anyone can open them directly without logging in.
- [ ] Rate-limit `api/generate.js`, `api/status.js`, and `api/detect-furniture.js` — nothing currently stops repeated calls from burning FAL/Anthropic credits.

## API / backend
- [ ] Add request body validation (size limits, allowed `mime_type`, `aspect_ratio` enum) to `api/generate.js` and `api/detect-furniture.js` before forwarding to fal.ai / Anthropic.
- [ ] Centralize the fal.ai queue polling logic shared by `api/generate.js` and `api/status.js` instead of duplicating the base URL/queue handling.
- [ ] Replace `console.log`/`console.error` debug statements in `api/*.js` with a proper logger (or strip them for production).

## Project hygiene
- [ ] Add a `README.md` explaining the app (Lamsa AI interior design/planner), local dev setup, and required env vars (`FAL_API_KEY`, `ANTHROPIC_API_KEY`).
- [ ] Add a `package.json` (or document Vercel's default Node runtime) so dependencies/scripts aren't implicit.
- [ ] Add a `.gitignore` (env files, `node_modules`, editor artifacts).
- [ ] Add basic tests for the `api/*.js` handlers (mock fal.ai/Anthropic responses, verify status codes and error paths).

## Frontend
- [ ] Consolidate the growing pile of inline "BUG N fix" comments in `lamsa-bilingual.html`/`planner.html` (scroll-lock, panel reset, stale 3D session) into named, testable functions instead of ad-hoc patches.
- [ ] `lamsa-bilingual.html` is ~160KB of inline HTML/CSS/JS — consider splitting into separate JS/CSS files for maintainability.
- [ ] Finish touch support in `js/OrbitControls.js` (`// TODO touch` at lines 706, 722, 736) or confirm it's intentionally unused and remove the dead branches.

## Product
- [ ] Decide on and implement password reset flow (`forgotPass` string exists in translations but has no handler).
