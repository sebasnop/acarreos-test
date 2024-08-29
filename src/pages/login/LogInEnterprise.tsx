import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogInForm from "@/components/LogInForm";
import LandingHeader from "@/components/header/LandingHeader";

/**
 * Componente LogInEnterprise
 * 
 * Este componente representa la página de inicio de sesión para los administradores de la empresa.
 * Permite a los usuarios con rol de administrador ingresar sus credenciales para acceder a la cuenta empresarial.
 * 
 * @componente
 * @retorna {JSX.Element} El componente LogInEnterprise.
 */
export default function LogInEnterprise() {
  // Estado para almacenar el usuario y la contraseña ingresados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hook para redirigir a otra ruta después de un inicio de sesión exitoso
  const navigate = useNavigate();

  // Credenciales quemadas para validación
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123';

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * Valida las credenciales y redirige al administrador a su página principal si son correctas.
   * 
   * @param {React.FormEvent<HTMLFormElement>} event - El evento de envío del formulario.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validación de las credenciales ingresadas
    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Redirige a la página principal del administrador (/main-enterprise)
      navigate('/main-enterprise');
    } else {
      // Muestra una alerta si las credenciales son incorrectas
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <LandingHeader />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h2 className="text-center text-2xl font-bold leading-tight tracking-tight text-gray-900 mt-10">
            Inicia sesión en tu cuenta empresarial
          </h2>
        </div>
        <LogInForm 
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
