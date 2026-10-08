import { ArrowUpRight, Clock3, MapPin } from 'lucide-react'
import { openingHours, units } from '../data/site'
import { BookingActions } from './BookingActions'

export function Locations() {
  return (
    <section className="locations" id="unidades" aria-labelledby="locations-title">
      <div className="site-shell locations-heading" data-reveal="up">
        <p className="section-label">Unidades</p>
        <h2 id="locations-title">Encontre a 10<br />mais perto de você.</h2>
        <div className="locations-meta">
          <p>Três endereços em Belo Horizonte. Escolha onde quer ser atendido e agende pelo app ou WhatsApp.</p>
          <div className="opening-hours" aria-label="Horários de atendimento">
            <p><Clock3 size={17} aria-hidden="true" /> Horários</p>
            <dl>
              {openingHours.map((item) => (
                <div key={item.days}>
                  <dt>{item.days}</dt>
                  <dd>{item.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="location-panels">
        {units.map((unit, index) => (
          <article className="location-card" key={unit.name}>
            <img src={unit.image} alt={`Imagem demonstrativa para a ${unit.name}; fotografia oficial da unidade pendente.`} width="1800" height="1200" loading="lazy" />
            <div className="location-overlay" aria-hidden="true" />
            <div className="location-content" data-reveal="up" data-reveal-delay={String(index)}>
              <span className="location-neighborhood">{unit.neighborhood}</span>
              <h3>{unit.name}</h3>
              <p><MapPin size={18} aria-hidden="true" /> {unit.address}<br />Belo Horizonte — MG</p>
              <div className="location-actions">
                <BookingActions compact />
                <a className="text-link text-link--light" href={unit.mapUrl} target="_blank" rel="noreferrer">Ver no mapa <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <span className="demo-caption">Imagem de referência — substituir pela foto da unidade</span>
          </article>
        ))}
      </div>
    </section>
  )
}
