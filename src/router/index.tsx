import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, HomePage, SmarthPhonesPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/telefonos",
        element: <SmarthPhonesPage />
      },
      {
        path: "/nosotros",
        element: <AboutPage />
      }
    ]
  },
]);