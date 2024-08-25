import { useState, useEffect } from "react";

// Base de datos simulada
import { ShipmentsTable as shipments } from "@/database/ShipmentsTable";

/**
 * Argumentos para el hook `useTrackShipment`.
 */
interface UseTrackShipmentArgs {
  guideCode: string;
  trigger: boolean;
}

/**
 * Resultado esperado del hook `useTrackShipment`.
 */
interface UseTrackShipmentResult {
  loading: boolean;
  error: string | null;
  status: string | null;
}

/**
 * Hook personalizado para rastrear el estado de un envío basado en un código de guía.
 *
 * @param guideCode - El código de guía del envío que se desea rastrear.
 * @param trigger - Indicador booleano para iniciar la búsqueda del estado.
 * @returns Un objeto que contiene el estado de carga, cualquier error ocurrido y el estado actual del envío.
 */
export function useTrackShipment({
  guideCode,
  trigger
}: UseTrackShipmentArgs): UseTrackShipmentResult {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

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
