import { useState } from 'react'

import LocationSelector from '@/components/request/common/LocationSelector';
import ServiceTypeSelector from '@/components/request/common/ServiceTypeSelector';
import DeclaredValueInput from '@/components/request/common/DeclaredValueInput';

import DocumentWeightInput from '@/components/request/document/DocumentWeightInput';

import ObjectWeightInput from '@/components/request/object/ObjectWeightInput';
import ObjectHeightInput from '@/components/request/object/ObjectHeightInput';
import ObjectLengthInput from '@/components/request/object/ObjectLengthInput';
import ObjectWidthInput from '@/components/request/object/ObjectWidthInput';

import MovingSizeSelector from '@/components/request/moving/MovingSizeSelector';

import { usePriceQuote } from '@/hooks/usePriceQuote';

/**
 * Componente `PriceQuoteForm`.
 * 
 * Renderiza un formulario que permite a los usuarios seleccionar el tipo de servicio y otros detalles
 * para calcular el precio de una cotización. Diferentes campos se muestran en función del tipo de servicio seleccionado.
 *
 * @returns El formulario de cotización de precios.
 */
export default function PriceQuoteForm() {
  // Estado para almacenar el tipo de servicio seleccionado
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');
  const [originLocation, setOriginLocation] = useState({ nation: '', region: '', cityId: '' });
  const [destinationLocation, setDestinationLocation] = useState({ nation: '', region: '', cityId: '' });
  const [declaredValue, setDeclaredValue] = useState<string>('')

  // Estado para los campos adicionales según el tipo de servicio
  const [documentWeight, setDocumentWeight] = useState<string>('');
  const [objectWeight, setObjectWeight] = useState<string>('');
  const [objectHeight, setObjectHeight] = useState<string>('');
  const [objectLength, setObjectLength] = useState<string>('');
  const [objectWidth, setObjectWidth] = useState<string>('');
  const [movingSize, setMovingSize] = useState<string>('');

  // Hook para manejar la lógica de cálculo de la cotización
  const { priceQuote, calculateQuote } = usePriceQuote();

  /**
   * Maneja el envío del formulario, llamando al hook `usePriceQuote` para calcular la cotización
   * en función de los datos proporcionados por el usuario.
   *
   * @param event - El evento de envío del formulario.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    calculateQuote({
      serviceType: selectedServiceType,
      originLocation,
      destinationLocation,
      declaredValue,
      documentWeight,
      objectWeight,
      objectHeight,
      objectLength,
      objectWidth,
      movingSize,
    });
  };

  return (
    <>

      <form onSubmit={handleSubmit}>

        <div className="mt-10 mb-20 space-y-10">

          {/* Tipo de servicio - Radio button selction*/}
          <ServiceTypeSelector
            value={selectedServiceType}
            onChange={setSelectedServiceType}
          />

          {/* Sección de ubicaciones */}
          <section className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8">
            {/* Ubicación de origen */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de origen</h2>
              <LocationSelector
                value={originLocation}
                label="Ciudad de origen"
                onChange={setOriginLocation}
              />
            </div>

            {/* Ubicación de destino */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de destino</h2>
              <LocationSelector
                value={destinationLocation}
                label="Ciudad de destino"
                onChange={setDestinationLocation}
              />
            </div>
          </section>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <section className="sm:col-span-3">
              <DeclaredValueInput value={declaredValue} onChange={setDeclaredValue} />
            </section>

            {/* Campo adicional para servicio tipo "documento" */}
            {selectedServiceType === 'documento' && (
              <section className="sm:col-span-3">
                <DocumentWeightInput value={documentWeight} onChange={setDocumentWeight} />
              </section>
            )}

            {/* Campo adicional para servicio tipo "objeto" */}
            {selectedServiceType === 'objeto' && (
              <section className="sm:col-span-3">
                <ObjectWeightInput value={objectWeight} onChange={setObjectWeight} />
              </section>
            )}

          </div>

          {/* Sección adicional para servicio tipo "objeto" */}
          {selectedServiceType === 'objeto' && (
            <section className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-2">
                <ObjectHeightInput value={objectHeight} onChange={setObjectHeight} />
              </div>

              <div className="sm:col-span-2">
                <ObjectLengthInput value={objectLength} onChange={setObjectLength} />
              </div>

              <div className="sm:col-span-2">
                <ObjectWidthInput value={objectWidth} onChange={setObjectWidth} />
              </div>
            </section>
          )}

          {/* Campo adicional para servicio tipo "mudanza" */}
          {selectedServiceType === 'mudanza' && (
            <section>
              <MovingSizeSelector value={movingSize} onChange={setMovingSize} />
            </section>
          )}

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <label htmlFor="submit" className="sr-only">
              Cotizar
            </label>
            {/* Botón para enviar el formulario */}
            <button
              type="submit"
              className="rounded-md bg-yellow-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-900"
            >
              Cotizar
            </button>
          </div>

        </div>

      </form>

      {/* Mostrar el resultado de la cotización si está disponible */}
      {priceQuote !== null && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">
            Precio de la cotización: {priceQuote} Piezas de oro
          </h2>
        </div>
      )}
    </>


  );
}