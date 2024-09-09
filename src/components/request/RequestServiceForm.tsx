import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LocationSelector from '@/components/request/common/LocationSelector';
import ServiceTypeSelector from '@/components/request/common/ServiceTypeSelector';
import DeclaredValueInput from '@/components/request/common/DeclaredValueInput';
import AddressInput from '@/components/request/common/AddressInput';
import ServiceDateInput from '@/components/request/common/ServiceDateInput';
import DocumentWeightInput from '@/components/request/document/DocumentWeightInput';
import ObjectWeightInput from '@/components/request/object/ObjectWeightInput';
import ObjectHeightInput from '@/components/request/object/ObjectHeightInput';
import ObjectLengthInput from '@/components/request/object/ObjectLengthInput';
import ObjectWidthInput from '@/components/request/object/ObjectWidthInput';
import MovingSizeSelector from '@/components/request/moving/MovingSizeSelector';

/**
 * Componente `RequestServiceForm`.
 *
 * Renderiza un formulario para que los usuarios puedan solicitar un servicio de transporte,
 * incluyendo la selección de tipo de servicio, ubicación, dirección, y detalles específicos
 * como el peso del documento, dimensiones del objeto, o el tamaño de la mudanza.
 *
 * @returns El formulario para solicitar un servicio de transporte.
 */
export default function RequestServiceForm() {
  const [selectedServiceType, setSelectedServiceType] = useState<string>('');
  const [originLocation, setOriginLocation] = useState({ nation: '', region: '', cityId: '' });
  const [destinationLocation, setDestinationLocation] = useState({ nation: '', region: '', cityId: '' });
  const [originAddress, setOriginAddress] = useState<string>('');
  const [destinationAddress, setDestinationAddress] = useState<string>('');
  const [declaredValue, setDeclaredValue] = useState<string>('');
  const [serviceDate, setServiceDate] = useState<string>('');

  // Estado para los campos adicionales según el tipo de servicio
  const [documentWeight, setDocumentWeight] = useState<string>('');
  const [objectWeight, setObjectWeight] = useState<string>('');
  const [objectHeight, setObjectHeight] = useState<string>('');
  const [objectLength, setObjectLength] = useState<string>('');
  const [objectWidth, setObjectWidth] = useState<string>('');
  const [movingSize, setMovingSize] = useState<string>('');

  /**
   * Maneja el envío del formulario, recopilando todos los datos ingresados y mostrándolos en la consola.
   *
   * @param event - El evento de envío del formulario.
   */
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Generar la fecha actual en formato YYYYMMDD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;

    // Generar un número aleatorio de 3 dígitos
    const randomNumber = Math.floor(Math.random() * 900) + 100;

    // Generar el código de pedido concatenando la fecha y el número aleatorio
    const orderCode = `${dateStr}${randomNumber}`;

    // Mostrar el alert con el código de pedido
    alert(`Su pedido ha sido creado con el código ${orderCode}`);

    // Navegar a la página main-user
    navigate('/main-user');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 mb-20 space-y-10">

          {/* Tipo de servicio - Radio button selection */}
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
                label="Ciudad de origen"
                value={originLocation}
                onChange={setOriginLocation}
              />

              {originLocation.cityId &&
                <div className='mt-8'>
                  <AddressInput value={originAddress} labelTitle='Dirección de origen' onChange={setOriginAddress} id='origin-address' />
                </div>
              }

            </div>

            {/* Ubicación de destino */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de destino</h2>
              <LocationSelector
                label="Ciudad de destino"
                value={destinationLocation}
                onChange={setDestinationLocation}
              />

              {destinationLocation.cityId &&
                <div className='mt-8'>
                  <AddressInput value={destinationAddress} labelTitle='Dirección de destino' onChange={setDestinationAddress} id='destination-addres' />
                </div>
              }

            </div>
          </section>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

          <section>
            <ServiceDateInput value={serviceDate} onChange={setServiceDate} />
          </section>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <label htmlFor="submit" className="sr-only">
              Solicitar servicio
            </label>
            <button
              type="submit"
              className="rounded-md bg-yellow-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-900"
            >
              Solicitar servicio
            </button>
          </div>

        </div>

      </form>
    </>
  );
}

