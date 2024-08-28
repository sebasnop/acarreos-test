import { useEffect, useState } from "react";
import { minDocumentWeight, maxDocumentWeight } from "@/constants/bussinessConsts";

interface DocumentWeightInputProps {
  onDocumentWeightChange: (documentWeight: string) => void;
}

const labelTitle: string = "Peso"
const labelDescription: string = `Peso en gramos (g) del artículo, entre ${minDocumentWeight} y ${maxDocumentWeight}`;

export default function DocumentWeightInput({
  onDocumentWeightChange
}: DocumentWeightInputProps) {

  const [documentWeight, setDocumentWeight] = useState<string>('')

  const handleDocumentWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentWeight(event.target.value);
  };

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