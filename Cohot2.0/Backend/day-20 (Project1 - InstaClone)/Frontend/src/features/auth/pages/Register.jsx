import { Link } from "react-router-dom";
import "../styles/form.scss";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
  };

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
