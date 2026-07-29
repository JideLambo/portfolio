import { type CollectionEntry, getCollection } from 'astro:content'

export const getPostSlug = (post: CollectionEntry<'blog'>) => post.data.slug

const homepageLatestCount = 1

export const getPublishedPosts = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  const sorted = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  )

  const slugs = new Set<string>()
  for (const post of sorted) {
    const slug = getPostSlug(post)
    if (slugs.has(slug)) {
      throw new Error(`Duplicate blog slug: ${slug}`)
    }
    slugs.add(slug)
  }

  return sorted
}

/** Latest posts for the homepage. */
export const getHomepageWriting = async () => {
  const published = await getPublishedPosts()
  return { latestPosts: published.slice(0, homepageLatestCount) }
}
