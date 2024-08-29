import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import LogInPage from "@/pages/login/LogInPage";
import SignUpPage from "@/pages/SignUpPage";
import TermsAndConditionsPage from "@/pages/TermsAndConditionsPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import LogInCarrier from "@/pages/login/LogInCarrier";
import LogInEnterprise from "@/pages/login/LogInEnterprise";
import MainUser from "@/pages/main/MainUser";
import MainCarrier from "@/pages/main/MainCarrier";
import MainEnterprise from "@/pages/main/MainEnterprise";
import PriceQuotePage from "@/pages/PriceQuotePage";

import { navRoutes as routes } from "@/constants/navRoutes";
import RequestServicePage from "@/pages/main/RequestServicePage";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import { ProtectedRoute } from "@/router/ProtectedRoute";

export const router = createBrowserRouter([
  { path: routes.home.href, element: <HomePage /> },
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
    path: routes.mainUser.href,
    element: <ProtectedRoute allowedRoles={['client']} />,
    children: [
      { path: '', element: <MainUser /> }
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

]);