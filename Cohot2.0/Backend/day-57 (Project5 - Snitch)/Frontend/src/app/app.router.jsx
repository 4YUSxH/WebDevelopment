import { createBrowserRouter } from "react-router";

import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register.jsx";
import CreateProduct from "../features/product/pages/CreateProduct.jsx";
import Dashboard from "../features/product/pages/Dashboard.jsx";
import Protected from "../features/auth/components/Protected.jsx";
import Home from "../features/product/pages/Home.jsx";
import ProductDetails from "../features/product/pages/ProductDetails.jsx";
import SellerProductDetails from "../features/product/pages/SellerProductDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/product/:productId",
    element: <ProductDetails />,
  },

  // Seller-only section
  {
    element: <Protected />,
    children: [
      {
        path: "/seller",
        children: [
          {
            path: "create-product",
            element: <CreateProduct />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "product/:productId",
            element: <SellerProductDetails />,
          },
        ],
      },
    ],
  },
]);