import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomeView from "./assets/views/HomeView.jsx";
import ErrorView from "./assets/views/ErrorView.jsx";
import PrductByCategory from "./assets/views/ProductByCategory.jsx";
import ProductView from "./assets/views/ProductView.jsx";
import Checkout from "./assets/views/CheckoutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },{
        path:"category/:option",
        element:<PrductByCategory/>
      },{
        path:"productview/:id",
        element:<ProductView/>
      },{
        path:"checkout",
        element:<Checkout/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
