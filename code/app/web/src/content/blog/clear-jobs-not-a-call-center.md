---
slug: clear-jobs-not-a-call-center
title: "Clear Jobs, not a call center: Why FirstDistro has no agent harness"
description: "Why FirstDistro skipped a general-purpose agent harness and shipped clear AI jobs, customer context, and MCP instead."
pubDate: 2026-06-24
tags:
  - ARCHITECTURE
  - LARGE_LANGUAGE_MODELS
  - DESIGN
---

Hej. When folks talk about "AI agents," they usually mean the smart reply, the account summary, the helpful suggestion inside the product.

But behind that reply is a whole support system: what the AI can see, what it's allowed to do, and how it decides what to do next. That layer has a name: an agent harness.

For [FirstDistro](https://firstdistro.com), the thing I deliberately did not build is an *open, general-purpose* agent harness. A reusable runtime that runs forever, with dozens of tools, modes, planners, and custom orchestration layered on top. Building that kind of harness is like building an entire call center before your first support rep. I skipped it.

Instead I built clear jobs (understand this account, follow a clear goal to keep this customer from churning) and good customer context. Ask FirstDistro still has a harness. It is a fixed one: intent, ground on real data, rewrite, optional handoff. Policy first, LLM second. That is not the same as an open cage that can roam the product until it decides it's done.

## What an agent harness actually is

Think of that AI as the rep.

The harness is everything around them: the customer files they can open, the actions they're allowed to take, what to do when they're stuck, and how they connect to the rest of the product.

It's not the model. It's the desk, the playbook, and the other interactions.

A lot of teams treat that layer like the product itself. They spend months building one giant system that can "do anything." PostHog puts this well: your harness is usually not your moat. The wiring matters, but customers rarely feel impressed by elegant orchestration. They feel impressed when the AI actually understands their customers' accounts. That's the lens I used while building FirstDistro.

## What I did not build

I did not build a generic "run forever until done" agent framework. No one big AI manager looping on its own. No sprawling internal tool catalog where every new capability requires inventing a new tool. No custom agent runtime trying to be the product.

That's the fancy call center version: impressive on paper, expensive to maintain, and easy to confuse with progress.

For FirstDistro, the strategic meaning of that open harness is simpler: it's plumbing, not the moat.

The moat is context (account briefs, health scores, CRM signals, outreach history, experience progress) and product-specific workflows that put that context to work.

## What FirstDistro actually has

Instead of one general agent, FirstDistro mostly has four things working together.

### Discrete AI jobs with clear outcomes

Health recommendations. Briefings. Account narratives. Customer outreach drafts. Each one is a focused job routed through a shared LLM layer, not a free-roaming agent trying to operate the whole product.

### Action playbooks for the moments that matter

Action playbooks are step-by-step plays for health drops, renewal, and expansion signals. Think of them as the "what do I do now?" layer. Not a giant workflow builder. Not a robot manager. Just a clear sequence: what happened, why it matters, who to involve, and what to do next, all grounded in the customer account's real context.

### Purpose-built flows like Ask FirstDistro

A grounded chat experience for customer-success questions: prep me for this account before my meeting, what changed in the last two weeks, who should I contact, what should I say. It helps you think and draft. It is a fixed pipeline, not an open-ended agent loop running until it decides it's done.

### MCP as the external agent interface

FirstDistro's MCP server lets outside agents (Cursor, Claude, Codex, and others) interact with FirstDistro data without me owning their harness. Internal AI handles sharp product jobs. External agents connect through MCP. Neither requires a massive custom runtime.

## What this looks like in real life

Without good context and a playbook: "This customer account looks at risk. Consider reaching out."

With good context: "This customer account is stuck on onboarding, health dropped this week, and Martha is the best contact because she's the most active user. Here's the playbook to help the customer."

FirstDistro's advantage is not that I built the fanciest agent infrastructure. It's that the product already sits on rich customer-success data (product usage, health signals, CRM, outreach, user journey progress) and AI becomes useful when it can actually use that story.

## Glossary

| Term | In FirstDistro terms |
| --- | --- |
| Agent harness (open) | A general-purpose support system: forever loops, sprawling tools, custom runtime as the product |
| Fixed harness | Ask's grounded path: intent, real data, rewrite, handoff |
| Discrete AI jobs | Focused features like health recommendations, email drafts, briefings, playbooks, and narratives |
| Ask FirstDistro | A purpose-built grounded chat flow for customer-success questions, not an open-ended agent loop |
| MCP | FirstDistro's front door for outside agents to read and act on product data |
| Customer context | The full account story: health, CRM, outreach, product usage, and journey progress |
| The moat | Context and workflows |

## Closing

Skip the fanciest robot call center.

Build clear jobs, complete customer files, and a clean front door for outside agents.

That's how AI becomes useful in customer success. Not when it sounds smart, but when it knows what's actually happening inside the customer's account.

That product shape lives in [FirstDistro](https://firstdistro.com).
