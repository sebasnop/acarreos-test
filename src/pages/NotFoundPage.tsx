import { Link } from "react-router-dom";

/**
 * Página NotFoundPage.
 *
 * Esta página se muestra cuando un usuario intenta acceder a una ruta que no existe.
 * Incluye un mensaje de error y un enlace para volver a la página principal.
 *
 * @component
 * @returns La página de error 404.
 */
export default function NotFoundPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* Código de estado HTTP 404 */}
          <p className="text-base font-semibold text-yellow-950">404</p>

          {/* Título de la página de error */}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Página no encontrada
          </h1>

          {/* Descripción adicional */}
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lo sentimos, no hemos encontrado la página que buscabas.
          </p>

          {/* Enlace para volver a la página principal */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-yellow-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-950"
            >
              Volver a Acarreos Appa
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

