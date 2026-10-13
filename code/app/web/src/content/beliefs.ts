/**
 * Home "My beliefs" copy. The landing page reads this file.
 * Writing routes stay separate.
 */
export type BeliefGroup = {
  id: string
  items: readonly string[]
  title: string
}

export const beliefGroups: readonly BeliefGroup[] = [
  {
    id: 'building',
    items: [
      'Meet people where they already are.',
      'Give value before you ask for anything.',
      'Give people something that works on day one, not a kit to build it.',
      'Start simple. Upgrade when it hurts.',
      'Founders should do the first sales themselves.',
    ],
    title: 'Building',
  },
  {
    id: 'ai',
    items: [
      'Every tool should return a next step, not a bare error.',
      'Every bug becomes a test before the fix merges.',
      "Let agents act. Keep a human on the calls you can't take back.",
      "Download a good local model and keep it on a drive. It's yours forever.",
      'Your personal AI should run on your own machine.',
      'If AI writes your code, you should still be able to explain it.',
    ],
    title: 'AI',
  },
  {
    id: 'work',
    items: [
      "Did you ship? What did you learn? Can we make it better? That's the whole meeting.",
      'Small teams beat large ones.',
      'Eloquence is clarity: people understand you the first time.',
    ],
    title: 'Work',
  },
  {
    id: 'life',
    items: [
      "Be optimistic. It's the only stance that builds anything.",
      'Agency beats permission. Just do it.',
      "When it doesn't work, dust off and go again until it does.",
      "Keep making bets, even after one doesn't land.",
      'We must create, not just consume.',
      'Abundance thinking builds the future.',
    ],
    title: 'Life',
  },
]
