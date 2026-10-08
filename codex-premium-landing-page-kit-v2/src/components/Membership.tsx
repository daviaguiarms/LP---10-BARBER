import { ArrowUpRight, Check } from 'lucide-react'
import { PLANS_WHATSAPP_URL } from '../data/site'

export function Membership() {
  return (
    <section className="membership" id="planos" aria-labelledby="membership-title">
      <div className="membership-ten" aria-hidden="true">10</div>
      <div className="site-shell membership-grid">
        <div className="membership-heading" data-reveal="left">
          <p className="section-label section-label--dark">Planos de assinatura</p>
          <h2 id="membership-title">Corte &amp; Barba<br /><span>Premium</span></h2>
        </div>
        <div className="membership-copy" data-reveal="right" data-reveal-delay="1">
          <p>Para quem quer manter o cuidado em dia e fazer da barbearia parte da rotina.</p>
          <ul>
            <li><Check aria-hidden="true" /> Atendimento recorrente</li>
            <li><Check aria-hidden="true" /> Desconto em produtos</li>
            <li><Check aria-hidden="true" /> Desconto em serviços extras</li>
          </ul>
          <p className="membership-disclaimer">Valores, frequência, regras e disponibilidade devem ser confirmados com a equipe.</p>
          <a className="button button--dark" href={PLANS_WHATSAPP_URL} target="_blank" rel="noreferrer">
            Consultar condições <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
