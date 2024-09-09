import { maxObjectLength } from "@/constants/bussinessConsts";

interface ObjectLengthInputProps {

  /**
   * Largo de objeto ingresado actualmente.
   */
  value: string;

  /**
   * Función callback que se llama cuando cambia el largo del objeto.
   * 
   * @param objectLength - El largo del objeto en centímetros (cm).
   */
  onChange: (objectLength: string) => void;
}

/**
 * Componente `ObjectLengthInput`.
 * 
 * Renderiza un campo de entrada para que el usuario ingrese el largo del objeto en centímetros.
 * El largo debe estar entre los valores mínimos y máximos definidos en las constantes del negocio.
 * 
 * @param {ObjectLengthInputProps} props - Las propiedades del componente.
 * @returns Un campo de entrada para capturar el largo del objeto.
 */
export default function ObjectLengthInput({
  value,
  onChange
}: ObjectLengthInputProps) {

  const minObjectLength: string = "1";

  const labelTitle: string = "Largo";
  const labelDescription: string = `Entre ${minObjectLength} y ${maxObjectLength} centímetros (cm)`;

  /**
   * Maneja los cambios en el campo de entrada del largo del objeto y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo de entrada.
   */
  const handleObjectLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor="object-length" className="block text-lg font-semibold leading-6 text-gray-900">
        {labelTitle}
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          {labelDescription}
        </p>
      </label>
      <input
        type="number"
        max={String(maxObjectLength)}
        min={minObjectLength}
        id="object-length"
        name="object-length"
        value={value}
        placeholder="Ejemplo: 100"
        onChange={handleObjectLengthChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
