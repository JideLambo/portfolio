import {
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

import {
  getWorkshopHotspotLabel,
  isWorkshopCardHotspot,
  type WorkshopCardHotspot,
  type WorkshopHotspot,
  workshopHotspots,
  workshopStill,
} from '@/lib/workshop'

const boundsStyle = (hotspot: WorkshopHotspot) => ({
  height: `${hotspot.bounds.height * 100}%`,
  left: `${hotspot.bounds.left * 100}%`,
  top: `${hotspot.bounds.top * 100}%`,
  width: `${hotspot.bounds.width * 100}%`,
})

const WorkshopStage = () => {
  const titleId = useId()
  const bodyId = useId()
  const hintId = useId()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [lampOn, setLampOn] = useState(false)
  const [selectedId, setSelectedId] = useState<
    WorkshopCardHotspot['id'] | null
  >(null)
  const selectedCard = workshopHotspots.find(
    (hotspot): hotspot is WorkshopCardHotspot =>
      isWorkshopCardHotspot(hotspot) && hotspot.id === selectedId,
  )

  useEffect(() => {
    const node = dialogRef.current
    if (!selectedCard || !node) {
      return
    }
    if (!node.open) {
      node.showModal()
    }
    return () => {
      if (node.open) {
        node.close()
      }
    }
  }, [selectedCard])

  useEffect(() => {
    if (!selectedId) {
      return
    }
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }
      if (target.closest('.workshop-hotspot, .workshop-card')) {
        return
      }
      setSelectedId(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [selectedId])

  const dismiss = () => {
    setSelectedId(null)
  }

  const onHotspotClick = (
    event: MouseEvent<HTMLButtonElement>,
    hotspot: WorkshopHotspot,
  ) => {
    event.stopPropagation()
    switch (hotspot.kind) {
      case 'card':
        setSelectedId(hotspot.id)
        return
      case 'lamp':
        setLampOn(on => !on)
        return
      default: {
        const exhaustive: never = hotspot
        throw new Error(`Unknown workshop hotspot: ${exhaustive}`)
      }
    }
  }

  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      dismiss()
    }
  }

  const onDialogKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      dismiss()
    }
  }

  return (
    <section
      aria-describedby={hintId}
      aria-label="Workshop"
      className="workshop-stage"
      data-lamp={lampOn ? 'on' : 'off'}
    >
      <p className="visually-hidden" id={hintId}>
        Select a desk object to read a short note. The lamp toggles the light.
      </p>
      <div className="workshop-stage__frame">
        <picture>
          <source srcSet={workshopStill.webp} type="image/webp" />
          <img
            alt={workshopStill.alt}
            className="workshop-stage__still"
            decoding="async"
            fetchPriority="high"
            height={workshopStill.height}
            src={workshopStill.png}
            width={workshopStill.width}
          />
        </picture>
        <div aria-hidden="true" className="workshop-stage__glow" />
        <div className="workshop-stage__hotspots">
          {workshopHotspots.map(hotspot => (
            <button
              aria-expanded={
                hotspot.kind === 'card' ? selectedId === hotspot.id : undefined
              }
              aria-haspopup={hotspot.kind === 'card' ? 'dialog' : undefined}
              aria-label={getWorkshopHotspotLabel(hotspot)}
              aria-pressed={hotspot.kind === 'lamp' ? lampOn : undefined}
              className="workshop-hotspot"
              data-workshop-id={hotspot.id}
              key={hotspot.id}
              onClick={event => {
                onHotspotClick(event, hotspot)
              }}
              style={boundsStyle(hotspot)}
              type="button"
            >
              <span aria-hidden="true" className="workshop-hotspot__label">
                {hotspot.kind === 'card' ? hotspot.title : hotspot.objectLabel}
              </span>
            </button>
          ))}
        </div>
      </div>
      {selectedCard ? (
        <dialog
          aria-describedby={bodyId}
          aria-labelledby={titleId}
          className="workshop-card"
          onClick={onDialogClick}
          onClose={dismiss}
          onKeyDown={onDialogKeyDown}
          ref={dialogRef}
        >
          <div className="workshop-card__head">
            <h2 className="workshop-card__title" id={titleId}>
              {selectedCard.title}
            </h2>
            <button
              aria-label="Close"
              className="workshop-card__close"
              onClick={dismiss}
              type="button"
            >
              ×
            </button>
          </div>
          <p className="workshop-card__line">{selectedCard.line}</p>
          <p className="workshop-card__body" id={bodyId}>
            {selectedCard.body}
          </p>
          {selectedCard.href && selectedCard.hrefLabel ? (
            <p className="workshop-card__actions">
              <a
                className="workshop-card__link"
                href={selectedCard.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {selectedCard.hrefLabel}
                <span className="visually-hidden"> (opens in new tab)</span>
              </a>
            </p>
          ) : null}
        </dialog>
      ) : null}
    </section>
  )
}

export default WorkshopStage
