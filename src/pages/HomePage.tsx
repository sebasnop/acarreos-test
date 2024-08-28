import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import LandingHeader from '@/components/header/LandingHeader'
import TrackShipmentForm from '@/components/track/TrackShipmentForm';
import { NationsTable as Nations } from '@/database/NationsTable';

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
              className="rounded-md bg-yellow-950 px-3.5 py-2.5 text-sm font-semibold 
              text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 
              focus-visible:outline-offset-2 focus-visible:outline-yellow-900"
            >
              Solicita tu servicio
            </Link>
            <Link to="/price-quote" className="text-sm font-semibold leading-6 text-yellow-950 hover:text-yellow-900">
              Cotizar <span aria-hidden="true">→</span>
            </Link>
          </div>

        </section>

      </div>

      <section className='px-6 py-20 sm:py-24 bg-slate-50' id='track-shipment-section'>
        <h2 className='text-xl text-center font-semibold text-gray-900 sm:text-2xl mb-8'>
          Localiza tu envío
        </h2>
        <div className='mx-auto max-w-xl'>
          <TrackShipmentForm />
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold leading-8 text-gray-900">
            Llegamos a todas las naciones
          </h2>

          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-lg sm:max-w-xl lg:max-w-none">
            {
              Nations.map(nation => (
                <div className="flex flex-col gap-2 items-center w-[calc(50%-8px)] sm:w-[calc(33.33%-10px)] lg:w-[calc(20%-16px)]" key={nation.name}>
                  <img
                    alt={'Emblema de ' + nation.nameSpanish}
                    src={nation.img}
                    width={158}
                    height={48}
                    className="max-h-24 w-full object-contain brightness-95"
                  />
                  <p className="text-center font-semibold text-gray-900">{nation.nameSpanish}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

    </>
  )
}