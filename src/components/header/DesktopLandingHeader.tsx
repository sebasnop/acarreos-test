import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { NavItemInterface } from '@/interfaces/AppInterfaces';

interface PropsDesktopLandingHeader {
  /**
   * Función para abrir el menú móvil.
   */
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * Rutas de navegación disponibles.
   */
  routes: Record<string, NavItemInterface>;
}

/**
 * Componente de encabezado para la vista de escritorio en la página de inicio.
 * Presenta opciones de navegación para diferentes secciones del sitio, incluidas las rutas empresariales.
 *
 * @param props - Las propiedades del componente.
 * @returns El componente del encabezado para la vista de escritorio.
 */
export default function DesktopLandingHeader({ setMobileMenuOpen, routes }: PropsDesktopLandingHeader) {
  
  /**
   * Rutas específicas para la sección empresarial.
   * Contiene la información de las rutas empresariales disponibles, incluyendo nombre, descripción, href e ícono.
   */
  const businessRoutes = [
    {
      name: routes.enterprise.name,
      description: 'Ingresa al portal empresarial',
      href: routes.enterprise.href,
      icon: ChartPieIcon
    },
    {
      name: routes.carrier.name,
      description: 'Actualiza el seguimiento de tus servicios',
      href: routes.carrier.href,
      icon: CursorArrowRaysIcon
    }
  ];


  return (
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <Link to={routes.home.href} className="-m-1.5 p-1.5 flex flex-row items-center">
          <span className="sr-only">{routes.home.name}</span>
          <img alt={'Logo de ' + routes.home.name}
            src="src/public/logo_appa.svg"
            className="h-8 w-auto" />
          <span className="ml-3 text-yellow-950 font-semibold text-lg">Appa</span>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Abrir menú principal</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-4 xl:gap-x-12">

        <Link to={routes.price.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-900">
          {routes.price.name}
        </Link>

        <Link to={routes.track.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-900">
          {routes.track.name}
        </Link>

        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 
          focus-visible:outline-none hover:text-yellow-900">
            Empresarial
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
          </PopoverButton>

          <PopoverPanel
            transition
            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl 
            bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 
            data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="p-4">
              {businessRoutes.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-yellow-900" />
                  </div>
                  <div className="flex-auto">
                    <Link to={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Popover>

        <Link to={routes.about.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-900">
          {routes.about.name}
        </Link>

      </PopoverGroup>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3 xl:gap-x-6 lg:items-center">

        <Link to={routes.login.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-900">
          {routes.login.name}
        </Link>

        <Link
          to={routes.signup.href}
          className="rounded-md bg-yellow-950 lg:px-2 xl:px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm 
          hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
          focus-visible:outline-yellow-950"
        >
          {routes.signup.name}
        </Link>
      </div>
    </nav>
  )
}
