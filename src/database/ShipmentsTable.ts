import type { ShipmentInterface } from "@/interfaces/DatabaseInterfaces"

/**
 * `ShipmentsTable` es un array que contiene información sobre los envíos gestionados en el sistema.
 * Cada objeto en el array representa un envío con detalles como el código de guía, la ciudad de origen,
 * ciudad de destino, estado del envío, ciudad más reciente, tipo de envío, costo, fecha de solicitud,
 * última actualización y una descripción del envío.
 * 
 * @type {ShipmentInterface[]}
 */
export const ShipmentsTable: ShipmentInterface[] = [
  { guideCode: 1, idOriginCity: 1, idDestinationCity: 3, status: "En camino", idLastCity: 2, type: "object", cost: 200, requestDate: "2024-08-17", lastUpdateDate: "2024-08-18", description: "Envío de paquete de tamaño mediano"},
  { guideCode: 2, idOriginCity: 3, idDestinationCity: 1, status: "Registrado", idLastCity: 2, type: "document", cost: 100, requestDate: "2024-08-10", lastUpdateDate: "2024-08-10", description: "Envío de documentos oficiales"},
  { guideCode: 3, idOriginCity: 1, idDestinationCity: 3, status: "Entregado", idLastCity: 3, type: "move", cost: 500, requestDate: "2024-08-15", lastUpdateDate: "2024-08-16", description: "Mudanza completa"}
]