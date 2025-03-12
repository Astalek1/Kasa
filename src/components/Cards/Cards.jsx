import PropTypes from 'prop-types'
import './Cards.scss'

function HousingCard({ title, cover }) {
  return (
    <article className="housing-card">
      <img src={cover} alt={title} className="housing-img" />
      <div className="housing-rectangle" />
      <h2 className="housing-title">{title}</h2>
    </article>
  )
}

HousingCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default HousingCard
