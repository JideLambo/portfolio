const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
  year: 'numeric',
})

const msPerDay = 86_400_000

const utcDay = (date: Date) =>
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())

export const formatDate = (date: Date): string => dateFormatter.format(date)

export const toISODate = (date: Date): string => date.toISOString().slice(0, 10)

/** Compact relative time for Last shipped eyebrows, e.g. `2d ago`. */
export const formatRelativeTime = (date: Date, now = new Date()): string => {
  const days = Math.round((utcDay(now) - utcDay(date)) / msPerDay)

  if (days <= 0) {
    return 'today'
  }

  if (days < 14) {
    return `${days}d ago`
  }

  if (days < 60) {
    return `${Math.round(days / 7)}w ago`
  }

  if (days < 365) {
    return `${Math.round(days / 30)}mo ago`
  }

  return `${Math.round(days / 365)}y ago`
}
