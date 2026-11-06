# Reel v3: captions, logos, and a smaller phone

## What changed

Re-rendered the jidelambo.com hero reel with clearer captions, product logos in the pills, a smaller caption size, and a smaller iPhone so the UI stays readable.

## Why

The first hero reel used big captions (~108px) that felt shouty once the reel sat above the letter. The phone was scaled so hard that bubbles and the Wonderstand avatar looked cut off. The pills named the product but had no mark, so Wonderstand / FirstDistro / UseLay did not read as brands at a glance. The captions also skipped useful context (iMessage, realtor, account intelligence, in-app feedback).

## How

- Remotion `JideReelWide` (1920×1200) in `mobile-msg-agent/video`.
- Captions rewritten for product context; one lemon word each; font 68px.
- Pills use the real logos from the brand folders, with a short role line (`Wonderstand · for realtors`, etc.).
- Phone scale 2.5; phone cuts get a white top pad so the sender avatar clears the Dynamic Island.
- Loop seam still prints `YMAX=0`.
- Replaced `code/app/web/public/jide-reel/{mp4,webm,poster}` only. No site layout change in this PR.

## Lesson

When a reel becomes a site hero, size the type for reading at phone width first, then scale up. Pair every product name with its mark. Prefer a slightly smaller phone that shows full UI over a big crop that clips the story.
