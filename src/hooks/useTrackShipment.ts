import { useState, useEffect } from "react";

// Base de datos simulada
import { ShipmentsTable as shipments } from "@/database/ShipmentsTable";

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
      // Simulación de un fetch de datos
      const shipment = shipments.find(
        (shipment) => shipment.guideCode === Number(guideCode)
      );

      if (shipment) {
        setStatus(shipment.status);
      } else {
        setError("No se encontró el código de guía");
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

