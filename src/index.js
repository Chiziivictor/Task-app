import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login />
    <SignUp />
  </React.StrictMode>,
  document.getElementById("root")
);
