import { execFileSync } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

const webRoot = fileURLToPath(new URL('..', import.meta.url))
const repoRoot = path.resolve(webRoot, '../../..')
const workRoot = path.join(webRoot, 'public/work')

const readGitPng = gitPath => {
  const buffer = execFileSync('git', ['show', `HEAD:${gitPath}`], {
    cwd: repoRoot,
    encoding: 'buffer',
    maxBuffer: 20 * 1024 * 1024,
  })
  return buffer
}

const crop = async ({ buffer, crop: region, outPath }) => {
  await mkdir(path.dirname(outPath), { recursive: true })
  const { width, height } = await sharp(buffer)
    .extract(region)
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(outPath)

  return { height, width }
}

const firstdistroDir = path.join(workRoot, 'firstdistro-install-rail')
const firstdistroGitBase = 'code/app/web/public/work/firstdistro-install-rail'

const dashboardBuffer = readGitPng(
  `${firstdistroGitBase}/firstdistro-install-rail-empty-ai.png`,
)
const promptBuffer = readGitPng(
  `${firstdistroGitBase}/firstdistro-install-prompt.png`,
)
const settingsBuffer = readGitPng(
  `${firstdistroGitBase}/firstdistro-install-verify.png`,
)

// Tight install-rail card: headline through terminal, no dashboard chrome.
const installRailCrop = {
  height: 789,
  left: 510,
  top: 738,
  width: 1860,
}

// Settings verify: page title, install card, live events waiting.
const settingsPanelCrop = {
  height: 980,
  left: 510,
  top: 300,
  width: 1860,
}

const jobs = [
  {
    buffer: dashboardBuffer,
    crop: installRailCrop,
    key: 'firstdistro-install-rail-empty-ai.png',
    outPath: path.join(firstdistroDir, 'firstdistro-install-rail-empty-ai.png'),
  },
  {
    buffer: promptBuffer,
    crop: installRailCrop,
    key: 'firstdistro-install-prompt.png',
    outPath: path.join(firstdistroDir, 'firstdistro-install-prompt.png'),
  },
  {
    buffer: settingsBuffer,
    crop: settingsPanelCrop,
    key: 'firstdistro-install-verify.png',
    outPath: path.join(firstdistroDir, 'firstdistro-install-verify.png'),
  },
  {
    buffer: settingsBuffer,
    crop: settingsPanelCrop,
    key: 'firstdistro-install-rail-settings.png',
    outPath: path.join(firstdistroDir, 'firstdistro-install-rail-settings.png'),
  },
]

for (const job of jobs) {
  const size = await crop(job)
  process.stdout.write(`${job.key}: ${size.width}x${size.height}\n`)
}

process.stdout.write(
  'FirstDistro: run node script/capture-firstdistro-install-rail.mjs for element captures.\n',
)
