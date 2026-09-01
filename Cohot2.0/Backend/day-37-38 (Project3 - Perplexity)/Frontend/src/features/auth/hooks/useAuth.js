import { useDispatch } from "react-redux";
import { register, login, getMe } from "../services/auth.api.js";
import { setError, setLoading, setUser } from "../auth.slice.js";

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleRegister = async ({ username, email, password }) => {
    try {
      dispatch(setLoading(true));
      const data = await register({ username, email, password });
    } catch (err) {
      dispatch(setError(err.response?.data?.message || "Registration failed"));
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

  const handleGetMe = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getMe();
      dispatch(setUser(data.user));
    } catch (err) {
      dispatch(
        setError(err.response?.data?.message || "Failed to fetch user data"),
      );
    } finally {
        dispatch(setLoading(false))
    }
  };

  return {
    handleRegister, handleLogin, handleGetMe
  }
};
