import { dividerClasses } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    axios
      .post(`http://localhost:8080/api/User/authenticate`, {
        username,
        password,
      })
      .then((res) => localStorage.setItem("token", JSON.stringify(res.data)));
  };
  return (
    <>
      <p>Username:</p>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <p>Password:</p>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </>
  );
};

export default Login;
