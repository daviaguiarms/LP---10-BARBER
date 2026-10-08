import { Armchair, Coffee, Refrigerator } from 'lucide-react'

export function Experience() {
  return (
    <section className="experience paper-section" id="experiencia" aria-labelledby="experience-title">
      <div className="site-shell experience-grid">
        <div className="section-index" data-reveal="up" aria-hidden="true">10 / EXPERIÊNCIA</div>
        <div className="experience-copy" data-reveal="up" data-reveal-delay="1">
          <h2 id="experience-title">Não é só<br />um corte.</h2>
          <p>É o tempo que você separa para cuidar de si. Da conversa ao acabamento, cada detalhe ajuda a construir presença, confiança e estilo.</p>
        </div>
        <div className="experience-amenities" data-reveal="up" data-reveal-delay="2">
          <p>Enquanto você espera</p>
          <ul>
            <li>
              <Armchair aria-hidden="true" />
              <span><strong>Espera confortável</strong>Cadeiras para aguardar com tranquilidade.</span>
            </li>
            <li>
              <Coffee aria-hidden="true" />
              <span><strong>Café à vontade</strong>Café de máquina disponível durante a visita.</span>
            </li>
            <li>
              <Refrigerator aria-hidden="true" />
              <span><strong>Bebidas geladas</strong>Opções disponíveis na geladeira para compra.</span>
            </li>
          </ul>
        </div>
        <figure className="experience-image" data-reveal="scale" data-reveal-delay="2">
          <img src="/assets/barber-craft.jpg" alt="Fotografia demonstrativa de um atendimento em barbearia." width="1400" height="933" loading="lazy" />
          <figcaption>Imagem demonstrativa · acervo oficial pendente</figcaption>
        </figure>
        <div className="experience-values" data-reveal="up" aria-label="Pilares da experiência">
          <span>Técnica</span>
          <span>Cuidado</span>
          <span>Ambiente</span>
          <span>Estilo</span>
        </div>
      </div>
    </section>
  )
}
