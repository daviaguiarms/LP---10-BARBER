import { Star } from 'lucide-react'

export function Reviews() {
  return (
    <section className="reviews dark-section" id="avaliacoes" aria-labelledby="reviews-title">
      <div className="site-shell reviews-grid">
        <div data-reveal="up">
          <p className="section-label section-label--light">Avaliações</p>
          <h2 id="reviews-title">A experiência de quem já é 10.</h2>
        </div>
        <div className="rating-block" data-reveal="scale" data-reveal-delay="1" aria-label="Nota 5 de 5 exibida no BestBarbers">
          <strong>5.0</strong>
          <div className="stars" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => <Star key={index} fill="currentColor" />)}
          </div>
          <span>Nota exibida no BestBarbers</span>
        </div>
        <div className="review-placeholder" data-reveal="up">
          <p>“As avaliações textuais entram aqui com a voz real dos clientes.”</p>
          <span>Conteúdo aguardando seleção e autorização da 10 &amp; Barber.</span>
        </div>
      </div>
    </section>
  )
}
