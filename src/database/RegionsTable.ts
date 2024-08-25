import { NationsEnum as Nations, RegionsEnum as Regions } from "@/interfaces/DatabaseEnums"
import type { RegionInterface } from "@/interfaces/DatabaseInterfaces"

export const RegionsTable: RegionInterface[] = [
  { nation: Nations.Air, name: Regions.AirNorth, nameSpanish: "Templo Aire del Norte" },
  { nation: Nations.Air, name: Regions.AirSouth, nameSpanish: "Templo Aire del Sur" },
  { nation: Nations.Air, name: Regions.AirEast, nameSpanish: "Templo Aire del Este" },
  { nation: Nations.Air, name: Regions.AirWest, nameSpanish: "Templo Aire del Oeste" },
  { nation: Nations.Fire, name: Regions.Fire, nameSpanish: "Nación del Fuego" },
  { nation: Nations.Water, name: Regions.WaterNorth, nameSpanish: "Tribu Agua del Norte" },
  { nation: Nations.Water, name: Regions.WaterSouth, nameSpanish: "Tribu Agua del Sur" },
  { nation: Nations.Earth, name: Regions.Earth, nameSpanish: "Reino Tierra" },
  { nation: Nations.UnitedRepublic, name: Regions.UnitedRepublic, nameSpanish: "República Unida" }
]