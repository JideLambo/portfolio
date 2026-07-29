import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { siteUrl } from '@shared/lib/site'

const dist = new URL('../dist/', import.meta.url)
const distPath = fileURLToPath(dist)
const repoRoot = fileURLToPath(new URL('../../../../', import.meta.url))

const file = (path: string) => new URL(path, dist)

const read = (path: string) => readFileSync(file(path), 'utf8')

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message)
  }
}

const assertExists = (path: string) => {
  assert(existsSync(file(path)), `Expected build output to include ${path}`)
}

const listXmlFiles = (directory: string): string[] => {
  const entries = readdirSync(directory, { withFileTypes: true })
  return entries.flatMap(entry => {
    const entryPath = join(directory, entry.name)
    if (entry.isDirectory()) {
      return listXmlFiles(entryPath)
    }

    return entry.name.endsWith('.xml') ? [entryPath] : []
  })
}

assertExists('index.html')
assertExists('about/index.html')
assertExists('writing/index.html')
assertExists('og/writing.png')
assertExists('rss.xml')
assertExists('sitemap-index.xml')
assertExists('llms.txt')
assertExists('robots.txt')

const llms = read('llms.txt')
assert(llms.includes('Jide Lambo'), 'llms.txt should identify Jide Lambo')
assert(llms.includes(`${siteUrl}/writing`), 'llms.txt should link to writing')
assert(
  llms.includes('https://firstdistro.com'),
  'llms.txt should link FirstDistro',
)
assert(llms.includes('https://uselay.com'), 'llms.txt should link UseLay')

const home = read('index.html')
assert(home.includes('href="/about"'), 'Home page should link to /about')
assert(home.includes('href="/writing"'), 'Home page should link to /writing')
assert(
  !home.includes('href="/projects"'),
  'Home page must not link to /projects',
)
assert(!home.includes('href="/blog"'), 'Home page must not link to /blog')

const about = read('about/index.html')
assert(about.includes('href="/writing"'), 'About page should link to /writing')
assert(!about.includes('href="/blog"'), 'About page must not link to /blog')

const notFound = read('404.html')
assert(!notFound.includes('href="/blog"'), '404 page must not link to /blog')

const rss = read('rss.xml')
assert(!rss.includes('/blog/'), 'RSS must not contain /blog URLs')

const writingDir = join(distPath, 'writing')
const writingSlugs = readdirSync(writingDir, { withFileTypes: true }).filter(
  entry => entry.isDirectory() && entry.name !== 'index',
)
assert(
  writingSlugs.length >= 1,
  'Build should include at least one writing post',
)

type VercelRedirect = {
  source: string
  destination: string
  permanent: boolean
}
type VercelConfig = { redirects?: VercelRedirect[] }

const vercelConfigPath = join(repoRoot, 'vercel.json')
assert(existsSync(vercelConfigPath), 'Expected vercel.json at repo root')
const vercelConfig = JSON.parse(
  readFileSync(vercelConfigPath, 'utf8'),
) as VercelConfig
const redirects = vercelConfig.redirects ?? []
const hasRedirect = (source: string, destination: string) =>
  redirects.some(
    redirect =>
      redirect.source === source && redirect.destination === destination,
  )

assert(
  hasRedirect('/blog', '/writing'),
  'vercel.json should redirect /blog to /writing',
)
assert(
  hasRedirect('/blog/:path*', '/writing/:path*'),
  'vercel.json should redirect /blog/* to /writing/*',
)
assert(
  hasRedirect('/projects', '/about'),
  'vercel.json should redirect /projects to /about',
)
assert(
  hasRedirect('/work', '/about'),
  'vercel.json should redirect /work to /about',
)
assert(
  hasRedirect('/reading', '/'),
  'vercel.json should redirect /reading to /',
)

const sitemap = listXmlFiles(distPath)
  .map(path => readFileSync(path, 'utf8'))
  .join('\n')
assert(
  sitemap.includes(`${siteUrl}/writing`),
  'Sitemap should include /writing URLs',
)
assert(
  !sitemap.includes(`${siteUrl}/blog`),
  'Sitemap must not include /blog URLs',
)

process.stdout.write('Build output verified\n')
