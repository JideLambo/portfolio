import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ShippedCarousel from '@/component/ShippedCarousel'
import type { ShippedSlide } from '@/lib/shipped'
import '@/style/home.css'

const slides: ShippedSlide[] = [
  {
    example: false,
    href: 'https://firstdistro.com',
    shippedAt: '2026-09-16',
    slug: 'morning-who-needs-you',
    title: 'Morning who needs you',
    when: '5 days ago',
    writeup:
      'I shipped a morning Slack briefing automation on FirstDistro. Each day it surfaces who needs attention, suggests a move, and holds a draft. Nothing sends until you act.',
  },
  {
    example: false,
    shippedAt: '2026-09-20',
    slug: 'imessage-agent-for-your-business',
    title: 'iMessage agent for your business',
    when: '1 day ago',
    writeup:
      "I've been building an iMessage agent for the front desk. Same loop, packs for clinic, salon, and Shopify-style shops. Still proving the pack model before I bet on one industry.",
  },
]

describe('ShippedCarousel', () => {
  it('shows one front ship with empty stacked backs, not a content sliver', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    const carousel = screen.getByRole('region', {
      name: 'Last shipped carousel',
    })
    expect(carousel.getAttribute('aria-roledescription')).toBe('carousel')
    expect(screen.getByText('Morning who needs you')).toBeTruthy()
    expect(screen.getByText('Ship 1 of 2: Morning who needs you')).toBeTruthy()
    expect(document.querySelector('.shipped-carousel__deck')).toBeTruthy()
    expect(
      document.querySelector('.shipped-carousel__slide[data-active="true"]'),
    ).toBeTruthy()
    const inactive = document.querySelector(
      '.shipped-carousel__slide:not([data-active="true"])',
    ) as HTMLElement
    expect(inactive).toBeTruthy()
    expect(getComputedStyle(inactive).display).toBe('none')
    expect(
      document.querySelectorAll('.shipped-carousel__slide[data-active="true"]')
        .length,
    ).toBe(1)
    expect(
      screen.getByRole('button', { name: 'Previous ship' }),
    ).toHaveProperty('disabled', true)
    expect(screen.getByRole('button', { name: 'Next ship' })).toHaveProperty(
      'disabled',
      false,
    )
    expect(document.querySelector('.shipped-carousel__tick')).toBeNull()
    expect(screen.queryByText('drag →')).toBeNull()
  })

  it('shows a quiet relative timestamp under the title', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    const when = screen.getByText('5 days ago')
    expect(when.tagName).toBe('TIME')
    expect(when.getAttribute('datetime')).toBe('2026-09-16')
    expect(when.className).toBe('shipped-card__when')
    expect(screen.queryByText('Sep 16')).toBeNull()
    expect(screen.queryByText('2026-09-16')).toBeNull()
  })

  it('renders light HTML UI panels, not glyph images', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    expect(document.querySelector('.shipped-mini--slack')).toBeTruthy()
    expect(document.querySelector('.shipped-mini--imessage')).toBeTruthy()
    expect(screen.getByText('Helios Cloud')).toBeTruthy()
    expect(screen.getByText('Quiet for 18 days')).toBeTruthy()
    expect(screen.getByText('Any openings Friday?')).toBeTruthy()
    expect(document.querySelector('img[src*="/shipped/"]')).toBeNull()
  })

  it('renders a light local-status card for the local AI ship', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel
          slides={[
            {
              example: false,
              shippedAt: '2026-09-21',
              slug: 'local-ai-on-your-machine',
              title: 'Local AI on your machine',
              when: 'just now',
              writeup:
                "I've been running a small open model on my own machine with Ollama. Wired tools and gates on top so it's not just chat. Still learning how far I can push it before it needs the cloud.",
            },
            ...slides,
          ]}
        />
      </>,
    )

    expect(document.querySelector('.shipped-mini--local')).toBeTruthy()
    expect(screen.getByText('qwen2.5:7b')).toBeTruthy()
    expect(screen.getByText('Ready')).toBeTruthy()
    expect(screen.getByText('book / reply')).toBeTruthy()
    expect(screen.queryByText('Sinch')).toBeNull()
  })

  it('renders disabled arrows when there is only one ship', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides.slice(0, 1)} />
      </>,
    )

    expect(
      screen.getByRole('button', { name: 'Previous ship' }),
    ).toHaveProperty('disabled', true)
    expect(screen.getByRole('button', { name: 'Next ship' })).toHaveProperty(
      'disabled',
      true,
    )
    expect(document.querySelector('.shipped-carousel--single')).toBeTruthy()
    expect(document.querySelector('.shipped-carousel__tick')).toBeNull()
  })

  it('does not render a product or example chip', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    expect(document.querySelector('.shipped-card__product')).toBeNull()
    expect(screen.queryByText('FirstDistro')).toBeNull()
    expect(screen.queryByText('GRE')).toBeNull()
    expect(screen.queryByText('Example')).toBeNull()
  })

  it('advances with next and arrow keys', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Next ship' }))
    expect(
      screen.getByText('Ship 2 of 2: iMessage agent for your business'),
    ).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Next ship' })).toHaveProperty(
      'disabled',
      true,
    )

    const carousel = screen.getByRole('region', {
      name: 'Last shipped carousel',
    })
    fireEvent.keyDown(carousel, { key: 'ArrowLeft' })
    expect(screen.getByText('Ship 1 of 2: Morning who needs you')).toBeTruthy()
  })

  it('swipes the stacked deck with a pointer', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    const track = document.querySelector(
      '.shipped-carousel__track',
    ) as HTMLDivElement

    fireEvent.pointerDown(track, {
      clientX: 240,
      pointerId: 1,
      pointerType: 'mouse',
    })
    fireEvent.pointerMove(track, {
      clientX: 80,
      pointerId: 1,
      pointerType: 'mouse',
    })
    fireEvent.pointerUp(track, {
      clientX: 80,
      pointerId: 1,
      pointerType: 'mouse',
    })

    expect(
      screen.getByText('Ship 2 of 2: iMessage agent for your business'),
    ).toBeTruthy()
  })
})
