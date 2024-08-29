import { MovingSize } from "@/interfaces/AppInterfaces";

/**
 * Lista de tamaños de mudanza disponibles.
 * 
 * Cada objeto en la lista representa un tamaño de mudanza con su etiqueta en inglés (`label`),
 * su etiqueta en español (`labelEs`) y un valor numérico asociado (`value`).
 */
export const movingSizes: MovingSize[] = [
  { label: "small", labelEs: "Pequeña", value: 1 },
  { label: "medium", labelEs: "Mediana", value: 2 },
  { label: "large", labelEs: "Grande", value: 3 },
];
