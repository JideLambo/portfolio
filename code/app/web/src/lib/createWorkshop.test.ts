import { describe, expect, it } from 'vitest'

import { canUseWorkshopWebgl, workshopSceneMethods } from '@/lib/workshop-webgl'

describe('createWorkshop', () => {
  it('returns the locked scene API when WebGL is available', async () => {
    if (!canUseWorkshopWebgl()) {
      expect(canUseWorkshopWebgl()).toBe(false)
      return
    }
    const canvas = document.createElement('canvas')
    canvas.width = 320
    canvas.height = 180
    document.body.append(canvas)
    const parent = document.createElement('div')
    parent.style.width = '320px'
    parent.style.height = '180px'
    parent.append(canvas)
    document.body.append(parent)
    const { createWorkshop } = await import('@/lib/createWorkshop')
    const scene = createWorkshop({
      canvas,
      onHover: () => undefined,
      onLamp: () => undefined,
      onSelect: () => undefined,
    })
    for (const method of workshopSceneMethods) {
      expect(typeof scene[method]).toBe('function')
    }
    scene.hover('local-ai')
    scene.select('local-ai')
    scene.toggleLamp(true)
    scene.motion(false)
    scene.reset()
    scene.dismiss()
    scene.dispose()
    parent.remove()
  })
})
