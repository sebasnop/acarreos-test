interface LoginResponse {
  statusCode: number;
  data?: any; // Puedes ajustar este tipo dependiendo de la respuesta del servidor
  error?: string;
}

export default async function tryLoginClient(username: string, password: string): Promise<LoginResponse> {
  const endpoint = `http://localhost:3000/auth-module/login`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const statusCode = response.status;

    let responseData;
    if (response.ok) {
      responseData = await response.json(); // Si la respuesta es correcta (status code 200-299)
    } else {
      responseData = await response.text(); // En caso de error, podría no ser JSON
    }

    return {
      statusCode,
      data: response.ok ? responseData : undefined,
      error: response.ok ? undefined : responseData,
    };
  } catch (error) {
    console.error('Error en la solicitud de login:', error);
    return {
      statusCode: 500,
      error: 'Hubo un problema al realizar la solicitud. Inténtelo de nuevo más tarde.',
    };
  }
};