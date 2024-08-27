import { useEffect, useState } from 'react'
import LocationSelector from '@/components/request/LocationSelector';
import ServiceTypeSelector from '@/components/request/ServiceTypeSelector';
import DeclaredValueInput from '@/components/request/DeclaredValueInput';
import DocumentWeightInput from '@/components/request/document/DocumentWeightInput';
import ObjectWeightInput from '@/components/request/object/ObjectWeightInput';
import ObjectHeightInput from './object/ObjectHeightInput';
import ObjectLengthInput from './object/ObjectLengthInput';
import ObjectWidthInput from './object/ObjectWidthInput';

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
  const [originLocationId, setOriginLocation] = useState({ nation: '', region: '', cityId: '' });
  const [destinationLocationId, setDestinationLocation] = useState({ nation: '', region: '', cityId: '' });
  const [declaredValue, setDeclaredValue] = useState<string>('')

  const [documentWeight, setDocumentWeight] = useState<string>('');

  const [objectWeight, setObjectWeight] = useState<string>('');
  const [objectHeight, setObjectHeight] = useState<string>('');
  const [objectLength, setObjectLength] = useState<string>('');
  const [objectWidth, setObjectWidth] = useState<string>('');

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
          <section className="sm:col-span-3">
            <DeclaredValueInput onDeclaredValueChange={setDeclaredValue} />
          </section>

          {/* Campo adicional para servicio tipo "documento" */}
          {selectedServiceType === 'documento' && (
            <section className="sm:col-span-3">
              <DocumentWeightInput onDocumentWeightChange={setDocumentWeight} />
            </section>
          )}

          {/* Campo adicional para servicio tipo "objeto" */}
          {selectedServiceType === 'objeto' && (
            <section className="sm:col-span-3">
              <ObjectWeightInput onObjectWeightChange={setObjectWeight} />
            </section>
          )}

        </div>

        {/* Sección adicional para servicio tipo "objeto" */}
        {selectedServiceType === 'objeto' && (
          <section className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="sm:col-span-2">
              <ObjectHeightInput onObjectHeightChange={setObjectHeight} />
            </div>

            <div className="sm:col-span-2">
              <ObjectLengthInput onObjectLengthChange={setObjectLength} />
            </div>
            
            <div className="sm:col-span-2">
              <ObjectWidthInput onObjectWidthChange={setObjectWidth} />
            </div>
          </section>
        )}

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