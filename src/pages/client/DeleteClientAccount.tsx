import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InsideHeader from '@/components/header/InsideHeader';
import { useAuth } from '@/context/AuthProvider';

/**
 * Componente `DeleteClientAccount` que maneja el proceso de eliminación de la cuenta de cliente.
 * 
 * Este componente guía al cliente a través de una serie de pasos:
 * 1. Confirmación inicial para eliminar la cuenta.
 * 2. Si el cliente confirma, se le presenta un formulario donde puede seleccionar la razón de su decisión.
 * 3. Si el cliente selecciona "Otro", puede ingresar una razón personalizada.
 * 4. El cliente puede confirmar la eliminación o regresar a la pantalla anterior.
 * 
 * @component
 * @returns El componente de eliminación de cuenta.
 */
export default function DeleteClientAccount() {
  const {logout} = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [otherReason, setOtherReason] = useState('');
  const navigate = useNavigate();

  /**
   * Maneja el clic en el botón "No", navegando de vuelta a la página de edición de cliente.
   */
  const handleNoClick = () => {
    navigate('/edit-client');
  };

  /**
   * Maneja el clic en el botón "Sí", mostrando el formulario de razones.
   */
  const handleYesClick = () => {
    setShowForm(true);
  };

  /**
   * Maneja el clic en el botón "Volver", regresando a la pantalla de confirmación inicial.
   */
  const handleBackClick = () => {
    setShowForm(false);
    setSelectedReason(null);
    setOtherReason('');
  };

  /**
   * Maneja el clic en el botón "Confirmar", registrando la razón seleccionada y navegando a la página de inicio.
   */
  const handleConfirmClick = () => {
    const reason = selectedReason === 'Otro' ? otherReason : selectedReason;
    // Aquí puedes agregar la lógica para manejar la eliminación de la cuenta con la razón seleccionada
    console.log('Cuenta eliminada por la siguiente razón:', reason);
    logout();
    navigate('/', { replace: true }); // Reemplaza la entrada actual en el historial del navegador
  };

  return (
    <>
      <InsideHeader role="client" />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg text-center">
        {!showForm ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Estás seguro que deseas eliminar tu cuenta?</h2>
            <div className="flex justify-between items-center mt-4">
              <button
                type="button"
                onClick={handleNoClick}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              >
                No
              </button>
              <button
                type="button"
                onClick={handleYesClick}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              >
                Sí
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué deseas irte?</h2>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <input 
                    type="radio" 
                    name="reason" 
                    value="No me gusta la aplicación" 
                    className="mr-2"
                    onChange={(e) => setSelectedReason(e.target.value)}
                  />
                  No me gusta la aplicación
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <input 
                    type="radio" 
                    name="reason" 
                    value="Encontré una mejor opción" 
                    className="mr-2"
                    onChange={(e) => setSelectedReason(e.target.value)}
                  />
                  Encontré una mejor opción
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <input 
                    type="radio" 
                    name="reason" 
                    value="Preocupaciones sobre la privacidad" 
                    className="mr-2"
                    onChange={(e) => setSelectedReason(e.target.value)}
                  />
                  Preocupaciones sobre la privacidad
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <input 
                    type="radio" 
                    name="reason" 
                    value="Problemas técnicos" 
                    className="mr-2"
                    onChange={(e) => setSelectedReason(e.target.value)}
                  />
                  Problemas técnicos
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <input 
                    type="radio" 
                    name="reason" 
                    value="Otro" 
                    className="mr-2"
                    onChange={(e) => setSelectedReason(e.target.value)}
                  />
                  Otro
                </label>
              </div>
              {selectedReason === 'Otro' && (
                <div className="mt-2">
                  <textarea
                    name="otherReason"
                    rows={4}
                    value={otherReason}
                    onChange={(e) => setOtherReason(e.target.value)}
                    placeholder="Por favor, explica por qué deseas irte"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-900 focus:border-yellow-900 sm:text-sm"
                  />
                </div>
              )}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Volver
                </button>
                <button
                  type="button"
                  onClick={handleConfirmClick}
                  className="px-4 py-2 bg-yellow-950 text-white rounded-md hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-900"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}



