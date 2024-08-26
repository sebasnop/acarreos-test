import type { ShipmentInterface } from "@/interfaces/DatabaseInterfaces"

export const ShipmentsTable: ShipmentInterface[] = [
  { guideCode: 1, idOriginCity: 1, idDestinationCity: 3, status: "En camino", idLastCity: 2, type: "object", cost: 200, requestDate: "2024-08-17", lastUpdateDate: "2024-08-18", description: "Envío de paquete de tamaño mediano"},
  { guideCode: 2, idOriginCity: 3, idDestinationCity: 1, status: "Registrado", idLastCity: 2, type: "document", cost: 100, requestDate: "2024-08-10", lastUpdateDate: "2024-08-10", description: "Envío de documentos oficiales"},
  { guideCode: 3, idOriginCity: 1, idDestinationCity: 3, status: "Entregado", idLastCity: 3, type: "move", cost: 500, requestDate: "2024-08-15", lastUpdateDate: "2024-08-16", description: "Mudanza completa"}
]