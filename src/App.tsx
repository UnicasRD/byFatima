import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Brand } from './pages/Brand'
import { Portfolio } from './pages/Portfolio'
import { Training } from './pages/Training'
import { Contact } from './pages/Contact'
import { AdminLogin } from './pages/AdminLogin'
import { AdminDashboard } from './pages/AdminDashboard'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname])

  return null
}

function Layout() {
  const location = useLocation()
  const admin = location.pathname.startsWith('/admin')

  return (
    <>
      <ScrollToTop />

      {!admin && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/unicas" element={<Brand />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/formacion" element={<Training />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      {!admin && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
