import {
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
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
  const ignoreScrollRef = useRef(false)
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
      setIndex(clampIndex(nextIndex, slides.length))
    },
    [slides.length],
  )

  useLayoutEffect(() => {
    const track = trackRef.current
    const slide = track?.children[index] as HTMLElement | undefined
    if (!track || !slide) {
      return
    }
    ignoreScrollRef.current = true
    track.scrollTo({
      behavior: 'auto',
      left: slideScrollLeft(slide.offsetLeft, peekOf(track)),
    })
    ignoreScrollRef.current = false
  }, [index])

  useEffect(() => {
    const track = trackRef.current
    if (!track) {
      return
    }
    const onScrollEnd = () => {
      if (ignoreScrollRef.current || dragRef.current) {
        return
      }
      setIndex(nearestIndex(track.scrollLeft, offsetsOf(track)))
    }
    track.addEventListener('scrollend', onScrollEnd)
    return () => {
      track.removeEventListener('scrollend', onScrollEnd)
    }
  }, [])

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
    if (!drag || event.pointerId !== drag.id) {
      return
    }
    didDragRef.current = drag.moved
    dragRef.current = null
    const delta = drag.origin - event.clientX
    if (drag.moved && Math.abs(delta) > 48) {
      goTo(index + (delta > 0 ? 1 : -1))
      return
    }
    goTo(index)
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
            aria-label={`${slideIndex + 1} of ${count}: ${slide.title}${slide.example ? ' (example)' : ''}`}
            aria-roledescription="slide"
            className="shipped-carousel__slide shipped-card"
            data-active={slideIndex === index ? 'true' : undefined}
            key={slide.slug}
          >
            {slideIndex === index ? null : (
              <button
                aria-label={`Show ship ${slideIndex + 1} of ${count}: ${slide.title}`}
                className="shipped-carousel__peek-hit"
                onClick={() => {
                  goTo(slideIndex)
                }}
                tabIndex={-1}
                type="button"
              />
            )}
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
      {count > 1 ? (
        <div className="shipped-carousel__chrome">
          <p aria-hidden="true" className="shipped-carousel__drag">
            drag →
          </p>
          <div className="shipped-carousel__dots">
            {slides.map((slide, tickIndex) => (
              <button
                aria-current={tickIndex === index ? 'true' : undefined}
                aria-label={`Go to ship ${tickIndex + 1} of ${count}: ${slide.title}`}
                className="shipped-carousel__tick"
                key={slide.slug}
                onClick={() => {
                  goTo(tickIndex)
                }}
                type="button"
              >
                <span className="shipped-carousel__dot" />
                <span className="shipped-carousel__n">{tickIndex + 1}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ShippedCarousel
