import './Rating.scss'
import PropTypes from 'prop-types'

function Rating({ rating }) {
  const stars = [0, 1, 2, 3, 4]
  return (
    <div className="Rating">
      {stars.map((index) =>
        index < rating ? (
          <span key={index} className="Rating__star Rating__star--full">
            ★
          </span>
        ) : (
          <span key={index} className="Rating__star Rating__star--empty">
            ★
          </span>
        )
      )}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}
export default Rating
