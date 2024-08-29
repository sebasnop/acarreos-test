import { useEffect, useState } from "react";
import { minObjectWeight, maxObjectWeight } from "@/constants/bussinessConsts";

interface ObjectWeightInputProps {
  /**
   * Función callback que se llama cuando cambia el peso del objeto.
   * 
   * @param objectWeight - El peso del objeto en kilogramos (kg).
   */
  onObjectWeightChange: (objectWeight: string) => void;
}

const labelTitle: string = "Peso";
const labelDescription: string = `Peso en kilogramos (kg) del objeto, entre ${minObjectWeight} y ${maxObjectWeight}`;

/**
 * Componente `ObjectWeightInput`.
 * 
 * Renderiza un campo de entrada para que el usuario ingrese el peso del objeto en kilogramos.
 * El peso debe estar entre los valores mínimos y máximos definidos en las constantes del negocio.
 * 
 * @param {ObjectWeightInputProps} props - Las propiedades del componente.
 * @returns {JSX.Element} Un campo de entrada para capturar el peso del objeto.
 */
export default function ObjectWeightInput({
  onObjectWeightChange
}: ObjectWeightInputProps): JSX.Element {
  const [objectWeight, setObjectWeight] = useState<string>("");

  /**
   * Maneja los cambios en el campo de entrada del peso del objeto y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo de entrada.
   */
  const handleObjectWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectWeight(event.target.value);
  };

  /**
   * Efecto que se ejecuta cuando cambia el peso del objeto.
   * Notifica al componente padre del nuevo valor del peso.
   */
  useEffect(() => {
    onObjectWeightChange(objectWeight);
  }, [objectWeight]);

  return (
    <>
      <label htmlFor="object-weight" className="block text-lg font-semibold leading-6 text-gray-900">
        {labelTitle}
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          {labelDescription}
        </p>
      </label>
      <input
        type="number"
        max={String(maxObjectWeight)}
        min={String(minObjectWeight)}
        id="object-weight"
        name="object-weight"
        value={objectWeight}
        placeholder="Ejemplo: 1000"
        onChange={handleObjectWeightChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
