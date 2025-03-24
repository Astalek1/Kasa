import React from 'react'
import './Collapse.scss'
import PropTypes from 'prop-types'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <button className="collapse__title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <div
        className={`collapse__txt ${isOpen ? 'collapse__txt--visible' : ''}`}
      >
        {Array.isArray(content)
          ? content.map((item, index) => <div key={index}>{item}</div>)
          : content}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

export default Collapse
