import { Link } from "react-router-dom";

/**
 * Página UnauthorizedPage.
 *
 * Esta página se muestra cuando un usuario no está autenticado y trata de acceder a una sección restringida.
 * Ofrece un mensaje explicando la situación y proporciona un enlace para regresar a la página principal.
 *
 * @component
 * @returns La página de no autorizado.
 */
export default function UnauthorizedPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* Código de estado HTTP 403 */}
          <p className="text-base font-semibold text-yellow-950">403</p>

          {/* Título explicativo */}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            No estás autenticado
          </h1>

          {/* Mensaje de sugerencia */}
          <p className="mt-6 text-base leading-7 text-gray-600">
            Vuelve a la página inicial para autenticarte de nuevo.
          </p>

          {/* Enlace para volver a la página de inicio */}
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

