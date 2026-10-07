import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./app.router.jsx";
import { useEffect } from "react";
import { useAuth } from "../features/auth/hook/useAuth.js";

const App = () => {
  const { handleGetMe } = useAuth();

  useEffect(() => {
    handleGetMe();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
