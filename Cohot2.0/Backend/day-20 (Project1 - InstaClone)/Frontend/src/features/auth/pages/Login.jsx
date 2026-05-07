import { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handelLogin, loading } = useAuth(); // useAuth is consumer of auth.context hence this will contain all the context data

  const navigate = useNavigate()

  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    handelLogin(username, password).then((res) => {
      console.log(res);
      navigate("/")
    });
  };

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
            placeholder="Enter username"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
