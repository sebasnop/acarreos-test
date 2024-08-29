import InsideHeader from "@/components/header/InsideHeader";
import React, { useState } from "react";
import { ShipmentsTable } from "@/database/ShipmentsTable";
import EditModal from "@/components/EditModal";

/**
 * El componente MainCarrier representa la página principal para los transportistas donde pueden ver y editar el estado de sus envíos transportados.
 * 
 * @component
 */
export default function MainCarrier() {
  // Estado para almacenar los envíos mostrados en la tabla
  const [shipments, setShipments] = useState(ShipmentsTable);
  
  // Estado para almacenar el envío seleccionado para editar
  const [selectedShipment, setSelectedShipment] = useState(null);
  
  // Estado para controlar la visibilidad del modal de edición
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Maneja el clic en el botón de editar, abriendo el modal de edición.
   *
   * @param {Object} shipment - El envío que será editado.
   */
  const handleEditClick = (shipment) => {
    setSelectedShipment(shipment);
    setIsModalOpen(true);
  };

  /**
   * Actualiza el estado de un envío en la tabla.
   *
   * @param {number} guideCode - El código de guía del envío.
   * @param {string} newStatus - El nuevo estado del envío.
   */
  const handleStatusUpdate = (guideCode, newStatus) => {
    const updatedShipments = shipments.map((shipment) =>
      shipment.guideCode === guideCode ? { ...shipment, status: newStatus } : shipment
    );
    setShipments(updatedShipments);
    setIsModalOpen(false); // Cierra el modal después de actualizar
  };

  return (
    <>
      <InsideHeader role="carrier" />
      <div className="flex flex-col px-6 py-8">
        {/* Título de la página */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Tus pedidos transportados</h1>
        </div>

        {/* Tabla de envíos para pantallas medianas y grandes */}
        <div className="hidden sm:block overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-yellow-950">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Guía pedido</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Descripción</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Fecha de creación</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Última actualización</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Costo</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Estado pedido</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shipments.map((shipment) => (
                    <tr key={shipment.guideCode} className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shipment.guideCode}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{shipment.description}</td>
                      <td className="px-6 py-4 text-sm font-medium text-center">
                        <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getStatusColor(shipment.status)}`}>
                          {shipment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-500">{shipment.requestDate}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-500">{shipment.lastUpdateDate}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-500">{shipment.cost}</td>
                      <td className="px-6 py-4 text-sm font-medium text-center">
                        <button onClick={() => handleEditClick(shipment)} className="text-yellow-950 hover:text-yellow-700">
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Vista tipo tarjeta para dispositivos pequeños */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {shipments.map((shipment) => (
            <div key={shipment.guideCode} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">Pedido #{shipment.guideCode}</h2>
                <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getStatusColor(shipment.status)}`}>
                  {shipment.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{shipment.description}</p>
              <p className="mt-2 text-sm text-gray-500">Fecha de creación: {shipment.requestDate}</p>
              <p className="mt-2 text-sm text-gray-500">Última actualización: {shipment.lastUpdateDate}</p>
              <p className="mt-2 text-sm text-gray-500">Costo: {shipment.cost}</p>
              <button onClick={() => handleEditClick(shipment)} className="text-yellow-950 hover:text-yellow-700 mt-2 inline-block">
                Editar estado
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedShipment && (
        <EditModal
          shipment={selectedShipment}
          onUpdateStatus={handleStatusUpdate}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

/**
 * Devuelve el color de fondo y texto para el estado del pedido.
 *
 * @param {string} status - El estado del pedido.
 * @returns {string} - Las clases de Tailwind CSS que representan los colores del estado.
 */
function getStatusColor(status: string) {
  switch (status) {
    case "Registrado":
      return "bg-gray-300 text-gray-800";
    case "Recogido":
      return "bg-yellow-300 text-yellow-800";
    case "En camino":
      return "bg-green-100 text-green-800";
    case "Entregado":
      return "bg-green-300 text-green-800";
    case "En devolución":
      return "bg-red-200 text-red-800";
    case "Extraviado":
      return "bg-red-400 text-red-900";
    default:
      return "bg-white-300 text-gray-800";
  }
}


