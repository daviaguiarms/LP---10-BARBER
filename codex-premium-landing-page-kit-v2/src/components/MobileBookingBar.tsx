import { CalendarCheck, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BOOKING_URL, WHATSAPP_URL } from '../data/site'

export function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const footer = document.querySelector<HTMLElement>('.footer')
      const hasLeftHero = window.scrollY > window.innerHeight * 0.72
      const footerIsNear = footer ? footer.getBoundingClientRect().top < window.innerHeight * 0.82 : false
      setIsVisible(hasLeftHero && !footerIsNear)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="mobile-booking-bar" aria-label="Opções de agendamento">
      <a href={BOOKING_URL} target="_blank" rel="noreferrer">
        <CalendarCheck aria-hidden="true" /> Pelo app
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" /> WhatsApp
      </a>
    </div>
  )
}
