import { describe, expect, it } from 'vitest'

import {
  clampIndex,
  HOMEPAGE_SHIPPED_LIMIT,
  indexAfterSwipe,
  SWIPE_THRESHOLD,
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

  it('advances after a left swipe past the threshold', () => {
    expect(indexAfterSwipe(0, -SWIPE_THRESHOLD, 2)).toBe(1)
    expect(indexAfterSwipe(0, -(SWIPE_THRESHOLD + 20), 2)).toBe(1)
    expect(indexAfterSwipe(1, -SWIPE_THRESHOLD, 2)).toBe(1)
  })

  it('goes back after a right swipe past the threshold', () => {
    expect(indexAfterSwipe(1, SWIPE_THRESHOLD, 2)).toBe(0)
    expect(indexAfterSwipe(0, SWIPE_THRESHOLD, 2)).toBe(0)
  })

  it('stays put when the swipe is short', () => {
    expect(indexAfterSwipe(0, -(SWIPE_THRESHOLD - 1), 2)).toBe(0)
    expect(indexAfterSwipe(1, SWIPE_THRESHOLD - 1, 2)).toBe(1)
  })

  it('splits a writeup on blank lines', () => {
    expect(splitWriteup('One paragraph.')).toEqual(['One paragraph.'])
    expect(splitWriteup('First.\n\nSecond.')).toEqual(['First.', 'Second.'])
    expect(splitWriteup('  \n\nKept.\n\n  ')).toEqual(['Kept.'])
  })
})
