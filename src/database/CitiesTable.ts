import { RegionsEnum as Regions } from "@/interfaces/DatabaseEnums"
import type { CityInterface } from "@/interfaces/DatabaseInterfaces"

export const CitiesTable: CityInterface[] = [
  { id: 1, region: Regions.WaterNorth, name: "Agna Quel'a" },
  { id: 2, region: Regions.WaterSouth, name: "Wolf Cove" },
  { id: 3, region: Regions.WaterSouth, name: "Hakoda's Village" },
  { id: 4, region: Regions.AirNorth, name: "Northern Air Temple" },
  { id: 5, region: Regions.AirSouth, name: "Southern Air Temple" },
  { id: 6, region: Regions.AirEast, name: "Eastern Air Temple" },
  { id: 7, region: Regions.AirWest, name: "Western Air Temple" },
  { id: 8, region: Regions.UnitedRepublic, name: "Republic City" },
  { id: 9, region: Regions.Fire, name: "Fire Nation Capital" },
  { id: 10, region: Regions.Earth, name: "Ba Sing Se" },
  { id: 11, region: Regions.Earth, name: "Gaipan Village" },
  { id: 12, region: Regions.Earth, name: "Gaolin" },
  { id: 13, region: Regions.Earth, name: "Sandlocke City" },
  { id: 14, region: Regions.Earth, name: "Kyoshi Island" },
]