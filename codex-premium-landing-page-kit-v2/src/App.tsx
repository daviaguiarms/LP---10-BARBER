import { Experience } from './components/Experience'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Locations } from './components/Locations'
import { Membership } from './components/Membership'
import { MobileBookingBar } from './components/MobileBookingBar'
import { Reviews } from './components/Reviews'
import { ScrollReveal } from './components/ScrollReveal'
import { Services } from './components/Services'
import { SITE_URL, units } from './data/site'

const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '20:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Saturday',
    opens: '09:00',
    closes: '18:00',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: '10 & Barber',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/logo-10-barber.webp`,
      sameAs: ['https://www.instagram.com/dezebarber/'],
    },
    ...units.map((unit, index) => ({
      '@type': 'Barbershop',
      '@id': `${SITE_URL}/#unidade-${index + 1}`,
      name: `10 & Barber — ${unit.name.replace('Unidade ', '')}`,
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      telephone: '+55 31 98498-9858',
      openingHoursSpecification,
      address: {
        '@type': 'PostalAddress',
        streetAddress: unit.address,
        addressLocality: 'Belo Horizonte',
        addressRegion: 'MG',
        addressCountry: 'BR',
      },
    })),
  ],
}

function App() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <ScrollReveal />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Experience />
        <Services />
        <Locations />
        <Membership />
        <Gallery />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  )
}

export default App
