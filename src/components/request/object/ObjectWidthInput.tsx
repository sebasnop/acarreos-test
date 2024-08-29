import { useEffect, useState } from "react";
import { maxObjectWidth } from "@/constants/bussinessConsts";

interface ObjectWidthInputProps {
  /**
   * Función callback que se llama cuando cambia el ancho del objeto.
   * 
   * @param objectWidth - El ancho del objeto en centímetros (cm).
   */
  onObjectWidthChange: (objectWidth: string) => void;
}

const minObjectWidth: string = "1";

const labelTitle: string = "Ancho";
const labelDescription: string = `Entre ${minObjectWidth} y ${maxObjectWidth} centímetros (cm)`;

/**
 * Componente `ObjectWidthInput`.
 * 
 * Renderiza un campo de entrada para que el usuario ingrese el ancho del objeto en centímetros.
 * El ancho debe estar entre los valores mínimos y máximos definidos en las constantes del negocio.
 * 
 * @param {ObjectWidthInputProps} props - Las propiedades del componente.
 * @returns {JSX.Element} Un campo de entrada para capturar el ancho del objeto.
 */
export default function ObjectWidthInput({
  onObjectWidthChange
}: ObjectWidthInputProps): JSX.Element {
  const [objectWidth, setObjectWidth] = useState<string>("");

  /**
   * Maneja los cambios en el campo de entrada del ancho del objeto y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo de entrada.
   */
  const handleObjectWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectWidth(event.target.value);
  };

  /**
   * Efecto que se ejecuta cuando cambia el ancho del objeto.
   * Notifica al componente padre del nuevo valor del ancho.
   */
  useEffect(() => {
    onObjectWidthChange(objectWidth);
  }, [objectWidth]);

  return (
    <>
      <label htmlFor="object-width" className="block text-lg font-semibold leading-6 text-gray-900">
        {labelTitle}
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          {labelDescription}
        </p>
      </label>
      <input
        type="number"
        max={String(maxObjectWidth)}
        min={minObjectWidth}
        id="object-width"
        name="object-width"
        value={objectWidth}
        placeholder="Ejemplo: 100"
        onChange={handleObjectWidthChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
