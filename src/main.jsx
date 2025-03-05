import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import Error from './pages/Error/Error.jsx'
import Housing from './pages/Housing/Housing.jsx'
import About from './pages/About/About.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Error />
    <Housing />
    <About />
  </StrictMode>,
)

