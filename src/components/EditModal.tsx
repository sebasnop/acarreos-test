import { useState } from "react";

interface EditModalProps {
  /**
   * El pedido actual cuyos detalles se están editando.
   */
  shipment: {
    guideCode: string;
    status: string;
  };

  /**
   * Función para actualizar el estado del pedido en la tabla principal.
   * 
   * @param guideCode - El código de guía del pedido.
   * @param newStatus - El nuevo estado seleccionado para el pedido.
   */
  onUpdateStatus: (guideCode: string, newStatus: string) => void;

  /**
   * Función para cerrar el modal sin guardar cambios.
   */
  onClose: () => void;
}

/**
 * Componente `EditModal`.
 * 
 * Este componente representa un modal que permite editar el estado de un pedido específico.
 * Se muestra sobre el contenido actual y permite al usuario seleccionar un nuevo estado para el pedido.
 * 
 * @param {EditModalProps} props - Las propiedades que se pasan al componente.
 * @returns {JSX.Element} El componente `EditModal`.
 */
export default function EditModal({ shipment, onUpdateStatus, onClose }: EditModalProps): JSX.Element {
  // Estado para manejar el nuevo estado del pedido seleccionado por el usuario
  const [newStatus, setNewStatus] = useState<string>(shipment.status);

  /**
   * Función que se ejecuta al hacer clic en el botón "Guardar".
   * Llama a la función `onUpdateStatus` para actualizar el estado del pedido.
   */
  const handleSave = () => {
    onUpdateStatus(shipment.guideCode, newStatus);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Editar estado del pedido</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Estado actual
          </label>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-950 focus:border-yellow-950 sm:text-sm"
          >
            <option value="Registrado">Registrado</option>
            <option value="Recogido">Recogido</option>
            <option value="En camino">En camino</option>
            <option value="Entregado">Entregado</option>
            <option value="En devolución">En devolución</option>
            <option value="Extraviado">Extraviado</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-yellow-950 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-700"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
