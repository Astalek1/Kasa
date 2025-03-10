import './Banner.scss'
import PropTypes from 'prop-types'

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="img-banner" />
      {title && <h1>{title}</h1>}
    </div>
  )
}
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Banner
