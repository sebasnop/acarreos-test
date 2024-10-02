// Base de datos simulada
import { ShipmentsTable as shipments } from "@/database/ShipmentsTable";
import { ShipmentInterface } from "@/interfaces/DatabaseInterfaces";

export default function trackShipment (guideCode: string): ShipmentInterface | undefined {
 return shipments.find(
  (shipment) => shipment.guideCode === Number(guideCode)
);
}
