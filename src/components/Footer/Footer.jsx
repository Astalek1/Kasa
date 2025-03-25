import './Footer.scss'
import logo from 'src/assets/LOGO-Blanc.svg'

function Footer() {
  return (
    <footer>
      <div className="Footer">
        <img src={logo} alt="logo kasa" className="Footer__logo" />
        <p className="Footer__txt">© 2025 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
