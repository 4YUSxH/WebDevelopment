import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useEffect } from "react";

const App = () => {
  const { handleGetMe } = useAuth();

// Reassign user after logIn 
  useEffect(() => {
    handleGetMe();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
