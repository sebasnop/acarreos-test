import type { NavItemInterface } from "@/interfaces/AppInterfaces";

/**
 * Un objeto que define las rutas de navegación principales de la aplicación.
 * 
 * Cada entrada en `navRoutes` representa una ruta con un nombre legible por el usuario y una URL asociada.
 * Las claves del objeto son identificadores únicos para cada ruta, utilizados para acceder a las rutas dentro de la aplicación.
 */
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
  'mainClient': { name: 'Main Client', href: '/main-client' },
  'mainCarrier': { name: 'Main Carrier', href: '/main-carrier' },
  'mainEnterprise': { name: 'Main Enterprise', href: '/main-enterprise' },
  'requestService': { name: 'Solicitar Servicio', href: '/request-service' },
  'unauthorized': { name: 'No autorizado', href: '/unauthorized' },
  'editClient': { name: 'Editar Usuario', href: '/edit-client' },
  'deleteClient': { name: 'Eliminar Usuario', href: '/delete-client' },
};

export { navRoutes };
