import type { UserInterface } from "@/interfaces/DatabaseInterfaces"

/**
 * `usersTable` es un array que contiene la información de los usuarios registrados en el sistema.
 * Cada objeto en el array representa un usuario con detalles como el identificador, nombre de usuario,
 * correo electrónico, ubicación predeterminada y contraseña.
 * 
 * @type {UserInterface[]}
 */
export const usersTable: UserInterface[] = [
    { idUser: 1, username: "danielChanci", email: "daniel.chanci@example.com", default_location: "Reino Tierra", password: "password123" },
    { idUser: 2, username: "alejandraUribe", email: "alejandra.uribe@example.com", default_location: "Ciudad República", password: "password123" },
    { idUser: 3, username: "sebastianValencia", email: "sebastian.valencia@example.com", default_location: "Templos Aire", password: "password123" },
    { idUser: 4, username: "user", email: "user@example.com", default_location: "Templos Aire", password: "password123" }
]
