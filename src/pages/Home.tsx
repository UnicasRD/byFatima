import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPublishedProjects } from '../lib/projects'
import type { Project } from '../types/project'
import { useScrollReveal } from '../hooks/useScrollReveal'

const categories = [
  {
    label: 'Cumpleaños',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 23h28v16H10z" />
        <path d="M8 23h32" />
        <path d="M14 23v-7h20v7" />
        <path d="M19 16v-5" />
        <path d="M24 16V9" />
        <path d="M29 16v-5" />
        <path d="M17 31c2 2 4 2 7 0 3 2 5 2 7 0 2 2 4 2 7 0" />
      </svg>
    ),
  },
  {
    label: 'Bautizos',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6v15" />
        <path d="M18 12h12" />
        <path d="M24 21c-6 7-10 11-10 16a10 10 0 0 0 20 0c0-5-4-9-10-16Z" />
      </svg>
    ),
  },
  {
    label: 'Bodas',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="19" cy="27" r="10" />
        <circle cx="29" cy="27" r="10" />
        <path d="M23 14l6-6 6 6-6 6z" />
      </svg>
    ),
  },
  {
    label: 'Material educativo',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 13c-5-4-11-5-17-3v27c6-2 12-1 17 3" />
        <path d="M24 13c5-4 11-5 17-3v27c-6-2-12-1-17 3" />
        <path d="M24 13v27" />
      </svg>
    ),
  },
  {
    label: 'Detalles personalizados',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 19h30v22H9z" />
        <path d="M7 14h34v8H7z" />
        <path d="M24 14v27" />
        <path d="M24 14c-5 0-10-2-10-6 0-2 2-4 4-4 4 0 6 6 6 10Z" />
        <path d="M24 14c5 0 10-2 10-6 0-2-2-4-4-4-4 0-6 6-6 10Z" />
      </svg>
    ),
  },
]

const services = [
  {
    number: '01',
    title: 'Cumpleaños',
    text: 'Detalles personalizados creados para acompañar cada temática y celebración.',
    className: 'service-purple',
  },
  {
    number: '02',
    title: 'Bodas y celebraciones',
    text: 'Papelería y piezas especiales para acompañar momentos importantes.',
    className: 'service-orange',
  },
  {
    number: '03',
    title: 'Material educativo',
    text: 'Recursos creativos pensados para aprender, jugar y descubrir.',
    className: 'service-yellow',
  },
  {
    number: '04',
    title: 'Detalles personalizados',
    text: 'Ideas convertidas en piezas únicas para regalar, decorar o conservar.',
    className: 'service-red',
  },
]

export function Home() {
  useScrollReveal()
  const [projects, setProjects] = useState<Project[]>([])
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getPublishedProjects()
      .then(setProjects)
      .catch(console.error)
  }, [])

  const portfolioProjects = [...projects].sort((a, b) => {
  if (a.featured === b.featured) return 0
  return a.featured ? -1 : 1
})

  const moveCarousel = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current

    if (!carousel) return

    carousel.scrollBy({
      left:
        direction === 'right'
          ? carousel.clientWidth
          : -carousel.clientWidth,
      behavior: 'smooth',
    })
  }

  const PROJECTS_PER_COLLAGE = 6

