import { firstDistroUrl, useLayUrl } from '@shared/lib/site'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import WorkshopStage from '@/component/WorkshopStage'
import '@/style/home.css'

const openCard = async (name: string) => {
  fireEvent.click(screen.getByRole('button', { name }))
  await waitFor(() => {
    expect(screen.getByRole('dialog')).toBeTruthy()
  })
}

describe('WorkshopStage', () => {
  it('renders the still with keyboard-focusable hotspot targets', () => {
    render(<WorkshopStage />)

    expect(
      screen.getByRole('img', {
        name: /workshop desk/i,
      }),
    ).toBeTruthy()
    expect(document.querySelector('source[type="image/webp"]')).toBeTruthy()
    expect(screen.getByRole('region', { name: 'Workshop' })).toBeTruthy()

    const local = screen.getByRole('button', {
      name: 'Local AI on your machine, Laptop',
    })
    expect(local.tagName).toBe('BUTTON')
    expect(local.getAttribute('data-workshop-id')).toBe('local-ai')
    expect(
      screen.getByRole('button', {
        name: 'iMessage agent for your business, Phone',
      }),
    ).toBeTruthy()
    expect(
      screen.getByRole('button', {
        name: 'Morning who needs you, Mini-PC',
      }),
    ).toBeTruthy()
    expect(
      screen.getByRole('button', { name: 'UseLay, Pinboard' }),
    ).toBeTruthy()
    expect(
      screen.getByRole('button', { name: 'Toggle workshop lamp' }),
    ).toHaveAttribute('aria-pressed', 'false')
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('opens a glass card with locked copy and dismisses it', async () => {
    render(<WorkshopStage />)

    await openCard('Local AI on your machine, Laptop')
    const dialog = screen.getByRole('dialog', {
      name: 'Local AI on your machine',
    })
    expect(dialog.className).toBe('workshop-card')
    expect(screen.getByText('Open model, tools, gates')).toBeTruthy()
    expect(
      screen.getByText(
        "I've been running a small open model on my own machine with Ollama. Wired tools and gates on top so it's not just chat.",
      ),
    ).toBeTruthy()
    expect(screen.queryByRole('link', { name: /FirstDistro/ })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull()
    })
  })

  it('clears the card on Escape and on dismiss', async () => {
    render(<WorkshopStage />)

    await openCard('iMessage agent for your business, Phone')
    expect(screen.getByText('Front-desk packs')).toBeTruthy()

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' })
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull()
    })

    await openCard('iMessage agent for your business, Phone')
    fireEvent.click(screen.getByRole('dialog'))
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull()
    })
  })

  it('links FirstDistro and UseLay from site.ts', async () => {
    render(<WorkshopStage />)

    await openCard('Morning who needs you, Mini-PC')
    const firstDistro = screen.getByRole('link', { name: /FirstDistro/ })
    expect(firstDistro.getAttribute('href')).toBe(firstDistroUrl)
    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull()
    })

    await openCard('UseLay, Pinboard')
    const useLay = screen.getByRole('link', { name: /UseLay/ })
    expect(useLay.getAttribute('href')).toBe(useLayUrl)
  })

  it('toggles the lamp without opening a card', () => {
    render(<WorkshopStage />)

    const lamp = screen.getByRole('button', { name: 'Toggle workshop lamp' })
    expect(lamp.getAttribute('aria-pressed')).toBe('false')
    fireEvent.click(lamp)
    expect(lamp.getAttribute('aria-pressed')).toBe('true')
    expect(
      screen
        .getByRole('region', { name: 'Workshop' })
        .getAttribute('data-lamp'),
    ).toBe('on')
    expect(screen.queryByRole('dialog')).toBeNull()
    fireEvent.click(lamp)
    expect(lamp.getAttribute('aria-pressed')).toBe('false')
  })
})
