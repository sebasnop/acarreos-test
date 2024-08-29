import { NationsEnum, RegionsEnum } from "@/interfaces/DatabaseEnums"

interface ShipmentInterface {
  guideCode: number,
  idOriginCity: number,
  idDestinationCity: number,
  status: string,
  type: string,
  idLastCity: number,
  cost: number,
  requestDate: string,
  lastUpdateDate: string,
  description: string, 
}

/**
 * Represents a nation in the Avatar's world.
 */
interface NationInterface {

  /**
   * A simple name from enum for easily identify the nation
   * @example "NationsEnum.Water"
   */
  name: NationsEnum,

  /**
   * The complete name of the nation in Spanish
   * @example "Tribus Agua"
   */
  nameSpanish: string,
  
  /**
   * The visual identifier of the Nation
   * @example "https://avatarimages.com/logos/water-tribes-logo.svg"
   */
  img?: string
}

interface RegionInterface {
  name: RegionsEnum,
  nation: NationsEnum,
  nameSpanish: string
}

interface CityInterface {
  id: number,
  name: string,
  region: RegionsEnum
}

// Interface de usuarios
interface UserInterface {
  idUser: number,
  username: string,
  email: string,
  default_location?: string,
  password: string,
}

// Interface de transportistas
interface CarrierInterface {
  idCarrier: number,
  username: string,
  rol: string,
}

// Interface de administradores
interface AdminInterface {
  idAdmin: number,
  username: string,
  rol: string,
}

// Interface de bisontes
interface BisonsInterface {
  idBison: number,
  name: string,
  description: string,
  status: string,
  endRestDate?: string,
  kilometersTraveled: number,
}


export type { 
  ShipmentInterface,
  NationInterface,
  RegionInterface,
  CityInterface,
  UserInterface,
  CarrierInterface,
  AdminInterface,
  BisonsInterface
}