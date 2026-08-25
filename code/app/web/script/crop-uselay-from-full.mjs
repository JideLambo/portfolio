import { readFileSync, writeFileSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

const webRoot = fileURLToPath(new URL('..', import.meta.url))
const workRoot = path.join(webRoot, 'public/work')
const uselayDir = path.join(workRoot, 'uselay-conversational-follow-up')

const read = name => readFileSync(path.join(uselayDir, name))

const crop = async ({ buffer, crop: region, outPath }) => {
  await mkdir(path.dirname(outPath), { recursive: true })
  const { width, height } = await sharp(buffer)
    .extract(region)
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(outPath)
  return { height, width }
}

const crops = [
  {
    buffer: read('_full-highlight.png'),
    crop: { height: 980, left: 320, top: 40, width: 2480 },
    key: 'uselay-conversational-follow-up-highlight.png',
    outPath: path.join(
      uselayDir,
      'uselay-conversational-follow-up-highlight.png',
    ),
  },
  {
    buffer: read('_full-compose.png'),
    crop: { height: 980, left: 720, top: 40, width: 2040 },
    key: 'uselay-conversational-follow-up-compose.png',
    outPath: path.join(
      uselayDir,
      'uselay-conversational-follow-up-compose.png',
    ),
  },
  {
    buffer: read('_full-question.png'),
    crop: { height: 1040, left: 700, top: 30, width: 2100 },
    key: 'uselay-conversational-follow-up-question.png',
    outPath: path.join(
      uselayDir,
      'uselay-conversational-follow-up-question.png',
    ),
  },
  {
    buffer: read('_full-chips.png'),
    crop: { height: 960, left: 760, top: 80, width: 1980 },
    key: 'uselay-conversational-follow-up-chips.png',
    outPath: path.join(uselayDir, 'uselay-conversational-follow-up-chips.png'),
  },
]

const manifest = {}
for (const item of crops) {
  const size = await crop(item)
  manifest[item.key] = size
  process.stdout.write(`${item.key}: ${size.width}x${size.height}\n`)
}

const outRoot = fileURLToPath(new URL('../../../../.out/', import.meta.url))
await mkdir(outRoot, { recursive: true })
writeFileSync(
  path.join(outRoot, 'work-focus-manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
)
