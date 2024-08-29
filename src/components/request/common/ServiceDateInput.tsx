import { useEffect, useState } from "react";

interface ServiceDateInputProps {
  /**
   * Función callback que se llama cuando la fecha seleccionada cambia.
   * 
   * @param date - La fecha seleccionada por el usuario.
   */
  onDateChange: (date: string) => void;
}

const labelTitle: string = `Fecha del servicio`;
const labelDescription: string = `Puede variar según disponibilidad.`;

/**
 * Componente `ServiceDateInput`.
 * 
 * Renderiza un campo de entrada de fecha que permite al usuario seleccionar la fecha del servicio.
 * La fecha mínima permitida es el día siguiente al día actual.
 * 
 * @param {ServiceDateInputProps} props - Las propiedades del componente.
 * @returns {JSX.Element} Un campo de entrada de fecha.
 */
export default function ServiceDateInput({
  onDateChange
}: ServiceDateInputProps): JSX.Element {
  const [date, setDate] = useState<string>('');

  // Calcula la fecha mínima permitida (2 días después de la fecha actual)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const minDate = tomorrow.toISOString().split('T')[0];

  /**
   * Maneja los cambios en el campo de entrada de fecha y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo de entrada de fecha.
   */
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  /**
   * Efecto que se ejecuta cuando cambia la fecha seleccionada.
   * Notifica al componente padre del nuevo valor de la fecha.
   */
  useEffect(() => {
    onDateChange(date);
  }, [date]);

  return (
    <>
      <label htmlFor="service-date" className="block text-base font-semibold leading-6 text-gray-900">
        {labelTitle}
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          {labelDescription}
        </p>
      </label>
      <input
        name="service-date"
        id="service-date"
        type="date"
        min={minDate}
        value={date}
        onChange={handleAddressChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
