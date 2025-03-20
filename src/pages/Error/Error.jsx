import './Error.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <main>
        <div className="Error">
          <p className="Error__404">404</p>
          <p className="Error__txt">
            Oups! la page que vous demandez n'existe pas.
          </p>
        </div>
        <Link className="Error__link" to="/">
          <p className="Error__link--txt">Retourner sur la page d'accueil</p>
        </Link>
      </main>
    </>
  )
}

export default Error
