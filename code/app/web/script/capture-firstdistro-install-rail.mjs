import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const outDir = path.resolve('public/work/firstdistro-install-rail')
const baseUrl = process.env.FIRSTDISTRO_BASE_URL ?? 'https://firstdistro.com'
const mailpitUrl = process.env.MAILPIT_URL ?? 'http://127.0.0.1:8025'
const storageStatePath = process.env.FIRSTDISTRO_STORAGE_STATE ?? null
const stamp = Date.now()
const captureEmail = process.env.CAPTURE_EMAIL ?? null
const capturePassword = process.env.CAPTURE_PASSWORD ?? null
const email = captureEmail ?? `portfolio-gre17-${stamp}@mailinator.com`
const password = capturePassword ?? `FdCapture!${stamp}`
const name = 'Portfolio Capture'
const inbox = email.split('@')[0]
const companyName = `Portfolio Demo ${stamp}`
const companyDomain = `portfoliodemo-${stamp}.com`

const viewport = { height: 900, width: 1440 }
const deviceScaleFactor = 2

const outputs = {
  emptyAi: 'firstdistro-install-rail-empty-ai.png',
  prompt: 'firstdistro-install-prompt.png',
  verify: 'firstdistro-install-verify.png',
}

const hideFloatingChrome = async page => {
  await page.evaluate(() => {
    for (const element of document.querySelectorAll(
      'button, a, [role="button"]',
    )) {
      if (element.textContent?.includes('Ask FirstDistro')) {
        element.style.setProperty('display', 'none', 'important')
      }
    }
  })
}

const screenshotInstallTab = async (installSection, fileName) => {
  const file = path.join(outDir, fileName)
  const sectionBox = await installSection.boundingBox()
  const headingBox = await installSection
    .getByRole('heading', { name: /start seeing who needs attention/i })
    .boundingBox()
  const terminalBox = await installSection
    .getByText('npx firstdistro init')
    .boundingBox()

  if (sectionBox && headingBox && terminalBox) {
    await installSection.screenshot({
      clip: {
        height: terminalBox.y + terminalBox.height - headingBox.y + 20,
        width: sectionBox.width,
        x: 0,
        y: headingBox.y - sectionBox.y,
      },
      path: file,
    })
    console.log(`saved ${file}`)
    return
  }

  await installSection.screenshot({ path: file })
  console.log(`saved ${file}`)
}

const dashboardInstallSection = page =>
  page
    .locator('section')
    .filter({
      has: page.getByRole('heading', {
        name: /start seeing who needs attention/i,
      }),
    })
    .first()

const settingsVerifyPanel = page =>
  page
    .getByRole('heading', { name: /^install firstdistro$/i })
    .locator('xpath=ancestor::div[contains(@class,"mx-auto")][1]')

async function screenshotLocator(locator, fileName) {
  const file = path.join(outDir, fileName)
  await locator.waitFor({ state: 'visible', timeout: 30_000 })
  await locator.screenshot({ path: file })
  console.log(`saved ${file}`)
}

function extractVerificationLink(text) {
  const match = text.match(
    /https?:\/\/[^\s"'<>]+(?:verify|confirm|callback)[^\s"'<>]*/i,
  )
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
    const detailResponse = await fetch(
      `${mailpitUrl}/api/v1/message/${message.ID}`,
    )
    if (!detailResponse.ok) continue
    const detail = await detailResponse.json()
    const recipients = detail.To?.map(entry => entry.Address).join(' ') ?? ''
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
    const body = [
      detail.parts?.map(part => part.body).join('\n'),
      detail.subject,
    ]
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
      verificationLink = await fetchMailinatorVerificationLink().catch(
        () => null,
      )
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
    await page.waitForURL(url => !url.pathname.includes('complete-profile'), {
      timeout: 60_000,
    })
  }

  if (page.url().includes('select-plan')) {
    await page
      .getByRole('button', { name: /free|continue|start/i })
      .click({
        timeout: 10_000,
      })
      .catch(() => {})
    await page.waitForTimeout(2000)
  }
}

async function ensureDashboard(page) {
  await page.goto(`${baseUrl}/dashboard`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)
  await dashboardInstallSection(page).waitFor({
    state: 'visible',
    timeout: 30_000,
  })
}

