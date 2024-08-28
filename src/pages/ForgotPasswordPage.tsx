import { Link } from 'react-router-dom';
import LandingHeader from "@/components/header/LandingHeader";

export default function ForgotPasswordPage() {
  // Función para manejar el envío del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita el envío real del formulario
    // Mostrar el mensaje de éxito
    window.alert('Correo enviado con éxito. Por favor revisa tu bandeja de entrada.');
  };

  return (
    <>
      <LandingHeader />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ¿Olvidaste tu contraseña?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            No te preocupes, te enviaremos un enlace para restablecerla.
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Ingresa tu correo electrónico o nombre de usuario
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-950"
              >
                Enviar enlace de restablecimiento
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Recordaste tu contraseña?{' '}
            <Link to="/login" className="font-semibold leading-6 text-yellow-950 hover:text-yellow-900">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}



