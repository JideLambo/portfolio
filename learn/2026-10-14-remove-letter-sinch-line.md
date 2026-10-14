# Remove dayside Sinch line from home letter

> 2026-10-14 · Remove the daytime/Sinch employer sentence from the homepage Letter section

## In short
The home letter no longer mentions dayside work at Sinch. The intro now goes from the three founded products straight to how to reach Jide. Build verification and agent copy were updated so the old line does not come back by accident.

## What changed
- `code/app/web/src/component/HomeLetter.astro`: Removed the `home-letter__job` paragraph and the unused `sinchUrl` import.
- `code/app/web/src/style/home.css`: Removed the `.home-letter__job` spacing rule.
- `code/app/web/script/verify-build-output.ts`: Dropped the assert that home must link `sinchUrl`.
- `AGENTS.md`: Letter lock copy now says there is no dayside / Sinch employer line.

## How it works
1. Astro renders `HomeLetter.astro` into the home page HTML.
2. After the UseLay paragraph, the next paragraph is the reach line (X or email).
3. `verify-build-output.ts` still checks founder product links and contact links, but no longer expects a Sinch href on home.

## Why it's built this way
- **Delete the whole paragraph:** The request was to remove that sentence, not rewrite it. Leaving a partial job mention would still surface Sinch.
- **Keep `sinchUrl` in `@shared/lib/site`:** Other product enums and tests still use Sinch as a product label. Only the home letter stopped linking it.
- **Update AGENTS.md with the letter:** Agents treat that file as the locked letter brief. Leaving the old Sinch sentence there would invite reintroduction.

## Concept worth knowing: locked marketing copy
**Simply put:** Some text is not free-form. It is pinned in one file and repeated in agent instructions so every change stays consistent, like a script actors must follow.

**More precisely:** `HomeLetter.astro` is the source of the rendered HTML. `AGENTS.md` and `verify-build-output.ts` are guards: docs for humans/agents, and a post-build check that the HTML still matches the intended links. Changing one without the others creates drift.

## Watch out for
- `llms.txt` still describes full-time work at Sinch. That is separate from the letter and was not part of this change.
- `sinchUrl` remains exported from `site.ts` and tested. Unused-export tools may flag it later if nothing else imports it for links.
- Visual check: home letter should flow product paragraphs into "Reach me" with even spacing and no orphan gap where the job line was.

## Check yourself
1. Why remove the CSS rule for `.home-letter__job` instead of leaving it?
   <details><summary>Answer</summary>Nothing uses that class after the paragraph is gone. Dead CSS adds noise and suggests a job line still exists.</details>

2. What would break if only `HomeLetter.astro` changed and `verify-build-output.ts` stayed the same?
   <details><summary>Answer</summary>The build verify script would still require `href="${sinchUrl}"` on home and fail after a production build.</details>

3. Why keep Sinch in `product.ts` after removing it from the letter?
   <details><summary>Answer</summary>Shipped entries and product labels can still use `sinch` as a product tag. That is unrelated to the home intro copy.</details>

## Explain it back
In two or three sentences, explain what a visitor sees in the home letter now, and which three places had to stay in sync for this removal.
