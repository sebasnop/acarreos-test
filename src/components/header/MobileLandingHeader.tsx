
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import type { NavItemInterface } from 'src/interfaces/interfaces';

interface Props {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
  routes: Record<string, NavItemInterface>;
}

export default function MobileLandingHeader({ setMobileMenuOpen, mobileMenuOpen, routes }: Props) {
  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href={routes.home.href} className="-m-1.5 p-1.5">
            <span className="sr-only">{routes.home.name}</span>
            <img
              alt={'Logo de ' + routes.home.name}
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
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
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-indigo-600 hover:bg-gray-50"
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