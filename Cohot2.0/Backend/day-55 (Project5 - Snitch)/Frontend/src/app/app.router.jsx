import { createBrowserRouter } from "react-router";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register.jsx";
import CreateProduct from "../features/product/pages/CreateProduct.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="flex justify-center items-center h-screen font-bold">Hello world</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/create-product",
    element: <CreateProduct />,
  },
]);
