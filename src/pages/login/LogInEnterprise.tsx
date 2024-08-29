import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogInForm from "@/components/LogInForm";
import LandingHeader from "@/components/header/LandingHeader";
import { useAuth } from '@/context/AuthProvider';

export default function LogInEnterprise() {
  const { login, logout } = useAuth();
  // Estado para almacenar el usuario y la contraseña ingresados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Redirige después de un inicio de sesión exitoso
  const navigate = useNavigate();

  // Datos quemados para validación
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Valida las credenciales
    if (username === hardcodedUsername && password === hardcodedPassword) {
      logout();
      login('admin');
      // Redirige a la página /main-enterprise
      navigate('/main-enterprise');
    } else {
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