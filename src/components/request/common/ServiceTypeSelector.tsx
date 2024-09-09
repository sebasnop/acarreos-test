interface ServiceTypeSelectorProps {
  /**
   * El tipo de servicio actualmente seleccionado.
   */
  value: string;

  /**
   * Función callback que se llama cuando el usuario cambia el tipo de servicio.
   * 
   * @param serviceType - El tipo de servicio seleccionado por el usuario.
   */
  onChange: (serviceType: string) => void;
}

/**
 * Componente `ServiceTypeSelector`.
 * 
 * Permite al usuario seleccionar un tipo de servicio de transporte a través de un conjunto
 * de botones de radio.
 * 
 * @param {ServiceTypeSelectorProps} props - Las propiedades del componente.
 * @returns Un conjunto de botones de radio para seleccionar el tipo de servicio.
 */
export default function ServiceTypeSelector({
  value,
  onChange,
}: ServiceTypeSelectorProps) {
  /**
   * Maneja el cambio de selección del tipo de servicio y llama al callback con el nuevo valor.
   * 
   * @param event - El evento de cambio en el botón de radio.
   */
  const handleServiceTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <fieldset>
      <legend className="text-lg font-semibold leading-7 text-gray-900">
        Tipo de servicio
      </legend>

      <p className="mt-1 text-sm leading-6 text-gray-900">
        Selecciona lo que quieres que transportemos por ti
      </p>

      <div className="mt-6 space-y-6">
        {/* Opción para 'Documento' */}
        <div className="flex items-center gap-x-3">
          <input
            id="document-service"
            name="service-type"
            type="radio"
            value="documento"
            required
            checked={value === 'documento'}
            onChange={handleServiceTypeChange}
            className="h-4 w-4 border-gray-300 text-yellow-900 focus:ring-yellow-900"
          />
          <label htmlFor="document-service" className="block text-sm font-medium leading-6 text-gray-900">
            Documento
          </label>
        </div>

        {/* Opción para 'Objeto' */}
        <div className="flex items-center gap-x-3">
          <input
            id="object-service"
            name="service-type"
            type="radio"
            value="objeto"
            checked={value === 'objeto'}
            onChange={handleServiceTypeChange}
            className="h-4 w-4 border-gray-300 text-yellow-900 focus:ring-yellow-900"
          />
          <label htmlFor="object-service" className="block text-sm font-medium leading-6 text-gray-900">
            Objeto
          </label>
        </div>

        {/* Opción para 'Mudanza' */}
        <div className="flex items-center gap-x-3">
          <input
            id="moving-service"
            name="service-type"
            type="radio"
            value="mudanza"
            checked={value === 'mudanza'}
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
