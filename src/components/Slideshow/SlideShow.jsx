import React, { useState } from 'react'
import './Slideshow.scss'
import PropTypes from 'prop-types'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    if (pictures.length <= 1) return
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToBack = () => {
    if (pictures.length <= 1) return
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <button className="slideshow__btn--back" onClick={goToBack}>
          &lt;
        </button>
      )}
      <img
        className="slideshow__img"
        src={pictures[currentIndex]}
        alt="image logement"
      />
      {pictures.length > 1 && (
        <button className="slideshow__btn--next" onClick={goToNext}>
          &gt;
        </button>
      )}
    </div>
  )
}

export default Slideshow
