import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Housing from './pages/Housing/Housing'
import './app.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/Housing/:id" element={<Housing />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
