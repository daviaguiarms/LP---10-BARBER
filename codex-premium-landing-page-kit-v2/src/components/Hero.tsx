import { BookingActions } from './BookingActions'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/assets/barber-hero.jpg"
          alt=""
          width="1800"
          height="2700"
          fetchPriority="high"
        />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-ten" aria-hidden="true">10</div>

      <div className="site-shell hero-content">
        <div className="hero-kicker">
          <span>Belo Horizonte</span>
          <span className="hero-kicker-line" />
          <span>Serra · Cruzeiro · Rua do Ouro</span>
        </div>
        <h1 id="hero-title"><span className="hero-title-line">O talento</span><br />é <span className="hero-highlight">10.</span></h1>
        <p className="hero-copy">Corte, barba e cuidado masculino com presença, técnica e uma experiência feita para o seu estilo.</p>
        <BookingActions className="hero-actions" />
        <a className="hero-units-link" href="#unidades">Ver endereços e horários</a>
      </div>

      <p className="demo-caption hero-caption">Imagem de referência — substituir pelo acervo oficial da marca</p>
    </section>
  )
}
