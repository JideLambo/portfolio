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
  type WorkshopBounds,
  type WorkshopCardHotspot,
  type WorkshopHotspot,
  workshopHotspots,
  workshopStill,
} from '@/lib/workshop'
import {
  canUseWorkshopWebgl,
  type WorkshopSceneApi,
} from '@/lib/workshop-webgl'

type WorkshopStageProps = {
  githubLine?: string
}

const boundsStyle = (bounds: WorkshopBounds) => ({
  height: `${bounds.height * 100}%`,
  left: `${bounds.left * 100}%`,
  top: `${bounds.top * 100}%`,
  width: `${bounds.width * 100}%`,
})

const WorkshopStage = ({ githubLine }: WorkshopStageProps) => {
  const titleId = useId()
  const bodyId = useId()
  const hintId = useId()
  const githubSpoken = githubLine?.replaceAll('\n', ', ')
  const githubCardLine = githubLine?.replaceAll('\n', ' · ')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<WorkshopSceneApi | null>(null)
  const [mode, setMode] = useState<'still' | 'webgl'>('still')
  const [lampOn, setLampOn] = useState(true)
  const [motionOn, setMotionOn] = useState(true)
  const lampRef = useRef(lampOn)
  const motionRef = useRef(motionOn)
  lampRef.current = lampOn
  motionRef.current = motionOn
  const [hoverId, setHoverId] = useState<WorkshopHotspot['id'] | null>(null)
  const [selectedId, setSelectedId] = useState<
    WorkshopCardHotspot['id'] | null
  >(null)
  const selectedCard = workshopHotspots.find(
    (hotspot): hotspot is WorkshopCardHotspot =>
      isWorkshopCardHotspot(hotspot) && hotspot.id === selectedId,
  )
  const hoverHotspot = workshopHotspots.find(hotspot => hotspot.id === hoverId)

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
      if (
        target.closest(
          '.workshop-hotspot, .workshop-card, .workshop-stage__canvas, .workshop-stage__controls',
        )
      ) {
        return
      }
      setSelectedId(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [selectedId])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !canUseWorkshopWebgl()) {
      return
    }
    let cancelled = false
    const start = async () => {
      try {
        const { createWorkshop } = await import('@/lib/createWorkshop')
        if (cancelled || sceneRef.current) {
          return
        }
        sceneRef.current = createWorkshop({
          canvas,
          githubLine,
          lampOn: lampRef.current,
          motion: motionRef.current,
          onHover: setHoverId,
          onLamp: () => {
            setLampOn(on => !on)
          },
          onSelect: setSelectedId,
        })
        sceneRef.current.toggleLamp(lampRef.current)
        sceneRef.current.motion(motionRef.current)
        setMode('webgl')
      } catch {
        setMode('still')
      }
    }
    void start()
    return () => {
      cancelled = true
      sceneRef.current?.dispose()
      sceneRef.current = null
    }
  }, [githubLine])

  useEffect(() => {
    sceneRef.current?.toggleLamp(lampOn)
  }, [lampOn])

  useEffect(() => {
    sceneRef.current?.motion(motionOn)
  }, [motionOn])

  const dismiss = () => {
    setSelectedId(null)
    sceneRef.current?.dismiss()
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
      data-mode={mode}
    >
      <p className="visually-hidden" id={hintId}>
        {githubSpoken
          ? `Local model ready. ${githubSpoken}. Select a desk object to read a short note. The lamp toggles the light.`
          : 'Local model ready. Select a desk object to read a short note. The lamp toggles the light.'}
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
        <canvas
          className="workshop-stage__canvas"
          ref={canvasRef}
          tabIndex={-1}
        />
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
              data-label-x={hotspot.labelX}
              data-label-y={hotspot.labelY}
              data-workshop-id={hotspot.id}
              key={hotspot.id}
              onBlur={() => {
                setHoverId(current => (current === hotspot.id ? null : current))
              }}
              onClick={event => {
                onHotspotClick(event, hotspot)
              }}
              onFocus={() => {
                setHoverId(hotspot.id)
              }}
              onMouseEnter={() => {
                if (mode === 'still') {
                  setHoverId(hotspot.id)
                }
              }}
              onMouseLeave={() => {
                if (mode === 'still') {
                  setHoverId(current =>
                    current === hotspot.id ? null : current,
                  )
                }
              }}
              style={boundsStyle(hotspot.bounds)}
              type="button"
            >
              <span aria-hidden="true" className="workshop-hotspot__mark" />
              <span aria-hidden="true" className="workshop-hotspot__label">
                {hotspot.kind === 'card' ? hotspot.title : hotspot.objectLabel}
              </span>
            </button>
          ))}
        </div>
        {hoverHotspot && mode === 'webgl' ? (
          <p aria-hidden="true" className="workshop-stage__hover">
            {hoverHotspot.kind === 'card'
              ? hoverHotspot.title
              : hoverHotspot.objectLabel}
          </p>
        ) : null}
      </div>
      {mode === 'webgl' ? (
        <div className="workshop-stage__controls">
          <button
            className="workshop-stage__control"
            onClick={() => {
              setMotionOn(on => !on)
            }}
            type="button"
          >
            {motionOn ? 'Pause motion' : 'Resume motion'}
          </button>
          <button
            className="workshop-stage__control"
            onClick={() => {
              sceneRef.current?.reset()
            }}
            type="button"
          >
            Reset view
          </button>
        </div>
      ) : null}
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
          <p className="workshop-card__place">{selectedCard.objectLabel}</p>
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
          {selectedCard.id === 'local-ai' ? (
            <p className="workshop-card__signal">
              <span className="workshop-card__dot" />
              Ready
              {githubCardLine ? ` · ${githubCardLine}` : ''}
            </p>
          ) : null}
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
