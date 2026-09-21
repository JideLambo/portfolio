import { describe, expect, it } from 'vitest'

import { formatDate, formatRelativeTime, toISODate } from '@/lib/date'

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

  describe('formatRelativeTime', () => {
    it('uses compact units for the last shipped eyebrow', () => {
      expect(
        formatRelativeTime(new Date('2026-09-21T00:00:00.000Z'), now),
      ).toBe('today')
      expect(
        formatRelativeTime(new Date('2026-09-20T18:00:00.000Z'), now),
      ).toBe('1d ago')
      expect(
        formatRelativeTime(new Date('2026-09-19T00:00:00.000Z'), now),
      ).toBe('2d ago')
      expect(
        formatRelativeTime(new Date('2026-09-16T00:00:00.000Z'), now),
      ).toBe('5d ago')
    })

    it('steps up to weeks, months, and years', () => {
      expect(
        formatRelativeTime(new Date('2026-08-24T00:00:00.000Z'), now),
      ).toBe('4w ago')
      expect(
        formatRelativeTime(new Date('2026-06-21T00:00:00.000Z'), now),
      ).toBe('3mo ago')
      expect(
        formatRelativeTime(new Date('2024-09-21T00:00:00.000Z'), now),
      ).toBe('2y ago')
    })
  })
})
