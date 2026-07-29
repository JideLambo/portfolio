---
slug: which-customers-need-you-this-week
title: "Which customers need you this week"
description: "A 15-minute Monday triage: health trend, silence, renewal proximity. Then a short list you can actually work."
pubDate: 2026-07-29
tags:
  - DESIGN
  - SOFTWARE_ENGINEERING
  - EFFICIENCY
---

Monday. You have about 120 accounts. Three renewals land this month. Slack is already loud.

You do not need another dashboard tour. You need a short list: who needs you this week, and why.

This is the triage I run while building [FirstDistro](https://firstdistro.com). Fifteen minutes. Three filters. Then you act.

## The Monday problem

Small CS teams do not fail from lack of care. They fail from coverage math.

Everyone "looks fine" until someone cancels. The accounts that need you are often quiet, not angry. Silent churn does not file a ticket. It fades.

Without a ritual, you default to:

- Whoever emailed last
- Whoever your manager mentioned
- Whoever has the biggest logo

That is not triage. That is gravity. Gravity skips the quiet $48K renewal that stopped logging in three weeks ago.

## The 15-minute triage

Open one sorted view if you have it. If not, a spreadsheet export is fine. Run three passes. Stop when you have a working list of 5 to 10 accounts.

### Pass 1: health (5 minutes)

Sort by health trend, not only the latest number. Falling scores beat flat "green" that has not moved in months.

Flag:

- Score down week over week
- At-risk band with material ARR
- Recent drop after a long stable period

You are catching risk, not celebrating colors. A customer health score is an early warning. It is not proof you saved anything.

Write a one-line reason next to each flag: "logins down 40% vs own baseline" beats "looks red."

### Pass 2: silence (5 minutes)

Among the flagged set (and any high-ARR accounts that look green), ask: who went quiet?

Silence signals:

- Champion or admin stopped logging in
- No reply to the last two check-ins
- Support volume fell to zero after a busy period (sometimes good, sometimes ghosting)
- Stakeholders changed and nobody updated the map

Quiet is not healthy by default. It is a question. Leading indicators of churn often show up as absence, not noise.

Add a silence note to the list: "no product use 14 days" or "exec sponsor left."

### Pass 3: renewal proximity (5 minutes)

Sort the combined list by days to renewal (or contract end). Pull forward anyone inside 60 to 90 days who also failed pass 1 or 2.

Renewal proximity turns a maybe into a this-week call. A fading account with renewal in 11 months can wait for a nurture play. The same fade with renewal in 19 days cannot.

Your Monday list is now: risk + silence + clock. Cap it. If you have more than ten, cut by ARR until you can actually work the list.

## Worked example

Imagine a 90-account book. Three renewals in 30 days.

Pass 1 surfaces eight names: four falling scores with ARR over $20K, two brand-new reds that have been red for months (park those unless renewal is near), two mid-score accounts with sharp drops.

Pass 2 drops two of the "chronic red" logos that still have active champions and open expansion threads. It adds one green logo where the admin went dark for 18 days.

Pass 3 pulls three of the remaining set into this week because renewal is inside 45 days. One high-ARR fade with renewal in seven months stays on a nurture list for next Monday.

You leave standup with six calls, not a feeling. That is triage.

## What to say on the first call

You do not need a perfect script. You need a specific opener tied to the signal.

- Health fade: "We noticed weekly active use dropped versus your own baseline. What changed on your side?"
- Silence: "We have not seen the usual admin login pattern. Is ownership still with the same team?"
- Renewal clock: "You renew in three weeks. We want to clear blockers before commercial talks, not during them."

Write the outcome of the call the same day: still at risk, recovered signal, or save in progress. If you protected named ARR, keep a receipt for later prove work.

## What good triage looks like

A useful Monday list has four columns:

1. Account
2. Why it made the list (health / silence / renewal)
3. At-risk ARR (even if directional)
4. Next step + owner (you, for now)

Without column 4, you built a dashboard. With it, you started a save motion.

## Common traps

**Trap:** sorting only by lowest score. A 41 that has been 41 for a year may be less urgent than a 78 that fell from 92 in two weeks on a $90K logo.

**Trap:** ignoring green silence. Happy-looking accounts that stopped showing up are surprise churn waiting to happen.

**Trap:** making a list of 40. If you cannot call them this week, you did not triage. You postponed guilt.

**Trap:** skipping ARR. Time is finite. Weight the list by revenue at risk, not by how interesting the story feels.

**Trap:** celebrating score recovery as the win. If the score bounced and seats still left, you did not prove the save. Prove needs dollars.

**Trap:** waiting for a perfect data room. Messy CRM and partial usage data still beat no list. Directional triage with honest notes beats another week of "we should clean the data first."

## A weekly rhythm that sticks

- **Monday:** Build the list (15 minutes). Share it in standup.
- **Tue to Thu:** Work the next steps. One follow-up note per account.
- **Friday:** Mark moved / still risk / saved (directional). Carry leftovers only if the clock still matters.
- **Month end:** Roll any real saves into a saved revenue line for leadership. Do not invent dollars. Prefer conservative estimates.

Four weeks of this rhythm beats one heroic firefight after a cancel.

## Try this Monday

1. Build the list. Run health → silence → renewal. Cap at 10 accounts. Write at-risk ARR next to each.
2. Assign the next step. For each account, one concrete action before Friday (call, exec note, rollout fix, commercial check). No "monitor."
3. Close the loop on Friday. Mark what moved. For any account where you believe you protected revenue, draft a one-line receipt (signal, action, dollar direction) for your next leadership update.

Do this for four Mondays. The list will get shorter and sharper. The cancels that used to surprise you will show up on the list first.

## The point

You cannot give every account a white-glove week. You can give every week an honest queue. That queue is how small teams stay proactive instead of living in cancel week.

Health shows fade. Silence confirms it. Renewal proximity sets the clock. Then you save, and when it matters, you prove the dollars.

That is how a small team knows which customers need them this week.

This is the loop I ship in [FirstDistro](https://firstdistro.com).
