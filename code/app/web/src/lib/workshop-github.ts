export const workshopGithubRepos = [
  'JideLambo/portfolio',
  'Wonderstand-AI/first-distro',
  'Wonderstand-AI/feedback-layer',
] as const

export const workshopGithubCommitDays = 7

export type WorkshopGithubStats = {
  commitsThisWeek?: number
  openPulls?: number
}

type GithubFetch = typeof fetch

type GithubListResult = {
  complete: boolean
  count: number
}

const githubToken = (): string | undefined => {
  const env = (
    globalThis as { process?: { env?: Record<string, string | undefined> } }
  ).process?.env
  return env?.GITHUB_TOKEN ?? env?.GH_TOKEN
}

const githubHeaders = (): HeadersInit => {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'jidelambo-portfolio',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  const token = githubToken()
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return headers
}

const requestGithub = async (
  url: URL,
  request: GithubFetch,
): Promise<Response | undefined> => {
  try {
    const init: RequestInit = {
      headers: githubHeaders(),
    }
    if (typeof AbortSignal.timeout === 'function') {
      init.signal = AbortSignal.timeout(8000)
    }
    return await request(url, init)
  } catch {
    return undefined
  }
}

const countGithubList = async (
  url: URL,
  request: GithubFetch,
): Promise<GithubListResult | undefined> => {
  let count = 0
  for (let page = 1; page <= 3; page += 1) {
    url.searchParams.set('page', String(page))
    const response = await requestGithub(url, request)
    if (!response?.ok) {
      return page === 1 ? undefined : { complete: false, count }
    }
    const payload: unknown = await response.json()
    if (!Array.isArray(payload)) {
      return page === 1 ? undefined : { complete: false, count }
    }
    count += payload.length
    if (payload.length < 100) {
      return { complete: true, count }
    }
  }
  return { complete: true, count }
}

const sumCompleteCounts = (
  results: Array<GithubListResult | undefined>,
): number | undefined => {
  const counted = results.filter(
    (result): result is GithubListResult => result?.complete === true,
  )
  if (counted.length === 0) {
    return undefined
  }
  return counted.reduce((total, result) => total + result.count, 0)
}

export const formatWorkshopGithubLine = (
  stats: WorkshopGithubStats,
): string | undefined => {
  const parts: string[] = []
  if (stats.openPulls !== undefined) {
    parts.push(
      stats.openPulls === 1 ? '1 open PR' : `${stats.openPulls} open PRs`,
    )
  }
  if (stats.commitsThisWeek !== undefined) {
    parts.push(
      stats.commitsThisWeek === 1
        ? '1 this week'
        : `${stats.commitsThisWeek} this week`,
    )
  }
  return parts.length > 0 ? parts.join(' · ') : undefined
}

export const getWorkshopGithubStats = async (options?: {
  fetch?: GithubFetch
  now?: Date
}): Promise<WorkshopGithubStats> => {
  const request = options?.fetch ?? fetch
  const now = options?.now ?? new Date()
  const since = new Date(
    now.getTime() - workshopGithubCommitDays * 24 * 60 * 60 * 1000,
  ).toISOString()

  const repoStats = await Promise.all(
    workshopGithubRepos.map(async repo => {
      const pullsUrl = new URL(`https://api.github.com/repos/${repo}/pulls`)
      pullsUrl.searchParams.set('per_page', '100')
      pullsUrl.searchParams.set('state', 'open')

      const commitsUrl = new URL(`https://api.github.com/repos/${repo}/commits`)
      commitsUrl.searchParams.set('per_page', '100')
      commitsUrl.searchParams.set('since', since)

      const [openPulls, commitsThisWeek] = await Promise.all([
        countGithubList(pullsUrl, request),
        countGithubList(commitsUrl, request),
      ])
      return { commitsThisWeek, openPulls }
    }),
  )

  const stats: WorkshopGithubStats = {}
  const openPulls = sumCompleteCounts(repoStats.map(item => item.openPulls))
  const commitsThisWeek = sumCompleteCounts(
    repoStats.map(item => item.commitsThisWeek),
  )
  if (openPulls !== undefined) {
    stats.openPulls = openPulls
  }
  if (commitsThisWeek !== undefined) {
    stats.commitsThisWeek = commitsThisWeek
  }
  return stats
}
