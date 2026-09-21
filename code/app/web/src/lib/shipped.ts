import { type CollectionEntry, getCollection } from 'astro:content'

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

/** Latest card for the homepage. Home is the only v1 surface. */
export const getLatestShipped = async () => {
  const entries = await getShippedEntries()
  return entries[0]
}
