import { useParams, Navigate } from 'react-router-dom'
import './Housing.scss'
import Slideshow from 'src/components/Slideshow/SlideShow.jsx'
import data from 'src/data/data.json'

function Housing() {
  const { id } = useParams()
  const housingData = data.find((item) => item.id === id)
  const pictures = housingData?.pictures || []

  if (!housingData) {
    return <Navigate to="*" />
  }

  return (
    <main>
      <div className="Housing">
        <h1 className="Housing__title"> Page Logements</h1>
        <p>Logement sélectionné : {id}</p>
        <Slideshow pictures={pictures} />
      </div>
    </main>
  )
}

export default Housing
