import { socialLinks, xDiscussUrl } from '@shared/lib/site'
import { describe, expect, it } from 'vitest'

describe('site', () => {
  describe('xDiscussUrl', () => {
    it('opens X compose with the post url before the mention', () => {
      const url = xDiscussUrl('https://jidelambo.com/writing/example-post')

      expect(url).toMatch(/^https:\/\/x\.com\/intent\/tweet\?/)
      expect(url).toContain(
        'https%3A%2F%2Fjidelambo.com%2Fwriting%2Fexample-post+%40JideLambo',
      )
    })
  })

  describe('external link metadata', () => {
    it('marks social links as external', () => {
      for (const link of socialLinks) {
        expect(link.external).toBe(true)
      }
    })
  })
})
