import { useEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'

export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    const reveal = (element: HTMLElement) => element.classList.add('is-revealed')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return null
}
