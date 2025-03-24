import './Host.scss'
import PropTypes from 'prop-types'

function Host({ name, picture }) {
  return (
    <div className="Host">
      <span className="Host__name">{name}</span>

      <img className="Host__img" src={picture} alt="photo de profile " />
    </div>
  )
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Host
