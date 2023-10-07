import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const data = localStorage.getItem("users");
  const [logpassword, setLogPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigate();
  const login = (e) => {
    e.preventDefault();
    const d1 = JSON.parse(data);
    const user = d1.email;
    const password = d1.userpassword;
    if (username === user && password === logpassword) {
      alert("user login ");
    } else {
      alert("user is not exist please create user first");
    }
  };
  const newuser = (e) => {
    e.preventDefault();
    navigation("/newuser");
  };
  
  return (
    <form className="loginform ">
        <h1>login</h1>
        
        <span className="input">
            username :
      <input
        type="text"
        placeholder="email is your user name"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        
      /></span>
      <span className="input"> Password :
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setLogPassword(e.target.value)}
        value={logpassword}
        autoComplete="logpassword"

      /></span>
      <button onClick={(e) => login(e)} className="btn">login</button>
      <p>
        Not a user ? <span className="curser" onClick={(e) => newuser(e)}>register</span>
      </p>
    </form>
  );
}

export default Login;
