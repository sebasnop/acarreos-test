import { useEffect, useState } from "react";
import { maxObjectWidth } from "@/constants/bussinessConsts";

interface ObjectWidthInputProps {
  onObjectWidthChange: (objectWidth: string) => void;
}

const minObjectWidth: string = "1"

const labelTitle: string = "Ancho"
const labelDescription: string = `Entre ${minObjectWidth} y ${maxObjectWidth} centímetros (cm)`;

export default function ObjectWidthInput({
  onObjectWidthChange
}: ObjectWidthInputProps) {

  const [objectWidth, setObjectWidth] = useState<string>('')

  const handleObjectWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectWidth(event.target.value);
  };

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