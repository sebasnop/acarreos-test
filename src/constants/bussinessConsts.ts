/**
 * Min document weight in grams (g).
 */
const minDocumentWeight: number = 50;

/**
 * Max document weight in grams (g).
 */
const maxDocumentWeight: number = 2000;

/**
 * Min object weight in kilograms (kg).
 */
const minObjectWeight: number = 1;

/**
 * Max object weight in kilograms (kg).
 */
const maxObjectWeight: number = 5000;

/**
 * Max object height in centimeters (cm).
 */
const maxObjectHeight: number = 500;

/**
 * Max object length in centimeters (cm).
 */
const maxObjectLength: number = 500;

/**
 * Max object width in centimeters (cm).
 */
const maxObjectWidth: number = 500;

/**
 * Distance rate per kilometer.
 */
const tarifaPorDistancia: number = 1;

/**
 * Rate per kilogram of weight.
 */
const tarifaPorPeso: number = 1;

/**
 * Rate per declared value of the shipment.
 */
const tarifaPorValorDeclarado: number = 1;

/**
 * Rate for bison size.
 */
const tarifaPorBisonteSize: number = 1;

/**
 * Surcharge for medium-sized dimensions.
 */
const cargoDimensionMedia: number = 1;

/**
 * Surcharge for large-sized dimensions.
 */
const cargoDimensionGrande: number = 1;

export {
  minDocumentWeight,
  maxDocumentWeight,
  minObjectWeight,
  maxObjectWeight,
  maxObjectHeight,
  maxObjectLength,
  maxObjectWidth,
  tarifaPorDistancia,
  tarifaPorPeso,
  tarifaPorValorDeclarado,
  tarifaPorBisonteSize,
  cargoDimensionMedia,
  cargoDimensionGrande
};

