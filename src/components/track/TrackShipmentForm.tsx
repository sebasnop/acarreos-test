import React, { useState } from "react";
import TrackModalDialog from "@/components/track/TrackModalDialog";

/**
 * Componente TrackShipmentForm.
 *
 * Renderiza un formulario para que el usuario ingrese el código de guía y consulta el estado del envío.
 */
export default function TrackShipmentForm() {
  const [guideCodeString, setGuideCodeString] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);

  /**
   * Maneja el cambio en el campo de entrada del código de guía.
   *
   * @param event - El evento de cambio del input.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuideCodeString(event.target.value);
  };

  /**
   * Maneja el envío del formulario, abriendo el modal y disparando la búsqueda.
   *
   * @param event - El evento de envío del formulario.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
    setTriggerSearch(true);
  };

  /**
   * Maneja el cierre del modal, reseteando el estado de búsqueda.
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTriggerSearch(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="guideCode"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Código de guía
          </label>
          <div className="mt-2.5">
            <input
              id="guideCode"
              name="guideCode"
              placeholder="240827123456"
              onChange={handleChange}
              value={guideCodeString}
              required
              type="number"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <label htmlFor="submit" className="sr-only">
          Consultar
        </label>
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
            font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Consultar
        </button>
      </form>
      <TrackModalDialog
        open={isModalOpen}
        onClose={handleCloseModal}
        guideCode={guideCodeString}
        triggerSearch={triggerSearch}
      />
    </>
  );
}
