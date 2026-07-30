---
slug: linear-as-the-ops-brain
title: "Linear as the ops brain"
description: "Chat forgets. Agents only remember what the harness forces them to read and write. Here is the Linear loop I use, with Cursor as the worked example."
pubDate: 2026-07-30
tags:
  - ARCHITECTURE
  - LARGE_LANGUAGE_MODELS
  - SOFTWARE_ENGINEERING
---

Every agent session starts almost empty. Without instructions that force memory, plans die in the transcript. The next task re-discovers the same decisions. Linear sits there like a graveyard you never open.

I am assembling a full AI stack for my projects, including [FirstDistro](https://firstdistro.com). The coding side was already there: repo, an agent harness (I use Cursor), rules, skills. What was missing was ops memory. Not customer memory. That lives in the product. Journey memory. Plans, decisions, and notes that should survive across chats.

This is how I closed that gap. The pattern is tool-agnostic. The walkthrough uses Cursor because that is my harness. If you run Claude Code, Windsurf, Codex, or something else, swap the instruction file. Keep the loop.

## The real problem

Agents do not "just remember" because a tool exists. They remember when the **harness forces read and write**.

Linear will not become your brain by sitting in the sidebar. Notion will not either. A vector store will not save you if nothing writes curated facts into it and nothing reads them at session start.

So "Linear as the ops brain" means two things:

1. One Linear home as the system of record
2. Agents required to use it

Without both, you keep dumping wisdom only into chat.

## Wrong fixes

Three traps I almost walked into:

**Dump everything into Notion.** You get a second graveyard. Search gets noisier. Agents still ignore it unless a rule says otherwise.

**Buy vector memory early.** Fancy retrieval over uncurated chat sludge. You wanted durable decisions. You got semantic fog.

**Hope Linear remembers by itself.** It stores what you (or the agent) put there. It does not open itself at the start of the next chat.

Skip those until a simple loop is actually used every session.

## Chat is temporary. Linear is durable.

One picture. Three parts.

<figure class="ops-brain-figure">
  <div class="ops-brain-figure__diagram" role="img" aria-label="Temporary agent session exchanges memory with a durable Linear ops brain. Read from Linear at session start. Write to Linear at session end. A harness instruction forces both.">
    <div class="ops-brain-figure__row">
      <div class="ops-brain-figure__node ops-brain-figure__node--chat">
        <span class="ops-brain-figure__label">Agent session</span>
        <span class="ops-brain-figure__meta">Temporary</span>
      </div>
      <div class="ops-brain-figure__exchange">
        <div class="ops-brain-figure__flows" aria-hidden="true">
          <span class="ops-brain-figure__flow">
            <span class="ops-brain-figure__dir ops-brain-figure__dir--stack">↑ Read at start</span>
            <span class="ops-brain-figure__dir ops-brain-figure__dir--row">← Read at start</span>
          </span>
          <span class="ops-brain-figure__flow">
            <span class="ops-brain-figure__dir ops-brain-figure__dir--stack">↓ Write at end</span>
            <span class="ops-brain-figure__dir ops-brain-figure__dir--row">Write at end →</span>
          </span>
        </div>
        <div class="ops-brain-figure__rule">
          <span class="ops-brain-figure__rule-bridge" aria-hidden="true">
            <span class="ops-brain-figure__rule-arrow"></span>
            <span class="ops-brain-figure__rule-label">forces</span>
          </span>
          <div class="ops-brain-figure__node ops-brain-figure__node--rule">
            <span class="ops-brain-figure__label">Harness instruction</span>
            <span class="ops-brain-figure__meta">Read + write every session</span>
          </div>
        </div>
      </div>
      <div class="ops-brain-figure__node ops-brain-figure__node--linear">
        <span class="ops-brain-figure__label">Linear</span>
        <span class="ops-brain-figure__meta">Ops brain · durable</span>
      </div>
    </div>
  </div>
  <figcaption>Temporary agent session. Durable Linear ops brain. The harness instruction forces the read and write between them. In Cursor that is a rule. Elsewhere it is project instructions, <code>CLAUDE.md</code>, or whatever your harness loads every session.</figcaption>
</figure>

**Durable memory = curated Linear docs.** The chat is temporary. Capture only what should survive.

## Issue vs document

Keep this sharp or the brain gets noisy.

| Kind | Job | Example |
| --- | --- | --- |
| **Issue** | Something to do | "Add harness instruction for Linear memory" |
| **Document** | Something to remember | "Ops brain = Linear, not Notion" |

If it is executable work, open an issue. If it is a settled choice or rolling context, put it in a doc.

## Here's how (copy this)

### 1. One Linear home

Create (or rename) a single project. Mine is **Agentic engineering**.

Do not invent a second wiki. One home for the journey.

Use five surfaces:

| Doc type | Purpose | Example |
| --- | --- | --- |
| **Primer** | Stable vocabulary | What "ops brain" means in this stack |
| **Working memory** | Rolling "what's true now" | Current focus, open questions, last decisions |
| **Decision log** | Durable choices | "Linear = ops brain; Notion no" |
| **Session notes** | Dated captures from big planning chats | `2026-07-30` ops brain decision |
| **Issues** | Executable work | "Wire always-on harness instruction" |

You can start with Working memory + Decision log alone. Add Primer and session notes when the project has enough vocabulary and big chats to justify them.

### 2. Seed the living docs

**Working memory** should answer, in one screen:

- What am I focused on right now?
- What is still open?
- What changed last session?

Keep it short. Rewrite it. It is not an archive.

**Decision log** is append-only entries. Each entry: date, decision, why, and what not to revisit.

Seed yours with whatever you just settled. Mine started as:

> Ops brain = Linear. Not Notion. Journey-scoped (plans and decisions across chats), not customer memory. Skip vector memory until Linear is used every session.

That one paragraph is enough for the next agent to stop reopening the debate.

### 3. Wire the harness (the automatic part)

The product name changes. The job does not: an instruction your agent loads every session, that reads Linear at start and writes durable bits at end.

| Harness | Where the instruction usually lives |
| --- | --- |
| Cursor | Always-apply rule, e.g. `.cursor/rules/agentic-ops-memory.mdc` |
| Claude Code | `CLAUDE.md` or project instructions |
| Other agents | Whatever loads as standing guidance for the repo |

**At session start** (planning, agentic, or strategy work):

1. Read the Linear project (Agentic engineering)
2. Read **Working memory** and the latest **Decision log** entries
3. Treat that as prior context. Do not re-ask settled decisions

**Before ending** a planning or decision chat:

1. Update **Working memory** with what changed
2. Append to the **Decision log** if a decision was made
3. Create or update a **session note** if the chat produced lasting notes
4. Open Linear issues for follow-up work
5. Link the Linear URLs in the final reply

Without this instruction, agents will keep dumping wisdom only into chat. The docs will rot.

<details class="callout">
<summary>Cursor rule stub you can paste</summary>

Same checklist works in other harnesses. Drop the Cursor frontmatter and put the body in `CLAUDE.md` or your project's standing instructions.

```markdown
---
description: Force Linear ops memory on planning and decision work
alwaysApply: true
---

# Agentic ops memory

For planning, strategy, and agentic-engineering work in this workspace:

## Session start

1. Read the Linear project **Agentic engineering**
2. Read **Working memory** and recent **Decision log** entries
3. Treat those as settled context unless the human overrides them

## Session end

Before you finish a planning or decision chat:

1. Update **Working memory**
2. Append to **Decision log** when a decision was made
3. Add a dated session note when the chat produced lasting notes
4. Open or update Linear issues for remaining work
5. Include Linear URLs in the final reply

Capture decisions, open questions, current focus, links to specs/PRs, and do-not-revisit constraints.
Do not dump the full transcript.
```

</details>

### 4. Optional end-of-session nudge

If your harness supports stop hooks or session-end prompts, use one to ask: did you persist decisions to Linear Agentic engineering?

In Cursor that is a `stop` / session-end hook. Elsewhere it might be a checklist line in the same instruction file.

Hooks and checklists **nudge**. They do not reliably dump the whole chat into Linear by themselves. The write still happens through the agent (Linear MCP, CLI, or you by hand). Treat the nudge as a seatbelt, not the brain.

### 5. Run one loop

```text
Start session
  → Agent reads Working memory (+ decisions)
  → You plan / decide / implement

End session
  → Agent updates Working memory
  → If decision → append Decision log
  → If work remains → Linear issue
  → Reply includes Linear links
```

That is the whole ritual. Do it once on a real decision. The next session should quote your decision log instead of interviewing you again.

## How automatic this really is

| Expectation | Reality |
| --- | --- |
| Every chat auto-saved forever | No, and you do not want that (noise) |
| Agent always checks Linear first | Yes, via standing harness instruction |
| Agent always writes back durable bits | Yes, via end-of-task checklist in that instruction |
| Hook forces a perfect write | Soft nudge only, unless you build custom automation |

Skip the back-and-forth. Skip tool-call archaeology. Skip half-thoughts you would not defend tomorrow.

## Close

Without the instruction, you have notes. With it, you have an ops brain.

Chat forgets on purpose. That is fine. Make Linear the place durable bits go, and make the harness open that door every time.
