import { useParams } from 'react-router-dom'
import './Housing.scss'

function Housing() {
  const { id } = useParams()
  return (
    <main>
      <div className="Housing">
        <h1 className="Housing__title"> Page Logements</h1>
        <p>Logement sélectionné : {id}</p>
      </div>
    </main>
  )
}

export default Housing
