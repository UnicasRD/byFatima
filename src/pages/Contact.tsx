import { FormEvent, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Contact() {
  useScrollReveal()

  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="inner-page contact-page">
      <section className="inner-hero contact-page-hero">
        <div className="contact-page-orbit contact-orbit-one" />
        <div className="contact-page-orbit contact-orbit-two" />

        <div className="inner-container contact-page-hero-grid">
          <div data-reveal="left">
            <span className="inner-kicker inner-kicker-light">
              CONTACTO
            </span>

            <h1>
              Cuéntame qué tienes en mente y empezamos desde
              <em> ahí.</em>
            </h1>

            <p>
              Una celebración, un regalo, un material educativo o
              una idea difícil de explicar. Podemos comenzar con
              unas pocas palabras.
            </p>
          </div>

          <div className="contact-mini-card" data-reveal="scale">
            <span>01</span>
            <strong>Cuéntame tu idea</strong>
            <p>No necesitas llegar con todo decidido.</p>
          </div>
        </div>
      </section>

      <section className="inner-section contact-form-section">
        <div className="inner-container contact-form-grid">
          <div className="contact-intro" data-reveal="left">
            <span className="inner-kicker">HABLEMOS</span>

            <h2>
              Los buenos proyectos empiezan con una conversación.
            </h2>

            <p>
              Este formulario queda preparado visualmente. Más
              adelante podemos conectarlo a WhatsApp, correo o al
              panel de administración.
            </p>

            <div className="contact-points">
              <div>
                <span>01</span>
                <p>Qué necesitas</p>
              </div>

              <div>
                <span>02</span>
                <p>Para cuándo</p>
              </div>

              <div>
                <span>03</span>
                <p>Qué estilo imaginas</p>
              </div>
            </div>
          </div>

          <form
            className="creative-contact-form"
            onSubmit={handleSubmit}
            data-reveal="right"
          >
            <div className="form-two-columns">
              <label>
                <span>Nombre</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </label>

              <label>
                <span>Contacto</span>
                <input
                  type="text"
                  name="contact"
                  placeholder="WhatsApp o correo"
                  required
                />
              </label>
            </div>

            <label>
              <span>¿Qué te gustaría crear?</span>

              <select name="project" defaultValue="">
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Cumpleaños</option>
                <option>Boda o celebración</option>
                <option>Material educativo</option>
                <option>Regalo personalizado</option>
                <option>Otra idea</option>
              </select>
            </label>

            <label>
              <span>Cuéntame un poco</span>

              <textarea
                name="message"
                placeholder="Tema, colores, fecha, idea..."
                required
              />
            </label>

            <button className="creative-submit" type="submit">
              Enviar consulta <span>→</span>
            </button>

            {sent && (
              <p className="form-demo-message">
                ✦ El formulario ya responde correctamente. Falta
                conectarlo al medio de envío que elijamos.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="contact-bottom-strip">
        <div className="inner-container" data-reveal="up">
          <span>CREAR</span>
          <i>✦</i>
          <span>PERSONALIZAR</span>
          <i>✦</i>
          <span>CELEBRAR</span>
        </div>
      </section>
    </main>
  )
}
