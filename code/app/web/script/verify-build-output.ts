import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  firstDistroUrl,
  sinchUrl,
  siteEmail,
  siteUrl,
  useLayUrl,
} from '@shared/lib/site'

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
assertExists('workshop/still.webp')
assertExists('workshop/still.png')

const llms = read('llms.txt')
assert(llms.includes('Jide Lambo'), 'llms.txt should identify Jide Lambo')
assert(llms.includes(`${siteUrl}/writing`), 'llms.txt should link to writing')
assert(
  llms.includes('https://firstdistro.com'),
  'llms.txt should link FirstDistro',
)
assert(llms.includes('https://uselay.com'), 'llms.txt should link UseLay')

const home = read('index.html')
assert(!home.includes('href="/about"'), 'Home must not link to /about')
assert(home.includes('href="/writing"'), 'Home page should link to /writing')
assert(
  home.includes("I'm Jide, a product design engineer."),
  'Home should open with the letter',
)
assert(
  home.includes('account intelligence for customer success'),
  'Home letter should describe FirstDistro',
)
assert(
  home.includes('pins comments to the UI'),
  'Home letter should describe UseLay',
)
assert(
  home.includes('Off hours: iMessage desk, local models'),
  'Home letter should keep the compact off-hours line',
)
assert(
  !home.includes('account intelligence for lean CS'),
  'Home letter must not keep the old FirstDistro clause',
)
assert(
  !home.includes('shipping small agent experiments'),
  'Home letter must not keep the old off-hours clause',
)
assert(
  home.includes(`href="${firstDistroUrl}"`),
  'Home letter should link FirstDistro from site.ts',
)
assert(
  home.includes(`href="${useLayUrl}"`),
  'Home letter should link UseLay from site.ts',
)
assert(
  home.includes(`href="${sinchUrl}"`),
  'Home letter should link Sinch from site.ts',
)
assert(
  home.includes(`mailto:${siteEmail}`),
  'Home letter should link email from site.ts',
)
assert(home.includes('https://x.com/JideLambo'), 'Home letter should link X')
assert(
  home.includes('https://github.com/JideLambo'),
  'Home letter should link GitHub',
)
assert(
  !home.includes('id="projects"'),
  'Home must not render a Projects section',
)
assert(!home.includes('/jide.jpg'), 'Home must not include a portrait')
assert(!home.includes('id="career"'), 'Home must not render Career')
assert(
  !home.includes("Hi, I'm Jide"),
  'Home must not keep the old About heading',
)
assert(home.includes('Last shipped'), 'Home page should include Last shipped')
assert(
  home.includes('workshop-stage'),
  'Home should include the workshop stage',
)
assert(
  home.includes('data-workshop-id="local-ai"'),
  'Workshop should include the laptop hotspot',
)
assert(
  home.includes('data-workshop-id="imessage"'),
  'Workshop should include the phone hotspot',
)
assert(
  home.includes('data-workshop-id="firstdistro"'),
  'Workshop should include the mini-PC hotspot',
)
assert(
  home.includes('data-workshop-id="uselay"'),
  'Workshop should include the pinboard hotspot',
)
assert(
  home.includes('workshop-hotspot__mark'),
  'Workshop hotspots should use a small mark, not a glass hit box',
)
assert(
  home.includes('data-label-x="start"') && home.includes('data-label-x="end"'),
  'Workshop hover labels should clamp to the pinboard and mini-PC edges',
)
assert(
  home.includes('data-lamp="on"'),
  'Workshop lamp should start on, matching the lit still',
)
assert(
  !home.includes('workshop-hud'),
  'Workshop must not render a floating laptop HUD',
)
assert(
  !home.includes('workshop-card__signal'),
  'Workshop must not render a Ready or GitHub-count strip on cards',
)
assert(!home.includes('open PRs'), 'Workshop must not show open PR counts')
assert(
  home.includes('workshop-stage__canvas'),
  'Workshop should include a lazy WebGL canvas over the still',
)
assert(
  !home.includes('Cursor cloud') && !home.includes('Grok Bot'),
  'Workshop must not show parked Cursor or Grok agent counts',
)
assert(
  home.includes('/workshop/still.webp') || home.includes('/workshop/still.png'),
  'Workshop should load the art-direction still',
)
assert(
  home.indexOf("I'm Jide, a product design engineer.") <
    home.indexOf('workshop-stage'),
  'Home should be letter, then workshop',
)
assert(
  home.indexOf('workshop-stage') < home.indexOf('Last shipped'),
  'Home should be workshop, then Last shipped',
)
assert(
  home.indexOf("I'm Jide, a product design engineer.") <
    home.indexOf('Last shipped'),
  'Home should be letter, then Last shipped',
)
assert(
  home.includes('Morning who needs you'),
  'Home page should include the latest shipped card',
)
assert(
  home.includes('I shipped a morning Slack briefing automation'),
  'Home page should include the locked Automations writeup',
)
assert(
  home.includes('iMessage agent for your business'),
  'Home page should include the GRE iMessage ship',
)
assert(
  home.includes('before I bet on one industry'),
  'Home page should include the locked GRE writeup',
)
assert(
  home.includes('Local AI on your machine'),
  'Home page should include the local AI ship',
)
assert(
  home.includes('with Ollama'),
  'Home page should include the locked local AI writeup',
)
assert(
  !home.includes('Point at what'),
  'Home carousel should not include placeholder example ships',
)
assert(
  !home.includes('Hold, then send times'),
  'Home carousel should not include placeholder example ships',
)
assert(
  !home.includes('Silent churn watch'),
  'Home carousel should not include placeholder example ships',
)
assert(
  !home.includes('shipped-card__product'),
  'Home carousel must not render a product pill',
)
assert(
  !home.includes('shipped-carousel__tick'),
  'Last shipped must not render progress ticks',
)
assert(!home.includes('drag →'), 'Last shipped must not render a drag label')
assert(
  home.includes('Previous ship'),
  'Last shipped should keep prev/next arrows',
)
assert(
  home.includes('aria-roledescription="carousel"'),
  'Last shipped should render a stacked carousel',
)
assert(
  home.includes('shipped-carousel__deck'),
  'Last shipped should render a stacked deck',
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
assert(
  home.includes('shipped-card__when'),
  'Last shipped cards should show a relative timestamp',
)
assert(
  /just now|\d+ days? ago|\d+ weeks? ago|\d+ months? ago|\d+ years? ago/.test(
    home,
  ),
  'Last shipped timestamp must be relative, not a calendar date',
)
assert(
  home.includes('shipped-mini--slack'),
  'Morning ship should render a Slack briefing panel',
)
assert(
  home.includes('Helios Cloud'),
  'Slack briefing should name a single account',
)
assert(
  home.includes('shipped-mini--imessage'),
  'GRE ship should render an iMessage thread panel',
)
assert(
  home.includes('Any openings Friday?'),
  'iMessage panel should include a customer bubble',
)
assert(
  home.includes('shipped-mini--local'),
  'Local AI ship should render a local-status panel',
)
assert(home.includes('qwen2.5:7b'), 'Local-status card should name the model')
assert(
  home.includes('book / reply'),
  'Local-status card should show a tool line',
)
assert(
  !home.includes('morning-who-needs-you.svg'),
  'Last shipped must not use abstract SVG glyphs',
)
assert(
  !home.includes('imessage-agent-for-your-business.svg'),
  'Last shipped must not use abstract SVG glyphs',
)
assert(
  !home.includes('local-ai-on-your-machine.svg'),
  'Last shipped must not use abstract SVG glyphs',
)
assertExists('shipped/index.html')
assertExists('og/shipped.png')

const shipped = read('shipped/index.html')
assert(
  !shipped.includes('shipped-card__product'),
  '/shipped must not render a product pill',
)
assert(
  shipped.includes('Morning who needs you'),
  '/shipped should list the Automations ship',
)
assert(
  shipped.includes('iMessage agent for your business'),
  '/shipped should list the GRE iMessage ship',
)
assert(
  shipped.includes('Local AI on your machine'),
  '/shipped should list the local AI ship',
)
assert(
  shipped.includes('shipped-card__when'),
  '/shipped cards should show a relative timestamp',
)
assert(
  shipped.includes('shipped-mini--slack'),
  '/shipped should render the Slack briefing panel',
)
assert(
  shipped.includes('shipped-mini--imessage'),
  '/shipped should render the iMessage thread panel',
)
assert(
  shipped.includes('shipped-mini--local'),
  '/shipped should render the local-status panel',
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
assert(!cssBundle.includes('#9a9aa2'), 'Built CSS must not use muted gray type')
assert(
  cssBundle.includes('--text:#fff') || cssBundle.includes('--text: #fff'),
  'Built CSS must set body text to full white',
)
assert(
  cssBundle.includes('--text-muted:#fff') ||
    cssBundle.includes('--text-muted: #fff'),
  'Built CSS must set muted text to full white',
)
assert(cssBundle.includes('Geist Sans'), 'Built CSS must wire Geist Sans')
assert(
  !cssBundle.includes('Helvetica Neue'),
  'Built CSS must not keep Helvetica Neue as the UI font',
)
assert(
  cssBundle.includes('.home-letter') && cssBundle.includes('max-width:22rem'),
  'Home letter must keep a compact left-aligned reading measure',
)
assert(
  cssBundle.includes('font-size:1.375rem'),
  'Home letter opener should be editorial, not billboard',
)
assert(
  cssBundle.includes('font-size:1.125rem') &&
    cssBundle.includes('line-height:1.28'),
  'Home letter opener should tighten on small screens',
)
assert(
  (cssBundle.includes('.home-letter p') &&
    cssBundle.includes('font-size:.875rem')) ||
    cssBundle.includes('font-size:0.875rem'),
  'Home letter body should tighten on small screens',
)
assert(
  cssBundle.includes('.home-section__head h2') &&
    (cssBundle.includes('font-size:.95rem') ||
      cssBundle.includes('font-size:0.95rem')) &&
    cssBundle.includes('font-weight:500'),
  'Home section titles should match Last shipped type',
)
assert(
  !cssBundle.includes('.home-section__head h2{font-size:var(--step-2)'),
  'Home section titles must not use the large heading step',
)
assert(
  cssBundle.includes('.workshop-stage') &&
    cssBundle.includes('prefers-reduced-motion'),
  'Workshop must sit on Home and honor reduced motion',
)
assert(
  !cssBundle.includes('home-intro__photo'),
  'Built CSS must not keep the Home portrait layout',
)

const aboutMissing = !existsSync(file('about/index.html'))
assert(aboutMissing, 'About page must not be built')

const notFound = read('404.html')
assert(!notFound.includes('href="/blog"'), '404 page must not link to /blog')
assert(!notFound.includes('href="/about"'), '404 page must not link to /about')

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
assert(hasRedirect('/about', '/'), 'vercel.json should redirect /about to /')
assert(
  hasRedirect('/projects', '/'),
  'vercel.json should redirect /projects to /',
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
assert(
  !sitemap.includes(`${siteUrl}/about`),
  'Sitemap must not include /about URLs',
)

process.stdout.write('Build output verified\n')
