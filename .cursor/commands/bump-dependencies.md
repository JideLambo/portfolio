# Routine dependency maintenance for this portfolio.

If the user names a track (`npm` or `gha`), run only that track. Otherwise run both in order, using separate commits per track when committing.

## Safety

- Do not bump major versions unless the user explicitly asks.
- Prefer the latest version that is at least **5 days old**.
- After npm changes: `npm install`, then `npm audit fix` (no force). Stop if high/critical remain and ask.
- Validate with `npm run test && npm run fix` before finishing.

## npm track

```bash
npm run bump-deps
npm install
npm audit fix
npm run test && npm run fix
```

Read release notes for major or critical packages (`astro`, `vite`, `react`, `typescript`, `vitest`, `playwright`, `@biomejs/biome`) from current → target before applying.

## GHA track

Bump pinned actions in:

- `.github/workflows/web-checks-reusable.yml`
- `.github/workflows/web-validate.yml`
- `.github/workflows/web-main.yml`

Use full commit SHAs with version comments. Do not reintroduce Cloudflare or Terraform actions.
