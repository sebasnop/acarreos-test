import { NationsEnum, RegionsEnum } from "@/interfaces/DatabaseEnums"

/**
 * Representa un envío dentro del sistema.
 */
interface ShipmentInterface {
  /**
   * Código de guía único para el envío.
   */
  guideCode: number,

  /**
   * ID de la ciudad de origen del envío.
   */
  idOriginCity: number,

  /**
   * ID de la ciudad de destino del envío.
   */
  idDestinationCity: number,

  /**
   * Estado actual del envío.
   */
  status: string,

  /**
   * Tipo de envío (e.g., "documento", "objeto", "mudanza").
   */
  type: string,

  /**
   * ID de la última ciudad conocida donde estuvo el envío.
   */
  idLastCity: number,

  /**
   * Costo del envío en piezas de oro.
   */
  cost: number,

  /**
   * Fecha en que se solicitó el envío.
   */
  requestDate: string,

  /**
   * Fecha de la última actualización del estado del envío.
   */
  lastUpdateDate: string,

  /**
   * Descripción adicional del envío.
   */
  description: string,
}

/**
 * Representa una nación en el mundo de Avatar.
 */
interface NationInterface {
  /**
   * Nombre de la nación, basado en el enumerado `NationsEnum`.
   * @example "NationsEnum.Water"
   */
  name: NationsEnum,

  /**
   * Nombre completo de la nación en español.
   * @example "Tribus Agua"
   */
  nameSpanish: string,

  /**
   * Identificador visual de la nación (opcional).
   * @example "https://avatarimages.com/logos/water-tribes-logo.svg"
   */
  img?: string,
}

/**
 * Representa una región dentro de una nación en el mundo de Avatar.
 */
interface RegionInterface {
  /**
   * Nombre de la región, basado en el enumerado `RegionsEnum`.
   * @example "RegionsEnum.AirNorth"
   */
  name: RegionsEnum,

  /**
   * Nación a la que pertenece la región.
   * @example "NationsEnum.Air"
   */
  nation: NationsEnum,

  /**
   * Nombre de la región en español.
   * @example "Templo Aire del Norte"
   */
  nameSpanish: string,
}

/**
   * Representa una ciudad dentro de una región en el mundo de Avatar.
   */
interface CityInterface {
  /**
   * ID único de la ciudad.
   */
  id: number,

  /**
   * Nombre de la ciudad.
   * @example "Ba Sing Se"
   */
  name: string,

  /**
   * Región a la que pertenece la ciudad, basada en el enumerado `RegionsEnum`.
   * @example "RegionsEnum.Earth"
   */
  region: RegionsEnum,
}

/**
 * Representa un usuario en el sistema.
 */
export interface ClientInterface {
  /**
   * ID único del usuario.
   */
  idClient: number,

  /**
   * Nombre de usuario.
   * @example "danielChanci"
   */
  username: string,

  /**
   * Correo electrónico del usuario.
   * @example "daniel.chanci@example.com"
   */
  email: string,

  /**
   * Ubicación predeterminada del usuario (opcional).
   * @example "Reino Tierra"
   */
  default_location?: string,

  /**
   * Contraseña del usuario (hash o en texto plano dependiendo de la implementación).
   * @example "password123"
   */
  password: string,
}

/**
 * Representa un transportista en el sistema.
 */
interface CarrierInterface {
  /**
   * ID único del transportista.
   */
  idCarrier: number,

  /**
   * Nombre de usuario del transportista.
   * @example "carrierOne"
   */
  username: string,

  /**
   * Rol del transportista.
   * @example "Transportista Junior"
   */
  rol: string,
}

/**
 * Representa un administrador en el sistema.
 */
interface AdminInterface {
  /**
   * ID único del administrador.
   */
  idAdmin: number,

  /**
   * Nombre de usuario del administrador.
   * @example "adminOne"
   */
  username: string,

  /**
   * Rol del administrador.
   * @example "Administrador general"
   */
  rol: string,
}

/**
 * Representa un bisonte en el sistema.
 */
interface BisonsInterface {
  /**
   * ID único del bisonte.
   */
  idBison: number,

  /**
   * Nombre del bisonte.
   * @example "Appa"
   */
  name: string,

  /**
   * Descripción del bisonte.
   * @example "Bisonte líder"
   */
  description: string,

  /**
   * Estado actual del bisonte.
   * @example "Descansando"
   */
  status: string,

  /**
   * Fecha de finalización del descanso del bisonte (opcional).
   * @example "2024-09-01"
   */
  endRestDate?: string,

  /**
   * Kilómetros recorridos por el bisonte.
   * @example 5000
   */
  kilometersTraveled: number,
}

/**
 * Tipo que define los roles posibles de un usuario en el sistema.
 */
export type UserRole = 'client' | 'carrier' | 'admin';

export type { 
  ShipmentInterface,
  NationInterface,
  RegionInterface,
  CityInterface,
  CarrierInterface,
  AdminInterface,
  BisonsInterface
}
