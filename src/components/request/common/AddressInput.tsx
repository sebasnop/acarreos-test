import { Textarea } from "@headlessui/react";
import { useEffect, useState } from "react";

interface AddressInputProps {
  /**
   * Función callback que se llama cuando cambia la dirección.
   * 
   * @param address - La dirección ingresada.
   */
  onAddressChange: (address: string) => void;

  /**
   * Título que se muestra como etiqueta para el campo de dirección.
   */
  labelTitle: string;

  /**
   * Identificador único para el campo de dirección, usado para asociar la etiqueta con el campo.
   */
  id: string;
}

const labelDescription: string = `Máximo 300 caracteres.`;

/**
 * Componente `AddressInput`.
 * 
 * Renderiza un campo de texto para que el usuario ingrese una dirección. La dirección ingresada
 * se limita a 300 caracteres y se reporta al componente padre a través de `onAddressChange`.
 * 
 * @param props - Las propiedades del componente, incluyendo la función de cambio, el título de la etiqueta, y el identificador.
 * @returns Un campo de entrada de texto para capturar direcciones.
 */
export default function AddressInput({
  onAddressChange,
  labelTitle,
  id
}: AddressInputProps) {
  const [address, setAddress] = useState<string>('');

  /**
   * Maneja los cambios en el campo de texto y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el área de texto.
   */
  const handleAddressChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(event.target.value);
  };

  /**
   * Efecto que se ejecuta cuando cambia la dirección.
   * Notifica al componente padre del nuevo valor de la dirección.
   */
  useEffect(() => {
    onAddressChange(address);
  }, [address]);

  return (
    <>
      <label htmlFor={id} className="block text-base font-semibold leading-6 text-gray-900">
        {labelTitle}
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          {labelDescription}
        </p>
      </label>
      <Textarea
        name={id}
        id={id}
        autoComplete="shipping address-level1"
        maxLength={300}
        value={address}
        placeholder="Calle 123 # 456 - Casa 78"
        onChange={handleAddressChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
