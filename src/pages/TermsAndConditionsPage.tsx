import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from "@/components/header/LandingHeader";

export default function TermsAndConditionsPage() {
  
   // Desplaza la ventana hacia la parte superior al montar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LandingHeader />
      <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Términos y Condiciones</h1>

        <section className="mb-8">
          <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">1. Introducción</h2>
          <p className="text-gray-600 leading-6">
            Estos Términos y Condiciones rigen el uso de nuestro sitio web y servicios. Al acceder o usar nuestro sitio, aceptas estos términos en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">2. Uso del Sitio Web</h2>
          <p className="text-gray-600 leading-6">
            No debes usar nuestro sitio web de ninguna manera que cause, o pueda causar, daños al sitio web o menoscabo de la disponibilidad o accesibilidad del sitio web. No debes usar nuestro sitio web de manera ilegal, fraudulenta o dañina, o en relación con cualquier propósito o actividad ilegal, fraudulenta o dañina.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">3. Propiedad Intelectual</h2>
          <p className="text-gray-600 leading-6">
            A menos que se indique lo contrario, nosotros o nuestros licenciantes poseemos los derechos de propiedad intelectual en el sitio web y el material en el sitio web. Todos estos derechos de propiedad intelectual están reservados.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">4. Limitaciones de Responsabilidad</h2>
          <p className="text-gray-600 leading-6">
            En la medida en que el sitio web y la información y los servicios en el sitio web se proporcionan de forma gratuita, no seremos responsables de ninguna pérdida o daño de cualquier naturaleza.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mt-10 text-xl font-bold leading-9 tracking-tight text-gray-900">5. Cambios a los Términos</h2>
          <p className="text-gray-600 leading-6">
            Nos reservamos el derecho de revisar estos términos en cualquier momento. Los términos revisados se aplicarán al uso de nuestro sitio web a partir de la fecha de la publicación de los términos revisados en el sitio web.
          </p>
        </section>

        <div className="mt-8">
          <Link to="/signup">
            <button className="bg-yellow-950 hover:bg-yellow-900 text-white font-semibold py-2 px-4 rounded">
              Volver al registro
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
