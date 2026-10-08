import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BOOKING_URL, navItems, WHATSAPP_URL } from '../data/site'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled || isMenuOpen ? 'site-header--solid' : ''}`}>
      <div className="site-shell header-inner">
        <a className="brand-link" href="#inicio" aria-label="10 & Barber — início">
          <img src="/assets/logo-10-barber.webp" alt="" width="48" height="48" />
          <span>10 &amp; Barber</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="button button--compact desktop-booking" href={BOOKING_URL} target="_blank" rel="noreferrer">
          Agendar pelo app <ArrowUpRight size={17} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!isMenuOpen}>
        <nav aria-label="Navegação móvel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <p>Serra · Cruzeiro · Rua do Ouro<br />Seg–sex 9h–20h · Sáb 9h–18h</p>
          <div className="mobile-menu-actions">
            <a className="button" href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Pelo app <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button--outline-light" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
              WhatsApp <MessageCircle aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
