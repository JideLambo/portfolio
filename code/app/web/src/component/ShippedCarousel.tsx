import {
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import type { ShippedSlide } from '@/lib/shipped'
import {
  clampIndex,
  nearestIndex,
  slideScrollLeft,
  splitWriteup,
} from '@/lib/shipped-carousel'

type ShippedCarouselProps = {
  slides: ShippedSlide[]
}

const scrollBehavior = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth'

const peekOf = (track: HTMLElement) =>
  Number.parseFloat(getComputedStyle(track).paddingInlineStart) || 0

const offsetsOf = (track: HTMLElement) => {
  const peek = peekOf(track)
  return [...track.children].map(
    child => (child as HTMLElement).offsetLeft - peek,
  )
}

const ShippedCarousel = ({ slides }: ShippedCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const didDragRef = useRef(false)
  const dragRef = useRef<{
    id: number
    moved: boolean
    origin: number
    scroll: number
  } | null>(null)
  const [index, setIndex] = useState(0)
  const current = slides[index]
  const count = slides.length

  const goTo = useCallback(
    (nextIndex: number) => {
      const track = trackRef.current
      const clamped = clampIndex(nextIndex, slides.length)
      setIndex(clamped)
      const slide = track?.children[clamped] as HTMLElement | undefined
      if (!track || !slide) {
        return
      }
      track.scrollTo({
        behavior: scrollBehavior(),
        left: slideScrollLeft(slide.offsetLeft, peekOf(track)),
      })
    },
    [slides.length],
  )

  const syncFromScroll = useCallback(() => {
    const track = trackRef.current
    if (!track || dragRef.current) {
      return
    }
    setIndex(nearestIndex(track.scrollLeft, offsetsOf(track)))
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) {
      return
    }
    track.addEventListener('scroll', syncFromScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', syncFromScroll)
    }
  }, [syncFromScroll])

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') {
      return
    }
    const track = trackRef.current
    if (!track) {
      return
    }
    dragRef.current = {
      id: event.pointerId,
      moved: false,
      origin: event.clientX,
      scroll: track.scrollLeft,
    }
    track.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    const track = trackRef.current
    if (!drag || !track || event.pointerId !== drag.id) {
      return
    }
    const delta = event.clientX - drag.origin
    if (Math.abs(delta) > 6) {
      drag.moved = true
    }
    track.scrollLeft = drag.scroll - delta
  }

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    const track = trackRef.current
    if (!drag || event.pointerId !== drag.id) {
      return
    }
    didDragRef.current = drag.moved
    dragRef.current = null
    if (track) {
      setIndex(nearestIndex(track.scrollLeft, offsetsOf(track)))
    }
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
      <div
        className="shipped-carousel__track"
        onClickCapture={onClickCapture}
        onPointerCancel={endDrag}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        ref={trackRef}
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
            <div className="shipped-card__visual">
              {slide.visual ? (
                <img
                  alt=""
                  decoding="async"
                  draggable={false}
                  height="320"
                  loading="lazy"
                  src={slide.visual}
                  width="320"
                />
              ) : (
                <div aria-hidden="true" className="shipped-card__placeholder" />
              )}
            </div>
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
                    <span className="visually-hidden"> (opens in new tab)</span>
                  </a>
                </p>
              ) : null}
            </div>
          </article>
        ))}
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
              d="M14.5 5.5 8 12l6.5 6.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
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
              d="M9.5 5.5 16 12l-6.5 6.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default ShippedCarousel
