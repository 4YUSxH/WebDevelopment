import { login, register } from "../service/auth.api.js";
import { setError, setLoading, setUser } from "../state/auth.slice.js";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleRegister = async ({
    email,
    contact,
    password,
    fullname,
    isSeller = false,
  }) => {
    try {
      dispatch(setLoading(true));

      const data = await register({
        email,
        contact,
        password,
        fullname,
        isSeller,
      });

      dispatch(setUser(data.user));
    } catch (err) {
      dispatch(
        setError(err.response?.data?.messsage || "Registeration failed"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      dispatch(setLoading(true));

      const data = await login({ email, password });

      dispatch(setUser(data.user));
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Login failed"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    handleRegister,
    handleLogin,
  };
};
