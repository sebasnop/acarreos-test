import InsideHeader from "@/components/header/InsideHeader";
import RequestServiceForm from "@/components/request/RequestServiceForm";

/**
 * Página de solicitud de servicio.
 * 
 * Esta página presenta un encabezado adaptado para un usuario de rol "client" 
 * y un formulario para solicitar un servicio de transporte.
 *
 * @returns {JSX.Element} La página completa para solicitar un servicio.
 */
export default function RequestServicePage(): JSX.Element {
  return (
    <>
      {/* Encabezado específico para usuarios de tipo "client" */}
      <InsideHeader role="client" />

      {/* Contenido principal de la página */}
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-6 sm:py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:text-center">
            Solicite un servicio
          </h2>
          <RequestServiceForm />
        </div>
      </main>
    </>
  );
}
