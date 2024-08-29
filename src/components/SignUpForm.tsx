import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LandingHeader from "@/components/header/LandingHeader";
import { LockClosedIcon, MapPinIcon } from '@heroicons/react/20/solid';

/**
 * Formulario de registro de usuario que permite a los nuevos usuarios crear una cuenta.
 * Los datos del formulario se guardan temporalmente en `localStorage` y se eliminan al completar el registro.
 * Al hacer clic en "Crea tu cuenta", se redirige a la página principal del usuario (`/main-user`).
 *
 * @component
 * @returns {React.ReactElement} El componente de formulario de registro.
 */
export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: ''
  });

  // Redirige después de un registro exitoso
  const navigate = useNavigate();

  /**
   * Desplaza la ventana hacia la parte superior y carga los datos guardados en `localStorage` al montar el componente.
   * @useEffect
   */
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Carga los datos guardados en localStorage
    const savedData = localStorage.getItem('signUpFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  /**
   * Maneja los cambios en los campos del formulario y guarda los datos en `localStorage`.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - El evento de cambio.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem('signUpFormData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  /**
   * Maneja el envío del formulario. Limpia los datos del formulario y de `localStorage`, y redirige a la página principal del usuario.
   * @param {React.FormEvent<HTMLFormElement>} e - El evento de envío del formulario.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Limpia los datos del formulario y localStorage
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      location: ''
    });
    localStorage.removeItem('signUpFormData');

    // Redirige a la página main-user
    navigate('/main-user');
  };

  return (
    <>
      <LandingHeader />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Crea una cuenta</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Nombre de usuario</label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo electrónico</label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
              <div className="mt-2 relative">
                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">Confirma tu contraseña</label>
              <div className="mt-2 relative">
                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Ubicación predeterminada (opcional)</label>
              <div className="mt-2 relative">
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled>Selecciona una ubicación</option>
                  <option value="Tribus Agua">Tribus Agua</option>
                  <option value="Reino Tierra">Reino Tierra</option>
                  <option value="Nación del Fuego">Nación del Fuego</option>
                  <option value="Templos Aire">Templos Aire</option>
                  <option value="Ciudad República">Ciudad República</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                required
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-100 ring-offset-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-900 dark:ring-offset-gray-800"
              />
              <label htmlFor="terms" className="ml-3 text-sm font-light leading-6 text-gray-500 dark:text-gray-500">
                Acepto los <Link to="/terms" className="font-semibold text-yellow-950 hover:text-yellow-900">Términos y Condiciones</Link>
              </label>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-950">Crea tu cuenta</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta? 
            <Link to="/login" className="font-semibold leading-6 text-yellow-950 hover:text-yellow-900"> Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </>
  );
}













