# jidelambo.com — agent instructions

Instructions for AI coding agents in this repo. Human onboarding: [README.md](./README.md).

---

## At a glance

| Property | Value |
| --- | --- |
| Domain | `jidelambo.com` |
| GitHub | `JideLambo/portfolio` |
| Hosting | Vercel (static Astro build) |
| Node | **26** |
| Package manager | npm workspaces |
| App | `code/app/web` (Astro 7 static + React islands) |
| Shared | `code/app/shared` |

Forked from [oluwasayo/mysayo](https://github.com/oluwasayo/mysayo) for structure only. Do not reintroduce Oluwasayo's personal content.

---

## Commands

```bash
npm install
npm run install:testing:deps -w web   # Playwright Chromium — once per machine
npm run dev                           # Astro dev
npm run test                          # Vitest (shared + web)
npm run test:web
npm run fix:web                       # biome + stylelint + knip
cd code/app/web && npm run tsc
cd code/app/web && npm run build
```

Deploy: push to `main`. Vercel builds with root [`vercel.json`](./vercel.json) (`npm run build -w web` → `code/app/web/dist`). GitHub Actions run checks only (no deploy).

---

## Architecture (do not regress)

- **Static output** (`output: 'static'`). No SSR adapter.
- React islands in `.astro` pages (`client:load`, etc.).
- Site URL: `https://jidelambo.com` in `astro.config.mjs` and `@shared/lib/site`.
- **React Compiler** in Astro/Vite builds only (`astro.config.mjs`). Not in Vitest (browser mode breaks on `react-compiler-runtime`).
- **Vitest browser mode** + Playwright Chromium. No jsdom.
- **TypeScript 7** via `tsc` (not `tsgo`).
- **Biome** at root; **Stylelint** for `src/**/*.css`; **Knip** for unused deps.
- Web/shared: use `@/` and `@shared/` imports (no relative imports).

Vite overrides in root `package.json` keep `@vitejs/plugin-react` on v6 with Astro 7 / Vite 8.

---

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Home (name, tagline, latest writing) |
| `/about` | Conversation-style bio + career |
| `/writing` | Essays |
| `/writing/{slug}` | Post |

Redirects (see `vercel.json`): `/blog` → `/writing`, `/projects` and `/work` → `/about`, `/reading` → `/`.

Nav: Home · About · Writing.

---

## Content (writing)

- Posts: `code/app/web/src/content/blog/*.md`
- Schema: `code/app/web/src/content.config.ts`
- Required frontmatter: `slug`, `title`, `description`, `pubDate`. Optional: `updatedDate`, `draft`, `tags`
- **`slug` is the permanent URL** (`/writing/{slug}`). Never change a published slug without a 301 in `vercel.json`
- Tags: values from `Tag` in `code/app/web/src/lib/tag.ts`. Add new tags only there
- Use `getPostSlug()` for hrefs; `getPublishedPosts()` throws on duplicate slugs
- Callouts: `<details class="callout">` in prose (see existing posts / `prose.css`)

---

## Coding conventions

- Prefer `type` over `interface`
- No `console.log` in app code (tests/scripts exempt)
- Hand-rolled CSS design system (no UI library). Tokens in `src/style/`
- Theming: `data-theme` on `<html>`, set before paint in `BaseHead.astro`
- Writing voice: [`.cursor/rules/writing-voice.mdc`](./.cursor/rules/writing-voice.mdc) (no em dashes, sentence case)

---

## What agents should / should not do

### Do

- Run `npm run test:web` after web test changes
- Run `npm run fix:web` before finishing substantive TS/CSS changes
- Keep changes minimal; ask before committing

### Do not

- Add Cloudflare, Wrangler, or Terraform
- Add jsdom for web tests
- Enable React Compiler in Vitest without fixing the runtime pre-bundle
- Commit `.env` or secrets
- Force-push `main` or skip hooks unless asked
- Create markdown docs the user did not ask for
- Reintroduce a Reading or Projects page without an explicit request

---

## Dependency bumps

```bash
npm run bump-deps
npm install
npm audit fix
npm run test && npm run fix
```

See `.cursor/commands/bump-dependencies.md` for npm + GHA tracks.

---

## Quick file index

| Concern | File |
| --- | --- |
| Astro + compiler | `code/app/web/astro.config.mjs` |
| Site identity / nav | `code/app/shared/src/lib/site.ts` |
| Vercel | `vercel.json` |
| Agent map | `code/app/web/public/llms.txt` |
| Browser tests | `code/app/web/vitest.config.js` |
| Blog prose + callouts | `code/app/web/src/style/prose.css` |
| Lint | `biome.json`, knip |
| CI | `.github/workflows/web-*.yml` |
