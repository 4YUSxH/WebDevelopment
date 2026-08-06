import { Link, useNavigate } from "react-router-dom";
import "../styles/form.scss";
import { useAuth } from "../hook/useAuth";
import { useReducer, useState } from "react";

const Register = () => {
  const { loading, handelRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();

    await handelRegister(username, email, password);

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
        <h1>Register</h1>
        <form onSubmit={handelSubmit}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <button className="button primary-button">Register</button>
        </form>
        <p>
          Already have an account ? <Link to={"/login"}>Login to account.</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
