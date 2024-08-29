import { useEffect, useState } from "react";
import { minDocumentWeight, maxDocumentWeight } from "@/constants/bussinessConsts";

interface DocumentWeightInputProps {
  /**
   * Función callback que se llama cuando cambia el peso del documento.
   * 
   * @param documentWeight - El peso del documento en gramos (g).
   */
  onDocumentWeightChange: (documentWeight: string) => void;
}

const labelTitle: string = "Peso";
const labelDescription: string = `Peso en gramos (g) del artículo, entre ${minDocumentWeight} y ${maxDocumentWeight}`;

/**
 * Componente `DocumentWeightInput`.
 * 
 * Renderiza un campo de entrada para que el usuario ingrese el peso del documento en gramos.
 * El peso debe estar entre los valores mínimos y máximos definidos en las constantes del negocio.
 * 
 * @param {DocumentWeightInputProps} props - Las propiedades del componente.
 * @returns {JSX.Element} Un campo de entrada para capturar el peso del documento.
 */
export default function DocumentWeightInput({
  onDocumentWeightChange
}: DocumentWeightInputProps): JSX.Element {
  const [documentWeight, setDocumentWeight] = useState<string>('');

  /**
   * Maneja los cambios en el campo de entrada del peso del documento y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo de entrada.
   */
  const handleDocumentWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentWeight(event.target.value);
  };

  /**
   * Efecto que se ejecuta cuando cambia el peso del documento.
   * Notifica al componente padre del nuevo valor del peso.
   */
  useEffect(() => {
    onDocumentWeightChange(documentWeight);
  }, [documentWeight]);

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
        value={documentWeight}
        placeholder="Ejemplo: 1000"
        onChange={handleDocumentWeightChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />
    </>
  );
}
