import { Plus } from 'lucide-react'
import { faqs } from '../data/site'

export function Faq() {
  return (
    <section className="faq paper-section" id="faq" aria-labelledby="faq-title">
      <div className="site-shell faq-grid">
        <div className="faq-heading" data-reveal="left">
          <p className="section-label">Antes de agendar</p>
          <h2 id="faq-title">O que você precisa saber.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details data-reveal="up" data-reveal-delay={String(index % 3)} key={item.question}>
              <summary>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.question}
                <Plus aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
