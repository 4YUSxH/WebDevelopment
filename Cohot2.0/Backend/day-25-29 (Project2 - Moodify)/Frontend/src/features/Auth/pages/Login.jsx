import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/form.scss";
import Userinput from "../components/Userinput";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {handleLogin, loading} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    await handleLogin(username, password)
    console.log("User loggedIn")

    navigate("/")
  };

  if(loading){
    return (<main><h1>Loading...</h1></main>)
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Welcome back</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Userinput
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <Userinput
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button primary-button" type="submit">
            Login
          </button>
        </form>

        <div className="form-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
