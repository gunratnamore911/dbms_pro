import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="heading">
        <h1 className="headings">Easy Safe & Trusted </h1>
        <p className="para">
          This Administration System Is Safe And Trusted Worldwide.
        </p>
        <Link to="/login">
          <button className="btn1 btn2">Administration Use</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
