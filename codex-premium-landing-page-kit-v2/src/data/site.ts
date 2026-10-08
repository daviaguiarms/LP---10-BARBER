export const SITE_URL = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/+$/, '')
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || 'https://agendamentos.bestbarbers.app/barbershop/dezebarber'
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/dezebarber/'
export const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ||
  'https://wa.me/5531984989858?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%2010%20%26%20Barber%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'

export type NavItem = {
  label: string
  href: `#${string}`
}

export type Service = {
  name: string
  copy: string
  image: string
  alt: string
  options: readonly string[]
}

export type Unit = {
  name: string
  neighborhood: string
  address: string
  image: string
  mapUrl: string
}

export const navItems: NavItem[] = [
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Galeria', href: '#galeria' },
]

export const services: Service[] = [
  {
    name: 'Cabelo',
    copy: 'Cortes, acabamento e transformações para diferentes estilos.',
    image: '/assets/barber-cut.jpg',
    alt: 'Fotografia demonstrativa de um corte masculino em andamento.',
    options: ['Corte de cabelo', 'Corte à máquina', 'Acabamento (pezinho)', 'Penteado', 'Corte feminino'],
  },
  {
    name: 'Barba',
    copy: 'Do atendimento expresso ao ritual completo de cuidado com a barba.',
    image: '/assets/barber-detail.jpg',
    alt: 'Fotografia demonstrativa de acabamento de barba em barbearia.',
    options: ['Barba (terapia)', 'Barba expresso', 'Combo corte e barba'],
  },
  {
    name: 'Tratamentos',
    copy: 'Opções para tratar, finalizar ou transformar cabelo e visual.',
    image: '/assets/barber-craft.jpg',
    alt: 'Fotografia demonstrativa de atendimento em uma barbearia.',
    options: ['Hidratação', 'Selagem', 'Desondulação', 'Coloração e tonalização', 'Luzes', 'Platinado'],
  },
  {
    name: 'Estética',
    copy: 'Cuidados complementares para uma experiência mais completa.',
    image: '/assets/barber-tools.jpg',
    alt: 'Fotografia demonstrativa de instrumentos usados em cuidados de barbearia.',
    options: ['Limpeza de pele', 'Sobrancelha', 'Depilação de nariz', 'Depilação de orelha', 'Combo depilação'],
  },
]

export const openingHours = [
  { days: 'Segunda a sexta', hours: '9h às 20h' },
  { days: 'Sábado', hours: '9h às 18h' },
  { days: 'Domingo', hours: 'Fechado' },
] as const

export const units: Unit[] = [
  {
    name: 'Unidade Serra',
    neighborhood: 'Serra',
    address: 'Rua Professor Estêvão Pinto, 851',
    image: '/assets/barber-interior.jpg',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Professor+Est%C3%AAv%C3%A3o+Pinto+851+Serra+Belo+Horizonte+MG',
  },
  {
    name: 'Unidade Cruzeiro',
    neighborhood: 'Cruzeiro',
    address: 'Rua Vitório Marçola, 55',
    image: '/assets/barber-interior-warm.jpg',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Vit%C3%B3rio+Mar%C3%A7ola+55+Cruzeiro+Belo+Horizonte+MG',
  },
  {
    name: 'Unidade Rua do Ouro',
    neighborhood: 'Serra',
    address: 'Rua do Ouro, 918',
    image: '/assets/barber-craft.jpg',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+do+Ouro+918+Serra+Belo+Horizonte+MG',
  },
]

export const gallery = [
  { src: '/assets/barber-hero.jpg', alt: 'Fotografia demonstrativa de finalização de corte masculino.', shape: 'gallery-tall' },
  { src: '/assets/barber-detail.jpg', alt: 'Fotografia demonstrativa de cuidado com a barba.', shape: 'gallery-wide' },
  { src: '/assets/barber-interior-warm.jpg', alt: 'Fotografia demonstrativa de um interior de barbearia.', shape: 'gallery-square' },
  { src: '/assets/barber-cut.jpg', alt: 'Fotografia demonstrativa de corte masculino.', shape: 'gallery-square' },
  { src: '/assets/barber-craft.jpg', alt: 'Fotografia demonstrativa de atendimento em barbearia.', shape: 'gallery-wide' },
] as const

export const faqs = [
  {
    question: 'Como faço para agendar?',
    answer: 'Você pode escolher entre o BestBarbers, para selecionar serviço e horário online, ou falar diretamente com a equipe pelo WhatsApp.',
  },
  {
    question: 'Onde ficam as unidades?',
    answer: 'A 10 & Barber atende na Rua Professor Estêvão Pinto, 851; na Rua Vitório Marçola, 55; e na Rua do Ouro, 918, em Belo Horizonte.',
  },
  {
    question: 'Quais serviços estão disponíveis?',
    answer: 'O catálogo inclui cortes, barba, combos, tratamentos capilares, limpeza de pele, sobrancelha e depilação. Valores e disponibilidade são confirmados no momento do agendamento.',
  },
  {
    question: 'Qual é o horário de atendimento?',
    answer: 'De segunda a sexta, das 9h às 20h, e aos sábados, das 9h às 18h. Aos domingos, as unidades ficam fechadas.',
  },
  {
    question: 'Como conhecer os planos?',
    answer: 'A 10 & Barber divulga planos de assinatura. Para confirmar condições, valores e disponibilidade, fale diretamente com a equipe.',
  },
] as const
