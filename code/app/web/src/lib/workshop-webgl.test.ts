import { describe, expect, it } from 'vitest'

import {
  canOrbitWorkshop,
  canUseWorkshopWebgl,
  isWorkshopTap,
  workshopSceneMethods,
} from '@/lib/workshop-webgl'

describe('workshop webgl', () => {
  it('exposes the locked scene API without Cursor or Grok hooks', () => {
    expect([...workshopSceneMethods]).toEqual([
      'dismiss',
      'dispose',
      'hover',
      'motion',
      'reset',
      'select',
      'toggleLamp',
    ])
    expect(workshopSceneMethods.join(' ')).not.toMatch(/cursor|grok/i)
  })

  it('reports a boolean WebGL gate', () => {
    expect(typeof canUseWorkshopWebgl()).toBe('boolean')
  })

  it('allows orbit on coarse touch pointers, not only mouse', () => {
    const original = window.matchMedia
    window.matchMedia = query => {
      if (query.includes('hover: hover') || query.includes('pointer: fine')) {
        return original('(max-width: 0px)')
      }
      return original(query)
    }
    expect(canOrbitWorkshop()).toBe(true)
    window.matchMedia = original
  })

  it('treats small pointer travel as a tap and longer travel as an orbit drag', () => {
    expect(isWorkshopTap({ x: 10, y: 10 }, { x: 12, y: 11 })).toBe(true)
    expect(isWorkshopTap({ x: 10, y: 10 }, { x: 40, y: 48 })).toBe(false)
  })
})
