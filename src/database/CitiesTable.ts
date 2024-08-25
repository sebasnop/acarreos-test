import { RegionsEnum as Regions } from "@/interfaces/DatabaseEnums"
import type { CityInterface } from "@/interfaces/DatabaseInterfaces"

export const CitiesTable: CityInterface[] = [
  { id: 1, region: Regions.WaterNorth, name: "Agna Quel'a" },
  { id: 2, region: Regions.WaterSouth, name: "Wolf Cove" },
  { id: 3, region: Regions.WaterSouth, name: "Hakoda's Village" },
]