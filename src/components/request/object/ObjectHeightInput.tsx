import { useEffect, useState } from "react";
import { maxObjectHeight } from "@/constants/bussinessConsts";

interface ObjectHeightInputProps {
  /**
   * Función callback que se llama cuando cambia la altura del objeto.
   * 
   * @param objectHeight - La altura del objeto en centímetros (cm).
   */
  onObjectHeightChange: (objectHeight: string) => void;
}

const minObjectHeight: string = "1";

const labelTitle: string = "Altura";
const labelDescription: string = `Entre ${minObjectHeight} y ${maxObjectHeight} centímetros (cm)`;

/**
 * Componente `ObjectHeightInput`.
 * 
 * Renderiza un campo de entrada para que el usuario ingrese la altura del objeto en centímetros.
 * La altura debe estar entre los valores mínimos y máximos definidos en las constantes del negocio.
 * 
 * @param {ObjectHeightInputProps} props - Las propiedades del componente.
 * @returns {JSX.Element} Un campo de entrada para capturar la altura del objeto.
 */
export default function ObjectHeightInput({
  onObjectHeightChange
}: ObjectHeightInputProps): JSX.Element {
  const [objectHeight, setObjectHeight] = useState<string>('');

  /**
   * Maneja los cambios en el campo de entrada de la altura del objeto y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo de entrada.
   */
  const handleObjectHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectHeight(event.target.value);
  };

  /**
   * Efecto que se ejecuta cuando cambia la altura del objeto.
   * Notifica al componente padre del nuevo valor de la altura.
   */
  useEffect(() => {
    onObjectHeightChange(objectHeight);
  }, [objectHeight]);

  return (
    <>
      <label htmlFor="object-height" className="block text-lg font-semibold leading-6 text-gray-900">
        {labelTitle}
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          {labelDescription}
        </p>
      </label>
      <input
        type="number"
        max={String(maxObjectHeight)}
        min={minObjectHeight}
        id="object-height"
        name="object-height"
        value={objectHeight}
        placeholder="Ejemplo: 100"
        onChange={handleObjectHeightChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
