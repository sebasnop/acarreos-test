import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid';

/**
 * Componente LogInForm
 * 
 * Este componente representa un formulario de inicio de sesión que permite a los usuarios ingresar
 * su nombre de usuario y contraseña para autenticar su cuenta.
 * 
 * @componente
 * @param {Object} props - Las propiedades que se pasan al componente.
 * @param {string} props.username - El nombre de usuario ingresado por el usuario.
 * @param {Function} props.setUsername - Función para actualizar el estado del nombre de usuario.
 * @param {string} props.password - La contraseña ingresada por el usuario.
 * @param {Function} props.setPassword - Función para actualizar el estado de la contraseña.
 * @param {Function} props.handleSubmit - Función que maneja el envío del formulario de inicio de sesión.
 * @retorna {JSX.Element} El componente LogInForm.
 */
export default function LogInForm({ username, setUsername, password, setPassword, handleSubmit }) {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-0 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={handleSubmit} method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre de usuario
              </label>
              <div className="mt-2">
                <input 
                  id="username" 
                  name="username" 
                  type="text" 
                  autoComplete="username" 
                  required 
                  className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <Link to="/forgot-password" className="font-semibold text-yellow-950 hover:text-yellow-900">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="mt-2 relative">
                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-900">
                Inicia sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}








