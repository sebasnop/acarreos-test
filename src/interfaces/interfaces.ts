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

/**
 * Represents a nation in the Avatar's world.
 */
interface nation {
  /**
   * A simple name for easily identify the nation
   * @example "water"
   */
  simpleName: string,
  /**
   * The complete name of the nation
   * @example "Tribus Agua"
   */
  name: string,
  /**
   * The complete name of the nation
   * @example "https://avatarimages.com/logos/water-tribes-logo.svg"
   */
  img: string
}


export type { PageInterface, nation };