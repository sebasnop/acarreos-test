/**
 * Enum para representar las diferentes naciones.
 * 
 * @enum {string}
 */
enum NationsEnum {
  /** 
   * Representa la Tribu Agua.
   */
  Water = "Water",

  /** 
   * Representa el Reino Tierra.
   */
  Earth = "Earth",

  /** 
   * Representa la Nación del Fuego.
   */
  Fire = "Fire",

  /** 
   * Representa los Templos Aire.
   */
  Air = "Air",

  /** 
   * Representa la República Unida de Naciones.
   */
  UnitedRepublic = "UnitedRepublic"
}

/**
 * Enum para representar las diferentes regiones dentro de las naciones.
 * 
 * @enum {string}
 */
enum RegionsEnum {
  /** 
   * Representa la Tribu Agua del Norte.
   */
  WaterNorth = "WaterNorth",

  /** 
   * Representa la Tribu Agua del Sur.
   */
  WaterSouth = "WaterSouth",

  /** 
   * Representa el Reino Tierra.
   */
  Earth = "Earth",

  /** 
   * Representa la Nación del Fuego.
   */
  Fire = "Fire",

  /** 
   * Representa el Templo Aire del Norte.
   */
  AirNorth = "AirNorth",

  /** 
   * Representa el Templo Aire del Sur.
   */
  AirSouth = "AirSouth",

  /** 
   * Representa el Templo Aire del Oeste.
   */
  AirWest = "AirWest",

  /** 
   * Representa el Templo Aire del Este.
   */
  AirEast = "AirEast",

  /** 
   * Representa la República Unida de Naciones.
   */
  UnitedRepublic = "UnitedRepublic"
}

/**
 * Enum para representar los diferentes estados de un envío.
 * 
 * @enum {string}
 */
enum ShipmentStatusEnum {
  /** 
   * Estado cuando el envío ha sido registrado.
   */
  Registered = "Registrado",

  /** 
   * Estado cuando el envío ha sido programado.
   */
  Programmed = "Programado",

  /** 
   * Estado cuando el envío está en tránsito.
   */
  InTransit = "En camino",

  /** 
   * Estado cuando el envío ha sido entregado.
   */
  Delivered = "Entregado"
}

export {
  NationsEnum,
  RegionsEnum,
  ShipmentStatusEnum
}
