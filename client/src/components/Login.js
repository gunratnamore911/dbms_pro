import React, { useState } from "react";
import Navbar from "./Navbar";

import { Paper, TextField } from "@material-ui/core";

const Login = (props) => {
  const [user, setuser] = useState("");
  const host = window.location.hostname;

  const [password, setpassword] = useState("");
  const loginadmin = (e) => {
    e.preventDefault();
    console.log(user, password);

    if (
      user === process.env.REACT_APP_USERN &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      if (host === "localhost") {
        const localh = "http://localhost:3000";
        window.open(`${localh}/dashboard`, "_self");
      } else {
        window.open(`/dashboard`, "_self");
      }
    } else {
      if (host === "localhost") {
        const localh = "http://localhost:3000";
        window.open(`${localh}/wrong`, "_self");
      } else {
        window.open(`/wrong`, "_self");
      }
    }
  };
  return (
    <>
      <div className="login_nav">
        <Navbar />
      </div>
      <div className="wraper_main">
        <div className="wrapper">
          <br></br>
          <br></br>
          <div className="cred">
            <form onSubmit={loginadmin}>
              <Paper elevation={3}>
                {" "}
                <br></br>
                <TextField
                  type="text"
                  spellCheck="false"
                  label="Admin"
                  value={user}
                  onChange={(e) => {
                    setuser(e.target.value);
                  }}
                />
                <br></br> <br></br>
                <TextField
                  type="password"
                  spellCheck="false"
                  label="Password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <br></br> <br></br> <br></br> <br></br> <br></br>
                <button onSubmit={loginadmin} className="btn3">
                  Log In
                </button>
                <br></br> <br></br> <br></br> <br></br> <br></br>
              </Paper>
            </form>
          </div>
        </div>
      </div>
      <p className="para1">@2021 All Rights Reserved</p>
    </>
  );
};

export default Login;
