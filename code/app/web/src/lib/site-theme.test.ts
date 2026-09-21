import { describe, expect, it } from 'vitest'

import '@/style/global.css'

describe('site theme', () => {
  it('uses Geist Sans on the document', async () => {
    await document.fonts.ready
    expect(getComputedStyle(document.body).fontFamily).toMatch(/Geist Sans/)
    expect(document.fonts.check('16px "Geist Sans"')).toBe(true)
  })

  it('keeps accent, focus, and selection on ink and white', () => {
    const root = getComputedStyle(document.documentElement)
    expect(root.getPropertyValue('--accent').trim()).not.toMatch(/5ba3ff/i)
    expect(root.getPropertyValue('--focus').trim()).toBe('#fff')
    expect(root.getPropertyValue('--selection').trim()).toMatch(/255 255 255/)
  })
})
