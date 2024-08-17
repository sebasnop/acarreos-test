/**
 * Represents a page in the navigation menu.
 */
interface PageInterface {
  /**
   * The name of the page to be displayed in the navigation.
   * @example "Home"
   */
  name: string;

  /**
   * The URL or path that the page points to.
   * @example "/home"
   */
  href: string;
}


export type { PageInterface };