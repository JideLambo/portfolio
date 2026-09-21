import { firstDistroUrl, useLayUrl } from '@shared/lib/site'
import { describe, expect, it } from 'vitest'
import {
  getWorkshopCard,
  getWorkshopHotspotLabel,
  isWorkshopCardHotspot,
  workshopHotspots,
  workshopStill,
} from '@/lib/workshop'

describe('workshop', () => {
  it('keeps the locked hotspot ids in still order', () => {
    expect(workshopHotspots.map(hotspot => hotspot.id)).toEqual([
      'local-ai',
      'imessage',
      'firstdistro',
      'uselay',
      'lamp',
    ])
  })

  it('locks card copy, links, and lamp as a toggle only', () => {
    const local = getWorkshopCard('local-ai')
    expect(local.title).toBe('Local AI on your machine')
    expect(local.line).toBe('Open model, tools, gates')
    expect(local.body).toBe(
      "I've been running a small open model on my own machine with Ollama. Wired tools and gates on top so it's not just chat.",
    )
    expect(local.href).toBeUndefined()
    expect(local.objectLabel).toBe('Laptop')

    const imessage = getWorkshopCard('imessage')
    expect(imessage.title).toBe('iMessage agent for your business')
    expect(imessage.line).toBe('Front-desk packs')
    expect(imessage.body).toBe(
      "I'm building iMessage agents for vertical businesses. Front-desk packs that answer like a person at the desk, then you take over when it matters.",
    )
    expect(imessage.href).toBeUndefined()
    expect(imessage.objectLabel).toBe('Phone')

    const firstdistro = getWorkshopCard('firstdistro')
    expect(firstdistro.title).toBe('Morning who needs you')
    expect(firstdistro.line).toBe('Account intelligence for lean CS')
    expect(firstdistro.body).toBe(
      'Catch silent churn, draft the next move. Nothing sends until you act.',
    )
    expect(firstdistro.href).toBe(firstDistroUrl)
    expect(firstdistro.hrefLabel).toBe('FirstDistro')
    expect(firstdistro.objectLabel).toBe('Mini-PC')

    const uselay = getWorkshopCard('uselay')
    expect(uselay.title).toBe('UseLay')
    expect(uselay.line).toBe('Feedback pinned to the UI')
    expect(uselay.body).toBe(
      'In-app feedback that pins comments to exact UI elements. Review on staging, support on live.',
    )
    expect(uselay.href).toBe(useLayUrl)
    expect(uselay.hrefLabel).toBe('UseLay')
    expect(uselay.objectLabel).toBe('Pinboard')

    const lamp = workshopHotspots.find(hotspot => hotspot.id === 'lamp')
    expect(lamp?.kind).toBe('lamp')
    expect(lamp?.labelX).toBe('center')
    expect(lamp?.labelY).toBe('below')
    expect(isWorkshopCardHotspot(lamp!)).toBe(false)
    expect(getWorkshopHotspotLabel(lamp!)).toBe('Toggle workshop lamp')
    expect(workshopHotspots.find(item => item.id === 'uselay')?.labelX).toBe(
      'start',
    )
    expect(
      workshopHotspots.find(item => item.id === 'firstdistro')?.labelX,
    ).toBe('end')
  })

  it('does not make set dressing clickable', () => {
    const labels = workshopHotspots.map(hotspot => hotspot.objectLabel)
    expect(labels).not.toContain('Plant')
    expect(labels).not.toContain('Crystal')
    expect(labels).not.toContain('Mug')
    expect(labels).not.toContain('Sketch')
  })

  it('keeps hotspot bounds inside the still', () => {
    for (const hotspot of workshopHotspots) {
      expect(hotspot.bounds.left).toBeGreaterThanOrEqual(0)
      expect(hotspot.bounds.top).toBeGreaterThanOrEqual(0)
      expect(hotspot.bounds.width).toBeGreaterThan(0)
      expect(hotspot.bounds.height).toBeGreaterThan(0)
      expect(hotspot.bounds.left + hotspot.bounds.width).toBeLessThanOrEqual(1)
      expect(hotspot.bounds.top + hotspot.bounds.height).toBeLessThanOrEqual(1)
    }
  })

  it('points the still at the public workshop assets', () => {
    expect(workshopStill.png).toBe('/workshop/still.png')
    expect(workshopStill.webp).toBe('/workshop/still.webp')
    expect(workshopStill.width).toBe(491)
    expect(workshopStill.height).toBe(276)
  })

  it('keeps hotspot hit targets tight to the desk objects', () => {
    const laptop = workshopHotspots[0]!.bounds
    const phone = workshopHotspots[1]!.bounds
    expect(laptop.width).toBeLessThan(0.28)
    expect(phone.width).toBeLessThan(0.12)
    expect(phone.left).toBeGreaterThan(laptop.left + laptop.width)
  })
})
