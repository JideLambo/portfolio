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
  const rootRef = useRef<HTMLElement>(null)
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

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      const root = rootRef.current
      const active = document.activeElement
      if (
        !root ||
        (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') ||
        !(root === active || root.contains(active))
      ) {
        return
      }
      event.preventDefault()
      goTo(index + (event.key === 'ArrowRight' ? 1 : -1))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [goTo, index])

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
      className="shipped-carousel"
      onKeyDown={onKeyDown}
      ref={rootRef}
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
                  height="200"
                  loading="lazy"
                  src={slide.visual}
                  width="320"
                />
              ) : (
                <div aria-hidden="true" className="shipped-card__placeholder" />
              )}
            </div>
            <div className="shipped-card__copy">
              <div className="shipped-card__heading">
                <h3 className="shipped-card__title">{slide.title}</h3>
                <p className="shipped-card__product">{slide.productLabel}</p>
                {slide.example ? (
                  <p className="shipped-card__product">Example</p>
                ) : null}
              </div>
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
      {count > 1 ? (
        <div className="shipped-carousel__meter">
          <div className="shipped-carousel__rail">
            <div
              className="shipped-carousel__fill"
              style={{
                width: count === 1 ? '100%' : `${(index / (count - 1)) * 100}%`,
              }}
            />
            {slides.map((slide, tickIndex) => (
              <button
                aria-current={tickIndex === index ? 'true' : undefined}
                aria-label={`Go to ship ${tickIndex + 1} of ${count}: ${slide.title}`}
                className="shipped-carousel__tick"
                key={slide.slug}
                onClick={() => {
                  goTo(tickIndex)
                }}
                style={{
                  left:
                    count === 1 ? '0%' : `${(tickIndex / (count - 1)) * 100}%`,
                }}
                type="button"
              />
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
              ←
            </button>
            <button
              aria-label="Next ship"
              disabled={index === count - 1}
              onClick={() => {
                goTo(index + 1)
              }}
              type="button"
            >
              →
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ShippedCarousel
