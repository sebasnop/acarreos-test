import type { AdminInterface } from "@/interfaces/DatabaseInterfaces"

export const AdminsTable: AdminInterface[] = [
  { idAdmin: 1, username: "adminOne", rol: "Administrador general" },
  { idAdmin: 2, username: "adminTwo", rol: "Administrador general"},
  { idAdmin: 3, username: "adminThree", rol: "Administrador de envíos"},
  { idAdmin: 4, username: "admin", rol: "CEO"}
]
