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
| `/` | Home (letter + portrait, last shipped, latest writing) |
| `/shipped` | Last shipped list (from All shipped →, not in nav) |
| `/writing` | Essays |
| `/writing/{slug}` | Post |

| `/work` | Design case studies (FirstDistro, UseLay) |
| `/work/{slug}` | Case study |

Redirects (see `vercel.json`): `/blog` → `/writing`, `/about` → `/`, `/projects` → `/`, `/reading` → `/`.

Nav: Home · Work · Writing.

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

## Content (last shipped)

Home Last shipped is a stacked deck of three ships. `/shipped` is the list from **All shipped →**:

- Eyebrow: `Last shipped`, with `All shipped →` (`/shipped`)
- Front card is primary. Empty nested card backs peek top/right. Inactive ships are hidden, not a content sliver
- Three ships: Local AI on your machine (`personal`), iMessage agent for your business (`gre`), Morning who needs you (`firstdistro`)
- Visual: HTML/CSS light UI fragment on the dark card, slightly cropped. Local is a status card (model, ready, one tool line). GRE is a 2–3 bubble iMessage thread. Morning is one Slack briefing card. No abstract glyphs
- Title, quiet relative timestamp from `shippedAt` (`just now` / `N days ago` / weeks / months / years), 2–4 sentence body, `View →` in ink when `href` is set
- Controls: designed prev/next arrows. Drag/swipe still works. No `drag →` label. No numbered ticks
- No product or example chips. `product` stays in frontmatter for later filtering
- Site tokens only. Full white type on dark. Light Slack/iMessage/local-status panels keep their own chrome. No Slack purple. No chromatic blue. Links: underline + ink, white hover with a thicker underline. White focus ring and selection wash
- UI font is Geist Sans (`"Geist Sans", ui-sans-serif, system-ui, sans-serif`)
- Hide the Home section if empty

- Cards: `code/app/web/src/content/shipped/*.md`
- Schema: `code/app/web/src/content.config.ts` (`shipped` collection)
- Required frontmatter: `slug`, `title`, `product` (`firstdistro` \| `uselay` \| `gre` \| `sinch` \| `personal`), `shippedAt` (drives the relative timestamp). Optional: `visual`, `visualDark`, `href`, `source`, `example`
- Body is the short writeup (2–4 sentences)
- Use `getHomepageShipped()` on Home (cap 5); `getShippedEntries()` throws on duplicate slugs

---

## Coding conventions

- Prefer `type` over `interface`
- No `console.log` in app code (tests/scripts exempt)
- Hand-rolled CSS design system (no UI library). Tokens in `src/style/`
- Theming: dark-only tokens on `:root` in `src/style/tokens.css`. Body copy is full white (`--text` and `--text-muted` are `#fff`). No washed-out gray type on dark. Light UI illustrations keep their own chrome colors. No chromatic blue (`#5ba3ff`). Links: underline + ink, white hover. White focus ring and selection wash
- UI font: Geist Sans via `@fontsource-variable/geist` (`"Geist Sans", ui-sans-serif, system-ui, sans-serif`). No Geist Mono unless already used
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
| Last shipped | `code/app/web/src/content/shipped/`, `src/lib/shipped.ts`, `src/lib/product.ts` |
| Lint | `biome.json`, knip |
| CI | `.github/workflows/web-*.yml` |
