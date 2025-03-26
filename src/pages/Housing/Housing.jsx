import { useParams, Navigate } from 'react-router-dom'
import './Housing.scss'
import Slideshow from 'src/components/Slideshow/SlideShow'
import data from 'src/data/data.json'
import Collapse from 'src/components/Collapse/Collapse'
import Tags from 'src/components/Tags/Tags'
import Host from 'src/components/Host/Host'
import Rating from 'src/components/Rating/Rating'

function Housing() {
  const { id } = useParams()
  const housingData = data.find((item) => item.id === id)
  const pictures = housingData?.pictures || []

  if (!housingData) {
    return <Navigate to="*" />
  }

  return (
    <main className="Housing">
      <>
        <div className="Housing__Slideshow">
          <Slideshow pictures={pictures} />
        </div>
        <div className="Housing__container">
          <div className="Housing__infos">
            <div className="Housing__infos--left">
              <h1 className="Housing__title">{housingData.title}</h1>
              <p className="Housing__location">{housingData.location}</p>
              <Tags tag={housingData.tags} />
            </div>

            <div className="Housing__infos--right">
              <Host
                name={housingData.host.name}
                picture={housingData.host.picture}
              />

              <Rating rating={parseInt(housingData.rating)} />
            </div>
          </div>

          <div className="Housing__Collapse">
            <Collapse title="Description" content={housingData.description} />
            <Collapse title="Equipements" content={housingData.equipments} />
          </div>
        </div>
      </>
    </main>
  )
}

export default Housing
