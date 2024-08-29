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
import EditUser from "@/pages/EditUser";

import { navRoutes as routes } from "@/constants/navRoutes";
import RequestServicePage from "@/pages/main/RequestServicePage";

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
  { path: routes.mainUser.href, element: <MainUser /> },
  { path: routes.mainCarrier.href, element: <MainCarrier /> },
  { path: routes.mainEnterprise.href, element: <MainEnterprise /> },
  { path: routes.requestService.href, element: <RequestServicePage /> },
  { path: routes.editUser.href, element: <EditUser />}
]);