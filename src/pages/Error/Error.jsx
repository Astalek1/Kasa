import './Error.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <div className="Error">
        <img src="src/assets/404.svg" alt="erreur 404" />
        <p> Oups! la page que vous demandez n'existe pas.</p>
      </div>
      <Link className="Link" to="/">
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </>
  )
}

export default Error
