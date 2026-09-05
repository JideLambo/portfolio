import { getWorkFrameSize } from '@/lib/work-frame-sizes'

export type WorkFrame = {
  alt: string
  callouts?: string[]
  caption?: string
  height: number
  src: string
  width: number
}

export type WorkDecision = {
  context: string
  frame?: WorkFrame
  rejected: string
  shipped: string
  title: string
  why: string
}

export type WorkCase = {
  beforeAfter: { after: string; before: string }[]
  bet: string
  decisions: WorkDecision[]
  depthLink?: { href: string; label: string }
  description: string
  flow: WorkFrame[]
  hero: WorkFrame
  oneLiner: string
  outcome: string
  product: string
  productContext?: string
  productUrl: string
  role: string
  slug: string
  title: string
  whyNow: string
}

const firstdistroBase = '/work/firstdistro-install-rail'
const uselayBase = '/work/uselay-conversational-follow-up'

const frame = (
  src: string,
  alt: string,
  extra: Omit<WorkFrame, 'alt' | 'height' | 'src' | 'width'> = {},
): WorkFrame => {
  const size = getWorkFrameSize(src)
  if (!size) {
    throw new Error(`Missing frame size for ${src}`)
  }

  return {
    alt,
    height: size.height,
    src,
    width: size.width,
    ...extra,
  }
}

const withFrameMeta = (
  base: WorkFrame,
  extra: Partial<Pick<WorkFrame, 'alt' | 'callouts' | 'caption'>>,
): WorkFrame => ({
  ...base,
  ...extra,
  alt: extra.alt ?? base.alt,
})

const fdEmptyAi = frame(
  `${firstdistroBase}/firstdistro-install-rail-empty-ai.png`,
  'FirstDistro install rail with Install tab selected.',
)
const fdPrompt = frame(
  `${firstdistroBase}/firstdistro-install-prompt.png`,
  'FirstDistro Manual tab with install snippet and pre-filled token.',
)
const fdVerify = frame(
  `${firstdistroBase}/firstdistro-install-verify.png`,
  'FirstDistro install panel with live events waiting state.',
)

const uselayHighlight = frame(
  `${uselayBase}/uselay-conversational-follow-up-highlight.png`,
  'UseLay homepage with comment mode active.',
)
const uselayCompose = frame(
  `${uselayBase}/uselay-conversational-follow-up-compose.png`,
  'UseLay comment compose modal with a short message.',
)
const uselayQuestion = frame(
  `${uselayBase}/uselay-conversational-follow-up-question.png`,
  'UseLay follow-up question asking whether the link did nothing or opened the wrong page.',
)
const uselayChips = frame(
  `${uselayBase}/uselay-conversational-follow-up-chips.png`,
  'UseLay follow-up with Skip and Reply controls.',
)

