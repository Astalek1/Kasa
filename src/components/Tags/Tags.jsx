import './Tags.scss'
import PropTypes from 'prop-types'

function Tags({ tag }) {
  return (
    <div className="tags">
      {tag.map((item, index) => (
        <span className="tags__item" key={index}>
          {item}
        </span>
      ))}
    </div>
  )
}

Tags.propTypes = {
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags
