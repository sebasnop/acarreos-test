interface ServiceTypeSelectorProps {
  selectedServiceType: string;
  onServiceTypeChange: (serviceType: string) => void;
}

/**
 * Componente ServiceTypeSelector.
 * 
 * Permite al usuario seleccionar un tipo de servicio de transporte.
 * 
 * @param {string} selectedServiceType - El valor del tipo de servicio seleccionado.
 * @param {Function} onServiceTypeChange - Callback para manejar el cambio de selección.
 * 
 * @returns {JSX.Element} Un conjunto de botones de radio para seleccionar el tipo de servicio.
 */
export default function ServiceTypeSelector({
  selectedServiceType,
  onServiceTypeChange,
}: ServiceTypeSelectorProps): JSX.Element {
  const handleServiceTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onServiceTypeChange(event.target.value);
  };

  return (
    <fieldset>
      <legend className="text-lg font-semibold leading-7 text-gray-900">
        Tipo de servicio
      </legend>

      <p className="mt-1 text-sm leading-6 text-gray-900">
        Selecciona lo que quieres que transportemos por tí
      </p>

      <div className="mt-6 space-y-6">
        <div className="flex items-center gap-x-3">
          <input
            id="document-service"
            name="service-type"
            type="radio"
            value="documento"
            required
            checked={selectedServiceType === 'documento'}
            onChange={handleServiceTypeChange}
            className="h-4 w-4 border-gray-300 text-yellow-900 focus:ring-yellow-900"
          />
          <label htmlFor="document-service" className="block text-sm font-medium leading-6 text-gray-900">
            Documento
          </label>
        </div>

        <div className="flex items-center gap-x-3">
          <input
            id="object-service"
            name="service-type"
            type="radio"
            value="objeto"
            checked={selectedServiceType === 'objeto'}
            onChange={handleServiceTypeChange}
            className="h-4 w-4 border-gray-300 text-yellow-900 focus:ring-yellow-900"
          />
          <label htmlFor="object-service" className="block text-sm font-medium leading-6 text-gray-900">
            Objeto
          </label>
        </div>

        <div className="flex items-center gap-x-3">
          <input
            id="moving-service"
            name="service-type"
            type="radio"
            value="mudanza"
            checked={selectedServiceType === 'mudanza'}
            onChange={handleServiceTypeChange}
            className="h-4 w-4 border-gray-300 text-yellow-900 focus:ring-yellow-900"
          />
          <label htmlFor="moving-service" className="block text-sm font-medium leading-6 text-gray-900">
            Mudanza
          </label>
        </div>
      </div>
    </fieldset>
  );
}