const workCases: WorkCase[] = [
  {
    beforeAfter: [
      {
        after: 'One rail: Install, Manual, Email',
        before: 'Separate paths for CLI, AI, and manual',
      },
      {
        after: 'Pre-filled publishable token in copy',
        before: '[YOUR_TOKEN] replace rituals in prompts',
      },
      {
        after: 'Live events or honest waiting state',
        before: 'Honor-system Connected or painted success',
      },
    ],
    bet: 'Install is product policy in pasteable form. One rail. Three tabs. Install is the default story (one-click pills plus CLI), but Manual and Email stay peers.',
    decisions: [
      {
        context:
          'Four real entry paths: founder pastes into Cursor, engineer runs CLI, someone copies a snippet, buyer emails a developer.',
        frame: withFrameMeta(fdEmptyAi, {
          callouts: [
            'Install, Manual, and Email share one panel.',
            'Install is the default tab on empty state.',
          ],
        }),
        rejected:
          'Separate onboarding flows per path. A docs page fork for agents.',
        shipped:
          'Mode rail: Install, Manual, Email. Install tab has Cursor, Claude, VS Code, and Copy prompt pills, then CLI. One shared panel owns copy and tokens across empty state, settings, and modal.',
        title: 'One contract, three doors',
        why: 'Different hands, same contract. Agents do not get a second product.',
      },
      {
        context:
          'The prompt is what Cursor or Claude actually sees. If the agent invents unsafe patterns, the prompt failed.',
        frame: withFrameMeta(fdPrompt, {
          callouts: [
            'Token already filled in the prompt.',
            "Verify steps and hard don'ts in the body.",
          ],
        }),
        rejected:
          '[YOUR_TOKEN] replace rituals. Long docs the agent must summarize.',
        shipped:
          "Pre-filled publishable token. Framework detect steps. Identity wiring. Verify checklist. Hard don'ts in the prompt body.",
        title: 'Design for the agent as a user',
        why: 'The agent is a user with no patience for ambiguity.',
      },
      {
        context:
          'Buyers want to know install worked. Fake green states teach the wrong lesson.',
        frame: withFrameMeta(fdVerify, {
          callouts: [
            'Connected only when events prove it.',
            'Diagnostic ladder when smoke is the only signal.',
          ],
        }),
        rejected:
          'Honor-system Connected button. Painted success before real events.',
        shipped:
          'Status from real events or honest "not yet." Live diagnostic ladder when CLI smoke is the only signal.',
        title: 'Honest verification',
        why: 'Trust in setup flows is the same problem as trust in financial products. Say what you know.',
      },
    ],
    depthLink: {
      href: '/writing/ai-prompt-install',
      label: 'AI-prompt install essay',
    },
    description:
      'How I turned SDK setup into one pasteable contract for buyers, developers, and coding agents.',
    flow: [
      withFrameMeta(fdEmptyAi, {
        caption: 'Empty state. Install is the default story.',
      }),
      withFrameMeta(fdPrompt, {
        caption: 'Manual tab shows the same contract with token filled.',
      }),
      withFrameMeta(fdVerify, {
        caption: 'Verify from real events, not painted success.',
      }),
    ],
    hero: fdEmptyAi,
    oneLiner:
      'One install contract for founders, developers, and coding agents.',
    outcome:
      'Shipped in the FirstDistro dashboard and npm package. Install tab is the default empty-state story. Manual and Email remain peers.',
    product: 'FirstDistro',
    productContext:
      'FirstDistro is customer health software for B2B SaaS. It connects product usage, CRM, and revenue signals so teams see which accounts need attention before renewal.',
    productUrl: 'https://firstdistro.com',
    role: 'I founded FirstDistro and own product direction, design, and the shipped install experience. This case is the setup contract I wrote for a world where the installer might be a founder, a developer, or a coding agent in Cursor.',
    slug: 'firstdistro-install-rail',
    title: 'FirstDistro install rail',
    whyNow:
      'FirstDistro only works after the SDK is in the customer codebase. The buyer is often non-technical. The installer is often not in the room. If setup depends on a README or a separate agent docs fork, activation dies quietly.',
  },
  {
    beforeAfter: [
      {
        after: 'At most one follow-up question',
        before: 'Open "tell us more" box after every comment',
      },
      {
        after: 'Done after one answer or skip',
        before: 'Back-and-forth thread in the widget',
      },
      {
        after: 'Follow-up only when the answer would change what the team does',
        before: 'Follow-up on every comment',
      },
    ],
    bet: 'Commenting should stay as fast as pinning on Figma. When the team needs a bit more signal, ask one question. Not a form. Not a chat.',
    decisions: [
      {
        context:
          'Not every comment needs a follow-up. Ask on everything and the tool starts to feel like support chat.',
        frame: withFrameMeta(uselayCompose, {
          callouts: [
            'Leave a comment in a few seconds.',
            'Follow-up comes only after submit.',
          ],
        }),
        rejected: 'Always-on chat drawer. Multi-turn thread after submit.',
        shipped:
          'Ask only after someone submits. Only when the extra answer would change what the team does next.',
        title: 'When to follow up',
        why: 'UseLay is for critique and capture, not a help desk.',
      },
      {
        context:
          'A big empty text box after submit breaks the pace people liked in the first place.',
        frame: withFrameMeta(uselayQuestion, {
          callouts: [
            'One question, not a thread.',
            'Plain wording, not open-ended chat.',
          ],
        }),
        rejected: '"Tell us more" textarea. Long AI-generated ramble.',
        shipped:
          'One short question. Tap an answer or skip. Pre-written options where we can.',
        title: 'What to ask',
        why: 'A tight question beats a clever paragraph for bug reports.',
      },
      {
        context:
          'One good question can sharpen a report. Three questions turn the widget into Intercom.',
        frame: withFrameMeta(uselayChips, {
          callouts: [
            'Skip always wins.',
            'Answer or skip, then the widget closes.',
          ],
        }),
        rejected: 'Thread that keeps going. "Anything else?" loops.',
        shipped:
          'Close after they answer or skip. No conversation history in the widget.',
        title: 'When to stop',
        why: 'People came to point, comment, and leave.',
      },
    ],
    description:
      'How I added one optional follow-up question after fast in-app comments, without turning UseLay into a chat product.',
    flow: [
      withFrameMeta(uselayHighlight, {
        caption: 'Press C, then click what you want to talk about.',
      }),
      withFrameMeta(uselayCompose, {
        alt: 'UseLay comment compose modal.',
        caption: 'Leave a short comment and submit.',
      }),
      withFrameMeta(uselayQuestion, {
        alt: 'UseLay follow-up question after submit.',
        caption: 'One clarifying question. Skip or reply, then done.',
      }),
    ],
    hero: withFrameMeta(uselayQuestion, {
      alt: 'UseLay follow-up question after a fast comment.',
    }),
    oneLiner:
      'Fast comments on live work, then at most one follow-up question.',
    outcome:
      'Shipped in the UseLay widget. Commenting stays quick. Teams get a clearer report when the follow-up runs.',
    product: 'UseLay',
    productContext:
      'UseLay brings Figma-style commenting to live prototypes. Press a key, click the spot, leave a note. I built it when more designers started prototyping in code but lost the pin-and-comment flow that makes critique sessions work. Without it, teams slipped back to static files just to collect feedback.',
    productUrl: 'https://uselay.com',
    role: 'I founded UseLay to fix that gap. This case is a later product decision: one optional follow-up after someone leaves a comment, without turning the tool into a support chat.',
    slug: 'uselay-conversational-follow-up',
    title: 'UseLay conversational follow-up',
    whyNow:
      'Pin-and-comment on live work solved the first problem. The next tension was depth. Sometimes the team needs one more detail before they can act on a note. A long form or a chat thread brings back the friction we were trying to remove.',
  },
]

export const getWorkCases = (): WorkCase[] => workCases

export const getWorkCase = (slug: string): WorkCase | undefined =>
  workCases.find(workCase => workCase.slug === slug)
