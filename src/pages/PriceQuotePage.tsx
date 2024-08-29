import LandingHeader from "@/components/header/LandingHeader";
import PriceQuoteForm from "@/components/request/PriceQuoteForm";

/**
 * Página PriceQuotePage.
 *
 * Esta página permite a los usuarios cotizar un servicio de transporte. Incluye un encabezado
 * y un formulario para ingresar los detalles necesarios para calcular la cotización.
 *
 * @returns {JSX.Element} La página de cotización de servicios.
 */
export default function PriceQuotePage(): JSX.Element {
  return (
    <>
      <LandingHeader />
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-6 sm:py-10">
        <div className="mx-auto max-w-2xl">
          {/* Título de la página */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:text-center">
            Cotizar Servicio
          </h2>

          {/* Formulario de cotización de servicio */}
          <PriceQuoteForm />
        </div>
      </main>
    </>
  );
}
