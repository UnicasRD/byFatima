import { useEffect } from 'react'

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

export function useScrollReveal() {
  useEffect(() => {
    const elements = new Set<HTMLElement>()

    const homeGroups = [
      { selector: '.about-visual', direction: 'left' },
      { selector: '.about-content', direction: 'right' },
      { selector: '.section-title-row', direction: 'up' },
      { selector: '.service-card', direction: 'up', stagger: true },
      { selector: '.portfolio-heading', direction: 'up' },
      { selector: '.collage-carousel-wrapper', direction: 'scale' },
      { selector: '.brand-copy', direction: 'left' },
      { selector: '.brand-card', direction: 'scale', stagger: true },
      { selector: '.compact-process', direction: 'left' },
      { selector: '.compact-process-item', direction: 'up', stagger: true },
      { selector: '.compact-contact', direction: 'right' },
      { selector: '.brand-quote p', direction: 'scale' },
    ] as const

    homeGroups.forEach((group) => {
      const matches = document.querySelectorAll<HTMLElement>(
        group.selector,
      )

      matches.forEach((element, index) => {
        element.classList.add(
          'reveal-on-scroll',
          `reveal-${group.direction}`,
        )

        if (group.stagger) {
          const delay = Math.min(index, 4)
          element.classList.add(`reveal-delay-${delay}`)
        }

        elements.add(element)
      })
    })

    document
      .querySelectorAll<HTMLElement>('[data-reveal]')
      .forEach((element) => {
        const direction =
          (element.dataset.reveal as RevealDirection) || 'up'

        element.classList.add(
          'reveal-on-scroll',
          `reveal-${direction}`,
        )

        const delay = element.dataset.revealDelay

        if (delay) {
          element.style.transitionDelay = `${delay}ms`
        }

        elements.add(element)
      })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -45px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
