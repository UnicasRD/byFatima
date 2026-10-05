import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const values = [
  {
    number: '01',
    title: 'Crear con intención',
    text: 'Cada pieza comienza con una idea y busca tener sentido para la persona que la recibe.',
  },
  {
    number: '02',
    title: 'Cuidar los detalles',
    text: 'Diseño, materiales, proporciones y terminación forman parte del mismo proceso.',
  },
  {
    number: '03',
    title: 'Hacerlo personal',
    text: 'No me interesa repetir fórmulas: cada proyecto merece conservar su propia identidad.',
  },
]

const timeline = [
  {
    label: 'PRIMEROS PASOS',
    title: 'La curiosidad se convierte en oficio',
    text: 'Empiezo a experimentar con papel, impresión, color, corte y pequeños detalles hechos a mano.',
  },
  {
    label: 'PROCESO',
    title: 'Aprender haciendo',
    text: 'Cada proyecto se convierte en una oportunidad para mejorar técnicas, materiales y acabados.',
  },
  {
    label: 'HOY',
    title: 'Únicas toma forma',
    text: 'Una marca creativa donde reúno papelería, celebraciones, recursos educativos y piezas personalizadas.',
  },
]

export function About() {
  useScrollReveal()

  return (
    <main className="inner-page about-page">
      <section className="inner-hero inner-hero-purple">
        <div className="inner-hero-shape inner-hero-shape-one" />
        <div className="inner-hero-shape inner-hero-shape-two" />

        <div className="inner-container inner-hero-grid">
          <div data-reveal="left">
            <span className="inner-kicker inner-kicker-light">
              SOBRE FÁTIMA
            </span>

            <h1>
              Creo con las manos, pero todo comienza con una
              <em> idea.</em>
            </h1>

            <p>
              Detrás de Únicas hay curiosidad, aprendizaje,
              creatividad y muchas horas convirtiendo ideas en
              piezas que puedan sentirse personales.
            </p>
          </div>

          <div
            className="inner-hero-note"
            data-reveal="scale"
            data-reveal-delay="120"
          >
            <span>✦</span>
            <p>
              Los pequeños detalles pueden cambiar por completo
              la forma en que recordamos un momento.
            </p>
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-container about-story-grid">
          <div className="about-page-photo-wrap" data-reveal="left">
            <div className="about-page-photo">
              <img
                src="/fatima-taller.png"
                alt="Fátima trabajando en su taller creativo"
              />
            </div>

            <div className="about-page-photo-tag">
              <strong>Únicas</strong>
              <span>ideas que toman forma</span>
            </div>

            <div className="ambient-dot ambient-dot-orange" />
            <div className="ambient-dot ambient-dot-yellow" />
          </div>

          <div className="about-page-copy" data-reveal="right">
            <span className="inner-kicker">MI FORMA DE CREAR</span>

            <h2>
              Entre papeles, colores, pruebas y muchas versiones.
            </h2>

            <p>
              Mi trabajo mezcla diseño y elaboración manual. Me
              gusta comenzar por una idea sencilla, probar
              combinaciones, ajustar proporciones y encontrar ese
              punto donde todo empieza a sentirse coherente.
            </p>

            <p>
              No busco que todas las piezas se parezcan. Me
              interesa que cada proyecto conserve su propia
              personalidad y responda a la ocasión para la que fue
              creado.
            </p>

            <div className="mini-signature">
              <span>Fátima</span>
              <small>creadora de Únicas</small>
            </div>
          </div>
        </div>
      </section>

      <section className="inner-section inner-soft-section">
        <div className="inner-container">
          <div className="inner-section-heading" data-reveal="up">
            <span className="inner-kicker">LO QUE ME GUÍA</span>
            <h2>Una forma de trabajar muy personal.</h2>
          </div>

          <div className="value-grid">
            {values.map((value, index) => (
              <article
                className="value-card"
                key={value.number}
                data-reveal="up"
                data-reveal-delay={String(index * 90)}
              >
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-container timeline-layout">
          <div className="timeline-heading" data-reveal="left">
            <span className="inner-kicker">EL CAMINO</span>
            <h2>Una marca construida proyecto a proyecto.</h2>
            <p>
              No nació de una fórmula exacta. Ha ido creciendo a
              medida que también crecía mi manera de diseñar.
            </p>
          </div>

          <div className="creative-timeline">
            {timeline.map((item, index) => (
              <article
                className="timeline-item"
                key={item.label}
                data-reveal="right"
                data-reveal-delay={String(index * 100)}
              >
                <span>{item.label}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-cta-section">
        <div className="inner-container inner-cta" data-reveal="scale">
          <div>
            <span className="inner-kicker inner-kicker-light">
              SIGUE DESCUBRIENDO
            </span>

            <h2>Ahora conoce el universo detrás de Únicas.</h2>
          </div>

          <Link className="inner-cta-button" to="/unicas">
            Conocer la marca <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
