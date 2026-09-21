import { firstDistroUrl, useLayUrl } from '@shared/lib/site'

export type WorkshopBounds = {
  height: number
  left: number
  top: number
  width: number
}

export type WorkshopCardId = 'firstdistro' | 'imessage' | 'local-ai' | 'uselay'

export type WorkshopCardHotspot = {
  body: string
  bounds: WorkshopBounds
  href?: string
  hrefLabel?: string
  id: WorkshopCardId
  kind: 'card'
  line: string
  objectLabel: string
  title: string
}

export type WorkshopLampHotspot = {
  bounds: WorkshopBounds
  id: 'lamp'
  kind: 'lamp'
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
    bounds: { height: 0.348, left: 0.326, top: 0.188, width: 0.3 },
    id: 'local-ai',
    kind: 'card',
    line: 'Open model, tools, gates',
    objectLabel: 'Laptop',
    title: 'Local AI on your machine',
  },
  {
    body: "I'm building iMessage agents for vertical businesses. Front-desk packs that answer like a person at the desk, then you take over when it matters.",
    bounds: { height: 0.16, left: 0.64, top: 0.46, width: 0.125 },
    id: 'imessage',
    kind: 'card',
    line: 'Front-desk packs',
    objectLabel: 'Phone',
    title: 'iMessage agent for your business',
  },
  {
    body: 'Catch silent churn, draft the next move. Nothing sends until you act.',
    bounds: { height: 0.2, left: 0.77, top: 0.475, width: 0.175 },
    href: firstDistroUrl,
    hrefLabel: 'FirstDistro',
    id: 'firstdistro',
    kind: 'card',
    line: 'Account intelligence for lean CS',
    objectLabel: 'Mini-PC',
    title: 'Morning who needs you',
  },
  {
    body: 'In-app feedback that pins comments to exact UI elements. Review on staging, support on live.',
    bounds: { height: 0.4, left: 0.035, top: 0.03, width: 0.255 },
    href: useLayUrl,
    hrefLabel: 'UseLay',
    id: 'uselay',
    kind: 'card',
    line: 'Feedback pinned to the UI',
    objectLabel: 'Pinboard',
    title: 'UseLay',
  },
  {
    bounds: { height: 0.25, left: 0.615, top: 0, width: 0.185 },
    id: 'lamp',
    kind: 'lamp',
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
