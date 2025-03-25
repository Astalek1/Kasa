import './Header.scss'
import { Link } from 'react-router-dom'
import logo from 'src/assets/Logo.svg'

function Header() {
  return (
    <header>
      <div className="Header">
        <img className="Header__img" src={logo} alt="Logo Kasa" />

        <nav className="Header__nav">
          <Link className="Header__link" to="/">
            Accueil
          </Link>
          <Link className="Header__link" to="/About">
            A-propos
          </Link>
        </nav>
      </div>
    </header>
  )
}
export default Header
