type ShippedVisualProps = {
  slug: string
}

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

const ShippedVisual = ({ slug }: ShippedVisualProps) => {
  switch (slug) {
    case 'morning-who-needs-you':
      return <SlackBriefing />
    case 'imessage-agent-for-your-business':
      return <IMessageThread />
    default:
      return <div aria-hidden="true" className="shipped-card__placeholder" />
  }
}

export default ShippedVisual
