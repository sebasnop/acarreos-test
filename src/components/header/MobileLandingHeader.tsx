import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import type { NavItemInterface } from 'src/interfaces/AppInterfaces';

/**
 * @typedef {Object} NavItemInterface
 * @property {string} name - Nombre de la ruta.
 * @property {string} href - URL a la que apunta la ruta.
 * @property {string} [description] - Descripción de la ruta.
 */

/**
 * @typedef {Object} Props
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setMobileMenuOpen - Función para abrir/cerrar el menú móvil.
 * @property {boolean} mobileMenuOpen - Estado que indica si el menú móvil está abierto.
 * @property {Record<string, NavItemInterface>} routes - Rutas de navegación disponibles.
 */

/**
 * Componente de encabezado para la vista móvil en la página de inicio.
 * Presenta un menú desplegable que contiene enlaces de navegación para diferentes secciones del sitio, incluidas las rutas empresariales.
 *
 * @param {Props} props - Las propiedades del componente.
 * @returns {React.ReactElement} El componente del encabezado para la vista móvil.
 */
export default function MobileLandingHeader({ setMobileMenuOpen, mobileMenuOpen, routes }: Props) {
  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link to={routes.home.href} className="-m-1.5 p-1.5 flex flex-row items-center">
            <span className="sr-only">{routes.home.name}</span>
            <img alt={'Logo de ' + routes.home.name}
              src="src/public/logo_appa.svg"
              className="h-8 w-auto" />
            <span className="ml-3 text-yellow-950 font-semibold text-lg">Appa</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Cerrar menú</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-5">

              <Link
                to={routes.price.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {routes.price.name}
              </Link>

              <Link
                to={routes.track.href}
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {routes.track.name}
              </Link>

              <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Empresarial
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">

                  <DisclosureButton
                    as={Link}
                    to={routes.enterprise.href}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {routes.enterprise.name}
                  </DisclosureButton>

                  <DisclosureButton
                    as={Link}
                    to={routes.carrier.href}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {routes.carrier.name}
                  </DisclosureButton>

                </DisclosurePanel>
              </Disclosure>

              <Link
                to={routes.about.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {routes.about.name}
              </Link>

            </div>
            <div className="py-5">

              <Link
                to={routes.login.href}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {routes.login.name}
              </Link>

              <Link
                to={routes.signup.href}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-yellow-900 hover:bg-gray-50"
              >
                {routes.signup.name}
              </Link>

            </div>

          </div>
        </div>
      </DialogPanel>
    </Dialog>
  )
}
