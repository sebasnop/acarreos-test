import type { AdminInterface } from "@/interfaces/DatabaseInterfaces"

/**
 * `AdminsTable` es un array que contiene los datos de los administradores registrados en el sistema.
 * Cada objeto en el array representa a un administrador con un ID, nombre de usuario y rol.
 * 
 * @type {AdminInterface[]}
 */
export const AdminsTable: AdminInterface[] = [
  { idAdmin: 1, username: "adminOne", password: "password123"},
  { idAdmin: 2, username: "adminTwo", password: "password123"},
  { idAdmin: 3, username: "adminThree", password: "password123"},
  { idAdmin: 4, username: "admin", password: "password123"}
];

