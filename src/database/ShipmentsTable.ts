import type { ShipmentInterface } from "@/interfaces/DatabaseInterfaces"

export const ShipmentsTable: ShipmentInterface[] = [
  { guideCode: 1, idOriginCity: 1, idDestinationCity: 3, status: "En camino", idLastCity: 2, type: "object"},
  { guideCode: 2, idOriginCity: 3, idDestinationCity: 1, status: "Registrado", idLastCity: 2, type: "document"},
  { guideCode: 3, idOriginCity: 1, idDestinationCity: 3, status: "Entregado", idLastCity: 3, type: "move"}
]