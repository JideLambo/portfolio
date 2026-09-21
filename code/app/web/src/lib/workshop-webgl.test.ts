import { describe, expect, it } from 'vitest'

import { canUseWorkshopWebgl, workshopSceneMethods } from '@/lib/workshop-webgl'

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
})
