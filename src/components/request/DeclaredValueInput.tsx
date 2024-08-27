import { useEffect, useState } from "react";

interface DeclaredValueInputProps {
  onDeclaredValueChange: (declaredValue: string) => void;
}

const minDeclaredValue: string = "0";

export default function DeclaredValueInput({
  onDeclaredValueChange
}: DeclaredValueInputProps) {
  const [declaredValue, setDeclaredValue] = useState<string>('')

  const handleDeclaredValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeclaredValue(event.target.value);
  };

  useEffect(() => {
    onDeclaredValueChange(declaredValue);
  }, [declaredValue]);

  return (
    <>
      <label htmlFor="declared-value" className="block text-lg font-semibold leading-6 text-gray-900">
        Valor declarado
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          Valor en piezas de oro del contenido del envío
        </p>
      </label>
        <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <span className="flex select-none items-center pl-3 pr-1 text-gray-500 sm:text-sm">$</span>
          <input
            id="declared-value"
            name="declared-value"
            type="number"
            min={minDeclaredValue}
            value={declaredValue}
            onChange={handleDeclaredValueChange}
            placeholder="Ejemplo: 150"
            required
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
    </>
  );
} 