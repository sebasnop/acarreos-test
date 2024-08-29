import type { NavItemInterface } from "@/interfaces/AppInterfaces"

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
  'mainUser': { name: 'Main User', href: '/main-user' },
  'mainCarrier': { name: 'Main Carrier', href: '/main-carrier' },
  'mainEnterprise': { name: 'Main Enterprise', href: '/main-enterprise' },
  'requestService': { name: 'Solicitar Servicio', href: '/request-service' },
  'unauthorized': { name: 'No autorizado', href: '/unauthorized' },
}

export { navRoutes }