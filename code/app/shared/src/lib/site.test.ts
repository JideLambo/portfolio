import {
  aboutLead,
  firstDistroUrl,
  getSocialLink,
  sinchUrl,
  siteEmail,
  socialLinks,
  useLayUrl,
  xDiscussUrl,
} from '@shared/lib/site'
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

  describe('home letter destinations', () => {
    it('wires product, email, and social hrefs from site.ts', () => {
      expect(firstDistroUrl).toBe('https://firstdistro.com')
      expect(useLayUrl).toBe('https://uselay.com')
      expect(sinchUrl).toBe('https://sinch.com')
      expect(siteEmail).toBe('jide@firstdistro.com')
      expect(getSocialLink('X').href).toBe('https://x.com/JideLambo')
      expect(getSocialLink('GitHub').href).toBe('https://github.com/JideLambo')
    })

    it('keeps About lead from repeating the Home letter or old banking line', () => {
      expect(aboutLead).not.toMatch(/spanned banking/i)
      expect(aboutLead).not.toMatch(/I'm Jide/)
      expect(aboutLead).toMatch(/Wonderstand/)
      expect(aboutLead).toMatch(/GTBank/)
    })
  })
})
