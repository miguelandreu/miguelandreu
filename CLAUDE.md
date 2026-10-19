# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Miguel Andreu, showcasing his work and projects. A single scrolling page with the sections Home, About (bio, education, certifications), Experience, Projects (personal projects) and Contact (email, GitHub, LinkedIn). The site is static-first and deployed to Cloudflare, with automatic deployment from GitHub on every push to `main`.

## Commands

- `npm run dev` — Vite dev server with HMR; the Worker runs alongside it in the Workers runtime via `@cloudflare/vite-plugin`, so no separate `wrangler dev` is needed. If the page is blank after a config or `index.html` change, restart with `npm run dev -- --force` to rebuild the dependency cache.
- `npm run build` — `tsc -b` (type-checks all three project references) then `vite build`.
- `npm run lint` — ESLint over the whole repo.
- `npm run preview` — build, then serve the production build locally.
- `npm run deploy` — build, then `wrangler deploy` to Cloudflare.
- `npm run cf-typegen` — regenerate `worker-configuration.d.ts` (the `Env` type) from `wrangler.jsonc`. Run this after adding bindings or vars.

There is no test framework configured.

## Architecture

A React 19 SPA and a Cloudflare Worker deployed together as a single Worker (`wrangler.jsonc`, name `miguel-andreu`):

- `src/` — the React frontend (entry `src/main.tsx` → `App.tsx`), built by Vite and served as static assets.
- `worker/index.ts` — the Worker `fetch` handler (`ExportedHandler<Env>`). Requests not matching a static asset reach it; it currently returns 404 for everything, since the site is static. Add routes (e.g. `/api/*`, called from the frontend with a relative `fetch`) only when server logic is needed.
- `assets.not_found_handling: "single-page-application"` in `wrangler.jsonc` makes unknown non-API paths fall back to `index.html`, so client-side routing works.

### Frontend (`src/`)

- **Content** lives in typed data files in `src/data/` (`profile`, `education`, `certifications`, `experience`, `projects`, `social`), with types in `src/data/types.ts`. Translatable fields use `Localized<T>` (`Record<'en' | 'es', T>`), so a missing translation fails the build. Dates are `YearMonth` strings (`'2024-03'`) formatted per locale by `src/i18n/format.ts`.
- **Sections** (`src/sections/`) are rendered in `App.tsx`. Their order and anchor ids come from `sectionIds` in `src/data/sections.ts`, which also drives the nav and its active-section highlight (`src/hooks/useActiveSection.ts`). Wrap new sections in `components/Section`, which renders the anchor and translated `<h2>`.
- **UI strings** (nav, headings, button labels) are in `src/i18n/strings.ts`, typed as `Localized<UiStrings>`. Components read them, and the current locale, via `useLocale()`. The locale is detected from the browser, can be switched in the header, and is saved in `localStorage`; there is one URL for both languages.
- **Styling** is plain CSS: design tokens in `src/styles/tokens.css` (colors use `light-dark()`), globals and helpers (`.container`, `.visually-hidden`, `.skip-link`) in `src/styles/base.css`, and a CSS Module per component. The theme follows the system unless the visitor uses the header toggle, which sets `data-theme` on `<html>` and is applied before first paint by an inline script in `index.html`.
- `index.html` holds English title, description and Open Graph tags for crawlers. Keep them in sync with `src/data/profile.ts`; the app translates the title and description at runtime.

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