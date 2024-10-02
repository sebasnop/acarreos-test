import { ClientsTable } from "@/database/ClientsTable";
import { ClientInterface } from "@/interfaces/DatabaseInterfaces";

/**
 * Valida las credenciales de un cliente.
 * 
 * @param username - El nombre de usuario del cliente.
 * @param password - La contraseña del cliente.
 * @returns El usuario si las credenciales son correctas, o null si no lo son.
 */
export default function validateClientCredentials(username: string, password: string): ClientInterface | null {
  return ClientsTable.find(client => client.username === username && client.password === password) || null;
}
