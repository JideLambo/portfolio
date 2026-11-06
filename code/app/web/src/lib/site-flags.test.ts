import { describe, expect, it } from 'vitest'

import { showHomeLastShipped, showHomeWorkshop } from '@/lib/site-flags'

describe('site flags', () => {
  it('hides Home Last shipped until the flag is true', () => {
    expect(showHomeLastShipped).toBe(false)
  })

  it('keeps the workshop off while the hero reel is the default', () => {
    expect(showHomeWorkshop).toBe(false)
  })
})
