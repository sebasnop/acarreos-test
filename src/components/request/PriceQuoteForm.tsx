import { useEffect, useState } from 'react'
import LocationSelector from '@/components/request/LocationSelector';
import ServiceTypeSelector from '@/components/request/ServiceTypeSelector';
import DeclaredValueInput from '@/components/request/DeclaredValueInput';

/*
Elementos que debe tener el formulario:

MUDANZAS
- Tamaño del bisonte

OBJETOS

- Peso
- Ancho
- Alto
- Largo

*/

export default function PriceQuoteForm() {
  // Estado para almacenar el tipo de servicio seleccionado
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');
  const [originLocation, setOriginLocation] = useState({ nation: '', region: '', city: '' });
  const [destinationLocation, setDestinationLocation] = useState({ nation: '', region: '', city: '' });
  const [declaredValue, setDeclaredValue] = useState<string>('')

  const [documentWeight, setDocumentWeight] = useState<string>('');

  const [movingOption, setMovingOption] = useState<string>('');

  return (
    <form>

      <div className="mt-10 mb-20 space-y-10">

        {/* Tipo de servicio - Radio button selction*/}
        <ServiceTypeSelector
          selectedServiceType={selectedServiceType}
          onServiceTypeChange={setSelectedServiceType}
        />

        {/* Sección de ubicaciones */}
        <section className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8">
          {/* Ubicación de origen */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de origen</h2>
            <LocationSelector
              label="Ciudad de origen"
              onLocationChange={setOriginLocation}
            />
          </div>

          {/* Ubicación de destino */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de destino</h2>
            <LocationSelector
              label="Ciudad de destino"
              onLocationChange={setDestinationLocation}
            />
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <DeclaredValueInput onDeclaredValueChange={setDeclaredValue} />
          </div>

          {/* Campo adicional para "documento" */}
          {selectedServiceType === 'documento' && (
            <div className="sm:col-span-3">

              <label htmlFor="document-weight" className="block text-lg font-semibold leading-6 text-gray-900">
                Peso
                <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
                  Peso en gramos (g) del artículo. Máximo 2000.
                </p>
              </label>
              <input
                type="number"
                id="document-weight"
                name="document-weight"
                value={documentWeight}
                onChange={(e) => setDocumentWeight(e.target.value)}
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          )}

        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cotizar
          </button>
        </div>

      </div>


    </form>
  );
}