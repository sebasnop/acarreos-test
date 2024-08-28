import { Textarea } from "@headlessui/react";
import { useEffect, useState } from "react";

interface AddressInputProps {
  onAddressChange: (address: string) => void;
  labelTitle: string,
  id: string
}
const labelDescription: string = `Máximo 300 caracteres.`;

export default function AddressInput({
  onAddressChange,
  labelTitle,
  id
}: AddressInputProps) {

  const [address, setAddress] = useState<string>('')

  const handleAddressChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(event.target.value);
  };

  useEffect(() => {
    onAddressChange(address);
  }, [address]);

  return (
    <>
      <label htmlFor={id} className="block text-base font-semibold leading-6 text-gray-900">
        {labelTitle}
        <p className="mt-1 text-sm font-normal leading-6 text-gray-900">
          {labelDescription}
        </p>
      </label>
      <Textarea
        name={id}
        id={id}
        autoComplete="shipping address-level1"
        maxLength={300}
        value={address}
        placeholder="Calle 123 # 456 - Casa 78"
        onChange={handleAddressChange}
        required
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
      />

    </>
  );
}