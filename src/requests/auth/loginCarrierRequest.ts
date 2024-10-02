import { CarriersTable } from "@/database/CarriersTable";
import { CarrierInterface } from "@/interfaces/DatabaseInterfaces";

/**
 * Valida las credenciales de un transportista.
 * 
 * @param username - El nombre de usuario del transportista.
 * @param password - La contraseña del transportista.
 * @returns El transportista si las credenciales son correctas, o null si no lo son.
 */
export default function loginCarrierRequest(username: string, password: string): CarrierInterface | null {
  return CarriersTable.find(carrier => carrier.username === username && carrier.password === password) || null;
}