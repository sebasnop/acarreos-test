import { NationsEnum, RegionsEnum } from "@/interfaces/DatabaseEnums"

interface ShipmentInterface {
  guideCode: number,
  idOriginCity: number,
  idDestinationCity: number,
  status: string,
  type: string,
  idLastCity: number 
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

export type { 
  ShipmentInterface,
  NationInterface,
  RegionInterface,
  CityInterface
}