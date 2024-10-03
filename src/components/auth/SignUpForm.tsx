import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LandingHeader from "@/components/header/LandingHeader";
import { LockClosedIcon } from '@heroicons/react/20/solid';
import validateSignUpPasswords from '@/utils/auth/validateSignUpPasswords';
import signupClientRequest from '@/requests/auth/signupClientRequest';

/**
 * Tipo para los datos del formulario de registro.
 */
interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * Formulario de registro de usuario que permite a los nuevos usuarios crear una cuenta.
 * Los datos del formulario se guardan temporalmente en `localStorage` y se eliminan al completar el registro.
 * Al hacer clic en "Crea tu cuenta", se redirige a la página principal del usuario (`/main-user`).
 *
 * @returns El componente de formulario de registro.
 */
export default function SignUpForm(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();


  /**
   * Maneja los cambios en los campos del formulario y guarda los datos en `localStorage`.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - El evento de cambio.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Maneja el envío del formulario. Limpia los datos del formulario y de `localStorage`, y redirige a la página principal del usuario.
   * @param {React.FormEvent<HTMLFormElement>} e - El evento de envío del formulario.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordError = validateSignUpPasswords(formData.password, formData.confirmPassword);
    if (passwordError) {
      setErrorMessage(passwordError);
      return;
    }

    try {
      // Espera la respuesta de la solicitud de registro
      const result = await signupClientRequest(formData.username, formData.email, formData.password);

      // Si el registro fue exitoso
      if (result.success) {
        alert('Cuenta creada exitosamente');

        // Limpia los datos del formulario
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

        // Redirige a la página login
        navigate('/login');
      } else {
        // Si ocurrió un error, muestra el mensaje de error
        if (result.error.message){
          setErrorMessage(`Error: ${result.error.message}`);
        }
      }
    } catch (error) {
      // Maneja cualquier error inesperado (problemas de red, etc.)
      setErrorMessage('Hubo un problema al registrar la cuenta. Por favor, inténtalo de nuevo más tarde.');
    }

    // Redirige a la página main-user
    // navigate('/main-user');

  };

  useEffect(
    () => {
      if (errorMessage){
        alert(errorMessage);
      }
    },
    [errorMessage]
  );

  return (
    <>
      <LandingHeader />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Crea una cuenta</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
