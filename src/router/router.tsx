import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LogInPage from "../pages/login/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import TermsAndConditionsPage from "../pages/TermsAndConditionsPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LogInCarrier from "../pages/login/LogInCarrier";
import LogInEnterprise from "../pages/login/LogInEnterprise";
import MainUser from "../pages/main/MainUser";

import { navRoutes as routes } from "../constants/navRoutes";

export const router = createBrowserRouter([
  { path: routes.home.href, element: <HomePage/>},
  { path: routes.about.href, element: <AboutPage/>},
  { path: routes.login.href, element: <LogInPage/>},
  { path: routes.signup.href, element: <SignUpPage/>},
  { path: routes.terms.href, element: <TermsAndConditionsPage/>},
  { path: routes.forgotPassword.href, element: <ForgotPasswordPage/>},
  { path: routes.carrier.href, element: <LogInCarrier /> },
  { path: routes.enterprise.href, element: <LogInEnterprise /> },
  {path: routes.mainUser.href, element: <MainUser/>}
]);