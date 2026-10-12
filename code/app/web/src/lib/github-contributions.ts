const contributionQuery = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          months {
            firstDay
            totalWeeks
          }
          weeks {
            contributionDays {
              contributionCount
              contributionLevel
              date
              weekday
            }
          }
        }
      }
    }
  }
`

const levels = [
  'NONE',
  'FIRST_QUARTILE',
  'SECOND_QUARTILE',
  'THIRD_QUARTILE',
  'FOURTH_QUARTILE',
] as const

export type ContributionLevel = (typeof levels)[number]

export type ContributionDayView = {
  column: number
  count: number
  date: string
  label: string
  level: ContributionLevel
  row: number
}

export type ContributionMonthView = {
  column: number
  name: string
  span: number
}

export type ContributionCalendar = {
  days: ContributionDayView[]
  months: ContributionMonthView[]
  totalContributions: number
  totalLabel: string
  weekCount: number
}

const tokenEnv = 'GITHUB_CONTRIBUTIONS_TOKEN'

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const isLevel = (value: string): value is ContributionLevel =>
  (levels as readonly string[]).includes(value)

/** Sunday is row 0, matching the profile graph. GraphQL uses 0 for Sunday and 1 for Monday. */
export const contributionRow = (weekday: number): number | null => {
  if (weekday === 0 || weekday === 7) {
    return 0
  }
  if (weekday >= 1 && weekday <= 6) {
    return weekday
  }
  return null
}

export const contributionLevelModifier = (level: ContributionLevel): string => {
  switch (level) {
    case 'NONE':
      return '0'
    case 'FIRST_QUARTILE':
      return '1'
    case 'SECOND_QUARTILE':
      return '2'
    case 'THIRD_QUARTILE':
      return '3'
    case 'FOURTH_QUARTILE':
      return '4'
    default: {
      const never: never = level
      return never
    }
  }
}

const ordinal = (day: number): string => {
  const lastTwo = day % 100
  if (lastTwo >= 11 && lastTwo <= 13) {
    return `${day}th`
  }
  switch (day % 10) {
    case 1:
      return `${day}st`
    case 2:
      return `${day}nd`
    case 3:
      return `${day}rd`
    default:
      return `${day}th`
  }
}

const monthName = (isoDate: string): string | null => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate)
  if (!match) {
    return null
  }
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const date = new Date(Date.UTC(year, month - 1, day))
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null
  }
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    timeZone: 'UTC',
  }).format(date)
}

const shortMonth = (isoDate: string): string | null => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate)
  if (!match) {
    return null
  }
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const date = new Date(Date.UTC(year, month - 1, day))
  if (date.getUTCMonth() !== month - 1) {
    return null
  }
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    timeZone: 'UTC',
  }).format(date)
}

export const formatContributionTotal = (count: number): string => {
  const noun = count === 1 ? 'contribution' : 'contributions'
  return `${count.toLocaleString('en-US')} ${noun} in the last year`
}

export const formatContributionDay = (
  count: number,
  isoDate: string,
): string | null => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate)
  if (!match) {
    return null
  }
  const month = monthName(isoDate)
  if (!month) {
    return null
  }
  const when = `${month} ${ordinal(Number(match[3]))}`
  if (count === 0) {
    return `No contributions on ${when}.`
  }
  if (count === 1) {
    return `1 contribution on ${when}.`
  }
  return `${count.toLocaleString('en-US')} contributions on ${when}.`
}

export const githubLoginFromHref = (href: string): string | null => {
  let url: URL
  try {
    url = new URL(href)
  } catch {
    return null
  }
  if (url.hostname !== 'github.com') {
    return null
  }
  const login = url.pathname.split('/').filter(Boolean)[0]
  if (!login || !/^[A-Za-z0-9-]+$/.test(login)) {
    return null
  }
  return login
}

const readCalendar = (payload: unknown): Record<string, unknown> | null => {
  if (!isRecord(payload)) {
    return null
  }
  if (Array.isArray(payload.weeks)) {
    return payload
  }
  const data = isRecord(payload.data) ? payload.data : null
  const user = data && isRecord(data.user) ? data.user : null
  const collection =
    user && isRecord(user.contributionsCollection)
      ? user.contributionsCollection
      : null
  const calendar = collection?.contributionCalendar
  return isRecord(calendar) ? calendar : null
}

const monthsFromApi = (
  months: unknown,
  weekCount: number,
): ContributionMonthView[] | null => {
  if (!Array.isArray(months)) {
    return null
  }
  let column = 0
  const views: ContributionMonthView[] = []
  for (const month of months) {
    if (!isRecord(month)) {
      return null
    }
    const totalWeeks = month.totalWeeks
    const firstDay = month.firstDay
    if (typeof totalWeeks !== 'number' || totalWeeks < 1) {
      return null
    }
    if (typeof firstDay !== 'string') {
      return null
    }
    const name = shortMonth(firstDay)
    if (!name) {
      return null
    }
    views.push({ column, name, span: totalWeeks })
    column += totalWeeks
  }
  if (column !== weekCount) {
    return null
  }
  return views
}

const monthsFromDays = (
  days: ContributionDayView[],
  weekCount: number,
): ContributionMonthView[] => {
  const labels: ContributionMonthView[] = []
  let lastName = ''
  for (let column = 0; column < weekCount; column += 1) {
    const weekDays = days.filter(day => day.column === column)
    const marker =
      weekDays.find(day => day.date.endsWith('-01')) ??
      (column === 0 ? weekDays[0] : undefined)
    if (!marker) {
      continue
    }
    const name = shortMonth(marker.date)
    if (!name || name === lastName) {
      continue
    }
    const previous = labels.at(-1)
    if (previous && column - previous.column < 3) {
      continue
    }
    labels.push({ column, name, span: 1 })
    lastName = name
  }
  return labels.map((label, index) => {
    const next = labels[index + 1]
    const span = (next ? next.column : weekCount) - label.column
    return { ...label, span }
  })
}

export const parseContributionCalendar = (
  payload: unknown,
): ContributionCalendar | null => {
  const calendar = readCalendar(payload)
  if (!calendar || !Array.isArray(calendar.weeks)) {
    return null
  }
  const totalContributions = calendar.totalContributions
  if (
    typeof totalContributions !== 'number' ||
    !Number.isInteger(totalContributions) ||
    totalContributions < 0
  ) {
    return null
  }

  const days: ContributionDayView[] = []
  for (let column = 0; column < calendar.weeks.length; column += 1) {
    const week = calendar.weeks[column]
    if (!isRecord(week) || !Array.isArray(week.contributionDays)) {
      return null
    }
    for (const day of week.contributionDays) {
      if (!isRecord(day)) {
        return null
      }
      const date = day.date
      const count = day.contributionCount
      const level = day.contributionLevel
      const weekday = day.weekday
      if (typeof date !== 'string' || typeof level !== 'string') {
        return null
      }
      if (typeof count !== 'number' || !Number.isInteger(count) || count < 0) {
        return null
      }
      if (typeof weekday !== 'number' || !isLevel(level)) {
        return null
      }
      const row = contributionRow(weekday)
      const label = formatContributionDay(count, date)
      if (row === null || !label) {
        return null
      }
      days.push({ column, count, date, label, level, row })
    }
  }

  if (days.length === 0) {
    return null
  }

  const weekCount = calendar.weeks.length
  const months =
    monthsFromApi(calendar.months, weekCount) ?? monthsFromDays(days, weekCount)

  return {
    days,
    months,
    totalContributions,
    totalLabel: formatContributionTotal(totalContributions),
    weekCount,
  }
}

export const fetchContributionCalendar = async (
  login: string,
  env: Record<string, string | undefined> = process.env,
  fetchImpl: typeof fetch = fetch,
): Promise<ContributionCalendar | null> => {
  const token = env[tokenEnv]
  if (!token) {
    return null
  }
  try {
    const response = await fetchImpl('https://api.github.com/graphql', {
      body: JSON.stringify({
        query: contributionQuery,
        variables: { login },
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'jidelambo.com',
      },
      method: 'POST',
      signal: AbortSignal.timeout(10_000),
    })
    if (!response.ok) {
      return null
    }
    const payload: unknown = await response.json()
    return parseContributionCalendar(payload)
  } catch {
    return null
  }
}
