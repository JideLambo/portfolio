# Move site nav into the footer

> 2026-11-06 · Remove the top navbar so main content has more room; put Home, Work, and Writing in the footer

## In short
The site no longer has a top header bar. Home, Work, and Writing sit in the footer beside X, LinkedIn, and GitHub. The footer author name also links Home so inner pages still have a clear path back.

## What changed
- `code/app/web/src/layout/Layout.astro`: dropped `SiteHeader`.
- `code/app/web/src/layout/SiteHeader.astro`: removed.
- `code/app/web/src/layout/SiteFooter.astro`: renders `navItems` then `socialLinks`, with `aria-current` on the active page and the author name linking `/`.
- `code/app/web/src/style/chrome.css`: removed header/nav styles; tightened page top padding a little.
- `code/app/web/script/verify-build-output.ts`: asserts the header is gone and the footer menu is present.

## How it works
1. Every page still uses `Layout`, which now goes skip-link → main → footer.
2. The footer builds one link list from `navItems` plus `socialLinks` in `site.ts`.
3. Internal links get `aria-current="page"` when the path matches. External social links still open in a new tab.

## Why it's built this way
- **Reuse `navItems`:** one source of truth for page links, whether they lived in the header or the footer.
- **Author name as Home:** even if someone misses the Home item in the link row, the copyright line still returns to `/`.

## Concept worth knowing: landmark navigation
**Simply put:** rooms in a house still need doors after you remove the hallway sign. The footer is the remaining door list.

**More precisely:** without a `<header>` nav landmark, the footer `<nav aria-label="Site">` is the primary way assistive tech finds site-wide links. Keeping Home in that list (and on the author name) preserves that landmark.

## Watch out for
- Skip link still jumps to `#main`. That path is unchanged.
- Print styles still hide the footer.
- What to test: Home, `/work`, `/writing`, and a writing post on a phone width; confirm the active footer link and the author Home link.

## Check yourself
1. Where do Work and Writing live after this change?
   <details><summary>Answer</summary>In the footer site menu, before the social links, from the same `navItems` array.</details>

2. How do you get back to Home from a work case study?
   <details><summary>Answer</summary>Footer "Home", or the author name link in the copyright line, both point to `/`.</details>

3. Why delete `SiteHeader.astro` instead of leaving it unused?
   <details><summary>Answer</summary>Unused layout files trip knip and leave a second nav implementation to drift.</details>

## Explain it back
Without looking at the code, explain in 2-3 sentences what this change does and why it works. If you get stuck, that's the part to reread.
