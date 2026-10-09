import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const Protected = ({ children, role = "buyer" }) => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login"  />;
  }

  if (user.role !== role) {
    return <Navigate to="/"  />;
  }

  return children;
};

export default Protected;
