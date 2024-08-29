import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import { UserRole } from '@/interfaces/DatabaseInterfaces';

interface ProtectedRouteProps {
  allowedRoles: UserRole[];
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { userRole } = useAuth();

  if (!userRole) {
    return <Navigate to="/unauthorized" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
}
