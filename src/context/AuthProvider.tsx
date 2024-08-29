import { createContext, useContext, useState, ReactNode } from 'react';
import { UserRole } from '@/interfaces/DatabaseInterfaces';

// Tipo de datos que almacenará el contexto
interface AuthContextInterface {
  userRole: UserRole | null;
  login: (role: UserRole) => void;
  logout: () => void;
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
 * @returns {AuthContextInterface} El contexto de autenticación, que incluye el rol del usuario y las funciones de inicio y cierre de sesión.
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
 * @returns {JSX.Element} Un proveedor de contexto de autenticación.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  /**
   * Función para iniciar sesión, establece el rol del usuario.
   * 
   * @param {UserRole} role - El rol del usuario que ha iniciado sesión.
   */
  const login = (role: UserRole) => {
    setUserRole(role);
  };

  /**
   * Función para cerrar sesión, restablece el rol del usuario a `null`.
   */
  const logout = () => {
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

