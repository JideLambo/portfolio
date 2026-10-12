import { describe, expect, it } from 'vitest'
import '@/style/global.css'

import {
  contributionLevelModifier,
  contributionRow,
  fetchContributionCalendar,
  formatContributionDay,
  formatContributionTotal,
  githubLoginFromHref,
  parseContributionCalendar,
} from '@/lib/github-contributions'

const calendarPayload = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          months: [
            { firstDay: '2025-10-01', totalWeeks: 1 },
            { firstDay: '2025-11-01', totalWeeks: 1 },
          ],
          totalContributions: 3047,
          weeks: [
            {
              contributionDays: [
                {
                  contributionCount: 6,
                  contributionLevel: 'SECOND_QUARTILE',
                  date: '2025-10-12',
                  weekday: 0,
                },
                {
                  contributionCount: 0,
                  contributionLevel: 'NONE',
                  date: '2025-10-13',
                  weekday: 1,
                },
              ],
            },
            {
              contributionDays: [
                {
                  contributionCount: 1,
                  contributionLevel: 'FIRST_QUARTILE',
                  date: '2025-11-01',
                  weekday: 6,
                },
              ],
            },
          ],
        },
      },
    },
  },
}

describe('github contributions', () => {
  describe('formatContributionTotal', () => {
    it('names a single contribution', () => {
      expect(formatContributionTotal(1)).toBe('1 contribution in the last year')
    })

    it('groups the rolling-year total', () => {
      expect(formatContributionTotal(3047)).toBe(
        '3,047 contributions in the last year',
      )
    })
  })

  describe('formatContributionDay', () => {
    it('uses the empty-day line', () => {
      expect(formatContributionDay(0, '2025-07-06')).toBe(
        'No contributions on July 6th.',
      )
    })

    it('uses the singular line', () => {
      expect(formatContributionDay(1, '2025-11-01')).toBe(
        '1 contribution on November 1st.',
      )
    })

    it('uses the plural line', () => {
      expect(formatContributionDay(6, '2025-10-12')).toBe(
        '6 contributions on October 12th.',
      )
    })

    it('keeps teen ordinals', () => {
      expect(formatContributionDay(2, '2025-10-11')).toBe(
        '2 contributions on October 11th.',
      )
      expect(formatContributionDay(2, '2025-10-13')).toBe(
        '2 contributions on October 13th.',
      )
      expect(formatContributionDay(2, '2025-10-22')).toBe(
        '2 contributions on October 22nd.',
      )
      expect(formatContributionDay(2, '2025-10-23')).toBe(
        '2 contributions on October 23rd.',
      )
    })

    it('rejects a bad date', () => {
      expect(formatContributionDay(1, '2025-02-31')).toBeNull()
    })
  })

  describe('contributionRow', () => {
    it('puts Sunday on the first row', () => {
      expect(contributionRow(0)).toBe(0)
      expect(contributionRow(7)).toBe(0)
      expect(contributionRow(1)).toBe(1)
      expect(contributionRow(6)).toBe(6)
      expect(contributionRow(8)).toBeNull()
    })
  })

  describe('contributionLevelModifier', () => {
    it('maps levels onto white steps', () => {
      expect(contributionLevelModifier('NONE')).toBe('0')
      expect(contributionLevelModifier('FIRST_QUARTILE')).toBe('1')
      expect(contributionLevelModifier('SECOND_QUARTILE')).toBe('2')
      expect(contributionLevelModifier('THIRD_QUARTILE')).toBe('3')
      expect(contributionLevelModifier('FOURTH_QUARTILE')).toBe('4')
    })
  })

  describe('githubLoginFromHref', () => {
    it('reads the login from the profile URL', () => {
      expect(githubLoginFromHref('https://github.com/JideLambo')).toBe(
        'JideLambo',
      )
      expect(githubLoginFromHref('https://github.com/JideLambo/')).toBe(
        'JideLambo',
      )
    })

    it('ignores other hosts', () => {
      expect(githubLoginFromHref('https://example.com/JideLambo')).toBeNull()
      expect(githubLoginFromHref('not a url')).toBeNull()
    })
  })

  describe('parseContributionCalendar', () => {
    it('reads days, months, and the total', () => {
      const calendar = parseContributionCalendar(calendarPayload)
      expect(calendar).not.toBeNull()
      if (!calendar) {
        return
      }
      expect(calendar.totalLabel).toBe('3,047 contributions in the last year')
      expect(calendar.weekCount).toBe(2)
      expect(calendar.days).toEqual([
        {
          column: 0,
          count: 6,
          date: '2025-10-12',
          label: '6 contributions on October 12th.',
          level: 'SECOND_QUARTILE',
          row: 0,
        },
        {
          column: 0,
          count: 0,
          date: '2025-10-13',
          label: 'No contributions on October 13th.',
          level: 'NONE',
          row: 1,
        },
        {
          column: 1,
          count: 1,
          date: '2025-11-01',
          label: '1 contribution on November 1st.',
          level: 'FIRST_QUARTILE',
          row: 6,
        },
      ])
      expect(calendar.months).toEqual([
        { column: 0, name: 'Oct', span: 1 },
        { column: 1, name: 'Nov', span: 1 },
      ])
    })

    it('derives months when the API weeks do not line up', () => {
      const calendar = parseContributionCalendar({
        months: [{ firstDay: '2025-10-01', totalWeeks: 9 }],
        totalContributions: 0,
        weeks:
          calendarPayload.data.user.contributionsCollection.contributionCalendar
            .weeks,
      })
      expect(calendar?.months.map(month => month.name)).toEqual(['Oct'])
    })

    it('returns null for a broken payload', () => {
      expect(parseContributionCalendar({ data: { user: null } })).toBeNull()
      expect(
        parseContributionCalendar({
          data: {
            user: {
              contributionsCollection: {
                contributionCalendar: {
                  totalContributions: 1,
                  weeks: [
                    {
                      contributionDays: [
                        {
                          contributionCount: 1,
                          contributionLevel: 'GREEN',
                          date: '2025-10-12',
                          weekday: 0,
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        }),
      ).toBeNull()
    })
  })

  describe('fetchContributionCalendar', () => {
    it('skips the request when the token is missing', async () => {
      let called = false
      const calendar = await fetchContributionCalendar(
        'JideLambo',
        {},
        async () => {
          called = true
          return new Response('{}')
        },
      )
      expect(calendar).toBeNull()
      expect(called).toBe(false)
    })

    it('returns null when GitHub fails', async () => {
      const calendar = await fetchContributionCalendar(
        'JideLambo',
        { GITHUB_CONTRIBUTIONS_TOKEN: 'test' },
        async () => new Response('nope', { status: 500 }),
      )
      expect(calendar).toBeNull()
    })

    it('returns the calendar from a successful query', async () => {
      const calendar = await fetchContributionCalendar(
        'JideLambo',
        { GITHUB_CONTRIBUTIONS_TOKEN: 'test' },
        async () =>
          new Response(JSON.stringify(calendarPayload), { status: 200 }),
      )
      expect(calendar?.totalContributions).toBe(3047)
    })

    it('returns null when the request throws', async () => {
      const calendar = await fetchContributionCalendar(
        'JideLambo',
        { GITHUB_CONTRIBUTIONS_TOKEN: 'test' },
        async () => {
          throw new Error('offline')
        },
      )
      expect(calendar).toBeNull()
    })
  })

  describe('level paint', () => {
    it('uses white steps, with an empty day quieter than a full day', () => {
      document.body.innerHTML = `
        <div class="contributions">
          <span class="contributions__day contributions__day--0"></span>
          <span class="contributions__day contributions__day--4"></span>
        </div>
      `
      const none = document.querySelector('.contributions__day--0')
      const most = document.querySelector('.contributions__day--4')
      if (!(none instanceof HTMLElement) || !(most instanceof HTMLElement)) {
        throw new Error('missing contribution squares')
      }
      const noneColor = getComputedStyle(none).backgroundColor
      const mostColor = getComputedStyle(most).backgroundColor
      const alphaOf = (color: string) => {
        const slash = color.match(/\/\s*([\d.]+)%/)
        if (slash?.[1]) {
          return Number(slash[1]) / 100
        }
        const comma = color.match(/rgba?\([^)]+,\s*([\d.]+)\s*\)$/)
        if (comma?.[1]) {
          return Number(comma[1])
        }
        return 1
      }
      expect(noneColor).toMatch(/255/)
      expect(mostColor).toMatch(/255/)
      expect(alphaOf(noneColor)).toBeLessThan(alphaOf(mostColor))
      expect(noneColor).not.toMatch(/0,\s*109,\s*50|48,\s*161,\s*78/)
      expect(mostColor).not.toMatch(/0,\s*109,\s*50|48,\s*161,\s*78/)
    })
  })
})
