import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/form.scss";
import Userinput from "../components/Userinput";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { handleRegister, loading } = useAuth();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    await handleRegister(username, email, password);
    console.log("User registered");

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
    <div className="form-page">
      <div className="form-card">
        <h1>Sign up to start listening</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group">
              <Userinput
                id="username"
                type="username"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-group">
              <Userinput
                id="email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-group">
              <Userinput
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="button primary-button" type="submit">
            Register
          </button>
        </form>

        <div className="form-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
