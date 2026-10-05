import { useMemo, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type Category =
  | 'Todos'
  | 'Cumpleaños'
  | 'Celebraciones'
  | 'Educativo'
  | 'Regalos'

type DemoProject = {
  title: string
  category: Exclude<Category, 'Todos'>
  description: string
  className: string
  letter: string
}

const filters: Category[] = [
  'Todos',
  'Cumpleaños',
  'Celebraciones',
  'Educativo',
  'Regalos',
]

const projects: DemoProject[] = [
  {
    title: 'Una fiesta entre estrellas',
    category: 'Cumpleaños',
    description:
      'Conjunto de detalles coordinados para una celebración infantil con una estética alegre y ligera.',
    className: 'portfolio-purple',
    letter: 'E',
  },
  {
    title: 'Pequeño explorador',
    category: 'Cumpleaños',
    description:
      'Papelería temática con piezas personalizadas pensadas para compartir, regalar y decorar.',
    className: 'portfolio-orange',
    letter: 'P',
  },
  {
    title: 'Aprendo jugando',
    category: 'Educativo',
    description:
      'Colección de materiales manipulativos para reconocer formas, números y primeras relaciones.',
    className: 'portfolio-yellow',
    letter: 'A',
  },
  {
    title: 'Sí, quiero',
    category: 'Celebraciones',
    description:
      'Papelería delicada para acompañar una celebración íntima con una identidad visual coherente.',
    className: 'portfolio-red',
    letter: 'S',
  },
  {
    title: 'Un detalle para guardar',
    category: 'Regalos',
    description:
      'Presentación personalizada creada alrededor de una pequeña historia y una fecha especial.',
    className: 'portfolio-soft-purple',
    letter: 'U',
  },
  {
    title: 'Colores que enseñan',
    category: 'Educativo',
    description:
      'Recursos visuales creados para combinar aprendizaje, juego y resistencia en el uso diario.',
    className: 'portfolio-soft-orange',
    letter: 'C',
  },
]

export function Portfolio() {
  useScrollReveal()

  const [activeFilter, setActiveFilter] =
    useState<Category>('Todos')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects

    return projects.filter(
      (project) => project.category === activeFilter,
    )
  }, [activeFilter])

  return (
    <main className="inner-page portfolio-page">
      <section className="inner-hero portfolio-page-hero">
        <div className="inner-container portfolio-page-heading">
          <div data-reveal="left">
            <span className="inner-kicker inner-kicker-light">
              TRABAJOS
            </span>

            <h1>
              Ideas distintas, procesos distintos,
              <em> resultados únicos.</em>
            </h1>
          </div>

          <p data-reveal="right">
            Una selección de proyectos de muestra que después
            podrás sustituir por tus trabajos reales desde el panel.
          </p>
        </div>
      </section>

      <section className="portfolio-browser">
        <div className="inner-container">
          <div className="portfolio-filter-row" data-reveal="up">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? 'portfolio-filter active'
                    : 'portfolio-filter'
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-page-grid">
            {visibleProjects.map((project, index) => (
              <article
                className="portfolio-page-card"
                key={project.title}
                data-reveal="up"
                data-reveal-delay={String((index % 3) * 90)}
              >
                <div
                  className={`portfolio-page-visual ${project.className}`}
                >
                  <div className="portfolio-visual-ring" />

                  <span>{project.category}</span>

                  <strong>{project.letter}</strong>
                </div>

                <div className="portfolio-page-info">
                  <span>{project.category}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>

                  <button
                    type="button"
                    className="project-text-link"
                  >
                    Ver proyecto <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-note">
        <div
          className="inner-container portfolio-note-inner"
          data-reveal="scale"
        >
          <span>✦</span>

          <p>
            Cada trabajo puede cambiar de temática, color o formato.
            La intención es que nunca pierda su identidad.
          </p>
        </div>
      </section>
    </main>
  )
}
