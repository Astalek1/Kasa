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
          <svg
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      <img
        className="slideshow__img"
        src={pictures[currentIndex]}
        alt="image logement"
      />

      {pictures.length > 1 && (
        <>
          <p className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </p>

          <button className="slideshow__btn--next" onClick={goToNext}>
            <svg
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill="white"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Slideshow
