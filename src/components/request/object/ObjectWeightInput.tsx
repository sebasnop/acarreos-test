import { useEffect, useState } from "react";
import { minObjectWeight, maxObjectWeight } from "@/constants/bussinessConsts";

interface ObjectWeightInputProps {
  onObjectWeightChange: (objectWeight: string) => void;
}

const labelTitle: string = "Peso"
const labelDescription: string = `Peso en kilogramos (kg) del objeto, entre ${minObjectWeight} y ${maxObjectWeight}`;

export default function ObjectWeightInput({
  onObjectWeightChange
}: ObjectWeightInputProps) {

  const [objectWeight, setObjectWeight] = useState<string>('')

  const handleObjectWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectWeight(event.target.value);
  };

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
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      />

    </>
  );
}