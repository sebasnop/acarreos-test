import type { CarrierInterface } from "@/interfaces/DatabaseInterfaces"

/**
 * `CarriersTable` es un array que contiene los datos de los transportistas registrados en el sistema.
 * Cada objeto en el array representa a un transportista con un ID, nombre de usuario y rol asignado.
 * 
 * @type {CarrierInterface[]}
 */
export const CarriersTable: CarrierInterface[] = [
  { idCarrier: 1, username: "carrierOne", rol: "Transportista Junior" },
  { idCarrier: 2, username: "carrierTwo", rol: "Transportista Junior" },
  { idCarrier: 3, username: "carrierThree", rol: "Transportista Senior" },
  { idCarrier: 4, username: "carrier", rol: "Transportista Senior" }
];
