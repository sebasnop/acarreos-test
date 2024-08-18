import type { PageInterface } from "src/interfaces/interfaces"

const navRoutes: { [id: string]: PageInterface } = {
  'home': { name: 'Acarreos Appa', href: '/' },
  'price': { name: 'Cotizar', href: '/price-quote' },
  'track': { name: 'Localizar', href: '/#track-shipment-section' },
  'enterprise': { name: 'Negocio', href: '/enterprise-login' },
  'carrier': { name: 'Transportista', href: '/carrier-login' },
  'about': { name: 'Acerca de', href: '/about' },
  'login': { name: 'Iniciar Sesión', href: '/login' },
  'signup': { name: 'Registrarse', href: '/signup' },
}

export { navRoutes }