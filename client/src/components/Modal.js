import React, { useState } from "react";
import UpdateIcon from "@material-ui/icons/Update";
import { MenuItem, Paper, Select, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import DeleteIcon from "@material-ui/icons/Delete";
const Modal = ({ data }) => {
  const [name, setname] = useState();
  const [form, setfrom] = useState();
  const [to, setto] = useState();
  const [date, setdate] = useState();
  return (
    <div className="blackish">
      <div className="form-2 ">
        <Paper elevation={3}>
          <br></br>
          <form onSubmit={onsubmit}>
            <TextField
              type="text"
              spellCheck="false"
              id="standard-basic"
              label="Name"
              value={data.name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <FormControl className="formcontrol">
              <InputLabel>From</InputLabel>
              <Select
                value={data.formi}
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
                value={data.toi}
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
              value={data.date}
              onChange={(e) => {
                setdate(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <div className="mg2">
              <button className="btn5" onClick={onsubmit}>
                <DeleteIcon color="Secondary" />
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn5" onClick={onsubmit}>
                <UpdateIcon color="Primary" />
              </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Modal;
