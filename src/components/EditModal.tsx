import React, { useState } from "react";

export default function EditModal({ shipment, onUpdateStatus, onClose }) {
  const [newStatus, setNewStatus] = useState(shipment.status);

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
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            className="bg-indigo-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-indigo-500"
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

