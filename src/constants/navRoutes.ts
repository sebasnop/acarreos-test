import type { NavItemInterface } from "@/interfaces/interfaces"

const navRoutes: { [id: string]: NavItemInterface } = {
  'home': { name: 'Acarreos Appa', href: '/' },
  'price': { name: 'Cotizar', href: '/price-quote' },
  'track': { name: 'Localizar', href: '/#track-shipment-section' },
  'enterprise': { name: 'Negocio', href: '/enterprise-login' },
  'carrier': { name: 'Transportista', href: '/carrier-login' },
  'about': { name: 'Acerca de', href: '/about' },
  'login': { name: 'Iniciar Sesión', href: '/login' },
  'signup': { name: 'Registrarse', href: '/signup' },
  'terms': { name: 'Términos y Condiciones', href: '/terms' },
  'forgotPassword': { name: '¿Olvidaste tu contraseña?', href: '/forgot-password' },
  'mainUser': { name: 'Main User', href: '/main-user' }
}

export { navRoutes }