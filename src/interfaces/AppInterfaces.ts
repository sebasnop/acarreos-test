/**
 * Represents a navigation item in the navigation menu.
 */
interface NavItemInterface {
  /**
   * The name of the navigation item to be displayed.
   * @example "Home"
   */
  name: string;

  /**
   * The URL or path that the navigation item points to.
   * @example "/home"
   */
  href: string;
}

/**
 * Represents the data required for a price quote for document shipments.
 */
interface DocumentPriceQuote {
  /**
   * The ID of the origin city.
   */
  originCityId: number;

  /**
   * The ID of the destination city.
   */
  destinationCityId: number;

  /**
   * The declared value of the shipment.
   */
  declaredValue: number;

  /**
   * The weight of the document in grams.
   */
  weight: number;
}

/**
 * Represents the data required for a price quote for object shipments.
 */
interface ObjectPriceQuote {
  /**
   * The ID of the origin city.
   */
  originCityId: number;

  /**
   * The ID of the destination city.
   */
  destinationCityId: number;

  /**
   * The declared value of the shipment.
   */
  declaredValue: number;

  /**
   * The weight of the object in kilograms.
   */
  weight: number;

  /**
   * The height of the object in centimeters.
   */
  height: number;

  /**
   * The length of the object in centimeters.
   */
  length: number;

  /**
   * The width of the object in centimeters.
   */
  width: number;
}

/**
 * Represents the data required for a price quote for moving services.
 */
interface MovingPriceQuote {
  /**
   * The ID of the origin city.
   */
  originCityId: number;

  /**
   * The ID of the destination city.
   */
  destinationCityId: number;

  /**
   * The declared value of the items to be moved.
   */
  declaredValue: number;

  /**
   * The size category of the move, represented as a number.
   */
  size: number;
}

/**
 * Represents a size option for moving services.
 */
interface MovingSize {
  /**
   * The label of the size in English.
   * @example "small"
   */
  label: string;

  /**
   * The label of the size in Spanish.
   * @example "Pequeña"
   */
  labelEs: string;

  /**
   * The numerical value associated with the size.
   * @example 1
   */
  value: number;
}

export type {
  NavItemInterface,
  DocumentPriceQuote,
  ObjectPriceQuote,
  MovingPriceQuote,
  MovingSize
};
