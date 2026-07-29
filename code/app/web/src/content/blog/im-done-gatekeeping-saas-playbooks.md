---
slug: im-done-gatekeeping-saas-playbooks
title: "I'm done gatekeeping SaaS playbooks"
description: "Software is getting easier to build and harder to defend. The scarce part is the thinking. Here is the account-intelligence playbook behind FirstDistro, open enough to rebuild yourself."
pubDate: 2026-06-15
tags:
  - DESIGN
  - SOFTWARE_ENGINEERING
  - EFFICIENCY
---

For years, I've been building SaaS products. Like most founders, I started with a simple assumption: if you solve a valuable problem with software, people will pay for it.

That assumption is still true. What changed is the cost of creating software.

A decade ago, building a useful product required a team. Today a single person or very lean team can build surprisingly good software with AI assistance. This is good news for builders like me.

But when something gets easier to produce, it gets harder to defend. Software is becoming abundant. That does not mean it is worthless. It means the scarce part (knowledge) is moving elsewhere. Or rather, it should.

I first noticed this while building [FirstDistro](https://firstdistro.com), after Wonderstand AI, TokiApp, and UseLay. FirstDistro helps companies understand what is happening inside their customer base. It connects product usage via a lightweight SDK, CRM data, and revenue context to show which customers are healthy, which are quietly slipping, and what to do next, before renewal or churn makes the problem obvious.

At first I thought the product was the dashboard, the MCP, the agent chat, the SDK, or the workflow. Most SaaS founders do. After working the problem for a while, I realized those are only the containers. A motivated team at a target customer can build the same surfaces.

The valuable part was the understanding, not necessarily the building.

How do you identify churn before a customer leaves?

How do you distinguish a healthy account from one that merely looks healthy?

How do you know whether a decline in activity is noise or the start of a trend?

How do you know a customer will renew?

Those questions turned out to be more valuable than any particular feature. Much of that understanding can be taught. If your team wants a basic customer intelligence system with a spreadsheet, an LLM, and a weekend of work, you should be able to.

Below is what we built at FirstDistro, why it matters, and how you could rebuild it in your org without buying another intelligence tool.

## The signal layer

**What we built:** A lightweight SDK that captures who is using your product and what they do, automatically, after login. We derive the company or account from the user's email domain. No manual account tagging.

**Why it matters:** MRR tells you who pays. Usage tells you who stays. I've watched this pattern for years at companies I've worked at: knowing whether customers were actually using the product or features you expected.

**Build your own:** Identify users once. Track 5 to 10 value events (not clicks). Roll up to accounts weekly. Sort by days since last meaningful action.

```
I'm a B2B SaaS founder. Design a minimal usage tracking layer:
- 8 milestone events that indicate real product value
- A weekly account rollup (active users, events, days since last action)
- A Monday report template ranking accounts by risk
Spreadsheet-first.
```

## The signal stack

**What we built:** Every account gets a 0 to 100 health score from four signals: Activity, Engagement, Milestones, Recency. We call it the Signal Stack. Churn isn't an event. It's measurable decay that shows up over 30 to 90 days before cancellation.

**Why it matters:** Here's a story from our own build. We shipped a "zero-config" SDK. Healthy accounts started showing up as at-risk. The bug was that scoring punished anyone who hadn't manually created custom events. The easiest customers to onboard were the ones our model punished hardest. That taught me: the framework matters more than the dashboard. Get the signals wrong and you'll mislabel healthy accounts for months.

**Build your own:** Score each signal 0 to 100. Combine with weights. Band into Healthy (70+), At Risk (40 to 69), Critical (under 40). Flag any account down 10+ points in 30 days.

```
I have weekly account data: events, unique users, days since last activity, milestones hit.
Build a health scoring model:
- Score Activity, Engagement, Milestones, Recency (0-100 each)
- Combine: 40/30/20/10
- Label Healthy / At Risk / Critical
- Flag score drops of 10+ points
```

## Account intelligence

**What we built:** A score isn't enough. Every account gets a brief: what changed, why it matters, who to talk to, what to do next. We classify usage as broad, concentrated, or thin, and assign a motion: push for expansion, push to broaden adoption, monitor, or rescue.

**Why it matters:** We built Champion Risk detection after a painful pattern kept appearing: accounts looked healthy on paper, but only one user was doing all the work. When that person left, the account churned. Revenue still showed up, until it didn't. Usage told a different story. Usage does not equal health. A single power user carrying an account is fragile, not stable.

**Build your own:** For each at-risk account, write one sentence on what changed and one recommended action. If one user is 80%+ of total activity, flag as concentrated or fragile. Name a person to contact.

```
I'm reviewing my customer portfolio every Monday morning.
For each account I have: health score, trend, active users, renewal date, ARR.
Generate:
1. Top 5 accounts needing attention, ranked by urgency
2. One sentence per account: what changed + why it matters + who to contact
3. Rules for broad vs concentrated vs thin usage
4. Motion assignment: expand, broaden, rescue, or monitor
Write like a chief of staff, not a dashboard.
```

## Revenue intelligence

**What we built:** Product signals layered with commercial context: ARR, renewal date, account owner. Renewals are bucketed by urgency. Priority equals renewal proximity times health risk times deal size.

**Why it matters:** A healthy score with renewal in 45 days is a completely different conversation than the same score with renewal in 18 months. Most teams watch MRR in aggregate and miss accounts bleeding usage while still paying.

**Build your own:** One spreadsheet with account, ARR, renewal date, health score. Sort by urgency. Anything renewing in 60 days with health below 70 gets a human touch this week.

```
I have product usage (health scores, trends) and commercial data (ARR, renewal dates).
Build:
1. Renewal buckets: overdue, 30 days, 90 days, later
2. Priority formula combining renewal proximity + health + ARR
3. A weekly "Renewal + Risk" report
4. Two email templates: at-risk renewal vs healthy expansion
Spreadsheet-first.
```

## Experiences (stuck, not lost)

**What we built:** A journey tracker. When a customer starts a journey (say onboarding) but doesn't finish within a threshold, we flag the team (for example via Slack) as stuck, not churned.

**Why it matters:** Most churn doesn't start with cancellation. It starts with confusion. A customer blocked on step two of onboarding isn't disengaged. They're stuck. That's the cheapest save you'll ever make.

**Build your own:** Define 2 to 3 critical user journeys. Mark start and success events. Stuck means started, no success within your threshold (for example one hour). Review the list every morning, and reach out.

```
Design a stuck-customer detection system for my SaaS onboarding flow.
Include:
1. Start/success/failure event definitions
2. Stuck rule (started but no success within X hours)
3. Weekly stuck-account report format
4. Three outreach emails: 24h nudge, 72h help offer, 7d personal reach-out
```

## Ask FirstDistro (grounded AI)

**What we built:** An in-app agent that answers portfolio and account questions using your data, not the open internet. Which accounts need attention? What changed with Acme? Draft an email to re-engage their champion. Prep me for an expansion meeting.

**Why it matters:** Everyone has asked ChatGPT for customer success advice and gotten generic answers. The LLM isn't the product. The grounding layer is. It connects the model to your actual accounts, health scores, renewals, and contacts. We spent months on intent resolution and data grounding so the agent wouldn't invent your portfolio.

**Build your own:** Export a weekly CSV snapshot. Upload to Claude Projects. Ask the same fixed questions every Monday. Iterate the export as you learn what you actually need.

```
Help me build a customer intelligence assistant using Claude Projects.
I will upload weekly exports with: account, health score, trend, active users, renewal date, ARR, last activity.
Design:
1. Ideal export schema
2. A system prompt (chief of staff, not generic chatbot)
3. 10 standard Monday questions
4. Guardrails: never invent data, rank by urgency
```

## You don't need us

The hard part was never the code. It was figuring out which signals matter, how they decay, and how to turn data into a Monday morning decision.

Now you have the playbook. With a spreadsheet, Claude, Cursor or Codex, access to your database, and two hours a week, you can build decent account and revenue intelligence for your business.

If you'd rather not build it yourself, that's fine too. The live version is [FirstDistro](https://firstdistro.com). The point of opening this is that the thinking shouldn't stay locked behind a product wall.

## The next chapter

Building FirstDistro taught me how businesses operate. How customers think. How products succeed and fail. How value is created. I'm not walking away from building. I'm walking away from gatekeeping the thinking behind what we built.

The bottleneck for AI isn't another dashboard. It's access to the next thing beyond code and text or image generation: expertly labeled data to train systems, AI in the physical world, and infrastructure that makes intelligence usable.
