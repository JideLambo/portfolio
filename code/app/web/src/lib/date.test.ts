import { describe, expect, it } from 'vitest'

import { formatDate, formatRelativeShipped, toISODate } from '@/lib/date'

describe('date', () => {
  const sample = new Date('2026-06-24T15:30:00.000Z')
  const now = new Date('2026-09-21T12:00:00.000Z')

  describe('formatDate', () => {
    it('formats UTC dates for display', () => {
      expect(formatDate(sample)).toBe('June 24, 2026')
    })
  })

  describe('toISODate', () => {
    it('returns the calendar date in ISO form', () => {
      expect(toISODate(sample)).toBe('2026-06-24')
    })
  })

  describe('formatRelativeShipped', () => {
    it('uses just now for the same UTC day', () => {
      expect(
        formatRelativeShipped(new Date('2026-09-21T01:00:00.000Z'), now),
      ).toBe('just now')
    })

    it('uses just now for a future date', () => {
      expect(
        formatRelativeShipped(new Date('2026-09-22T00:00:00.000Z'), now),
      ).toBe('just now')
    })

    it('counts days under a week', () => {
      expect(
        formatRelativeShipped(new Date('2026-09-20T00:00:00.000Z'), now),
      ).toBe('1 day ago')
      expect(
        formatRelativeShipped(new Date('2026-09-16T00:00:00.000Z'), now),
      ).toBe('5 days ago')
    })

    it('counts weeks under a month', () => {
      expect(
        formatRelativeShipped(new Date('2026-09-14T00:00:00.000Z'), now),
      ).toBe('1 week ago')
      expect(
        formatRelativeShipped(new Date('2026-08-24T00:00:00.000Z'), now),
      ).toBe('4 weeks ago')
    })

    it('counts months under a year', () => {
      expect(
        formatRelativeShipped(new Date('2026-08-22T00:00:00.000Z'), now),
      ).toBe('1 month ago')
      expect(
        formatRelativeShipped(new Date('2026-03-21T00:00:00.000Z'), now),
      ).toBe('6 months ago')
    })

    it('counts years when needed', () => {
      expect(
        formatRelativeShipped(new Date('2025-09-21T00:00:00.000Z'), now),
      ).toBe('1 year ago')
      expect(
        formatRelativeShipped(new Date('2023-09-21T00:00:00.000Z'), now),
      ).toBe('3 years ago')
    })
  })
})
