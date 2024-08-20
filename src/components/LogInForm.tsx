import { Link } from 'react-router-dom';
import LandingHeader from "@/components/header/LandingHeader";
import { LockClosedIcon } from '@heroicons/react/20/solid';

export default function LogInForm() {
  return (
    <>
      <LandingHeader />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inicia sesión en tu cuenta</h2>
        </div>

    {/* Nombre de usuario */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Nombre de usuario</label>
              <div className="mt-2">
                <input id="username" name="username" type="text" autoComplete="username" required className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

    {/* Contraseña */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
              <div className="text-sm">
                <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">¿Olvidaste tu contraseña?</Link>
              </div>
            </div>
            <div className="mt-2 relative">
              <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input id="password" name="password" type="password" autoComplete="current-password" required className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

    {/* Inicio de sesión */}
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Inicia sesión</button>
            </div>
          </form>

    {/* Regístrate */}
          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No tienes una cuenta? 
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  )
}


