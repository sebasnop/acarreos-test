import getShipmentStatusRequest from "@/requests/getShipmentStatusRequest";
import { useState, useEffect } from "react";

/**
 * Argumentos para el hook `useTrackShipment`.
 */
interface UseTrackShipmentArgs {
  /**
   * El código de guía del envío que se desea rastrear.
   */
  guideCode: string;
  
  /**
   * Indicador booleano para iniciar la búsqueda del estado.
   */
  trigger: boolean;
}

/**
 * Resultado esperado del hook `useTrackShipment`.
 */
interface UseTrackShipmentResult {
  /**
   * Indica si el estado de carga está en progreso.
   */
  loading: boolean;

  /**
   * Mensaje de error si ocurre algún problema durante la búsqueda.
   */
  error: string | null;

  /**
   * Estado actual del envío.
   */
  status: string | null;
}

/**
 * Hook personalizado para rastrear el estado de un envío basado en un código de guía.
 *
 * @param {string} guideCode - El código de guía del envío que se desea rastrear.
 * @param {boolean} trigger - Indicador booleano para iniciar la búsqueda del estado.
 * @returns {UseTrackShipmentResult} Un objeto que contiene el estado de carga, cualquier error ocurrido, y el estado actual del envío.
 */
export function useTrackShipment({
  guideCode,
  trigger
}: UseTrackShipmentArgs): UseTrackShipmentResult {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  /**
   * Función para simular la búsqueda del estado del envío.
   */
  const fetchStatus = async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch de datos
      const result = await getShipmentStatusRequest(guideCode);

      if (result.statusCode === 200) {
        setStatus(String(result.data));
      } else if (result.statusCode === 404) {
        setError("Número de guía no encontrado (Error 404)");
      } else {
        console.error('Error:', result.error);
        setError(String(result.error));
      }

    } catch (e) {
      setError("Hubo un problema al buscar el estado del producto");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (trigger) {
      fetchStatus();
    } else {
      setStatus(null);
    }
  }, [trigger]);

  return { loading, error, status };
}

