export const HOMEPAGE_SHIPPED_LIMIT = 5

export const clampIndex = (index: number, length: number) => {
  if (length <= 0) {
    return 0
  }

  return Math.min(Math.max(index, 0), length - 1)
}

export const nearestIndex = (
  scrollLeft: number,
  offsets: readonly number[],
) => {
  if (offsets.length === 0) {
    return 0
  }

  let best = 0
  let bestDist = Number.POSITIVE_INFINITY

  for (let i = 0; i < offsets.length; i += 1) {
    const offset = offsets[i]
    if (offset === undefined) {
      continue
    }

    const dist = Math.abs(offset - scrollLeft)
    if (dist < bestDist) {
      best = i
      bestDist = dist
    }
  }

  return best
}

export const splitWriteup = (writeup: string) =>
  writeup
    .split(/\n{2,}/)
    .map(part => part.trim())
    .filter(Boolean)

export const slideScrollLeft = (offsetLeft: number, peek: number) =>
  Math.max(0, offsetLeft - peek)
