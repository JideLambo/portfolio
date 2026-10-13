# Home beliefs replace latest writing

> 2026-10-13 · Replace the Home latest writing block with My beliefs, and update the Wonderstand line in the letter

## In short

The Home page no longer lists a latest post. It shows My beliefs in the same quiet title row as Last shipped. The lines live in a content file, and `/writing` is unchanged. The letter now calls Wonderstand the AI coworker in messages for realtors. The period after that phrase stays.

## What changed

- `code/app/web/src/content/beliefs.ts`: the four groups and their lines, in order.
- `code/app/web/src/content/beliefs.test.ts`: locks that copy and order.
- `code/app/web/src/component/Beliefs.astro`: reads the file and renders the section.
- `code/app/web/src/pages/index.astro`: drops the latest-writing block and renders `Beliefs` after the contribution map.
- `code/app/web/src/style/home.css`: small group headings and a plain list, in full white.
- `code/app/web/src/lib/post.ts` and `post.test.ts`: removes `getHomepageWriting`. `getPublishedPosts` still feeds `/writing`, RSS, and post pages.
- `code/app/web/src/component/HomeLetter.astro`: Wonderstand's "is" sentence now says it is the AI coworker in messages for realtors. The rest of the paragraph is the same.
- `code/app/web/script/verify-build-output.ts`: Home must include My beliefs and the new Wonderstand line, and must not include Latest writing. Apostrophes from the content file are checked as `&#39;` because Astro escapes them in HTML.
- `AGENTS.md` and `code/app/web/public/llms.txt`: the Home description matches the new section. The public Wonderstand product blurb in `llms.txt` is unchanged.

## How it works

1. The build reads `beliefGroups` from `beliefs.ts`.
2. `index.astro` still loads the letter, the workshop, Last shipped (hidden while the flag is off), and the contribution map when the GitHub fetch works.
3. `Beliefs.astro` prints an `h2` inside `.home-section__head`, the same class Last shipped and Contributions use.
4. Each group is an `h3` and a `ul`. The browser shows the section inside `.wrap`, so the mobile column and side padding stay the page gutter.
5. The letter markup is still `Wonderstand` plus `is the AI coworker in messages for realtors.` The following iMessage sentence is untouched.
6. `/writing` and `/writing/{slug}` still call `getPublishedPosts`.

## Why it's built this way

- **Content file:** the repo already keeps Home copy out of the page when it is data (`workshop.ts`, shipped markdown). A TypeScript file fits a fixed list better than a new markdown collection. Hardcoding the lines in the Astro file would hide them from the unit test.
- **Same title class:** `.home-section__head h2` is already the quiet title. A new heading size would drift from Last shipped.
- **Drop the homepage helper:** nothing else called `getHomepageWriting`. Leaving it would fail the unused-export check. The writing routes did not use it.

## Concept worth knowing: a section is not a route

**Simply put:** taking a poster off the front window does not lock the shop door. People can still walk in from the street.

**More precisely:** Latest writing was only a block in `index.astro`. The writing pages, RSS, and nav link are separate. Removing the block does not delete `/writing`.

## Watch out for

- The workshop card and the `/shipped` Wonderstand writeup still say "the realtor OS". Only the Home letter changed.
- Belief lines with an apostrophe appear in the built HTML as `&#39;`. A raw string search of `index.html` will miss them.
- `showHomeLastShipped` is still false, so Last shipped stays off Home. My beliefs still sits under the map.
- The group headings are smaller than the list text on purpose. They use `--text`, which is `#fff`, so they are not a gray label.
- A local build checked the HTML. Browser checks of desktop and mobile are part of the same change, not a substitute for the build script.

## Check yourself

1. Why can `/writing` still list posts after this change?
   <details><summary>Answer</summary>`writing/index.astro` calls `getPublishedPosts`. That function is still in `post.ts`. Only `getHomepageWriting`, which sliced one post for Home, was removed.</details>

2. What would break if the belief lines were pasted into `Beliefs.astro` instead of `beliefs.ts`?
   <details><summary>Answer</summary>The page would still render, but the copy would no longer be a data file the unit test can import. The task asked for a content file when the repo already keeps copy out of the view.</details>

3. Why does the verify script replace `'` with `&#39;` only for belief lines?
   <details><summary>Answer</summary>Those lines are printed from a JavaScript expression, and Astro escapes the apostrophe. The letter's static "I'm Jide" text is not escaped the same way, so the older letter checks still search for a plain apostrophe.</details>

## Explain it back

Without looking at the code, explain in 2-3 sentences what this change does and why it works. If you get stuck, that's the part to reread.
