import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { BOOKING_URL, services } from '../data/site'

export function Services() {
  const [activeService, setActiveService] = useState(0)
  const selected = services[activeService]

  return (
    <section className="services dark-section" id="servicos" aria-labelledby="services-title">
      <div className="site-shell">
        <div className="section-topline" data-reveal="up">
          <p>Serviços</p>
          <p>Cuidado masculino, do seu jeito.</p>
        </div>
        <div className="services-grid">
          <figure className="services-visual" data-reveal="left">
            <img key={selected.image} src={selected.image} alt={selected.alt} width="1400" height="2100" loading="lazy" />
            <figcaption>Imagem demonstrativa · acervo oficial pendente</figcaption>
          </figure>
          <div className="services-content" data-reveal="right" data-reveal-delay="1">
            <h2 id="services-title">Tudo para manter seu estilo em dia.</h2>
            <div className="service-list">
              {services.map((service, index) => (
                <button
                  className={`service-item ${activeService === index ? 'service-item--active' : ''}`}
                  type="button"
                  key={service.name}
                  aria-pressed={activeService === index}
                  onClick={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-name">{service.name}</span>
                  <span className="service-copy">{service.copy}</span>
                  <ArrowUpRight aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className="services-note">Valores e disponibilidade atualizados aparecem no agendamento.</p>
            <a className="text-link text-link--light" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Ver opções no BestBarbers <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="service-catalog" aria-label="Serviços publicados no agendamento">
          <div className="service-catalog-heading" data-reveal="up">
            <p>Serviços publicados</p>
            <p>Valores e disponibilidade são confirmados no momento do agendamento.</p>
          </div>
          <div className="service-catalog-grid">
            {services.map((service, index) => (
              <div className="service-group" data-reveal="up" data-reveal-delay={String(index)} key={service.name}>
                <h3>{service.name}</h3>
                <ul>
                  {service.options.map((option) => <li key={option}>{option}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
