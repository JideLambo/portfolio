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
    example: false,
    slug: 'imessage-agent-for-your-business',
    title: 'iMessage agent for your business',
    visual: '/shipped/imessage-agent-for-your-business.svg',
    writeup:
      "An iMessage agent for the front desk. Same loop, different packs: clinic, salon, Shopify-style shop. We're proving the pack model before we bet on a single industry.",
  },
]

describe('ShippedCarousel', () => {
  it('stacks the front ship with a compact peek of the next', () => {
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
