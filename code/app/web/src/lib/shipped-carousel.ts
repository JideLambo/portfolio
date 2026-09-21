export const HOMEPAGE_SHIPPED_LIMIT = 5

export const SWIPE_THRESHOLD = 48

export const clampIndex = (index: number, length: number) => {
  if (length <= 0) {
    return 0
  }

  return Math.min(Math.max(index, 0), length - 1)
}

export const indexAfterSwipe = (
  index: number,
  deltaX: number,
  length: number,
) => {
  if (deltaX <= -SWIPE_THRESHOLD) {
    return clampIndex(index + 1, length)
  }
  if (deltaX >= SWIPE_THRESHOLD) {
    return clampIndex(index - 1, length)
  }
  return clampIndex(index, length)
}

export const splitWriteup = (writeup: string) =>
  writeup
    .split(/\n{2,}/)
    .map(part => part.trim())
    .filter(Boolean)
