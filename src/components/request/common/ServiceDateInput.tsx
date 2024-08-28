import { useEffect, useState } from "react";

interface ServiceDateInputProps {
  onDateChange: (address: string) => void;
}

const labelTitle: string = `Fecha del servicio`;
const labelDescription: string = `Puede variar según disponibilidad.`;

export default function ServiceDateInput({
  onDateChange
}: ServiceDateInputProps) {

  const [date, setDate] = useState<string>('')

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

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