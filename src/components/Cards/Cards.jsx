import PropTypes from 'prop-types'
import './Cards.scss'

function HousingCard({ id, title, cover }) {
  return (
    <>
      <div
        key={id}
        id={id}
        className="housing-card"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <h2 className="housing-title">{title}</h2>
      </div>
    </>
  )
}

HousingCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default HousingCard
