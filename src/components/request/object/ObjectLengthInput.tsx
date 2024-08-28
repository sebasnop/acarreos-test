import { useEffect, useState } from "react";
import { maxObjectLength } from "@/constants/bussinessConsts";

interface ObjectLengthInputProps {
  onObjectLengthChange: (objectLength: string) => void;
}

const minObjectLength: string = "1"

const labelTitle: string = "Largo"
const labelDescription: string = `Entre ${minObjectLength} y ${maxObjectLength} centímetros (cm)`;

export default function ObjectLengthInput({
  onObjectLengthChange
}: ObjectLengthInputProps) {

  const [objectLength, setObjectLength] = useState<string>('')

  const handleObjectLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectLength(event.target.value);
  };

  useEffect(() => {
    onObjectLengthChange(objectLength);
  }, [objectLength]);

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
        value={objectLength}
        placeholder="Ejemplo: 100"
        onChange={handleObjectLengthChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />

    </>
  );
}