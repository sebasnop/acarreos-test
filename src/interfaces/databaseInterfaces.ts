interface shipmentInterface {
  guideCode: number,
  idOriginCity: number,
  idDestinationCity: number,
  status: string,
  type: string,
  idLastCity: number 
}

export type { shipmentInterface }