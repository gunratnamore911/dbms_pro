import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Wrong from "./components/Wrong";
import store from "./store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Route exact path="/">
            {" "}
            <div className="App">
              <Home />
            </div>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/recent">
            <div style={{ backgroundColor: "black" }}>
              <Navbar />
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <List />
            </div>
          </Route>
          <Route exact path="/wrong">
            <div style={{ backgroundColor: "black" }}>
              <Navbar />
            </div>{" "}
            <Wrong />
          </Route>
        </Router>
      </Provider>
    </>
  );
}
