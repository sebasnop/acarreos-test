import type { ClientInterface } from "@/interfaces/DatabaseInterfaces"

/**
 * `usersTable` es un array que contiene la información de los clientes registrados en el sistema.
 * Cada objeto en el array representa un cliente con detalles como el identificador, nombre de usuario,
 * correo electrónico, ubicación predeterminada y contraseña.
 * 
 * @type {ClientInterface[]}
 */
export const clientsTable: ClientInterface[] = [
    { idClient: 1, username: "danielChanci", email: "daniel.chanci@example.com", default_location: "Reino Tierra", password: "password123" },
    { idClient: 2, username: "alejandraUribe", email: "alejandra.uribe@example.com", default_location: "Ciudad República", password: "password123" },
    { idClient: 3, username: "sebastianValencia", email: "sebastian.valencia@example.com", default_location: "Templos Aire", password: "password123" },
    { idClient: 4, username: "user", email: "user@example.com", default_location: "Templos Aire", password: "password123" }
]
