export type WorkFrameSize = {
  height: number
  width: number
}

export const workFrameSizes = {
  'firstdistro-install-rail/firstdistro-install-prompt.png': {
    height: 1918,
    width: 2272,
  },
  'firstdistro-install-rail/firstdistro-install-rail-empty-ai.png': {
    height: 640,
    width: 2272,
  },
  'firstdistro-install-rail/firstdistro-install-verify.png': {
    height: 1542,
    width: 1792,
  },
  'uselay-conversational-follow-up/uselay-conversational-follow-up-chips.png': {
    height: 960,
    width: 1980,
  },
  'uselay-conversational-follow-up/uselay-conversational-follow-up-compose.png':
    {
      height: 980,
      width: 2040,
    },
  'uselay-conversational-follow-up/uselay-conversational-follow-up-highlight.png':
    {
      height: 980,
      width: 2480,
    },
  'uselay-conversational-follow-up/uselay-conversational-follow-up-question.png':
    {
      height: 1040,
      width: 2100,
    },
} as const satisfies Record<string, WorkFrameSize>

export const getWorkFrameSize = (src: string): WorkFrameSize | undefined => {
  const key = src.replace(/^\/work\//, '')
  return workFrameSizes[key as keyof typeof workFrameSizes]
}

/** Cap CSS width at half intrinsic pixels so retina does not upscale. */
export const getWorkFrameDisplayMaxWidth = (
  width: number,
): number | undefined => (width < 1440 ? Math.round(width / 2) : undefined)
