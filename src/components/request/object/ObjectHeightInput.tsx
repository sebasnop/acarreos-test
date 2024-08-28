import { useEffect, useState } from "react";
import { maxObjectHeight } from "@/constants/bussinessConsts";

interface ObjectHeightInputProps {
  onObjectHeightChange: (objectHeight: string) => void;
}

const minObjectHeight: string = "1"

const labelTitle: string = "Altura"
const labelDescription: string = `Entre ${minObjectHeight} y ${maxObjectHeight} centímetros (cm)`;

export default function ObjectHeightInput({
  onObjectHeightChange
}: ObjectHeightInputProps) {

  const [objectHeight, setObjectHeight] = useState<string>('')

  const handleObjectHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectHeight(event.target.value);
  };

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