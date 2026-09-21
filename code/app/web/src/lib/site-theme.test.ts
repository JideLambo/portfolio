import { describe, expect, it } from 'vitest'

import '@/style/global.css'

describe('site theme', () => {
  it('uses Geist Sans on the document', async () => {
    expect(getComputedStyle(document.body).fontFamily).toMatch(/Geist Sans/)
    await document.fonts.load('400 16px "Geist Sans"')
    await document.fonts.ready
    const loaded = [...document.fonts].some(
      font =>
        font.family.replaceAll(/['"]/g, '') === 'Geist Sans' &&
        font.status === 'loaded',
    )
    expect(loaded).toBe(true)
  })

  it('keeps accent, focus, and selection on ink and white', () => {
    const root = getComputedStyle(document.documentElement)
    expect(root.getPropertyValue('--accent').trim()).not.toMatch(/5ba3ff/i)
    expect(root.getPropertyValue('--focus').trim()).toMatch(/255|fff/i)
    expect(root.getPropertyValue('--selection').trim()).toMatch(/255/)
  })
})
