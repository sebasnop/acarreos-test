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
import { PageInterface } from 'src/interfaces/interfaces';

interface Props {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pages: PageInterface[];
  home: PageInterface;
  login: PageInterface;
}

const products = [
  { name: 'Negocio', description: 'Ingresa al portal empresarial', href: '#', icon: ChartPieIcon },
  { name: 'Transportista', description: 'Actualiza el seguimiento de tus servicios', href: '#', icon: CursorArrowRaysIcon }
]

export default function DesktopLandingHeader({ setMobileMenuOpen, pages, home, login }: Props) {

  return (
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <a href={home.href} className="-m-1.5 p-1.5">
          <span className="sr-only">{home.name}</span>
          <img alt={'Logo de ' + home.name}
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto" />
        </a>
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
      <PopoverGroup className="hidden lg:flex lg:gap-x-12">


        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none hover:text-indigo-600">
            Empresarial
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
          </PopoverButton>

          <PopoverPanel
            transition
            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="p-4">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <div className="flex-auto">
                    <a href={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Popover>
        {
          pages.map((page) =>
            <a key={page.href} href={page.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
              {page.name}
            </a>
          )
        }

      </PopoverGroup>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 lg:items-center">
        <a href={login.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
          {login.name}
        </a>
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Registrarse
        </a>
      </div>
    </nav>
  )
}