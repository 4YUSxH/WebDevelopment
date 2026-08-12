import React from "react";
import "./features/shared/global.scss";
import FaceExpression from "./features/Expression/components/FaceExpression";
import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import { AuthProvider } from "./features/Auth/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
