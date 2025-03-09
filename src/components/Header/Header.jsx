import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="Header">
        <img src="src/assets/Logo.svg" alt="Logo Kasa" />

        <nav>
          <Link className="link" to="/">
            <a>Accueil</a>
          </Link>
          <Link className="link" to="/About">
            <a>A-propos</a>
          </Link>
        </nav>
      </div>
    </>
  )
}
export default Header
