import { useEffect, useState } from "react";
import { MovingSizeEnum } from "@/interfaces/DatabaseEnums"

const labelTitle: string = "Tamaño de la mudanza"

interface MovingSizeSelectorProps {
  onMovingSizeChange: (movingSize: string) => void;
}

export default function MovingSizeSelector({
  onMovingSizeChange
}: MovingSizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  useEffect(() => {
    onMovingSizeChange(selectedSize);
  }, [selectedSize]);

  return (
    <>
      <label htmlFor="moving-size" className="block text-lg font-semibold leading-6 text-gray-900">
        {labelTitle}
      </label>

      <div className="mt-2">
        <select
          value={selectedSize}
          id="moving-size"
          name="moving-size"
          onChange={handleSizeChange}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="" disabled>
            Selecciona un tamaño de mudanza
          </option>
          {Object.values(MovingSizeEnum).map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

    </>
  );
}