import { type CollectionEntry, getCollection } from 'astro:content'

import { HOMEPAGE_SHIPPED_LIMIT } from '@/lib/shipped-carousel'

export type ShippedSlide = {
  example: boolean
  href?: string
  slug: string
  title: string
  writeup: string
}

export const getShippedSlug = (entry: CollectionEntry<'shipped'>) =>
  entry.data.slug

/** Dark-only site: prefer `visualDark` when both paths are set. */
export const getShippedVisual = (
  data: Pick<CollectionEntry<'shipped'>['data'], 'visual' | 'visualDark'>,
) => data.visualDark ?? data.visual

export const getShippedEntries = async () => {
  const entries = await getCollection('shipped')
  const sorted = entries.sort(
    (a, b) => b.data.shippedAt.getTime() - a.data.shippedAt.getTime(),
  )

  const slugs = new Set<string>()
  for (const entry of sorted) {
    const slug = getShippedSlug(entry)
    if (slugs.has(slug)) {
      throw new Error(`Duplicate shipped slug: ${slug}`)
    }
    slugs.add(slug)
  }

  return sorted
}

/** Latest ships for the homepage stacked deck. */
export const getHomepageShipped = async () => {
  const entries = await getShippedEntries()
  return entries.slice(0, HOMEPAGE_SHIPPED_LIMIT)
}
