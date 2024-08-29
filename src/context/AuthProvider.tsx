import { createContext, useContext, useState, ReactNode } from 'react';
import { UserRole } from '@/interfaces/DatabaseInterfaces';

// Tipo de datos que almacenará el contexto
interface AuthContextInterface {
  userRole: UserRole | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

// Crear el contexto
const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

// Hook para usar el contexto en los componentes
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
}

// Proveedor del contexto que manejará el estado de la autenticación
export function AuthProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const login = (role: UserRole) => {
    setUserRole(role);
  };

  const logout = () => {
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
