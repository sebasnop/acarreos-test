import { createContext, useContext, useState, ReactNode } from 'react';
import { UserRole } from '@/interfaces/DatabaseInterfaces';
import loginClientRequest from '@/requests/auth/loginClientRequest';
import loginCarrierRequest from '@/requests/auth/loginCarrierRequest';
import loginAdminRequest from '@/requests/auth/loginAdminRequest';
import { ClientDataInterface } from '@/interfaces/AppInterfaces';

// Tipo de datos que almacenará el contexto
interface AuthContextInterface {
  userRole: UserRole | null;
  login: (username: string, password: string, userType: UserRole) => {
    successfulLogin: boolean;
    errorMessage: string;
  };
  successfulClientLogin: (clientData: any) => void;
  logout: () => void;
  clientDataState: ClientDataInterface | null;
}

// Crear el contexto de autenticación
/**
 * `AuthContext` proporciona el estado de autenticación a la aplicación.
 * Puede ser accedido por cualquier componente descendiente del `AuthProvider`.
 */
const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

// Hook para usar el contexto en los componentes
/**
 * Hook personalizado `useAuth` para acceder al contexto de autenticación.
 * 
 * @throws {Error} Si se usa fuera de un `AuthProvider`.
 * @returns El contexto de autenticación, que incluye el rol del usuario y las funciones de inicio y cierre de sesión.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
}

// Proveedor del contexto que manejará el estado de la autenticación
/**
 * Componente `AuthProvider` que envuelve la aplicación y proporciona el estado de autenticación.
 * 
 * @param {Object} props - Las propiedades que se pasan al componente.
 * @param {ReactNode} props.children - Los componentes hijos que estarán envueltos por el `AuthProvider`.
 * @returns Un proveedor de contexto de autenticación.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const [clientDataState, setClientDataState] = useState<ClientDataInterface | null>(null);

  const successfulClientLogin = (clientData: ClientDataInterface) => {
    logout();
    setUserRole('client');
    setClientDataState(clientData);
  }

  /**
   * Función para iniciar sesión.
   * 
   * @param username - El nombre de usuario ingresado.
   * @param password - La contraseña ingresada.
   * @param userType - El tipo de usuario que está intentando ingresar.
   * @returns Confirmación del éxito del inicio de sesión y mensaje de error.
   */

  const login = (username: string, password: string, userType: UserRole): {
    successfulLogin: boolean;
    errorMessage: string;
  } => {
    logout();
    let user = null;
    let errorMessage: string = "";

    // Validar según el tipo de usuario
    switch (userType) {
      case 'client':
        user = loginClientRequest(username, password);
        break;
      case 'carrier':
        user = loginCarrierRequest(username, password);
        break;
      case 'admin':
        user = loginAdminRequest(username, password);
        break;
      default:
        errorMessage = "Tipo de usuario no válido";
        return { successfulLogin: false, errorMessage };
    }

    if (user) {
      setUserRole(userType);
      return { successfulLogin: true, errorMessage: '' };
    } else {
      errorMessage = "Usuario o contraseña incorrectos";
      return { successfulLogin: false, errorMessage };
    }

  };

  /**
   * Función para cerrar sesión, restablece el rol del usuario a `null`.
   */
  const logout = () => {
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout, successfulClientLogin, clientDataState }}>
      {children}
    </AuthContext.Provider>
  );
}