const collageGroups =
  portfolioProjects.length > 0
    ? Array.from({
        length: Math.ceil(
          portfolioProjects.length / PROJECTS_PER_COLLAGE
        ),
      }).map((_, groupIndex) => {

        const start =
          groupIndex * PROJECTS_PER_COLLAGE

        const group = portfolioProjects.slice(
          start,
          start + PROJECTS_PER_COLLAGE
        )

        /*
          Si el último collage no tiene 6 trabajos,
          completamos las posiciones con proyectos
          anteriores para que nunca queden huecos.
        */
        let fillIndex = 0

        while (
          group.length < PROJECTS_PER_COLLAGE &&
          portfolioProjects.length > 0
        ) {
          group.push(
            portfolioProjects[
              fillIndex % portfolioProjects.length
            ]
          )

          fillIndex++
        }

        return group
      })
    : []

  return (
    <main>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="hero hero-modern">

        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-line hero-line-one" />
        <div className="hero-line hero-line-two" />

        <div className="hero-inner">

          <div className="hero-copy">

            <span className="hero-kicker">
              FÁTIMA · CREADORA DE ÚNICAS
            </span>

            <h1>
              Ideas hechas a mano para momentos que
              <em> importan.</em>
            </h1>

            <p>
              Diseño y creo papelería y detalles personalizados
              para celebraciones, regalos y proyectos especiales.
            </p>

            <div className="hero-actions">

              <Link
                className="btn btn-primary hero-main-btn"
                to="/portafolio"
              >
                Ver mis trabajos
                <span>→</span>
              </Link>

              <Link
                className="btn btn-ghost hero-ghost"
                to="/sobre-mi"
              >
                Conóceme
              </Link>

            </div>

            <div className="hero-mini-proof">

              <span className="proof-dot" />

              <span>
                Diseños personalizados · Hechos con intención
              </span>

            </div>

          </div>


          <div className="hero-photo-wrap">

            <div className="hero-photo-frame">

              <img
                src="/fatima.jpeg"
                alt="Fátima, creadora de Únicas"
              />

              <span className="photo-glow" />

            </div>

            <div className="hero-signature">
              <span>Únicas</span>
              <small>creado por Fátima</small>
            </div>

            <div className="floating-note floating-note-one">
              hecho a mano
            </div>

            <div className="floating-note floating-note-two">
              con identidad
            </div>

          </div>

        </div>


        <div className="hero-categories">

          {categories.map((category) => (

            <div
              className="hero-category"
              key={category.label}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <span className="category-label">
                {category.label}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* ======================================================
          SOBRE FÁTIMA
      ====================================================== */}

      <section className="home-about">

        <div className="home-container home-about-grid">

          <div className="about-visual">

            <div className="about-photo">

              <img
  src="/fatima-taller.png"
  alt="Fátima trabajando en su taller"
/>

            </div>

            <div className="about-shape about-shape-orange" />
            <div className="about-shape about-shape-yellow" />

            <div className="about-stamp">

              <strong>
                Únicas
              </strong>

              <span>
                creatividad con identidad
              </span>

            </div>

          </div>


          <div className="about-content">

            <span className="section-kicker">
              SOBRE FÁTIMA
            </span>

            <h2>
              Detrás de cada proyecto hay una idea,
              un proceso y mucho cuidado.
            </h2>

            <div className="animated-line" />

            <p>
              Soy Fátima, creadora de Únicas. Disfruto transformar
              ideas en detalles personalizados que tengan identidad,
              intención y significado.
            </p>

            <p>
              Cada proyecto comienza escuchando lo que la persona
              imagina y buscando la mejor forma de convertirlo en
              algo especial.
            </p>

            <Link
              className="modern-link"
              to="/sobre-mi"
            >
              Conocer mi historia
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ======================================================
          LO QUE HAGO
      ====================================================== */}

      <section className="services-section">

        <div className="home-container">

          <div className="section-title-row">

            <div>

              <span className="section-kicker">
                LO QUE HAGO
              </span>

              <h2>
                Ideas diferentes para momentos diferentes.
              </h2>

            </div>

            <p>
              Cada trabajo puede adaptarse a una temática,
              una ocasión o una idea completamente personal.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => (

              <article
                className={`service-card ${service.className}`}
                key={service.title}
              >

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-circle" />

                <div className="service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <Link to="/portafolio">
                    Ver trabajos
                    <span>↗</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          PORTAFOLIO - COLLAGE CARRUSEL
      ====================================================== */}

      <section className="portfolio-home">

        <div className="home-container">

          <div className="portfolio-heading">

            <div>

              <span className="section-kicker">
                PORTAFOLIO
              </span>

              <h2>
                Una muestra de lo que hago.
              </h2>

            </div>

            <Link
              className="modern-link"
              to="/portafolio"
            >
              Ver todos los trabajos
              <span>→</span>
            </Link>

          </div>


          {portfolioProjects.length > 0 ? (

            <div className="collage-carousel-wrapper">

              <button
                className="collage-arrow collage-arrow-left"
                type="button"
                aria-label="Trabajos anteriores"
                onClick={() => moveCarousel('left')}
              >
                ←
              </button>


              <div
                className="collage-carousel"
                ref={carouselRef}
              >

                {collageGroups.map((group, groupIndex) => (

                  <div
                    className="collage-page"
                    key={groupIndex}
                  >

                    {group.map((project, index) => (

                      <article
                        className={`collage-project collage-project-${index + 1}`}
                        key={`${project.id}-${groupIndex}-${index}`}
                      >

                        <div className="collage-image">

                          {project.cover_url ? (

                            <img
                              src={project.cover_url}
                              alt={project.title}
                            />

                          ) : (

                            <div className="project-no-image">
                              Únicas
                            </div>

                          )}


                          <div className="collage-info">

                            <span>
                              {project.category}
                            </span>

                            <h3>
                              {project.title}
                            </h3>

                            <p>
                              {project.description ||
                                'Proyecto personalizado creado por Únicas.'}
                            </p>

                            <Link to="/portafolio">
                              Ver proyecto →
                            </Link>

                          </div>

                        </div>

                      </article>

                    ))}

                  </div>

                ))}

              </div>


              <button
                className="collage-arrow collage-arrow-right"
                type="button"
                aria-label="Siguientes trabajos"
                onClick={() => moveCarousel('right')}
              >
                →
              </button>

            </div>

          ) : (

            <div className="collage-page collage-demo">

              <article className="collage-project collage-project-1">

                <div className="collage-placeholder purple-demo">

                  <span>
                    Únicas
                  </span>

                  <div>
                    <h3>
                      Proyectos personalizados
                    </h3>

                    <p>
                      Aquí aparecerán los trabajos destacados
                      publicados por Fátima.
                    </p>
                  </div>

                </div>

              </article>


              <article className="collage-project collage-project-2">

                <div className="collage-placeholder orange-demo">
                  <span>Crear</span>
                </div>

              </article>


              <article className="collage-project collage-project-3">

                <div className="collage-placeholder yellow-demo">
                  <span>Diseñar</span>
                </div>

              </article>


              <article className="collage-project collage-project-4">

                <div className="collage-placeholder red-demo">
                  <span>Personalizar</span>
                </div>

              </article>

            </div>

          )}

        </div>

      </section>


      {/* ======================================================
          LA MARCA
      ====================================================== */}

      <section className="brand-story">

        <div className="brand-background-text">
          ÚNICAS
        </div>

        <div className="home-container brand-story-grid">

          <div className="brand-copy">

            <span className="section-kicker light-kicker">
              LA MARCA
            </span>

            <h2>
              Detalles creados para sentirse realmente tuyos.
            </h2>

            <p>
              Únicas nace de la idea de que cada celebración,
              regalo o proyecto merece tener su propia identidad.
              Cada pieza busca transmitir algo diferente y adaptarse
              a la persona, la ocasión y la idea que le dio origen.
            </p>

            <div className="brand-tags">

              <span>Papelería</span>
              <span>Celebraciones</span>
              <span>Regalos</span>
              <span>Educación</span>

            </div>

            <Link
              className="brand-button"
              to="/unicas"
            >
              Conocer Únicas
              <span>→</span>
            </Link>

          </div>


          <div className="brand-art">

            <div className="brand-card brand-card-one">
              <span>CREAR</span>
            </div>

            <div className="brand-card brand-card-two">
              <span>DISEÑAR</span>
            </div>

            <div className="brand-card brand-card-three">
              <span>PERSONALIZAR</span>
            </div>

            <div className="brand-orbit" />

          </div>

        </div>

      </section>


      {/* ======================================================
          PROCESO + HABLEMOS
      ====================================================== */}

      <section className="process-contact-section">

        <div className="home-container process-contact-grid">

          <div className="compact-process">

            <span className="section-kicker">
              EL PROCESO
            </span>

            <h2>
              De una idea a algo único.
            </h2>


            <div className="compact-process-list">

              <div className="compact-process-item">

                <span>01</span>

                <div>
                  <h3>Cuéntame tu idea</h3>

                  <p>
                    Empezamos por lo que necesitas,
                    la ocasión y el estilo.
                  </p>
                </div>

              </div>


              <div className="compact-process-item">

                <span>02</span>

                <div>
                  <h3>Diseñamos</h3>

                  <p>
                    Buscamos la propuesta que mejor
                    represente tu idea.
                  </p>
                </div>

              </div>


              <div className="compact-process-item">

                <span>03</span>

                <div>
                  <h3>Creamos</h3>

                  <p>
                    Cada detalle comienza a tomar forma
                    cuidando el diseño y la terminación.
                  </p>
                </div>

              </div>


              <div className="compact-process-item">

                <span>04</span>

                <div>
                  <h3>Tu proyecto cobra vida</h3>

                  <p>
                    El resultado final es una pieza
                    creada especialmente para ti.
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div className="compact-contact">

            <div className="contact-deco contact-deco-one" />
            <div className="contact-deco contact-deco-two" />

            <div className="compact-contact-content">

              <span className="section-kicker light-kicker">
                HABLEMOS
              </span>

              <h2>
                ¿Tienes una idea en mente?
              </h2>

              <p>
                Cuéntame qué quieres crear y comencemos
                a darle forma.
              </p>

              <Link
                className="contact-button"
                to="/contacto"
              >
                Contactar
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          BANNER FINAL
      ====================================================== */}

      <section className="brand-quote">

        <span className="quote-symbol">
          ✦
        </span>

        <p>
          Cada celebración merece
          <strong> ser única.</strong>
        </p>

      </section>

    </main>
  )
}