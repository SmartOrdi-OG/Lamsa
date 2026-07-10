# Lamsa — TODO

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
- [x] Add a `README.md` explaining the app, local dev setup, and required env vars.
- [ ] Add a `package.json` (or document Vercel's default Node runtime) so dependencies/scripts aren't implicit.
- [ ] Add a `.gitignore` (env files, `node_modules`, editor artifacts).
- [ ] Add basic tests for the `api/*.js` handlers (mock fal.ai responses, verify status codes and error paths).

## Frontend
- [ ] Consolidate the growing pile of inline "BUG N fix" comments in `lamsa-bilingual.html` (scroll-lock, panel reset) into named, testable functions instead of ad-hoc patches.
- [ ] `lamsa-bilingual.html` is ~160KB of inline HTML/CSS/JS — consider splitting into separate JS/CSS files for maintainability.
- [ ] Add the 2D floor plan's door/window strings to the non-English/Arabic translation dictionaries in `lamsa-bilingual.html` (they currently fall back to English).

## Product
- [ ] Decide on and implement password reset flow (`forgotPass` string exists in translations but has no handler).
