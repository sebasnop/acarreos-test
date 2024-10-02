export default async function getShipmentStatus (guideCode: string) {
  const endpoint = `http://localhost:3000/shipments/status/${guideCode}`;

  try {

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Obtener el código de estado y la respuesta en formato JSON
    const statusCode = response.status;
    const responseData = await response.text();

    // Retornar el resultado
    return {
      statusCode,
      data: responseData,
    };
  } catch (error) {
    // Manejar errores, como problemas de conexión
    console.error('Error fetching shipment status:', error);
    return {
      statusCode: 500,
      error: 'Hubo un problema al realizar la solicitud. Inténtelo de nuevo más tarde.',
    };
  }
};