async function captureDashboardFrames(page) {
  const installSection = dashboardInstallSection(page)

  await page.getByRole('tab', { name: /^install$/i }).click()
  await page.waitForTimeout(300)
  await hideFloatingChrome(page)
  await screenshotInstallTab(installSection, outputs.emptyAi)

  await page.getByRole('tab', { name: /^manual$/i }).click()
  await page.waitForTimeout(400)
  await hideFloatingChrome(page)

  const showFullPrompt = page
    .getByRole('button', { name: /show full prompt/i })
    .or(page.getByText(/^show full prompt$/i))
  if (await showFullPrompt.count()) {
    await showFullPrompt.first().click()
    await page.waitForTimeout(400)
  }

  await screenshotLocator(installSection, outputs.prompt)
}

async function captureSettingsVerify(page) {
  await page.goto(`${baseUrl}/dashboard/settings`, {
    waitUntil: 'networkidle',
  })
  await page.waitForTimeout(1500)
  await page
    .getByRole('link', { name: /configure/i })
    .first()
    .click({
      timeout: 15_000,
    })
  await page.waitForTimeout(1500)
  await hideFloatingChrome(page)

  const verifyPanel = settingsVerifyPanel(page)
  await verifyPanel
    .getByText(/live events/i)
    .first()
    .waitFor({ state: 'visible', timeout: 30_000 })
  await screenshotLocator(verifyPanel, outputs.verify)
}

const browser = await chromium.launch({ headless: true })
const context = storageStatePath
  ? await browser.newContext({
      deviceScaleFactor,
      storageState: storageStatePath,
      viewport,
    })
  : await browser.newContext({
      deviceScaleFactor,
      viewport,
    })
const page = await context.newPage()

await mkdir(outDir, { recursive: true })

try {
  console.log(`baseUrl=${baseUrl}`)
  await hideFloatingChrome(page)

  if (storageStatePath) {
    await ensureDashboard(page)
  } else if (captureEmail && capturePassword) {
    await page.goto(`${baseUrl}/auth/login`, { waitUntil: 'networkidle' })
    await page.locator('#email').fill(email)
    await page.locator('#password').fill(password)
    await page
      .locator('form')
      .getByRole('button', { name: /^sign in$/i })
      .click()
    await page.waitForURL(url => !url.pathname.includes('/auth/login'), {
      timeout: 90_000,
    })
    await completeOnboarding(page)
    await ensureDashboard(page)
  } else {
    await page.goto(`${baseUrl}/auth/register`, { waitUntil: 'networkidle' })
    await page.locator('#name').fill(name)
    await page.locator('#email').fill(email)
    await page.locator('#password').fill(password)
    await page.getByRole('button', { name: /create account/i }).click()

    await page
      .waitForURL(url => !url.pathname.includes('/auth/register'), {
        timeout: 90_000,
      })
      .catch(async () => {
        await page.waitForTimeout(5000)
      })

    if (page.url().includes('/auth/register')) {
      const bodyText = await page.locator('body').innerText()
      await page.screenshot({
        fullPage: true,
        path: path.join(outDir, 'capture-register-error.png'),
      })
      throw new Error(
        `Still on register after submit. URL: ${page.url()}\n${bodyText.slice(0, 800)}`,
      )
    }

    await completeEmailVerification(page)

    if (page.url().includes('/auth/login')) {
      await page.locator('#email').fill(email)
      await page.locator('#password').fill(password)
      await page
        .locator('form')
        .getByRole('button', { name: /^sign in$/i })
        .click()
      await page.waitForURL(url => !url.pathname.includes('/auth/login'), {
        timeout: 90_000,
      })
    }

    await completeOnboarding(page)
    await ensureDashboard(page)
  }

  await captureDashboardFrames(page)
  await captureSettingsVerify(page)

  console.log(JSON.stringify({ baseUrl, email, ok: true, url: page.url() }))
} catch (error) {
  await page.screenshot({
    fullPage: true,
    path: path.join(outDir, 'capture-error.png'),
  })
  console.error(error)
  process.exit(1)
} finally {
  await browser.close()
}
