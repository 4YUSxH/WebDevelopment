import './App.css'
import { RouterProvider } from "react-router";
import { router } from "./app.router.jsx";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
