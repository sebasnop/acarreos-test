import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

import { navRoutes as routes } from "../constants/navRoutes";

export const router = createBrowserRouter([
  { path: routes.home.href, element: <HomePage/>},
  { path: routes.about.href, element: <AboutPage/>}
]);