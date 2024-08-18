import { Link, useLocation } from 'react-router-dom'
import LandingHeader from '../components/header/LandingHeader'
import { useEffect } from 'react';

export default function HomePage() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <div className='bg-white'>
        <LandingHeader />

        <section className="mx-auto max-w-2xl py-12 sm:py-20 lg:py-24 px-6 text-center">

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Acarreos Appa
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Te conectamos con todas las naciones
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
            <Link
              to="/login"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Solicita tu servicio
            </Link>
            <Link to="/price-quote" className="text-sm font-semibold leading-6 text-gray-900">
              Cotizar <span aria-hidden="true">→</span>
            </Link>
          </div>

        </section>

      </div>

      <section className='px-6 py-20 sm:py-24 bg-slate-50' id='track-shipment-section'>
        <h2 className='text-xl text-center font-semibold text-gray-900 sm:text-2xl mb-8'>
          Localiza tu envío
        </h2>
        <form action="#" method="POST" className="mx-auto max-w-xl">
          <div className='mb-4'>
            <label htmlFor="guide-id" className="block text-sm font-semibold leading-6 text-gray-900">
              Número de guía
            </label>
            <div className="mt-2.5">
              <input
                id="guide-id"
                name="guide-id"
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Consultar
          </button>
        </form>
      </section>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Llegamos a todas las naciones
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>

    </>
  )
}