import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Newuser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobnumber, setMobnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const navigation = useNavigate();
  const regesterUser = (e) => {
    e.preventDefault();
    if (
      firstname &&
      lastname &&
      mobnumber &&
      email &&
      password &&
      conformPassword
    ) {
      if (password.length > 8 && password === conformPassword) {
        const obj = {
          email: email,
          userpassword: password,
        };
        const seriliseData = JSON.stringify(obj);
        localStorage.setItem("users", seriliseData);
        setConformPassword("");
        setEmail("");
        setFirstname("");
        setLastname("");
        setMobnumber("");
        setPassword("");
        navigation("/");
      } else {
        alert("password is not currect");
      }
    } else {
      alert("please fill all details");
    }
  };
  const login = (e) => {
    e.preventDefault();
    navigation("/");
  };
  return (
    <form className="newuser">
      <h1>Register</h1>
      
      <span className="input">   </span>
        {" "}
        First name  : 
        <input
          type="text"
          placeholder="enter your  first name"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
      
      <span className="input">    </span>
        {" "}
        Last name :   {" "}
        <input
          type="text"
          placeholder="enter your last name "
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
      
      <span className="input">   </span>
        {" "}
        Email      :
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setMobnumber(e.target.value)}
          value={mobnumber}
        />
   
      <span className="input"></span>
        {" "}
        Mob number   :
        <input
          type="text"
          placeholder="enter your number"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      
      <span className="input"> </span>
        {" "}
        Password   :        
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="password"
        />
     
      <span className="input">   </span>
        {" "}
        Conform password :
        <input
          type="password"
          placeholder="conform password "
          onChange={(e) => setConformPassword(e.target.value)}
          value={conformPassword}
          autoComplete="password"
        />
  
      <button onClick={(e) => regesterUser(e)} className="btn">
        {" "}
        Register{" "}
      </button>
      <p>
        already user ?
        <span className="curser" onClick={(e) => login(e)}>
          {" "}
          login
        </span>
      </p>
    </form>
  );
}
export default Newuser;
