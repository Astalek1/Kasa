import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="Header">
        <img src="src/assets/Logo.svg" alt="Logo Kasa" />

        <nav>
          <Link className="link" to="/">
            Accueil
          </Link>
          <Link className="link" to="/About">
            A-propos
          </Link>
        </nav>
      </div>
    </>
  )
}
export default Header
