import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { BOOKING_URL, WHATSAPP_URL } from '../data/site'

type BookingActionsProps = {
  className?: string
  compact?: boolean
}

export function BookingActions({ className = '', compact = false }: BookingActionsProps) {
  const sizeClass = compact ? ' button--small' : ''

  return (
    <div className={`booking-actions ${className}`.trim()}>
      <a className={`button${sizeClass}`} href={BOOKING_URL} target="_blank" rel="noreferrer">
        Agendar pelo app <ArrowUpRight aria-hidden="true" />
      </a>
      <a className={`button button--outline-light${sizeClass}`} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        Agendar pelo WhatsApp <MessageCircle aria-hidden="true" />
      </a>
    </div>
  )
}
