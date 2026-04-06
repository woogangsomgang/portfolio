import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import About from './pages/About';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Index from './pages/Index';

function App() {
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const header = headerRef.current
      if (!header) return

      if (currentY > lastScrollY.current && currentY > 60) {
        header.classList.add('hidden')
      } else {
        header.classList.remove('hidden')
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="container">
        <div className="header" ref={headerRef}>
          <img src="./assets/svg/JYS_logo.svg" alt="JYS 로고" />
          <div className="menu">
            <NavLink to="/"> Main </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/projects"> Projects </NavLink>
            <NavLink to="/contact"> Contact </NavLink>
          </div>
        </div>
        <div className="header-line"></div>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App