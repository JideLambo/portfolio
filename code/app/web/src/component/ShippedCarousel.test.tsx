import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ShippedCarousel from '@/component/ShippedCarousel'
import type { ShippedSlide } from '@/lib/shipped'

const slides: ShippedSlide[] = [
  {
    example: false,
    href: 'https://firstdistro.com',
    productLabel: 'FirstDistro',
    slug: 'morning-who-needs-you',
    title: 'Morning who needs you',
    visual: '/shipped/morning-who-needs-you.svg',
    writeup: 'Each morning, FirstDistro posts a briefing.',
  },
  {
    example: true,
    href: 'https://uselay.com',
    productLabel: 'UseLay',
    slug: 'point-at-whats-broken',
    title: "Point at what's broken",
    writeup: 'Someone marks the UI instead of writing a ticket.',
  },
  {
    example: true,
    productLabel: 'GRE',
    slug: 'hold-then-send-times',
    title: 'Hold, then send times',
    writeup: 'GRE holds the request, then sends times.',
  },
  {
    example: true,
    href: 'https://firstdistro.com',
    productLabel: 'FirstDistro',
    slug: 'silent-churn-watch',
    title: 'Silent churn watch',
    writeup: 'Quiet accounts drain while the dashboard still looks fine.',
  },
]

describe('ShippedCarousel', () => {
  it('exposes carousel semantics and the first ship', () => {
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
    expect(screen.getByText('Ship 1 of 4: Morning who needs you')).toBeTruthy()
    expect(
      screen.getByRole('button', { name: 'Previous ship' }),
    ).toHaveProperty('disabled', true)
  })

  it('advances with next, ticks, and arrow keys', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Next ship' }))
    expect(screen.getByText("Ship 2 of 4: Point at what's broken")).toBeTruthy()

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Go to ship 4 of 4: Silent churn watch',
      }),
    )
    expect(screen.getByText('Ship 4 of 4: Silent churn watch')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Next ship' })).toHaveProperty(
      'disabled',
      true,
    )

    const carousel = screen.getByRole('region', {
      name: 'Last shipped carousel',
    })
    fireEvent.keyDown(carousel, { key: 'ArrowLeft' })
    expect(screen.getByText('Ship 3 of 4: Hold, then send times')).toBeTruthy()
  })

  it('drags the track with a pointer', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    const track = document.querySelector(
      '.shipped-carousel__track',
    ) as HTMLDivElement
    let scrollLeft = 0
    Object.defineProperty(track, 'scrollLeft', {
      configurable: true,
      get: () => scrollLeft,
      set: value => {
        scrollLeft = value
      },
    })

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

    expect(scrollLeft).toBeGreaterThan(0)
  })

  it('marks example slides in the accessible name', () => {
    render(
      <>
        <h2 id="last-shipped">Last shipped</h2>
        <ShippedCarousel slides={slides} />
      </>,
    )

    const exampleSlide = document.querySelector(
      '[aria-label="2 of 4: Point at what\'s broken (example)"]',
    )
    expect(exampleSlide).toBeTruthy()
    expect(
      [...document.querySelectorAll('.shipped-card__product')].some(
        node => node.textContent === 'Example',
      ),
    ).toBe(true)
  })
})
