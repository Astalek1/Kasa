import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="Header">
        <img
          className="Header__img"
          src="src/assets/Logo.svg"
          alt="Logo Kasa"
        />

        <nav className="Header__nav">
          <Link className="Header__link" to="/">
            Accueil
          </Link>
          <Link className="Header__link" to="/About">
            A-propos
          </Link>
        </nav>
      </div>
    </>
  )
}
export default Header
