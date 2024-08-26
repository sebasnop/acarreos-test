import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function InsideHeader({ role }: { role: string }) {
  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'carrier':
        return 'Transportista';
      default:
        return 'Rol';
    }
  };

  return (
    <header className="bg-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-start items-center sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div className="flex flex-row gap-4 items-center">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-gray-700 font-medium text-sm">Daniel Chanci</span>
                  {role !== 'user' && (
                    <span className="text-gray-600 text-xs">
                      {getRoleLabel(role)}
                    </span>
                  )}
                </div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://media.licdn.com/dms/image/v2/C4E03AQFfPyhBiZ58Vw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1607983102997?e=1730332800&v=beta&t=CKAiZcdc28aBrpVsxGxNjZZDDKyr_KjAZiG1-FmnGOY"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/"
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        active ? 'bg-gray-100' : ''
                      }`}
                    >
                      Cerrar sesión
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
}

