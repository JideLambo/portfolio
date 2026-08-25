import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const outDir = path.resolve('public/work/firstdistro-install-rail')
const baseUrl = process.env.FIRSTDISTRO_BASE_URL ?? 'http://localhost:3000'
const mailpitUrl = process.env.MAILPIT_URL ?? 'http://127.0.0.1:8025'
const stamp = Date.now()
const email = process.env.CAPTURE_EMAIL ?? `portfolio-gre17-${stamp}@mailinator.com`
const password = process.env.CAPTURE_PASSWORD ?? `FdCapture!${stamp}`
const name = 'Portfolio Capture'
const inbox = email.split('@')[0]
const companyName = `Portfolio Demo ${stamp}`
const companyDomain = `portfoliodemo-${stamp}.com`

async function screenshot(page, fileName, selector) {
  const file = path.join(outDir, fileName)
  if (selector) {
    const el = page.locator(selector).first()
    await el.waitFor({ state: 'visible', timeout: 30_000 })
    await el.screenshot({ path: file })
  } else {
    await page.screenshot({ path: file, fullPage: false })
  }
  console.log(`saved ${file}`)
}

function extractVerificationLink(text) {
  const match = text.match(/https?:\/\/[^\s"'<>]+(?:verify|confirm|callback)[^\s"'<>]*/i)
  return match?.[0]?.replace(/[)>.,\]]+$/, '') ?? null
}

async function fetchMailpitVerificationLink() {
  const response = await fetch(`${mailpitUrl}/api/v1/messages`)
  if (!response.ok) {
    throw new Error(`Mailpit unavailable at ${mailpitUrl}: ${response.status}`)
  }

  const payload = await response.json()
  const messages = payload.messages ?? payload ?? []
  for (const message of messages) {
    const detailResponse = await fetch(`${mailpitUrl}/api/v1/message/${message.ID}`)
    if (!detailResponse.ok) continue
    const detail = await detailResponse.json()
    const recipients = detail.To?.map((entry) => entry.Address).join(' ') ?? ''
    if (!recipients.includes(email)) continue
    const body = [detail.Text, detail.HTML].filter(Boolean).join('\n')
    const link = extractVerificationLink(body)
    if (link) return link
  }

  return null
}

async function fetchMailinatorVerificationLink() {
  const listResponse = await fetch(
    `https://mailinator.com/api/v2/domains/public/inboxes/${inbox}`,
  )
  if (!listResponse.ok) {
    throw new Error(`Mailinator inbox lookup failed: ${listResponse.status}`)
  }

  const listPayload = await listResponse.json()
  const msgs = listPayload.msgs ?? []
  for (const msg of msgs) {
    const detailResponse = await fetch(
      `https://mailinator.com/api/v2/domains/public/inboxes/${inbox}/messages/${msg.id}`,
    )
    if (!detailResponse.ok) continue
    const detail = await detailResponse.json()
    const body = [detail.parts?.map((part) => part.body).join('\n'), detail.subject]
      .filter(Boolean)
      .join('\n')
    const link = extractVerificationLink(body)
    if (link) return link
  }

  return null
}

async function completeEmailVerification(page) {
  if (!page.url().includes('/auth/verify-email')) return

  console.log(`waiting for verification email for ${email}`)
  const deadline = Date.now() + 120_000
  let verificationLink = null

  while (Date.now() < deadline && !verificationLink) {
    if (baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1')) {
      verificationLink = await fetchMailpitVerificationLink().catch(() => null)
    } else if (email.endsWith('@mailinator.com')) {
      verificationLink = await fetchMailinatorVerificationLink().catch(() => null)
    }

    if (!verificationLink) {
      await page.waitForTimeout(3000)
    }
  }

  if (!verificationLink) {
    throw new Error(`No verification link found for ${email}`)
  }

  console.log(`opening verification link: ${verificationLink}`)
  await page.goto(verificationLink, { waitUntil: 'networkidle' })
}

async function completeOnboarding(page) {
  if (page.url().includes('complete-profile')) {
    await page.locator('#company-name').fill(companyName)
    await page.locator('#company-domain').fill(companyDomain)
    await page.getByRole('button', { name: /^continue$/i }).click({
      timeout: 15_000,
    })
    await page.waitForURL((url) => !url.pathname.includes('complete-profile'), {
      timeout: 60_000,
    })
  }

  if (page.url().includes('select-plan')) {
    await page.getByRole('button', { name: /free|continue|start/i }).click({
      timeout: 10_000,
    }).catch(() => {})
    await page.waitForTimeout(2000)
  }
}

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
})
const page = await context.newPage()

