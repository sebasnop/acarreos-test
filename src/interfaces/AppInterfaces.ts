import { MovingSizeEnum } from "@/interfaces/DatabaseEnums";

/**
 * Represents a nav item in the navigation menu.
 */
interface NavItemInterface {
  /**
   * The name of the nav item to be displayed in the navigation.
   * @example "Home"
   */
  name: string;

  /**
   * The URL or path that the nav item points to.
   * @example "/home"
   */
  href: string;
}

interface DocumentPriceQuote {
  originCityId: number,
  destinationCityId: number,
  declaredValue: number,
  weight: number
}

interface ObjectPriceQuote {
  originCityId: number,
  destinationCityId: number,
  declaredValue: number,
  weight: number,
  height: number,
  length: number,
  width: number
}

interface MovingPriceQuote {
  originCityId: number,
  destinationCityId: number,
  declaredValue: number,
  size: string
}

export type {
  NavItemInterface,
  DocumentPriceQuote,
  ObjectPriceQuote,
  MovingPriceQuote
};