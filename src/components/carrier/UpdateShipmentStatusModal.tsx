import { ShipmentInterface } from "@/interfaces/DatabaseInterfaces";

interface EditModalProps {
  /**
   * El pedido actual cuyos detalles se están editando.
   */
  shipment: ShipmentInterface;

  /**
   * Función para actualizar el estado del pedido en la tabla principal.
   * 
   * @param guideCode - El código de guía del pedido.
   * @param newStatus - El nuevo estado seleccionado para el pedido.
   */
  onUpdateStatus: (guideCode: number, newStatus: string) => void;

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
 * @returns El componente `EditModal`.
 */
export default function UpdateShipmentStatusModal({ shipment, onUpdateStatus, onClose }: EditModalProps): JSX.Element {

  function nextStatus(currentStatus: string): string {
    switch (currentStatus) {
      case "Registrado":
        return "Recogido";
      case "Recogido":
        return "En camino";
      case "En camino":
        return "Entregado";
      default:
        return "Entregado";
    }
  }

  /**
   * Función que se ejecuta al hacer clic en el botón "Guardar".
   * Llama a la función `onUpdateStatus` para actualizar el estado del pedido.
   */
  const handleSave = () => {
    onUpdateStatus(shipment.guideCode, nextStatus(shipment.status));
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-2">Actualizar estado del pedido</h2>

        <div className="text-sm mb-6">
          <p><strong>Pedido:</strong> {shipment.guideCode}</p>
          <p><strong>Estado actual:</strong> {shipment.status}</p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-yellow-950 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-700"
          >
            Actualizar a {nextStatus(shipment.status)}
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
