import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

import { productValues } from '@/lib/product'
import { tagValues } from '@/lib/tag'

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '*.md' }),
  schema: z.object({
    description: z.string(),
    draft: z.boolean().default(false),
    pubDate: z.coerce.date(),
    slug: z
      .string()
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        'slug must be lowercase kebab-case (e.g. example-post)',
      ),
    tags: z.array(z.enum(tagValues)).default([]),
    title: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
})

const slug = z
  .string()
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    'slug must be lowercase kebab-case (e.g. example-post)',
  )

/**
 * Last shipped: Home shows a stacked deck of the latest ships; `/shipped`
 * is the list from All shipped →. Front card is primary; later cards peek
 * as a compact strip. Cards use a light product UI panel on a dark field,
 * title, 2–4 sentence body, and `View →` when `href` is set. No visible
 * product or example chips; `product` stays in frontmatter for later
 * filtering. Site tokens only (no Slack purple, no chromatic blue).
 * `example: true` marks placeholder ships. Detection allowlist: Linear
 * Done on FIR, LAY, GRE; GitHub merges on first-distro, feedback-layer,
 * portfolio; Grok bots Builder, Product at Sinch, Local Models,
 * iMessage/SMS Agent Build, figma bro; rare: Sales Man.
 */
const shipped = defineCollection({
  loader: glob({ base: './src/content/shipped', pattern: '*.md' }),
  schema: z.object({
    example: z.boolean().default(false),
    href: z.string().url().optional(),
    product: z.enum(productValues),
    shippedAt: z.coerce.date(),
    slug,
    source: z.string().optional(),
    title: z.string(),
    visual: z.string().optional(),
    visualDark: z.string().optional(),
  }),
})

export const collections = { blog, shipped }
