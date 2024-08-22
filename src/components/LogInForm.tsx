import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export default function LogInForm() {
  // Estado para almacenar el usuario y la contraseña ingresados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Redirige después de un inicio de sesión exitoso
  const navigate = useNavigate();

  // Datos quemados para validación
  const hardcodedUsername = 'user';
  const hardcodedPassword = 'password123';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Valida las credenciales
    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Redirige a la página /main-user
      navigate('/main-user');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

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
                  className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                  className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Inicia sesión
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            ¿No tienes una cuenta? 
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}






