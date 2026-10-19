# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Miguel Andreu, showcasing his work and projects. Planned sections: Home, About, Projects, Experience and Contact. The site is static-first and deployed to Cloudflare, with automatic deployment from GitHub on every push to `main`.

## Commands

- `npm run dev` — Vite dev server with HMR; the Worker runs alongside it in the Workers runtime via `@cloudflare/vite-plugin`, so `/api/*` works locally without a separate `wrangler dev`.
- `npm run build` — `tsc -b` (type-checks all three project references) then `vite build`.
- `npm run lint` — ESLint over the whole repo.
- `npm run preview` — build, then serve the production build locally.
- `npm run deploy` — build, then `wrangler deploy` to Cloudflare.
- `npm run cf-typegen` — regenerate `worker-configuration.d.ts` (the `Env` type) from `wrangler.jsonc`. Run this after adding bindings or vars.

There is no test framework configured.

## Architecture

A React 19 SPA and a Cloudflare Worker deployed together as a single Worker (`wrangler.jsonc`, name `miguel-andreu`):

- `src/` — the React frontend (entry `src/main.tsx` → `App.tsx`), built by Vite and served as static assets.
- `worker/index.ts` — the Worker `fetch` handler (`ExportedHandler<Env>`). Requests not matching a static asset reach it; it currently handles `/api/*` and returns 404 otherwise. The frontend calls it with relative `fetch('/api/...')`.
- `assets.not_found_handling: "single-page-application"` in `wrangler.jsonc` makes unknown non-API paths fall back to `index.html`, so client-side routing works.

TypeScript is split into project references (`tsconfig.json`): `tsconfig.app.json` (covers `src/`, DOM types), `tsconfig.node.json` (Vite config), and `tsconfig.worker.json` (covers `worker/`, uses the generated `worker-configuration.d.ts` types). Code in `worker/` must not rely on DOM types, and vice versa. All projects enable `verbatimModuleSyntax` (use `import type` for type-only imports), `erasableSyntaxOnly` (no `enum`, `namespace`, or constructor parameter properties), and `noUnusedLocals`/`noUnusedParameters`, so unused code fails `npm run build`.

## Code Rules

### Language

- Write everything in English, regardless of the language the prompt is written in: code, identifiers, comments, commit messages, documentation and UI copy.
- Avoid overengineering.
- When creating labels and texts, it must be in both English and Spanish as the web must support both languages.

### General

- Keep the site static-first. Only add logic to the Worker (`worker/index.ts`) when it is clearly needed, e.g. a contact form endpoint.
- Do not add dependencies without asking first, and avoid heavy ones (large UI kits, animation suites, etc.).
- Prefer small, focused function components with typed props. Keep content (projects, experience, social links) in typed data files under `src/data/` rather than hard-coded in JSX.
- No unused code or dead files: unused locals and parameters fail the build.

### Design & UX

- Responsive, mobile-first layout.
- Support for english and spanish languages.
- Accessible by default: semantic HTML, proper heading hierarchy, alt text, visible focus states, sufficient color contrast and keyboard navigation.
- Support light and dark mode, respecting `prefers-color-scheme`.
- Keep performance in mind: optimize images, avoid unnecessary re-renders and large bundles.

### Git & Deployment

- Every push to `main` deploys to production automatically. Make sure `npm run lint` and `npm run build` pass before committing.
- Make small commits with short, descriptive messages in the imperative mood (e.g. "Add projects section").
- Never commit secrets. `.env*` and `.dev.vars*` are git-ignored; use Wrangler secrets for anything sensitive.
- Do not push unless asked to.