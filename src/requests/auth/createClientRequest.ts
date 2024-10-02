export default async function createClientRequest(username: string, email: string, password: string) {
  const url = 'https://api.example.com/register'; // Cambia esto por tu endpoint real

  const body = {
    username,
    email,
    password
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // Recibe el código de estado y la respuesta
    const statusCode = response.status;
    const responseData = await response.json(); // Si la respuesta es un JSON

    // Verifica si la respuesta fue exitosa
    if (statusCode === 200) {
      console.log('Registro exitoso:', responseData);
      return { success: true, data: responseData };
    } else {
      console.error('Error en la solicitud:', responseData);
      return { success: false, statusCode, error: responseData };
    }
  } catch (error) {
    console.error('Hubo un problema con la petición:', error);
    return { success: false, error: 'Error de red o problema con la solicitud' };
  }
}
