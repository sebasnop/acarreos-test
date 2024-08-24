import { useState, useEffect } from 'react';

// Base de datos simulada
import { shipmentsTable as shipments } from '@/database/shipmentsTable';

interface arguments {
  guideCode: string,
  trigger: boolean
}

export function useTrackShipment({ guideCode, trigger } : arguments) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const fetchStatus = async () => {
      setLoading(true);
      setError(null);

      try {
        // Simulación de un fetch de datos
        const result = shipments.find(shipment => shipment.guideCode === Number(guideCode));

        if (result) {
          setStatus(result.status);
          console.log(result)
        } else {
          setError('No se encontró el código de guía');
        }
      } catch (e) {
        setError('Hubo un problema al buscar el estado del producto');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [guideCode, trigger]);

  return { loading, error, status };
}
