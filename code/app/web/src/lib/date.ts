const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
  year: 'numeric',
})

const relativeFormatter = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
})

const msPerDay = 86_400_000

const utcDay = (date: Date) =>
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())

export const formatDate = (date: Date): string => dateFormatter.format(date)

export const toISODate = (date: Date): string => date.toISOString().slice(0, 10)

/** Calendar-day relative time in UTC, for Slack-like message headers. */
export const formatRelativeTime = (date: Date, now = new Date()): string => {
  const days = Math.round((utcDay(date) - utcDay(now)) / msPerDay)

  if (Math.abs(days) < 14) {
    return relativeFormatter.format(days, 'day')
  }

  if (Math.abs(days) < 60) {
    return relativeFormatter.format(Math.round(days / 7), 'week')
  }

  if (Math.abs(days) < 365) {
    return relativeFormatter.format(Math.round(days / 30), 'month')
  }

  return relativeFormatter.format(Math.round(days / 365), 'year')
}
