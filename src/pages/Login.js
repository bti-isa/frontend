import { dividerClasses } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "config/AxiosInstance";

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
  const test = (e) => {
    axiosInstance.post(`polls/add`, {}).then((res) => console.log(res));
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
        <button onClick={test}>Test</button>
      </div>
    </>
  );
};

export default Login;
