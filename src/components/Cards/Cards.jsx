import PropTypes from 'prop-types'
import './Cards.scss'

function HousingCard({ title, cover }) {
  return (
    <article className="housingCard">
      <img src={cover} alt={title} className="housingCard__img" />
      <div className="housingCard__rectangle" />
      <h2 className="housingCard__title">{title}</h2>
    </article>
  )
}

HousingCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default HousingCard
