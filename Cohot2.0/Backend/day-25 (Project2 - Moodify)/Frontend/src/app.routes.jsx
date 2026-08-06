import { createBrowserRouter } from "react-router";
import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main>
        <h1>Home</h1>
      </main>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
