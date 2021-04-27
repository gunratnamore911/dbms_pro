import React from "react";
import { Link } from "react-router-dom";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
const Navbar = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="navbar">
          Yatra &nbsp; <FlightTakeoffIcon fontSize="large" />
        </div>
      </Link>
    </>
  );
};

export default Navbar;
