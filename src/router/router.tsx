import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import LogInPage from "@/pages/client/auth/LogInPage";
import SignUpPage from "@/pages/client/auth/SignUpPage";
import TermsAndConditionsPage from "@/pages/client/auth/TermsAndConditionsPage";
import ForgotPasswordPage from "@/pages/client/auth/ForgotPasswordPage";
import LogInCarrier from "@/pages/carrier/LogInCarrier";
import LogInEnterprise from "@/pages/enterprise/LogInEnterprise";
import MainClient from "@/pages/client/MainClient";
import MainCarrier from "@/pages/carrier/MainCarrier";
import MainEnterprise from "@/pages/enterprise/MainEnterprise";
import PriceQuotePage from "@/pages/PriceQuotePage";
import EditClientData from "@/pages/client/EditClientData";
import DeleteClientAccount from "@/pages/client/DeleteClientAccount";
import NotFoundPage from "@/pages/NotFoundPage";

import { navRoutes as routes } from "@/constants/navRoutes";
import RequestServicePage from "@/pages/client/RequestServicePage";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import ProtectedRoute from "@/router/ProtectedRoute";

/**
 * Configuración del enrutador principal de la aplicación utilizando React Router.
 * 
 * Este enrutador define todas las rutas disponibles en la aplicación, incluyendo rutas públicas,
 * y rutas protegidas que requieren autenticación y autorización según el rol del usuario.
 */
export const router = createBrowserRouter([
  // Rutas públicas
  { path: routes.home.href, element: <HomePage />, errorElement: <NotFoundPage /> },
  { path: routes.about.href, element: <AboutPage /> },
  { path: routes.price.href, element: <PriceQuotePage /> },
  { path: routes.login.href, element: <LogInPage /> },
  { path: routes.signup.href, element: <SignUpPage /> },
  { path: routes.terms.href, element: <TermsAndConditionsPage /> },
  { path: routes.forgotPassword.href, element: <ForgotPasswordPage /> },
  { path: routes.carrier.href, element: <LogInCarrier /> },
  { path: routes.enterprise.href, element: <LogInEnterprise /> },
  { path: routes.unauthorized.href, element: <UnauthorizedPage /> },

  // Rutas protegidas por roles
  {
    path: routes.mainClient.href,
    element: <ProtectedRoute allowedRoles={['client']} />,
    children: [
      { path: '', element: <MainClient /> }
    ]
  },
  {
    path: routes.mainCarrier.href,
    element: <ProtectedRoute allowedRoles={['carrier']} />,
    children: [
      { path: '', element: <MainCarrier /> }
    ]
  },
  {
    path: routes.mainEnterprise.href,
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      { path: '', element: <MainEnterprise /> }
    ]
  },
  {
    path: routes.requestService.href,
    element: <ProtectedRoute allowedRoles={['client']} />,
    children: [
      { path: '', element: <RequestServicePage /> }
    ]
  },

  {
    path: routes.editClient.href,
    element: <ProtectedRoute allowedRoles={['client']} />,
    children: [
      { path: '', element: <EditClientData /> }
    ]
  },

  {
    path: routes.deleteClient.href,
    element: <ProtectedRoute allowedRoles={['client']} />,
    children: [
      { path: '', element: <DeleteClientAccount /> }
    ]
  },


    
]);
