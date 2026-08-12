import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { Resvg } from '@resvg/resvg-js'
import { aboutLead, siteName, siteTagline, siteUrl } from '@shared/lib/site'
import type { APIContext, GetStaticPaths } from 'astro'
import satori from 'satori'
import { html } from 'satori-html'
import { getPostSlug, getPublishedPosts } from '@/lib/post'

type OgCard = { title: string; description: string }

const readFont = (file: string) =>
  readFileSync(join(process.cwd(), 'src/asset/og', file))

const fonts = [
  {
    data: readFont('CourierPrime-Regular.ttf'),
    name: 'Courier Prime',
    style: 'normal' as const,
    weight: 400 as const,
  },
  {
    data: readFont('CourierPrime-Bold.ttf'),
    name: 'Courier Prime',
    style: 'normal' as const,
    weight: 700 as const,
  },
]

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const truncate = (value: string, max = 120) =>
  value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value

const siteHost = new URL(siteUrl).host

const og = {
  accent: '#0066e3',
  ink: '#222a4c',
  muted: '#5f647c',
  paper: '#fbfdff',
} as const

/** Satori ignores CSS radial-gradient tiles; paint paper + dots under transparent content. */
const withPaperGrid = (svg: string) =>
  svg.replace(
    /<svg([^>]*)>/,
    `<svg$1><defs><pattern id="og-dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="${og.ink}" fill-opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="${og.paper}"/><rect width="100%" height="100%" fill="url(#og-dots)"/>`,
  )

export const getStaticPaths = (async () => {
  const posts = await getPublishedPosts()

  return [
    {
      params: { route: 'index' },
      props: { description: siteTagline, title: siteName },
    },
    {
      params: { route: 'about' },
      props: {
        description: aboutLead,
        title: 'About',
      },
    },
    {
      params: { route: 'writing' },
      props: {
        description: 'Essays on product, design, and building.',
        title: 'Writing',
      },
    },
    {
      params: { route: '404' },
      props: {
        description: 'That page could not be found.',
        title: 'Page not found',
      },
    },
    ...posts.map(post => ({
      params: { route: `writing/${getPostSlug(post)}` },
      props: { description: post.data.description, title: post.data.title },
    })),
  ]
}) satisfies GetStaticPaths

const card = ({ title, description }: OgCard) =>
  html(`
    <div style="height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;color:${og.ink};padding:96px 88px;font-family:'Courier Prime';">
      <div style="display:flex;flex-direction:column;flex:1;justify-content:center;">
        <div style="display:flex;font-size:26px;font-weight:400;letter-spacing:8px;text-transform:uppercase;color:${og.muted};margin-bottom:28px;">${escapeHtml(siteHost)}</div>
        <div style="display:flex;width:72px;height:4px;background-color:${og.accent};margin-bottom:28px;"></div>
        <div style="display:flex;font-size:60px;font-weight:700;line-height:1.08;letter-spacing:-2px;color:${og.ink};">${escapeHtml(title)}</div>
        <div style="display:flex;font-size:30px;font-weight:400;color:${og.muted};line-height:1.35;margin-top:26px;">${escapeHtml(truncate(description, 105))}</div>
      </div>
    </div>
  `)

export async function GET({ props }: APIContext) {
  const { title, description } = props as OgCard

  const markup = card({ description, title }) as unknown as Parameters<
    typeof satori
  >[0]

  const svg = withPaperGrid(
    await satori(markup, { fonts, height: 630, width: 1200 }),
  )

  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  })
    .render()
    .asPng()

  return new Response(png as unknown as BodyInit, {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': 'image/png',
    },
  })
}
