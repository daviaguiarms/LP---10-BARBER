import { Instagram } from 'lucide-react'
import { gallery, INSTAGRAM_URL } from '../data/site'

export function Gallery() {
  return (
    <section className="gallery paper-section" id="galeria" aria-labelledby="gallery-title">
      <div className="site-shell">
        <div className="gallery-heading" data-reveal="up">
          <div>
            <p className="section-label">Galeria</p>
            <h2 id="gallery-title">Trabalho que<br />fala por si.</h2>
          </div>
          <div className="gallery-copy">
            <p>Cortes, barbas, detalhes e o ambiente da 10 &amp; Barber em uma galeria feita para receber o acervo real da marca.</p>
            <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={18} aria-hidden="true" /> Ver Instagram</a>
          </div>
        </div>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure className={image.shape} data-reveal="scale" data-reveal-delay={String(index % 3)} key={`${image.src}-${index}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>Referência visual {String(index + 1).padStart(2, '0')} · imagem demonstrativa</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
