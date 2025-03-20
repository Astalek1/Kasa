import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './Cards.scss'

function HousingCard({ id, title, cover }) {
  const navigate = useNavigate()
  return (
    <article className="housingCard" onClick={() => navigate(`/Housing/${id}`)}>
      <img src={cover} alt={title} className="housingCard__img" />
      <div className="housingCard__rectangle" />
      <h2 className="housingCard__title">{title}</h2>
    </article>
  )
}

HousingCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default HousingCard
