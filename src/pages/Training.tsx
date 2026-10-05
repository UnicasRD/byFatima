import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const areas = [
  {
    number: '01',
    title: 'Diseño aplicado',
    text: 'Composición, color, tipografía y adaptación visual para piezas físicas y digitales.',
  },
  {
    number: '02',
    title: 'Producción creativa',
    text: 'Pruebas de materiales, acabados, corte, montaje y preparación de productos.',
  },
  {
    number: '03',
    title: 'Herramientas digitales',
    text: 'Software de diseño, organización, automatización y recursos para agilizar el trabajo.',
  },
  {
    number: '04',
    title: 'Negocio creativo',
    text: 'Costos, presentación, comunicación y procesos para construir una marca sostenible.',
  },
]

const courses = [
  {
    year: '2026',
    title: 'Diseño y composición para marcas creativas',
    place: 'Formación independiente',
  },
  {
    year: '2026',
    title: 'Procesos digitales y automatización',
    place: 'Aprendizaje aplicado',
  },
  {
    year: '2025',
    title: 'Producción artesanal y acabados',
    place: 'Práctica y experimentación',
  },
  {
    year: '2025',
    title: 'Contenido visual para redes',
    place: 'Formación complementaria',
  },
]

export function Training() {
  useScrollReveal()

  return (
    <main className="inner-page learning-page">
      <section className="inner-hero learning-hero">
        <div className="inner-container learning-hero-grid">
          <div data-reveal="left">
            <span className="inner-kicker">FORMACIÓN</span>

            <h1>
              Aprender también forma parte de
              <em> crear.</em>
            </h1>

            <p>
              Esta página reúne áreas de aprendizaje, cursos y
              conocimientos que alimentan mi forma de trabajar.
            </p>
          </div>

          <div className="learning-counter" data-reveal="scale">
            <span>∞</span>
            <strong>Siempre aprendiendo</strong>
            <small>una idea lleva a la siguiente</small>
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-container">
          <div className="inner-section-heading" data-reveal="up">
            <span className="inner-kicker">ÁREAS</span>
            <h2>Conocimientos que se conectan entre sí.</h2>
          </div>

          <div className="learning-area-grid">
            {areas.map((area, index) => (
              <article
                className="learning-area-card"
                key={area.number}
                data-reveal="up"
                data-reveal-delay={String(index * 90)}
              >
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <div className="learning-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-section inner-soft-section">
        <div className="inner-container education-grid">
          <div className="education-copy" data-reveal="left">
            <span className="inner-kicker">
              FORMACIÓN CONTINUA
            </span>

            <h2>Lo que aprendo termina entrando al taller.</h2>

            <p>
              No me interesa acumular cursos por acumularlos. Busco
              herramientas que pueda convertir en mejores procesos,
              mejores productos o nuevas posibilidades.
            </p>
          </div>

          <div className="course-list">
            {courses.map((course, index) => (
              <article
                className="course-row"
                key={`${course.year}-${course.title}`}
                data-reveal="right"
                data-reveal-delay={String(index * 90)}
              >
                <span>{course.year}</span>

                <div>
                  <h3>{course.title}</h3>
                  <p>{course.place}</p>
                </div>

                <b>↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-quote-section">
        <div
          className="inner-container learning-quote"
          data-reveal="scale"
        >
          <span>✦</span>

          <p>
            Crear mejor también significa aprender a mirar de otra
            manera.
          </p>
        </div>
      </section>

      <section className="inner-cta-section">
        <div className="inner-container inner-cta" data-reveal="scale">
          <div>
            <span className="inner-kicker inner-kicker-light">
              TRABAJOS
            </span>

            <h2>
              Todo ese aprendizaje termina convertido en proyectos.
            </h2>
          </div>

          <Link className="inner-cta-button" to="/portafolio">
            Ver portafolio <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
