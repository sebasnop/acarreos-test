import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@/App';
import { AuthProvider } from '@/context/AuthProvider';

/**
 * Punto de entrada principal de la aplicación.
 * 
 * Este archivo configura el enraizamiento de la aplicación dentro del DOM, envolviendo el componente principal `App` 
 * dentro de un `AuthProvider` para manejar el contexto de autenticación y `React.StrictMode` para advertencias en el desarrollo.
 * 
 * @returns {void} No devuelve ningún valor ya que está directamente interactuando con el DOM.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);

