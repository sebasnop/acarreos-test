import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogInForm from "@/components/auth/LogInForm";
import LandingHeader from "@/components/header/LandingHeader";
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import tryLoginClient from '@/requests/auth/tryLoginClient';

/**
 * Componente LogInPage
 * 
 * Este componente representa la página de inicio de sesión para los usuarios estándar.
 * Permite a los usuarios ingresar sus credenciales para acceder a su cuenta de usuario.
 * 
 * @component
 * @returns El componente LogInPage.
 */
export default function LogInPage() {
  const { successfulClientLogin } = useAuth();
  // Estado para almacenar el nombre de usuario y la contraseña ingresados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hook para redirigir a otra ruta después de un inicio de sesión exitoso
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * Valida las credenciales y redirige al usuario a su página principal si son correctas.
   * 
   * @param {React.FormEvent<HTMLFormElement>} event - El evento de envío del formulario.
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await tryLoginClient(username, password);

    if (result.statusCode === 201) {
      // Redirigir al usuario o guardar información de sesión
      navigate('/main-client');
      successfulClientLogin(result.data);
      console.log(result.data);
    } else {
      // Mostrar mensaje de error si no se autenticó correctamente
      console.log(result.statusCode)
      alert(result.error);
    }

    /*
    const { successfulLogin, errorMessage } = login(username, password, 'client');

     // Verificar si el login fue exitoso
     if (successfulLogin) {
      navigate('/main-client');
    } else {
      // Mostrar un mensaje de error si el inicio de sesión falla
      alert(errorMessage);
    }
    */
    
  };

  return (
    <>
      <LandingHeader />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h2 className="text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 mt-10">
            Inicia sesión
          </h2>
        </div>
        <LogInForm 
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
        <p className="mt-6 text-center text-sm text-gray-500">
          ¿No tienes una cuenta? 
          <span className="mr-1"></span> 
          <Link to="/signup" className="font-semibold leading-6 text-yellow-950 hover:text-yellow-900">
            Regístrate
          </Link>
        </p>
      </div>
    </>
  );
}
