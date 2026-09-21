const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
  year: 'numeric',
})

const MS_PER_DAY = 86_400_000

type RelativeUnit = 'day' | 'week' | 'month' | 'year'

const utcDay = (date: Date) =>
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())

const ago = (count: number, unit: RelativeUnit) => {
  const noun = count === 1 ? unit : `${unit}s`
  return `${count} ${noun} ago`
}

export const formatDate = (date: Date): string => dateFormatter.format(date)

export const toISODate = (date: Date): string => date.toISOString().slice(0, 10)

/** Quiet relative label for Last shipped cards. No calendar dates. */
export const formatRelativeShipped = (date: Date, now = new Date()): string => {
  const days = Math.round((utcDay(now) - utcDay(date)) / MS_PER_DAY)
  if (days < 1) {
    return 'just now'
  }
  if (days < 7) {
    return ago(days, 'day')
  }
  if (days < 30) {
    return ago(Math.floor(days / 7), 'week')
  }
  if (days < 365) {
    return ago(Math.floor(days / 30), 'month')
  }
  return ago(Math.floor(days / 365), 'year')
}
