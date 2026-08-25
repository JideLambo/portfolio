import {
  getWorkFrameDisplayMaxWidth,
  getWorkFrameSize,
} from '@/lib/work-frame-sizes'

export type WorkFrame = {
  alt: string
  callouts?: string[]
  caption?: string
  displayMaxWidth?: number
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
    displayMaxWidth: getWorkFrameDisplayMaxWidth(size.width),
    height: size.height,
    src,
    width: size.width,
    ...extra,
  }
}

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
        frame: frame(
          `${firstdistroBase}/firstdistro-install-rail-empty-ai.png`,
          'FirstDistro install rail with Install tab selected.',
          {
            callouts: [
              'Install, Manual, and Email share one panel.',
              'Install is the default tab on empty state.',
            ],
          },
        ),
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
        frame: frame(
          `${firstdistroBase}/firstdistro-install-prompt.png`,
          'FirstDistro Manual tab with install snippet and pre-filled token.',
          {
            callouts: [
              'Token already filled in the prompt.',
              "Verify steps and hard don'ts in the body.",
            ],
          },
        ),
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
        frame: frame(
          `${firstdistroBase}/firstdistro-install-verify.png`,
          'FirstDistro install panel with live events waiting state.',
          {
            callouts: [
              'Connected only when events prove it.',
              'Diagnostic ladder when smoke is the only signal.',
            ],
          },
        ),
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
      frame(
        `${firstdistroBase}/firstdistro-install-rail-empty-ai.png`,
        'FirstDistro install rail with Install tab selected.',
        {
          caption: 'Empty state. Install is the default story.',
        },
      ),
      frame(
        `${firstdistroBase}/firstdistro-install-prompt.png`,
        'FirstDistro Manual tab with install snippet and pre-filled token.',
        {
          caption: 'Manual tab shows the same contract with token filled.',
        },
      ),
      frame(
        `${firstdistroBase}/firstdistro-install-verify.png`,
        'FirstDistro install panel with live events waiting state.',
        {
          caption: 'Verify from real events, not painted success.',
        },
      ),
    ],
    hero: frame(
      `${firstdistroBase}/firstdistro-install-rail-empty-ai.png`,
      'FirstDistro install rail with Install tab selected.',
    ),
    oneLiner:
      'One install contract for founders, developers, and coding agents.',
    outcome:
      'Shipped in the FirstDistro dashboard and npm package. Install tab is the default empty-state story. Manual and Email remain peers.',
    product: 'FirstDistro',
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
        before: 'Open "tell us more" textarea after submit',
      },
      {
        after: 'Terminal done state; skip always wins',
        before: 'Multi-turn thread in the widget',
      },
      {
        after:
          'Post-submit state machine; fires only when enrichment changes triage',
        before: 'Follow-up on every comment',
      },
    ],
    bet: 'Keep the five-second capture. Optionally deepen signal with one bounded follow-up. Not a ticket form. Not a thread.',
    decisions: [
      {
        context:
          'Not every comment needs AI. Follow-up on everything feels like a chatbot.',
        frame: frame(
          `${uselayBase}/uselay-conversational-follow-up-compose.png`,
          'UseLay comment compose modal with a short message.',
          {
            callouts: [
              'Fast capture stays the default path.',
              'Follow-up fires only after submit, not on every hover.',
            ],
          },
        ),
        rejected: 'Always-on chat drawer. Multi-turn thread after submit.',
        shipped:
          'Post-submit state machine. Follow-up only when enrichment would change triage.',
        title: 'When to follow up',
        why: 'The widget is a capture tool, not a support desk.',
      },
      {
        context: 'Open text after submit kills the speed promise.',
        frame: frame(
          `${uselayBase}/uselay-conversational-follow-up-question.png`,
          'UseLay follow-up question asking whether the link did nothing or opened the wrong page.',
          {
            callouts: [
              'One question, not a thread.',
              'Triage-shaped wording, not open chat.',
            ],
          },
        ),
        rejected: '"Tell us more" textarea. Free-form agent ramble.',
        shipped:
          'One question. Short answer chips or a single tap. Pre-authored paths where possible.',
        title: 'What to ask',
        why: 'Constrained output beats clever generation for bug signal.',
      },
      {
        context:
          'One good question can 10x signal. Three questions turn the widget into Intercom.',
        frame: frame(
          `${uselayBase}/uselay-conversational-follow-up-chips.png`,
          'UseLay follow-up with Skip and Reply controls.',
          {
            callouts: [
              'Skip always wins.',
              'Answer or skip, then the widget closes.',
            ],
          },
        ),
        rejected: 'Thread that keeps going. "Anything else?" loops.',
        shipped:
          'Terminal done state after answer or skip. No inbox thread in the widget.',
        title: 'When to stop',
        why: "Respect the user's original intent: point, comment, leave.",
      },
    ],
    description:
      'How I added one bounded AI step after fast in-app capture without turning the widget into a chat product.',
    flow: [
      frame(
        `${uselayBase}/uselay-conversational-follow-up-highlight.png`,
        'UseLay homepage with comment mode active.',
        {
          caption:
            'Press C, then click the element. Spatial context at click time.',
        },
      ),
      frame(
        `${uselayBase}/uselay-conversational-follow-up-compose.png`,
        'UseLay comment compose modal.',
        {
          caption: 'Five-second capture. Comment, submit.',
        },
      ),
      frame(
        `${uselayBase}/uselay-conversational-follow-up-question.png`,
        'UseLay follow-up question after submit.',
        {
          caption: 'One clarifying question. Skip or reply, then done.',
        },
      ),
    ],
    hero: frame(
      `${uselayBase}/uselay-conversational-follow-up-question.png`,
      'UseLay follow-up question after a fast capture.',
    ),
    oneLiner: 'Five-second capture, then at most one clarifying question.',
    outcome:
      'Shipped in the UseLay widget. Capture stays fast. Teams get richer signal when the follow-up fires.',
    product: 'UseLay',
    productUrl: 'https://uselay.com',
    role: 'I founded UseLay and set the product line: fast in-app capture first, AI second. This case is the follow-up step I added without turning the widget into a support desk or an open chat harness.',
    slug: 'uselay-conversational-follow-up',
    title: 'UseLay conversational follow-up',
    whyNow:
      'End users want a five-second loop: point, comment, leave. Teams need enough signal to triage. Those goals collide the moment you add a form, a thread, or an always-on chat drawer.',
  },
]

export const getWorkCases = (): WorkCase[] => workCases

export const getWorkCase = (slug: string): WorkCase | undefined =>
  workCases.find(workCase => workCase.slug === slug)
