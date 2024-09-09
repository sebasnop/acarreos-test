import { minObjectWeight, maxObjectWeight } from "@/constants/bussinessConsts";

interface ObjectWeightInputProps {

   /**
   * Peso de objeto ingresado actualmente.
   */
   value: string;

  /**
   * Función callback que se llama cuando cambia el peso del objeto.
   * 
   * @param objectWeight - El peso del objeto en kilogramos (kg).
   */
  onChange: (objectWeight: string) => void;
}

/**
 * Componente `ObjectWeightInput`.
 * 
 * Renderiza un campo de entrada para que el usuario ingrese el peso del objeto en kilogramos.
 * El peso debe estar entre los valores mínimos y máximos definidos en las constantes del negocio.
 * 
 * @param {ObjectWeightInputProps} props - Las propiedades del componente.
 * @returns Un campo de entrada para capturar el peso del objeto.
 */
export default function ObjectWeightInput({
  value,
  onChange
}: ObjectWeightInputProps) {
  
  const labelTitle: string = "Peso";
  const labelDescription: string = `Peso en kilogramos (kg) del objeto, entre ${minObjectWeight} y ${maxObjectWeight}`;


  /**
   * Maneja los cambios en el campo de entrada del peso del objeto y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo de entrada.
   */
  const handleObjectWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

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
        value={value}
        placeholder="Ejemplo: 1000"
        onChange={handleObjectWeightChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
