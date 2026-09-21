import { describe, expect, it } from 'vitest'

import { getProductLabel, Product, productValues } from '@/lib/product'

describe('product', () => {
  it('maps every product to its display name', () => {
    expect(getProductLabel(Product.Firstdistro)).toBe('FirstDistro')
    expect(getProductLabel(Product.Uselay)).toBe('UseLay')
    expect(getProductLabel(Product.Gre)).toBe('GRE')
    expect(getProductLabel(Product.Sinch)).toBe('Sinch')
    expect(getProductLabel(Product.Personal)).toBe('Personal')
  })

  it('covers the content-schema enum', () => {
    expect([...productValues].sort()).toEqual([
      'firstdistro',
      'gre',
      'personal',
      'sinch',
      'uselay',
    ])
  })
})
