import {
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { PageInterface } from 'src/interfaces/interfaces';

interface Props {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pages: PageInterface[];
  home: PageInterface;
  login: PageInterface;
}

export default function DesktopLandingHeader( {setMobileMenuOpen, pages, home, login} : Props) {

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
        {
          pages.map((page) =>
            <a key={page.href} href={page.href} className="text-sm font-semibold leading-6 text-gray-900">
              {page.name}
            </a>
          )
        }
      </PopoverGroup>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 lg:items-center">
        <a href={login.href} className="text-sm font-semibold leading-6 text-gray-900">
          {login.name}
        </a>
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
      </div>
    </nav>
  )
}