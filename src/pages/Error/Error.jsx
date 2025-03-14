import './Error.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <div className="Error">
        <img className="Error__img" src="src/assets/404.svg" alt="erreur 404" />
        <p className="Error__txt">
          Oups! la page que vous demandez n'existe pas.
        </p>
      </div>
      <Link className="Error__link" to="/">
        <p className="Error__link--txt">Retourner sur la page d'accueil</p>
      </Link>
    </>
  )
}

export default Error
