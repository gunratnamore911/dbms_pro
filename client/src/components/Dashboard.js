import React, { useState } from "react";
import Navbar from "./Navbar";
import "./dashboard.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { getuser } from "../actions/getuser";
import { MenuItem, Paper, Select, TextField } from "@material-ui/core";
const Dashboard = ({ getuser }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [mobilenum, setmobilenum] = useState("");
  const [address, setaddress] = useState("");
  const [classi, setclassi] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [flight, setflight] = useState("");
  const fi = Math.floor(Math.random() * 10);
  const si = Math.floor(Math.random() * 5);
  const fr = Math.floor(Math.random() * 400);
  const tk = Math.floor(Math.random() * 450);
  const formdata = {
    name,
    email,
    age,
    mobilenum,
    address,
    classi,
    from,
    to,
    date,
    time,
    flight,
    ticketID: tk,
    flightID: fi,
    seatNum: si,
    fare: fr,
  };

  const onsubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    getuser(formdata);
  };

  return (
    <>
      <div className="login_nav">
        <Navbar />
      </div>

      <div className="extra">
        <Link to="/recent" style={{ textDecoration: "none" }}>
          <button className="list">Recent Bookings</button>
        </Link>
        <Link to="/">
          {" "}
          <button className="list2">Log Out</button>
        </Link>
      </div>
      <div className="dash">
        <h1 className="head1"> Book A Ticket</h1>
      </div>
      <div className="form-2">
        <Paper elevation={3}>
          <br></br>
          <form onSubmit={onsubmit}>
            <TextField
              type="text"
              spellCheck="false"
              id="standard-basic"
              label="Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              type="text"
              spellCheck="false"
              id="standard-basic"
              label="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              type="number"
              spellCheck="false"
              id="standard-basic"
              label="age"
              onChange={(e) => {
                setage(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              type="number"
              spellCheck="false"
              id="standard-basic"
              label="Mobile Number"
              onChange={(e) => {
                setmobilenum(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <TextField
              type="text"
              spellCheck="false"
              id="standard-basic"
              label="Adress"
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <FormControl className="formcontrol">
              <InputLabel>Class</InputLabel>
              <Select
                onChange={(e) => {
                  setclassi(e.target.value);
                }}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Economy">Economy</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="First Class">First Class</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl className="formcontrol">
              <InputLabel>From</InputLabel>
              <Select
                onChange={(e) => {
                  setfrom(e.target.value);
                }}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
              </Select>
            </FormControl>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <FormControl className="formcontrol">
              <InputLabel>To</InputLabel>
              <Select
                onChange={(e) => {
                  setto(e.target.value);
                }}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Jaipur">Jaipur</MenuItem>
                <MenuItem value="Cuttak">Cuttak</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <TextField
              type="date"
              spellCheck="false"
              onChange={(e) => {
                setdate(e.target.value);
              }}
            />
            <br></br> <br></br>
            <TextField
              type="time"
              spellCheck="false"
              id="standard-basic"
              onChange={(e) => {
                settime(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <FormControl
              className="formcontrol"
              onChange={(e) => {
                setflight(e.target.value);
              }}
            >
              <InputLabel>Flight</InputLabel>
              <Select>
                <MenuItem value=""></MenuItem>
                <MenuItem value="x">x</MenuItem>
                <MenuItem value="y">y</MenuItem>
                <MenuItem value="z">z</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <button className="btn4" onClick={onsubmit}>
              Book Now
            </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </form>
        </Paper>
      </div>
    </>
  );
};
export default connect(null, { getuser })(Dashboard);
