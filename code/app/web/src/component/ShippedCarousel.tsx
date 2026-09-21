import {
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  useCallback,
  useRef,
  useState,
} from 'react'

import ShippedVisual from '@/component/ShippedVisual'
import type { ShippedSlide } from '@/lib/shipped'
import {
  clampIndex,
  indexAfterSwipe,
  splitWriteup,
} from '@/lib/shipped-carousel'

type ShippedCarouselProps = {
  slides: ShippedSlide[]
}

const ShippedCarousel = ({ slides }: ShippedCarouselProps) => {
  const didDragRef = useRef(false)
  const dragRef = useRef<{
    id: number
    moved: boolean
    origin: number
  } | null>(null)
  const [index, setIndex] = useState(0)
  const current = slides[index]
  const count = slides.length

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex(clampIndex(nextIndex, slides.length))
    },
    [slides.length],
  )

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      id: event.pointerId,
      moved: false,
      origin: event.clientX,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || event.pointerId !== drag.id) {
      return
    }
    if (Math.abs(event.clientX - drag.origin) > 6) {
      drag.moved = true
    }
  }

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || event.pointerId !== drag.id) {
      return
    }
    didDragRef.current = drag.moved
    const next = indexAfterSwipe(
      index,
      event.clientX - drag.origin,
      slides.length,
    )
    dragRef.current = null
    goTo(next)
  }

  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!didDragRef.current) {
      return
    }
    didDragRef.current = false
    event.preventDefault()
    event.stopPropagation()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
      return
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    }
  }

  if (count === 0) {
    return null
  }

  return (
    <section
      aria-label="Last shipped carousel"
      aria-roledescription="carousel"
      className={
        count > 1
          ? 'shipped-carousel'
          : 'shipped-carousel shipped-carousel--single'
      }
      onKeyDown={onKeyDown}
    >
      <div aria-atomic="true" aria-live="polite" className="visually-hidden">
        {current ? `Ship ${index + 1} of ${count}: ${current.title}` : null}
      </div>
      <div className="shipped-carousel__deck">
        <div
          className="shipped-carousel__track"
          onClickCapture={onClickCapture}
          onPointerCancel={endDrag}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
        >
          {slides.map((slide, slideIndex) => (
            <article
              aria-hidden={slideIndex === index ? undefined : true}
              aria-label={`${slideIndex + 1} of ${count}: ${slide.title}${slide.example ? ' (example)' : ''}`}
              aria-roledescription="slide"
              className="shipped-carousel__slide shipped-card"
              data-active={slideIndex === index ? 'true' : undefined}
              key={slide.slug}
            >
              <div className="shipped-card__copy">
                <h3 className="shipped-card__title">{slide.title}</h3>
                <div className="shipped-card__writeup">
                  {splitWriteup(slide.writeup).map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {slide.href ? (
                  <p className="shipped-card__actions">
                    <a
                      href={slide.href}
                      rel="noopener noreferrer"
                      tabIndex={slideIndex === index ? 0 : -1}
                      target="_blank"
                    >
                      View →
                      <span className="visually-hidden">
                        {' '}
                        (opens in new tab)
                      </span>
                    </a>
                  </p>
                ) : null}
              </div>
              <div className="shipped-card__visual">
                <ShippedVisual slug={slide.slug} />
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="shipped-carousel__keys">
        <button
          aria-label="Previous ship"
          disabled={index === 0}
          onClick={() => {
            goTo(index - 1)
          }}
          type="button"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M15 4.5 7.5 12 15 19.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.8"
            />
          </svg>
        </button>
        <button
          aria-label="Next ship"
          disabled={index === count - 1}
          onClick={() => {
            goTo(index + 1)
          }}
          type="button"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M9 4.5 16.5 12 9 19.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.8"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default ShippedCarousel
