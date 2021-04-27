require("dotenv").config();
const express = require("express");
const colors = require("colors");
const app = express();
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
app.use(cors());
app.use(express.json({ extended: false }));

//serving static assests
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

db.connect((err) => {
  if (!err) {
    console.log("Mysql Connected!");
  } else {
    console.log(err);
  }
});

//actual data insertion
app.post("/data/in", (req, res) => {
  console.log(req.body);

  let sql = `INSERT INTO passenger (customer_name,email,age,mobile_num,address) VALUES ('${req.body.name}','${req.body.email}','${req.body.age}','${req.body.mobilenum}','${req.body.address}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
  });
  let sql2 = `INSERT INTO Booking (ticketID,flightID,seatNum,class) VALUES ('${req.body.ticketID}','${req.body.flightID}','${req.body.seatNum}','${req.body.classi}')`;
  db.query(sql2, (err, result) => {
    if (err) throw err;
  });
  let sql3 = `INSERT INTO Flight (flightID,fromi,toi,date,time,fare) VALUES ('${req.body.flightID}','${req.body.from}','${req.body.to}','${req.body.date}','${req.body.time}','${req.body.fare}')`;
  db.query(sql3, (err, result) => {
    if (err) throw err;
  });
  return res.status(201).json({ msg: "added data" });
});

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database created!");
  });
});
app.get("/createpassengertable", (req, res) => {
  let sql =
    "CREATE TABLE passenger (passenger_id INT AUTO_INCREMENT,customer_name VARCHAR(50) NOT NULL,email VARCHAR(30),age INT DEFAULT NULL,mobile_num INT DEFAULT NULL,address VARCHAR(30) DEFAULT NULL,PRIMARY KEY(passenger_id))";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("passenger created");
  });
});
app.get("/createbooking", (req, res) => {
  let sql =
    "CREATE TABLE Booking (ticketID INT,flightID INT,seatNum VARCHAR(5),class VARCHAR(7),passenger_id INT AUTO_INCREMENT,PRIMARY KEY(ticketID),FOREIGN KEY (passenger_id) REFERENCES passenger (passenger_id) ON DELETE CASCADE )";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("booking  created");
  });
});
app.get("/createflight", (req, res) => {
  let sql =
    "CREATE TABLE Flight (flightID INT,fromi VARCHAR(10),toi VARCHAR(10),date DATE,time TIME,fare INT,PRIMARY KEY(flightID) )";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("FLIGHT created");
  });
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.get("/receive/data", (req, res) => {
  let sql =
    "SELECT passenger.customer_name,passenger.passenger_id, Flight.fromi,Flight.toi,Flight.date,Flight.fare FROM Booking INNER JOIN passenger ON passenger.passenger_id = Booking.passenger_id INNER JOIN Flight ON Flight.flightID = Booking.flightID";

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.cyan.bold);
});