await mkdir(outDir, { recursive: true })

try {
  console.log(`baseUrl=${baseUrl}`)
  await page.goto(`${baseUrl}/auth/register`, { waitUntil: 'networkidle' })
  await page.locator('#name').fill(name)
  await page.locator('#email').fill(email)
  await page.locator('#password').fill(password)
  await page.getByRole('button', { name: /create account/i }).click()

  await page.waitForURL(
    (url) => !url.pathname.includes('/auth/register'),
    { timeout: 90_000 },
  ).catch(async () => {
    await page.waitForTimeout(5000)
  })

  if (page.url().includes('/auth/register')) {
    const bodyText = await page.locator('body').innerText()
    await page.screenshot({
      path: path.join(outDir, 'capture-register-error.png'),
      fullPage: true,
    })
    throw new Error(`Still on register after submit. URL: ${page.url()}\n${bodyText.slice(0, 800)}`)
  }

  await completeEmailVerification(page)

  if (page.url().includes('/auth/login')) {
    await page.locator('#email').fill(email)
    await page.locator('#password').fill(password)
    await page.getByRole('button', { name: /^sign in$/i }).click()
    await page.waitForURL((url) => !url.pathname.includes('/auth/login'), {
      timeout: 90_000,
    })
  }

  await completeOnboarding(page)

  await page.goto(`${baseUrl}/dashboard`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)

  const installCard = page
    .locator('div')
    .filter({ hasText: /start seeing who needs attention/i })
    .filter({ has: page.getByRole('tab', { name: /^install$/i }) })
    .first()
  await installCard.waitFor({ state: 'visible', timeout: 30_000 })

  await page.getByRole('tab', { name: /^install$/i }).click()
  await installCard.screenshot({ path: path.join(outDir, 'firstdistro-install-rail-empty-ai.png') })
  console.log(`saved ${path.join(outDir, 'firstdistro-install-rail-empty-ai.png')}`)

  await page.getByRole('tab', { name: /^email$/i }).click()
  await installCard.screenshot({ path: path.join(outDir, 'firstdistro-install-email-tab.png') })
  console.log(`saved ${path.join(outDir, 'firstdistro-install-email-tab.png')}`)

  await page.getByRole('tab', { name: /^install$/i }).click()
  await installCard.screenshot({ path: path.join(outDir, 'firstdistro-install-prompt.png') })
  console.log(`saved ${path.join(outDir, 'firstdistro-install-prompt.png')}`)

  await page.goto(`${baseUrl}/dashboard/settings`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)
  await page.getByRole('link', { name: /configure/i }).first().click({
    timeout: 15_000,
  })
  await page.waitForTimeout(1500)

  const settingsInstallCard = page
    .locator('div')
    .filter({ hasText: /^install firstdistro$/i })
    .locator('xpath=ancestor::div[contains(@class,"rounded")][1]')
    .first()

  if (await settingsInstallCard.isVisible().catch(() => false)) {
    await settingsInstallCard.screenshot({
      path: path.join(outDir, 'firstdistro-install-rail-settings.png'),
    })
  } else {
    const fallbackCard = page
      .locator('div')
      .filter({ hasText: /install firstdistro/i })
      .filter({ has: page.getByRole('tab', { name: /^install$/i }) })
      .first()
    await fallbackCard.screenshot({
      path: path.join(outDir, 'firstdistro-install-rail-settings.png'),
    })
  }
  console.log(`saved ${path.join(outDir, 'firstdistro-install-rail-settings.png')}`)

  const liveEventsCard = page
    .locator('div')
    .filter({ hasText: /live events/i })
    .filter({ hasText: /waiting for first event/i })
    .first()
  if (await liveEventsCard.isVisible().catch(() => false)) {
    await liveEventsCard.screenshot({
      path: path.join(outDir, 'firstdistro-install-verify.png'),
    })
  } else {
    await page.goto(`${baseUrl}/dashboard`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1500)
    const verifyCard = page
      .locator('div')
      .filter({ hasText: /start seeing who needs attention/i })
      .filter({ has: page.getByRole('tab', { name: /^install$/i }) })
      .first()
    await verifyCard.screenshot({
      path: path.join(outDir, 'firstdistro-install-verify.png'),
    })
  }
  console.log(`saved ${path.join(outDir, 'firstdistro-install-verify.png')}`)

  console.log(JSON.stringify({ ok: true, email, url: page.url(), baseUrl }))
} catch (error) {
  await page.screenshot({
    path: path.join(outDir, 'capture-error.png'),
    fullPage: true,
  })
  console.error(error)
  process.exit(1)
} finally {
  await browser.close()
}
