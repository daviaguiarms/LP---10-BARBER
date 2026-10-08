import { ArrowUp, Instagram, MessageCircle } from 'lucide-react'
import { INSTAGRAM_URL, openingHours, units, WHATSAPP_URL } from '../data/site'
import { BookingActions } from './BookingActions'

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-ten" aria-hidden="true">10</div>
      <div className="site-shell footer-content">
        <div className="footer-cta" data-reveal="up">
          <p>Seu próximo corte começa aqui.</p>
          <h2>Escolha sua unidade.<br /><span>O resto é com a 10.</span></h2>
          <BookingActions />
        </div>

        <div className="footer-grid" data-reveal="up" data-reveal-delay="1">
          <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">
            <img src="/assets/logo-10-barber.webp" alt="Logo 10 & Barber" width="104" height="104" />
          </a>
          <div>
            <h3>Unidades</h3>
            {units.map((unit) => <p key={unit.name}><strong>{unit.neighborhood}</strong><br />{unit.address}</p>)}
          </div>
          <div>
            <h3>Fale com a 10</h3>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /> @dezebarber</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> (31) 98498-9858</a>
          </div>
          <div>
            <h3>Horários</h3>
            {openingHours.map((item) => <p key={item.days}><strong>{item.days}</strong><br />{item.hours}</p>)}
          </div>
          <a className="back-to-top" href="#inicio" aria-label="Voltar ao topo"><ArrowUp aria-hidden="true" /></a>
        </div>

        <div className="footer-bottom">
          <p>10 &amp; Barber — Belo Horizonte, MG.</p>
          <p>Demonstração comercial · conteúdo sujeito à validação do cliente.</p>
        </div>
      </div>
    </footer>
  )
}
