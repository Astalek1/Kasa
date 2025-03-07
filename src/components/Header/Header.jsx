import './Header.scss'

function Header() {
  return (
    <>
      <div className="Header">
        <img src="src/assets/Logo.svg" Alt="Logo Kasa" />

        <nav>
          <a>Accueil</a>
          <a>A-propos</a>
        </nav>
      </div>
    </>
  )
}
export default Header
