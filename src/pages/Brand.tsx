import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const universes = [
  {
    number: '01',
    title: 'Celebraciones',
    text: 'Papelería y detalles que ayudan a construir la identidad visual de un momento especial.',
    className: 'universe-purple',
  },
  {
    number: '02',
    title: 'Regalos',
    text: 'Piezas personalizadas pensadas para sentirse cercanas, diferentes y hechas para alguien.',
    className: 'universe-orange',
  },
  {
    number: '03',
    title: 'Educación',
    text: 'Materiales visuales y manipulativos que combinan aprendizaje, juego y diseño.',
    className: 'universe-yellow',
  },
  {
    number: '04',
    title: 'Ideas especiales',
    text: 'Proyectos que no caben en una sola categoría, pero sí dentro del universo de Únicas.',
    className: 'universe-red',
  },
]

const principles = [
  'Personal antes que genérico',
  'Creativo sin ser recargado',
  'Color con intención',
  'Detalles que tienen sentido',
]

export function Brand() {
  useScrollReveal()

  return (
    <main className="inner-page brand-page">
      <section className="inner-hero brand-page-hero">
        <div className="brand-hero-word">ÚNICAS</div>

        <div className="inner-container brand-page-intro">
          <div data-reveal="left">
            <span className="inner-kicker inner-kicker-light">
              LA MARCA
            </span>

            <h1>
              Una marca para ideas que no quieren sentirse
              <em> iguales.</em>
            </h1>
          </div>

          <div className="brand-page-intro-copy" data-reveal="right">
            <p>
              Únicas reúne diseño, elaboración manual y
              personalización en un mismo lugar. Cada proyecto
              cambia, pero la intención se mantiene: crear algo
              que tenga identidad.
            </p>

            <div className="brand-page-mini-tags">
              <span>Crear</span>
              <span>Diseñar</span>
              <span>Personalizar</span>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-container manifesto-grid">
          <div className="manifesto-title" data-reveal="left">
            <span className="inner-kicker">MANIFIESTO</span>
            <h2>Lo especial no siempre tiene que ser complicado.</h2>
          </div>

          <div className="manifesto-copy" data-reveal="right">
            <p>
              A veces una combinación de colores, una palabra, una
              forma o un pequeño detalle es suficiente para
              transformar una pieza común en algo que se siente
              propio.
            </p>

            <p>
              Por eso Únicas no busca repetir fórmulas. Busca
              interpretar cada idea y convertirla en una propuesta
              visual sencilla, cuidada y con personalidad.
            </p>
          </div>
        </div>
      </section>

      <section className="inner-section inner-soft-section">
        <div className="inner-container">
          <div className="inner-section-heading" data-reveal="up">
            <span className="inner-kicker">EL UNIVERSO ÚNICAS</span>
            <h2>Distintas formas de crear, una misma identidad.</h2>
          </div>

          <div className="brand-universe-grid">
            {universes.map((item, index) => (
              <article
                className={`brand-universe-card ${item.className}`}
                key={item.number}
                data-reveal="up"
                data-reveal-delay={String(index * 90)}
              >
                <span className="universe-number">
                  {item.number}
                </span>

                <div className="universe-orbit" />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-container brand-principles-grid">
          <div className="brand-principles-art" data-reveal="scale">
            <div className="principle-card principle-card-one">
              CREAR
            </div>

            <div className="principle-card principle-card-two">
              SENTIR
            </div>

            <div className="principle-card principle-card-three">
              RECORDAR
            </div>

            <div className="principle-orbit" />
          </div>

          <div data-reveal="right">
            <span className="inner-kicker">LO QUE NO CAMBIA</span>

            <h2 className="inner-side-title">
              Cuatro ideas presentes en cada proyecto.
            </h2>

            <div className="principles-list">
              {principles.map((principle, index) => (
                <div
                  className="principle-line"
                  key={principle}
                  data-reveal="right"
                  data-reveal-delay={String(index * 80)}
                >
                  <span>0{index + 1}</span>
                  <strong>{principle}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="inner-cta-section inner-orange-cta">
        <div className="inner-container inner-cta" data-reveal="scale">
          <div>
            <span className="inner-kicker">PROYECTOS</span>
            <h2>La mejor forma de entender Únicas es verla crear.</h2>
          </div>

          <Link className="inner-cta-button inner-cta-dark" to="/portafolio">
            Ver trabajos <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
