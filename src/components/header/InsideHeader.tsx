import { UserRole } from '@/interfaces/DatabaseInterfaces';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';

interface InsideHeaderProps {
  /**
   * Rol del usuario actual, que determina el contenido del menú.
   */
  role: UserRole;
  name?: string;
  photo?: string
}

/**
 * Componente `InsideHeader`.
 * 
 * Renderiza el encabezado dentro de la aplicación una vez que el usuario ha iniciado sesión. 
 * Muestra el nombre del usuario, su rol (si no es un cliente) y un menú desplegable con opciones como editar usuario o cerrar sesión.
 *
 * @param props - Las propiedades del componente, incluyendo el rol del usuario.
 * @returns El componente de encabezado.
 */
export default function InsideHeader({ role, photo, name }: InsideHeaderProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  /**
   * Obtiene la etiqueta para mostrar el rol del usuario en la interfaz.
   * 
   * @param {UserRole} role - El rol del usuario.
   * @returns {string} La etiqueta correspondiente al rol del usuario.
   */
  const getRoleLabel = (role: UserRole): string => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'carrier':
        return 'Transportista';
      default:
        return 'Rol';
    }
  };

  /**
   * Maneja la acción de cerrar sesión.
   * Navega a la página principal y cierra la sesión del usuario.
   */
  function handleLogout() {
    navigate('/');
    logout();
  }

  /**
   * Maneja la acción de editar usuario.
   * Navega a la página de edición de usuario.
   */
  function handleEditUser() {
    navigate('/edit-client');
  }

  return (
    <header className="bg-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-start items-center sm:items-stretch">
            <div className="flex flex-shrink-0 items-center flex-row">
              <img
                alt="Logo Acarreos Appa"
                src="src/public/logo_appa.svg"
                className="h-8 w-auto"
              />
              <span className="ml-3 text-yellow-950 font-semibold text-lg">Appa</span>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div className="flex flex-row gap-4 items-center">
                <div className="hidden sm:flex flex-col items-end">

                  {
                    name &&
                    <span className="text-gray-700 font-medium text-sm">{name}</span>
                  }

                  {
                    !(name) &&
                    <span className="text-gray-700 font-medium text-sm">Daniel Chanci</span>
                  }

                  {role !== 'client' && (
                    <span className="text-gray-600 text-xs">
                      {getRoleLabel(role)}
                    </span>
                  )}
                </div>
                <MenuButton className="relative flex rounded-full bg-yellow-950 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {
                    photo &&
                    <img
                      alt=""
                      src={photo}
                      className="h-8 w-8 rounded-full"
                    />
                  }
                  {
                    !(photo) &&
                    <img
                      alt=""
                      src="https://media.licdn.com/dms/image/v2/C4E03AQFfPyhBiZ58Vw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1607983102997?e=1730332800&v=beta&t=CKAiZcdc28aBrpVsxGxNjZZDDKyr_KjAZiG1-FmnGOY"
                      className="h-8 w-8 rounded-full"
                    />
                  }
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {role === 'client' && (
                  <MenuItem as="button" onClick={handleEditUser} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                    Editar usuario
                  </MenuItem>
                )}
                <MenuItem as="button" onClick={handleLogout} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                  Cerrar sesión
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
}
