import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import { UserRole } from '@/interfaces/DatabaseInterfaces';

interface ProtectedRouteProps {
  /**
   * Lista de roles permitidos que pueden acceder a la ruta protegida.
   */
  allowedRoles: UserRole[];
}

/**
 * Componente ProtectedRoute.
 *
 * Este componente restringe el acceso a las rutas basadas en el rol del usuario.
 * Si el usuario no tiene un rol válido o su rol no está en la lista de roles permitidos, 
 * es redirigido a la página de "No autorizado".
 *
 * @param {ProtectedRouteProps} props - Las propiedades que incluyen los roles permitidos.
 * @returns {JSX.Element} - El Outlet si el usuario tiene acceso, de lo contrario redirige a "No autorizado".
 */
export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps): JSX.Element {
  const { userRole } = useAuth();

  // Si no hay un rol de usuario, redirige a "No autorizado"
  if (!userRole) {
    return <Navigate to="/unauthorized" />;
  }

  // Si el rol de usuario no está en los roles permitidos, redirige a "No autorizado"
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  // Si el usuario tiene un rol permitido, renderiza el contenido protegido
  return <Outlet />;
}

