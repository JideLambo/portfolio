type ShippedVisualProps = {
  slug: string
}

type ShippedVisualKind =
  | 'imessage-agent-for-your-business'
  | 'local-ai-on-your-machine'
  | 'morning-who-needs-you'

const SlackBriefing = () => (
  <div aria-hidden="true" className="shipped-mini shipped-mini--slack">
    <div className="shipped-mini__panel">
      <p className="shipped-mini__account">Helios Cloud</p>
      <p className="shipped-mini__status">Quiet for 18 days</p>
      <p className="shipped-mini__move">Send a check-in this morning</p>
      <p className="shipped-mini__draft">
        Draft: looping in after the exec change
      </p>
    </div>
  </div>
)

const IMessageThread = () => (
  <div aria-hidden="true" className="shipped-mini shipped-mini--imessage">
    <div className="shipped-mini__panel">
      <p className="shipped-mini__bubble shipped-mini__bubble--in">
        Any openings Friday?
      </p>
      <p className="shipped-mini__bubble shipped-mini__bubble--out">
        11:30 is free.
      </p>
      <p className="shipped-mini__bubble shipped-mini__bubble--in">Book it</p>
    </div>
  </div>
)

const LocalStatus = () => (
  <div aria-hidden="true" className="shipped-mini shipped-mini--local">
    <div className="shipped-mini__panel">
      <p className="shipped-mini__model">qwen2.5:7b</p>
      <p className="shipped-mini__ready">
        <span className="shipped-mini__dot" />
        Ready
      </p>
      <p className="shipped-mini__tool">book / reply</p>
    </div>
  </div>
)

const isShippedVisualKind = (slug: string): slug is ShippedVisualKind =>
  slug === 'morning-who-needs-you' ||
  slug === 'imessage-agent-for-your-business' ||
  slug === 'local-ai-on-your-machine'

const visualFor = (slug: ShippedVisualKind) => {
  switch (slug) {
    case 'morning-who-needs-you':
      return <SlackBriefing />
    case 'imessage-agent-for-your-business':
      return <IMessageThread />
    case 'local-ai-on-your-machine':
      return <LocalStatus />
    default: {
      const exhaustive: never = slug
      throw new Error(`Unknown shipped visual: ${exhaustive}`)
    }
  }
}

const ShippedVisual = ({ slug }: ShippedVisualProps) => {
  if (!isShippedVisualKind(slug)) {
    return <div aria-hidden="true" className="shipped-card__placeholder" />
  }

  return visualFor(slug)
}

export default ShippedVisual
