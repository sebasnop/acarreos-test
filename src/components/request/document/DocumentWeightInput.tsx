import { minDocumentWeight, maxDocumentWeight } from "@/constants/bussinessConsts";

interface DocumentWeightInputProps {

  /**
   * Valor actual del peso del documento.
   */
  value: string;

  /**
   * Función callback que se llama cuando cambia el peso del documento.
   * 
   * @param documentWeight - El peso del documento en gramos (g).
   */
  onChange: (documentWeight: string) => void;
}

/**
 * Componente `DocumentWeightInput`.
 * 
 * Renderiza un campo de entrada para que el usuario ingrese el peso del documento en gramos.
 * El peso debe estar entre los valores mínimos y máximos definidos en las constantes del negocio.
 * 
 * @param {DocumentWeightInputProps} props - Las propiedades del componente.
 * @returns Un campo de entrada para capturar el peso del documento.
 */
export default function DocumentWeightInput({
  value,
  onChange
}: DocumentWeightInputProps) {
  
  const labelTitle: string = "Peso";
  const labelDescription: string = `Peso en gramos (g) del artículo, entre ${minDocumentWeight} y ${maxDocumentWeight}`;

  /**
   * Maneja los cambios en el campo de entrada del peso del documento y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo de entrada.
   */
  const handleDocumentWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor="document-weight" className="block text-lg font-semibold leading-6 text-gray-900">
        {labelTitle}
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          {labelDescription}
        </p>
      </label>
      <input
        type="number"
        max={String(maxDocumentWeight)}
        min={String(minDocumentWeight)}
        id="document-weight"
        name="document-weight"
        value={value}
        placeholder="Ejemplo: 1000"
        onChange={handleDocumentWeightChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
