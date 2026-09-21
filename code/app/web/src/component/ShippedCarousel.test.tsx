import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ShippedCarousel from '@/component/ShippedCarousel'
import type { ShippedSlide } from '@/lib/shipped'

const slides: ShippedSlide[] = [
  {
    example: false,
    href: 'https://firstdistro.com',
    slug: 'morning-who-needs-you',
    title: 'Morning who needs you',
    visual: '/shipped/morning-who-needs-you.svg',
    writeup:
      'Each morning in Slack: the accounts that need attention, a suggested move, and a draft held for you. Ready-made for lean CS. Nothing sends until you act.',
  },
  {
    example: true,
    href: 'https://uselay.com',
    slug: 'point-at-whats-broken',
    title: "Point at what's broken",
    writeup: 'Someone marks the UI instead of writing a ticket.',
  },
  {
    example: true,
    slug: 'hold-then-send-times',
    title: 'Hold, then send times',
    writeup: 'GRE holds the request, then sends times.',
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
    expect(screen.getByText('Ship 1 of 3: Morning who needs you')).toBeTruthy()
    expect(
      screen.getByRole('button', { name: 'Previous ship' }),
    ).toHaveProperty('disabled', true)
    expect(document.querySelector('.shipped-carousel__tick')).toBeNull()
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
        <ShippedCarousel slides={slides.slice(0, 1)} />
      </>,
    )

    expect(document.querySelector('.shipped-card__product')).toBeNull()
    expect(screen.queryByText('FirstDistro')).toBeNull()
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
    expect(screen.getByText("Ship 2 of 3: Point at what's broken")).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: 'Next ship' }))
    expect(screen.getByText('Ship 3 of 3: Hold, then send times')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Next ship' })).toHaveProperty(
      'disabled',
      true,
    )

    const carousel = screen.getByRole('region', {
      name: 'Last shipped carousel',
    })
    fireEvent.keyDown(carousel, { key: 'ArrowLeft' })
    expect(screen.getByText("Ship 2 of 3: Point at what's broken")).toBeTruthy()
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
})
