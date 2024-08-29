import React, { useState } from 'react';
import { usersTable } from '@/database/UsersTable'; // Asumiendo que tienes esta tabla de usuarios
import InsideHeaderUser from '@/components/header/InsideHeader';

/**
 * Componente `EditUser` para ver y editar la información del usuario.
 * 
 * Este componente permite a los usuarios ver su información personal y actualizarla si es necesario.
 * Inicialmente, los campos están bloqueados y se pueden desbloquear para su edición al hacer clic en el botón "Editar".
 * Después de realizar los cambios, el usuario puede guardarlos, lo que bloqueará nuevamente los campos.
 * 
 * @returns {React.ReactElement} El formulario de edición de usuario.
 */
export default function EditUser() {
  const [isEditing, setIsEditing] = useState(false);

  // Datos del usuario (se trae de la tabla de usuarios)
  const user = usersTable[0]; // Se asume que se obtiene el usuario actual de alguna manera
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    default_location: user.default_location,
    password: user.password,
  });

  /**
   * Maneja los cambios en los campos del formulario.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - El evento de cambio del campo.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Alterna entre los modos de edición y vista.
   */
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  /**
   * Maneja el guardado de la información actualizada.
   */
  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar los datos actualizados
    console.log('Datos guardados:', formData);
    toggleEdit();
  };

  return (
    <>
      <InsideHeaderUser role='client'/>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Editar Información de Usuario</h2>
        <form className="space-y-4">
          <div className="text-left">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-900 focus:border-yellow-900 sm:text-sm ${
                !isEditing ? 'bg-gray-100' : ''
              }`}
            />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-900 focus:border-yellow-900 sm:text-sm ${
                !isEditing ? 'bg-gray-100' : ''
              }`}
            />
          </div>

          <div className="text-left">
            <label htmlFor="default_location" className="block text-sm font-medium text-gray-700">Ubicación predeterminada</label>
            <input
              id="default_location"
              name="default_location"
              type="text"
              value={formData.default_location}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-900 focus:border-yellow-900 sm:text-sm ${
                !isEditing ? 'bg-gray-100' : ''
              }`}
            />
          </div>

          <div className="text-left">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-900 focus:border-yellow-900 sm:text-sm ${
                !isEditing ? 'bg-gray-100' : ''
              }`}
            />
          </div>

          <div className="flex justify-end space-x-4">
            {isEditing ? (
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 bg-yellow-950 text-white rounded-md hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-900"
              >
                Guardar
              </button>
            ) : (
              <button
                type="button"
                onClick={toggleEdit}
                className="px-4 py-2 bg-yellow-950 text-white rounded-md hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-900"
              >
                Editar
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

