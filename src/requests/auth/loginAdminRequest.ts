import { AdminsTable } from "@/database/AdminsTable";
import { AdminInterface } from "@/interfaces/DatabaseInterfaces";

/**
 * Valida las credenciales de una empresa.
 * 
 * @param username - El nombre de usuario de la empresa.
 * @param password - La contraseña de la empresa.
 * @returns La empresa si las credenciales son correctas, o null si no lo son.
 */
export default function loginAdminRequest(username: string, password: string): AdminInterface | null {
  return AdminsTable.find(admin => admin.username === username && admin.password === password) || null;
}