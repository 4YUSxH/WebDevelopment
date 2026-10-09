import { createBrowserRouter } from "react-router";

import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register.jsx";
import CreateProduct from "../features/product/pages/CreateProduct.jsx";
import Dashboard from "../features/product/pages/Dashboard.jsx";
import Protected from "../features/auth/components/Protected.jsx";
import Home from "../features/product/pages/Home.jsx";
import ProductDetails from "../features/product/pages/ProductDetails.jsx";
import SellerProductDetails from "../features/product/pages/SellerProductDetails.jsx";
import Cart from "../features/cart/pages/Cart.jsx";
import OrderSuccess from "../features/cart/pages/OrderSuccess.jsx";

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

  {
    path: "/cart",
    element: (
      <Protected>
        <Cart />
      </Protected>
    ),
  },

  {
    path: "/order-success",
    element: (
      <Protected>
        <OrderSuccess />
      </Protected>
    ),
  },

  {
    path: "/order-success",
    element: (
      <Protected>
        <OrderSuccess />
      </Protected>
    ),
  },

  // Seller-only section
  {
    path: "/seller",
    children: [
      {
        path: "create-product",
        element: (
          <Protected role="seller">
            <CreateProduct />
          </Protected>
        ),
      },
      {
        path: "dashboard",
        element: (
          <Protected role="seller">
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "product/:productId",
        element: (
          <Protected role="seller">
            <SellerProductDetails />
          </Protected>
        ),
      },
    ],
  },
]);
