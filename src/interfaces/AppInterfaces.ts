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


export type { NavItemInterface };