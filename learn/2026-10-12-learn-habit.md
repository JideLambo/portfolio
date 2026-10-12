# Add a learn habit

> 2026-10-12 · Add a learn/ lesson habit for meaningful code changes

## In short

Agents now write a short lesson after a meaningful code change. The lesson is a markdown file in `learn/`, a new line at the top of `learn/INDEX.md`, and the same text under `## Lesson` in the pull request. The folder stays at the repo root so the site build does not publish it.

## What changed

- `.cursor/rules/learn.mdc`: always-on rule. After a meaningful change, write one lesson from `learn/breakdown-template.md`, update the index, and put the same lesson in the pull request. Skip typos, formatting, version bumps, and one-line config.
- `learn/breakdown-template.md`: the section list to copy, including three check-yourself questions with answers in `<details>`.
- `learn/INDEX.md`: one-line intro, then this lesson at the top of the list.
- `learn/2026-10-12-learn-habit.md`: this lesson.
- `AGENTS.md`: a short Learn section that points at the rule, and a row in the quick file index.

`.gitignore` is unchanged. No pattern in it matches `learn/`.

## How it works

1. An agent finishes a change that adds or changes logic.
2. `.cursor/rules/learn.mdc` tells it to write `learn/YYYY-MM-DD-short-name.md`.
3. It adds one summary line at the top of the list in `learn/INDEX.md`.
4. It pastes the same lesson under `## Lesson` in the pull request body.
5. The lesson files are committed with the change.
6. Vercel publishes `code/app/web/dist`. Routes come from `code/app/web/src/pages`. Collections only load `src/content/blog` and `src/content/shipped`. Root `learn/` is not a page.

## Why it's built this way

- **Repo root:** lessons sit next to the app, not inside it. Putting them in `code/app/web/src/pages` or a content collection would publish them. No Astro ignore was added, because the build never reads this folder.
- **Same text in the pull request:** the review can read the lesson in the description.
- **Committed folder:** `learn/` is part of the repo. An ignore rule would drop the lessons on commit.

## Concept worth knowing: always-apply rules

**Simply put:** a sticky note on the fridge is there every time you open the door. An always-apply rule is included in the agent's instructions on every turn, so the habit does not depend on someone remembering to ask.

**More precisely:** `.cursor/rules/learn.mdc` sets `alwaysApply: true`, so Cursor includes it on every turn. The file does not run by itself. The agent still has to write the lesson.

## Watch out for

- Trivial edits should not get a lesson. A typo, a format pass, a version bump, or a one-line config change is a skip.
- If a later change moves `learn/` under `code/app/web/src/pages`, or a content collection glob reaches it, those files can become public pages.
- A local static build wrote `code/app/web/dist` with no learn route, and the lesson text was not in that output. The build config files were not edited here.

## Check yourself

1. Why does `learn/` sit at the repo root instead of inside `code/app/web`?
   <details><summary>Answer</summary>The site publishes `code/app/web/dist`. Pages come from `src/pages`, and content collections only load `blog` and `shipped`. A folder at the repo root is not a route. Moving the lessons into `src/pages` could publish them.</details>

2. What should happen on a one-line config change?
   <details><summary>Answer</summary>No lesson. `.cursor/rules/learn.mdc` skips typos, formatting, version bumps, and one-line config.</details>

3. Why is the lesson pasted into the pull request, not only linked?
   <details><summary>Answer</summary>The rule says the same lesson goes under `## Lesson`, so the review shows the explanation without opening the file.</details>

## Explain it back

Without looking at the code, explain in 2-3 sentences what this change does and why it works. If you get stuck, that's the part to reread.
