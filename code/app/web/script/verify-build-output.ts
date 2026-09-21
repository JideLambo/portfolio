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

const listFiles = (directory: string, suffix: string): string[] => {
  const entries = readdirSync(directory, { withFileTypes: true })
  return entries.flatMap(entry => {
    const entryPath = join(directory, entry.name)
    if (entry.isDirectory()) {
      return listFiles(entryPath, suffix)
    }

    return entry.name.endsWith(suffix) ? [entryPath] : []
  })
}

assertExists('index.html')
assertExists('about/index.html')
assertExists('work/index.html')
assertExists('work/firstdistro-install-rail/index.html')
assertExists('work/uselay-conversational-follow-up/index.html')
assertExists('writing/index.html')
assertExists('og/writing.png')
assertExists('og/work.png')
assertExists('og/work/firstdistro-install-rail.png')
assertExists('og/work/uselay-conversational-follow-up.png')
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
assert(home.includes('Last shipped'), 'Home page should include Last shipped')
assert(
  home.includes('Morning who needs you'),
  'Home page should include the latest shipped card',
)
assert(
  home.includes('Point at what'),
  'Home page carousel should include the UseLay example ship',
)
assert(
  home.includes('Hold, then send times'),
  'Home page carousel should include the GRE example ship',
)
assert(
  home.includes('Silent churn watch'),
  'Home page carousel should include the FirstDistro example ship',
)
assert(
  !home.includes('shipped-card__product'),
  'Home carousel must not render a product pill',
)
assert(home.includes('drag →'), 'Last shipped should show a drag affordance')
assert(
  home.includes('shipped-carousel__tick'),
  'Last shipped should render numbered ticks',
)
assert(
  home.includes('aria-roledescription="carousel"'),
  'Last shipped should render a snap carousel',
)
assert(
  home.includes('https://firstdistro.com'),
  'Last shipped card should link to FirstDistro',
)
assert(
  home.includes('View →'),
  'Last shipped card should use a View text action',
)
assert(
  home.includes('All shipped →'),
  'Last shipped section should use an All shipped text action',
)
assert(home.includes('href="/shipped"'), 'Home page should link to /shipped')
assert(
  !home.includes('href="/projects"'),
  'Home page must not link to /projects',
)
assert(!home.includes('href="/blog"'), 'Home page must not link to /blog')
assertExists('shipped/morning-who-needs-you.svg')
assertExists('shipped/point-at-whats-broken.svg')
assertExists('shipped/hold-then-send-times.svg')
assertExists('shipped/silent-churn-watch.svg')
assertExists('shipped/index.html')
assertExists('og/shipped.png')

const shipped = read('shipped/index.html')
assert(
  !shipped.includes('shipped-card__product'),
  '/shipped must not render a product pill',
)
assert(
  shipped.includes('Morning who needs you'),
  '/shipped should list the latest ship',
)

const cssBundle = listFiles(distPath, '.css')
  .map(path => readFileSync(path, 'utf8'))
  .join('\n')

assert(
  !cssBundle.includes('5ba3ff'),
  'Built CSS must not include chromatic #5ba3ff',
)
assert(
  !cssBundle.includes('#7bb6ff'),
  'Built CSS must not include chromatic #7bb6ff',
)
assert(cssBundle.includes('Geist Sans'), 'Built CSS must wire Geist Sans')
assert(
  !cssBundle.includes('Helvetica Neue'),
  'Built CSS must not keep Helvetica Neue as the UI font',
)

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
  hasRedirect('/reading', '/'),
  'vercel.json should redirect /reading to /',
)
assert(
  !hasRedirect('/work', '/about'),
  'vercel.json must not redirect /work to /about',
)

const sitemap = listFiles(distPath, '.xml')
  .map(path => readFileSync(path, 'utf8'))
  .join('\n')
assert(
  sitemap.includes(`${siteUrl}/writing`),
  'Sitemap should include /writing URLs',
)
assert(sitemap.includes(`${siteUrl}/work`), 'Sitemap should include /work URLs')
assert(
  sitemap.includes(`${siteUrl}/shipped`),
  'Sitemap should include /shipped URLs',
)
assert(
  !sitemap.includes(`${siteUrl}/blog`),
  'Sitemap must not include /blog URLs',
)

process.stdout.write('Build output verified\n')
