import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const outDir = path.resolve('public/work/uselay-conversational-follow-up')
const baseUrl = process.env.USELAY_BASE_URL ?? 'https://uselay.com'
const headed = process.env.USELAY_HEADED === '1'
const magicLinkOverride = process.env.USELAY_MAGIC_LINK ?? null

const fullFrames = {
  chips: '_full-chips.png',
  compose: '_full-compose.png',
  done: '_full-done.png',
  highlight: '_full-highlight.png',
  question: '_full-question.png',
}

async function screenshot(page, fileName) {
  const file = path.join(outDir, fileName)
  await page.screenshot({ fullPage: true, path: file })
  console.log(`saved ${file}`)
}

async function waitForHomepage(page) {
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
  await page.waitForLoadState('networkidle').catch(() => {})
  await page.waitForTimeout(1500)
}

async function applyMagicLink(page) {
  if (!magicLinkOverride) return
  console.log('opening USELAY_MAGIC_LINK')
  await page.goto(magicLinkOverride, {
    timeout: 90_000,
    waitUntil: 'domcontentloaded',
  })
  await page.waitForURL(url => url.hostname.includes('uselay.com'), {
    timeout: 90_000,
  })
}

async function ensureCaptureSurface(page) {
  await waitForHomepage(page)

  const onLogin = page.url().includes('/login')
  if (onLogin && !headed && !magicLinkOverride) {
    throw new Error(
      'On /login. Set USELAY_MAGIC_LINK, USELAY_HEADED=1, or sign in via persistent profile.',
    )
  }

  if (onLogin && headed) {
    const deadline = Date.now() + 120_000
    while (Date.now() < deadline) {
      if (!page.url().includes('/login')) break
      await page.waitForTimeout(2000)
    }
    if (page.url().includes('/login')) {
      throw new Error(
        'Still on /login after 120s. Sign in in the browser window.',
      )
    }
    await waitForHomepage(page)
  }

  await page.waitForSelector('main, [data-fl-ignore], body', {
    timeout: 60_000,
  })
}

async function enterCommentMode(page) {
  await page.keyboard.press('c')
  await page.waitForTimeout(1000)
  const exitButton = page.getByRole('button', { name: /exit comment mode/i })
  if (!(await exitButton.isVisible().catch(() => false))) {
    const feedbackToggle = page.locator('[data-fl-ignore] button').first()
    if (await feedbackToggle.isVisible().catch(() => false)) {
      await feedbackToggle.click()
      await page.waitForTimeout(1000)
    }
  }
}

async function pickTargetLink(page) {
  const candidates = [
    page.locator('a[href*="docs/quick-start"]'),
    page.locator('a[href*="docs/troubleshooting"]'),
    page.getByRole('link', { name: /^docs$/i }),
    page.getByRole('link', { name: /customer support|sdk|pricing/i }),
    page.locator('main a[href^="/"]').first(),
  ]
  for (const candidate of candidates) {
    if (
      await candidate
        .first()
        .isVisible()
        .catch(() => false)
    ) {
      return candidate.first()
    }
  }
  throw new Error('No comment target link found on homepage')
}

async function fillWidgetComment(page, text) {
  const widgetRoot = page.locator('[data-fl-ignore]').last()
  const widgetTextarea = widgetRoot.locator('textarea').first()
  if (await widgetTextarea.isVisible().catch(() => false)) {
    await widgetTextarea.fill(text)
    return
  }
  const editable = page.locator('[contenteditable="true"]').last()
  if (await editable.isVisible().catch(() => false)) {
    await editable.fill(text)
    return
  }
  throw new Error('Widget comment field not found')
}

async function submitWidgetComment(page) {
  const widgetRoot = page.locator('[data-fl-ignore]').last()
  const submit = widgetRoot
    .getByRole('button', { name: /^submit$/i })
    .or(widgetRoot.getByRole('button', { name: /send|post|comment|save/i }))
    .first()
  if (await submit.isVisible().catch(() => false)) {
    await submit.click()
    return
  }
  await page.keyboard
    .press('Meta+Enter')
    .catch(() => page.keyboard.press('Enter'))
}

async function waitForFollowUp(page) {
  const followUp = page.locator('[data-fl-ignore]').filter({
    hasText:
      /skip|reply|what happens|what were you|which|how|did you|tell us|expected|nothing happen|wrong page|clicked/i,
  })
  const done = page.locator('[data-fl-ignore]').filter({
    hasText: /your feedback just landed|thanks|thank you|got it|submitted/i,
  })

  const deadline = Date.now() + 90_000
  while (Date.now() < deadline) {
    if (
      await followUp
        .first()
        .isVisible()
        .catch(() => false)
    ) {
      return followUp.first()
    }
    if (
      await done
        .first()
        .isVisible()
        .catch(() => false)
    ) {
      throw new Error(
        'Reached success state without follow-up. Try a broken-link comment on an external link.',
      )
    }
    await page.waitForTimeout(500)
  }

  await followUp.first().waitFor({ state: 'visible', timeout: 1_000 })
  return followUp.first()
}

async function waitForDone(page) {
  const done = page.locator('[data-fl-ignore]').filter({
    hasText: /thanks|thank you|got it|submitted|done/i,
  })
  await done.first().waitFor({ state: 'visible', timeout: 60_000 })
  return done.first()
}

const profileDir = path.resolve('.playwright-uselay-profile')

const context = await chromium.launchPersistentContext(profileDir, {
  channel: 'chrome',
  deviceScaleFactor: 2,
  headless: !headed,
  slowMo: headed ? 80 : 0,
  viewport: { height: 900, width: 1440 },
})
const page = context.pages()[0] ?? (await context.newPage())

await mkdir(outDir, { recursive: true })

try {
  await applyMagicLink(page)
  await ensureCaptureSurface(page)
  await enterCommentMode(page)

  const target = await pickTargetLink(page)
  await target.scrollIntoViewIfNeeded()
  await target.hover({ force: true })
  await page.waitForTimeout(800)
  await screenshot(page, fullFrames.highlight)

  await target.click({ force: true })
  await page.waitForTimeout(1200)
  await fillWidgetComment(page, 'this link is broken')
  await screenshot(page, fullFrames.compose)
  await submitWidgetComment(page)

  const followUp = await waitForFollowUp(page)
  await page.waitForTimeout(600)
  await screenshot(page, fullFrames.question)
  await screenshot(page, fullFrames.chips)

  const chip = followUp.getByRole('button').filter({ hasText: /.+/ }).first()
  const skip = followUp.getByRole('button', { name: /skip/i }).first()
  if (await chip.isVisible().catch(() => false)) {
    await chip.click()
  } else if (await skip.isVisible().catch(() => false)) {
    await skip.click()
  }

  await waitForDone(page)
  await screenshot(page, fullFrames.done)

  console.log(JSON.stringify({ ok: true, outDir, url: page.url() }))
} catch (error) {
  await screenshot(page, 'capture-error.png').catch(() => {})
  console.error(error)
  process.exit(1)
} finally {
  await context.close()
}
