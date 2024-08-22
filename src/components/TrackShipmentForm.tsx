import React, { useState } from "react"

export default function TrackShipmentForm() {
  const [guideCode, setGuideCode] = useState<string>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    console.log(Object.fromEntries(data.entries())); // Ejemplo: imprime los datos del formulario
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuideCode(event.target.value)
  }

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label htmlFor="guideCode" className="block text-sm font-semibold leading-6 text-gray-900">
          Código de guía
        </label>
        <div className="mt-2.5">
          <input
            id="guideCode"
            name="guideCode"
            placeholder="0123456789"
            onChange={handleChange}
            value={guideCode}
            type="number"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
            ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
            focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button
        type="submit"
        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
        font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Consultar
      </button>
    </form>
  )
}