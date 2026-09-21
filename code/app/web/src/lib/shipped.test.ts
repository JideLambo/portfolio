import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Product } from '@/lib/product'
import {
  getHomepageShipped,
  getShippedEntries,
  getShippedSlug,
  getShippedVisual,
} from '@/lib/shipped'

const shippedEntry = (
  data: Partial<CollectionEntry<'shipped'>['data']> &
    Pick<CollectionEntry<'shipped'>['data'], 'product' | 'shippedAt' | 'slug'>,
  id = `${data.slug}.md`,
): CollectionEntry<'shipped'> =>
  ({
    collection: 'shipped',
    data: {
      title: 'Test title',
      ...data,
    },
    id,
  }) as CollectionEntry<'shipped'>

describe('shipped', () => {
  beforeEach(() => {
    vi.mocked(getCollection).mockReset()
  })

  describe('getShippedVisual', () => {
    it('prefers the dark visual on this dark-only site', () => {
      expect(
        getShippedVisual({
          visual: '/shipped/light.svg',
          visualDark: '/shipped/dark.svg',
        }),
      ).toBe('/shipped/dark.svg')
    })

    it('falls back to visual when visualDark is missing', () => {
      expect(getShippedVisual({ visual: '/shipped/card.svg' })).toBe(
        '/shipped/card.svg',
      )
    })

    it('returns undefined when neither path is set', () => {
      expect(getShippedVisual({})).toBeUndefined()
    })
  })

  describe('getShippedSlug', () => {
    it('returns the slug from frontmatter', () => {
      const entry = shippedEntry({
        product: Product.Firstdistro,
        shippedAt: new Date(),
        slug: 'example-ship',
      })

      expect(getShippedSlug(entry)).toBe('example-ship')
    })
  })

  describe('getShippedEntries', () => {
    it('sorts newest first and applies the collection lookup', async () => {
      const entries = [
        shippedEntry({
          product: Product.Uselay,
          shippedAt: new Date('2025-01-01T00:00:00.000Z'),
          slug: 'older-ship',
        }),
        shippedEntry({
          product: Product.Firstdistro,
          shippedAt: new Date('2026-09-16T00:00:00.000Z'),
          slug: 'newer-ship',
        }),
      ]

      vi.mocked(getCollection).mockResolvedValue(entries)

      const shipped = await getShippedEntries()

      expect(shipped.map(getShippedSlug)).toEqual(['newer-ship', 'older-ship'])
    })

    it('throws when two cards share a slug', async () => {
      const entries = [
        shippedEntry({
          product: Product.Firstdistro,
          shippedAt: new Date('2026-01-01T00:00:00.000Z'),
          slug: 'duplicate-slug',
        }),
        shippedEntry(
          {
            product: Product.Personal,
            shippedAt: new Date('2026-06-01T00:00:00.000Z'),
            slug: 'duplicate-slug',
          },
          'other-file.md',
        ),
      ]

      vi.mocked(getCollection).mockResolvedValue(entries)

      await expect(getShippedEntries()).rejects.toThrow(
        'Duplicate shipped slug: duplicate-slug',
      )
    })
  })

  describe('getHomepageShipped', () => {
    it('returns up to five ships, newest first', async () => {
      const entries = [1, 2, 3, 4, 5, 6].map(n =>
        shippedEntry({
          product: Product.Firstdistro,
          shippedAt: new Date(`2026-09-0${n}T00:00:00.000Z`),
          slug: `ship-${n}`,
        }),
      )

      vi.mocked(getCollection).mockResolvedValue(entries)

      const homepage = await getHomepageShipped()

      expect(homepage.map(getShippedSlug)).toEqual([
        'ship-6',
        'ship-5',
        'ship-4',
        'ship-3',
        'ship-2',
      ])
    })

    it('returns an empty list when nothing has shipped', async () => {
      vi.mocked(getCollection).mockResolvedValue([])

      expect(await getHomepageShipped()).toEqual([])
    })
  })
})
