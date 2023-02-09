import React, { useState } from "react";
import "./Login.css";
import logo from "./Image/logo.png";
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div className="desktop-4">
      <div className="rectangle-86" >
      <img className="logo" src={logo} alt="" />
      </div>
      
      <div className="rectangle-26974">
        <span className="school-talkz-site-ad">School Talkz Site Admin</span>
        <span className="enter-your-login-cre">
          Enter your login credentials
        </span>
        <input className="rectangle-72" placeholder="Email" type="text" value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }} />
        <input className="group-117" placeholder="Password" type="password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }} />
        <span className="forgot-password">Forgot Password</span>
        <button className="group-136169446">
          <div className="rectangle-71-1">Login</div>
        </button>
      </div>
    </div>
  );
};
export default Login;