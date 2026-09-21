import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  formatWorkshopGithubLine,
  getWorkshopGithubStats,
  workshopGithubRepos,
} from '@/lib/workshop-github'

const jsonResponse = (payload: unknown, status = 200): Response =>
  new Response(JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
    status,
  })

describe('workshop github', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('allowlists portfolio, FirstDistro, and UseLay, not agent products', () => {
    expect([...workshopGithubRepos]).toEqual([
      'JideLambo/portfolio',
      'Wonderstand-AI/first-distro',
      'Wonderstand-AI/feedback-layer',
    ])
  })

  it('formats a tiny local-status line from real counts', () => {
    expect(formatWorkshopGithubLine({})).toBeUndefined()
    expect(formatWorkshopGithubLine({ commitsThisWeek: 0, openPulls: 0 })).toBe(
      '0 open PRs · 0 this week',
    )
    expect(formatWorkshopGithubLine({ openPulls: 1 })).toBe('1 open PR')
    expect(formatWorkshopGithubLine({ commitsThisWeek: 1, openPulls: 4 })).toBe(
      '4 open PRs · 1 this week',
    )
  })

  it('does not mention Cursor or Grok agent counts', () => {
    const line = formatWorkshopGithubLine({
      commitsThisWeek: 8,
      openPulls: 2,
    })
    expect(line).toBe('2 open PRs · 8 this week')
    expect(line).not.toMatch(/cursor|grok|agent/i)
  })

  it('sums complete allowlist fetches and skips failures', async () => {
    const request: typeof fetch = async input => {
      const url = String(input)
      if (url.includes('JideLambo/portfolio/pulls')) {
        return jsonResponse([{ id: 1 }, { id: 2 }])
      }
      if (url.includes('JideLambo/portfolio/commits')) {
        return jsonResponse([{ sha: 'a' }, { sha: 'b' }, { sha: 'c' }])
      }
      return jsonResponse({ message: 'Not Found' }, 404)
    }
    const spy = vi.fn(request)

    await expect(
      getWorkshopGithubStats({
        fetch: spy,
        now: new Date('2026-09-21T12:00:00.000Z'),
      }),
    ).resolves.toEqual({ commitsThisWeek: 3, openPulls: 2 })

    const commitUrl = spy.mock.calls
      .map(([url]) => String(url))
      .find(url => url.includes('/commits'))
    expect(decodeURIComponent(commitUrl ?? '')).toContain(
      'since=2026-09-14T12:00:00.000Z',
    )
  })

  it('falls back to empty stats when every fetch fails', async () => {
    const request: typeof fetch = async () => {
      throw new Error('offline')
    }

    await expect(getWorkshopGithubStats({ fetch: request })).resolves.toEqual(
      {},
    )
  })
})
