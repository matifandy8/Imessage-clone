import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const singIn = () => {};
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="logo"
        />
        <h1>iMessage</h1>
      </div>

      <Button>Sign In</Button>
    </div>
  );
}

export default Login;
