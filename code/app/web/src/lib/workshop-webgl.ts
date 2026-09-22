import type { WorkshopCardId, WorkshopHotspot } from '@/lib/workshop'

export type WorkshopHoverId = WorkshopHotspot['id'] | null

export type WorkshopSceneApi = {
  dismiss: () => void
  dispose: () => void
  hover: (id: WorkshopHoverId) => void
  motion: (enabled: boolean) => void
  reset: () => void
  select: (id: WorkshopCardId | null) => void
  toggleLamp: (on?: boolean) => void
}

export const workshopSceneMethods = [
  'dismiss',
  'dispose',
  'hover',
  'motion',
  'reset',
  'select',
  'toggleLamp',
] as const satisfies ReadonlyArray<keyof WorkshopSceneApi>

export const prefersWorkshopStill = (): boolean => {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return true
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const canOrbitWorkshop = (): boolean => typeof window !== 'undefined'

export const workshopTapSlopPx = 8

export const isWorkshopTap = (
  start: { x: number; y: number },
  end: { x: number; y: number },
): boolean => {
  const dx = end.x - start.x
  const dy = end.y - start.y
  return dx * dx + dy * dy <= workshopTapSlopPx * workshopTapSlopPx
}

export const canUseWorkshopWebgl = (): boolean => {
  if (typeof document === 'undefined' || prefersWorkshopStill()) {
    return false
  }
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') ?? canvas.getContext('webgl')
    return Boolean(gl)
  } catch {
    return false
  }
}
