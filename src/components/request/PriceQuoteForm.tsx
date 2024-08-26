import { useState } from 'react'
import LocationSelector from '@/components/request/LocationSelector';
import ServiceTypeSelector from '@/components/request/ServiceTypeSelector';

/*
Elementos que debe tener el formulario:

- Tipo
- Ciudad Origen
- Ciudad Destino
- Dirección Origen
- Dirección Destino
- Valor Declarado
- Fecha del servicio

MUDANZAS
- Tamaño del bisonte

DOCUMENTOS
- Peso

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

  return (
    <form>

      <div className="mt-10 mb-20 space-y-10">

        {/* Tipo de servicio - Radio button selction*/}
        <ServiceTypeSelector
        selectedServiceType={selectedServiceType}
        onServiceTypeChange={setSelectedServiceType}
      />

        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8">
          {/* Ubicación de origen */}
          <section className="flex-1">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de origen</h2>
            <LocationSelector
              label="Ciudad de origen"
              onLocationChange={setOriginLocation}
            />
          </section>

          {/* Ubicación de destino */}
          <section className="flex-1">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de destino</h2>
            <LocationSelector
              label="Ciudad de destino"
              onLocationChange={setDestinationLocation}
            />
          </section>
        </div>



      </div>

    </form>
  );
}