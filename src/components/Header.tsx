import { Link, NavLink, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className={`site-header ${isHome ? 'home-header' : ''}`}>

      <Link
        className="brand brand-wordmark"
        to="/"
        aria-label="Únicas - Inicio"
      >
        <img
          className="brand-logo-wordmark"
          src={
  isHome
    ? '/logo-unicas-wordmark.png'
    : '/logo-unicas-header.png'
}
          alt="Únicas"
        />

        <span className="brand-by">
          By Fátima
        </span>
      </Link>

      <nav
        className="nav"
        aria-label="Navegación principal"
      >
        <NavLink to="/">
          Inicio
        </NavLink>

        <NavLink to="/sobre-mi">
          Sobre mí
        </NavLink>

        <NavLink to="/unicas">
          Únicas
        </NavLink>

        <NavLink to="/portafolio">
          Trabajos
        </NavLink>

        <NavLink to="/formacion">
          Formación
        </NavLink>

        <NavLink to="/contacto">
          Contacto
        </NavLink>
      </nav>

      <Link
        className="header-cta"
        to="/contacto"
      >
        Contáctame
      </Link>

    </header>
  )
}
