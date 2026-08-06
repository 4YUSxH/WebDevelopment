import { Link, useNavigate } from "react-router-dom";
import "../styles/form.scss";
import { useAuth } from "../hook/useAuth";
import { useState } from "react";

const Login = () => {
  const { user, loading, handelLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    await handelLogin(username, password);
    console.log("User logged-in");

    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handelSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <button className="button primary-button">Login</button>
        </form>
        <p>
          Don't have an account ? <Link to={"/register"}>Create One.</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
