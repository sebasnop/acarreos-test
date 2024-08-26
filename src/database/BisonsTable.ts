import type { BisonsInterface } from "@/interfaces/DatabaseInterfaces"

export const BisonsTable: BisonsInterface[] = [
  { idBison: 1, name: "Appa", description: "Bisonte líder", status: "Descansando", endRestDate: "2024-09-01", kilometersTraveled: 5000 },
  { idBison: 2, name: "Momo", description: "Bisonte joven", status: "Disponible", endRestDate: null, kilometersTraveled: 3000 },
  { idBison: 3, name: "Roku", description: "Bisonte experimentado", status: "En tránsito", endRestDate: null, kilometersTraveled: 8000 }
]
