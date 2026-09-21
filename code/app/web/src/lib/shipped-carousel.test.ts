import { describe, expect, it } from 'vitest'

import {
  clampIndex,
  HOMEPAGE_SHIPPED_LIMIT,
  nearestIndex,
  slideScrollLeft,
  splitWriteup,
} from '@/lib/shipped-carousel'

describe('shipped carousel math', () => {
  it('caps the homepage at five ships', () => {
    expect(HOMEPAGE_SHIPPED_LIMIT).toBe(5)
  })

  it('clamps an index to the slide range', () => {
    expect(clampIndex(-1, 4)).toBe(0)
    expect(clampIndex(2, 4)).toBe(2)
    expect(clampIndex(9, 4)).toBe(3)
    expect(clampIndex(0, 0)).toBe(0)
  })

  it('picks the nearest snap offset', () => {
    const offsets = [0, 240, 480, 720]

    expect(nearestIndex(0, offsets)).toBe(0)
    expect(nearestIndex(100, offsets)).toBe(0)
    expect(nearestIndex(250, offsets)).toBe(1)
    expect(nearestIndex(700, offsets)).toBe(3)
    expect(nearestIndex(0, [])).toBe(0)
  })

  it('accounts for peek padding when scrolling to a slide', () => {
    expect(slideScrollLeft(16, 16)).toBe(0)
    expect(slideScrollLeft(260, 16)).toBe(244)
  })

  it('splits a writeup on blank lines', () => {
    expect(splitWriteup('One paragraph.')).toEqual(['One paragraph.'])
    expect(splitWriteup('First.\n\nSecond.')).toEqual(['First.', 'Second.'])
    expect(splitWriteup('  \n\nKept.\n\n  ')).toEqual(['Kept.'])
  })
})
