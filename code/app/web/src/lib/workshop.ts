import { firstDistroUrl, useLayUrl } from '@shared/lib/site'

export type WorkshopBounds = {
  height: number
  left: number
  top: number
  width: number
}

export type WorkshopCardId = 'firstdistro' | 'imessage' | 'local-ai' | 'uselay'

export type WorkshopLabelX = 'center' | 'end' | 'start'
export type WorkshopLabelY = 'above' | 'below'

export type WorkshopCardHotspot = {
  body: string
  bounds: WorkshopBounds
  href?: string
  hrefLabel?: string
  id: WorkshopCardId
  kind: 'card'
  labelX: WorkshopLabelX
  labelY: WorkshopLabelY
  line: string
  objectLabel: string
  title: string
}

export type WorkshopLampHotspot = {
  bounds: WorkshopBounds
  id: 'lamp'
  kind: 'lamp'
  labelX: WorkshopLabelX
  labelY: WorkshopLabelY
  objectLabel: string
}

export type WorkshopHotspot = WorkshopCardHotspot | WorkshopLampHotspot

export const workshopStill = {
  alt: 'A low-poly workshop desk with a laptop, phone, lamp, pinboard, and a small glowing computer.',
  height: 276,
  png: '/workshop/still.png',
  webp: '/workshop/still.webp',
  width: 491,
}

export const workshopHotspots: WorkshopHotspot[] = [
  {
    body: "I've been running a small open model on my own machine with Ollama. Wired tools and gates on top so it's not just chat.",
    bounds: { height: 0.36, left: 0.35, top: 0.17, width: 0.23 },
    id: 'local-ai',
    kind: 'card',
    labelX: 'center',
    labelY: 'above',
    line: 'Open model, tools, gates',
    objectLabel: 'Laptop',
    title: 'Local AI on your machine',
  },
  {
    body: "I'm building iMessage agents for vertical businesses. Front-desk packs that answer like a person at the desk, then you take over when it matters.",
    bounds: { height: 0.145, left: 0.618, top: 0.448, width: 0.095 },
    id: 'imessage',
    kind: 'card',
    labelX: 'center',
    labelY: 'above',
    line: 'Front-desk packs',
    objectLabel: 'Phone',
    title: 'iMessage agent for your business',
  },
  {
    body: 'Catch silent churn, draft the next move. Nothing sends until you act.',
    bounds: { height: 0.14, left: 0.8, top: 0.5, width: 0.13 },
    href: firstDistroUrl,
    hrefLabel: 'FirstDistro',
    id: 'firstdistro',
    kind: 'card',
    labelX: 'end',
    labelY: 'above',
    line: 'Account intelligence for lean CS',
    objectLabel: 'Mini-PC',
    title: 'Morning who needs you',
  },
  {
    body: 'In-app feedback that pins comments to exact UI elements. Review on staging, support on live.',
    bounds: { height: 0.36, left: 0.04, top: 0.05, width: 0.22 },
    href: useLayUrl,
    hrefLabel: 'UseLay',
    id: 'uselay',
    kind: 'card',
    labelX: 'start',
    labelY: 'below',
    line: 'Feedback pinned to the UI',
    objectLabel: 'Pinboard',
    title: 'UseLay',
  },
  {
    bounds: { height: 0.26, left: 0.575, top: 0.02, width: 0.155 },
    id: 'lamp',
    kind: 'lamp',
    labelX: 'center',
    labelY: 'below',
    objectLabel: 'Lamp',
  },
]

export const isWorkshopCardHotspot = (
  hotspot: WorkshopHotspot,
): hotspot is WorkshopCardHotspot => hotspot.kind === 'card'

export const getWorkshopCard = (id: WorkshopCardId): WorkshopCardHotspot => {
  const hotspot = workshopHotspots.find(
    (item): item is WorkshopCardHotspot =>
      isWorkshopCardHotspot(item) && item.id === id,
  )
  if (!hotspot) {
    throw new Error(`Missing workshop card: ${id}`)
  }
  return hotspot
}

export const getWorkshopHotspotLabel = (hotspot: WorkshopHotspot): string => {
  switch (hotspot.kind) {
    case 'card':
      return `${hotspot.title}, ${hotspot.objectLabel}`
    case 'lamp':
      return 'Toggle workshop lamp'
    default: {
      const exhaustive: never = hotspot
      throw new Error(`Unknown workshop hotspot: ${exhaustive}`)
    }
  }
}
