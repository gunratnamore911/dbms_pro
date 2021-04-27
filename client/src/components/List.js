import React, { useEffect, useState } from "react";
import "./List.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getdata } from "../actions/getuser";
import Modal from "./Modal";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

var data = [];
function List({ list, getdata }) {
  const something = (id) => {
    data = list.filter(function (hero) {
      return hero.passenger_id == id;
    });
    console.log(data);
  };
  const classes = useStyles();
  useEffect((e) => {
    getdata();
  }, []);

  console.log(list);

  return (
    <>
      <div className="open">
        {" "}
        <Link to="/">
          <button className="list2 omg">Log Out</button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">From</StyledTableCell>
              <StyledTableCell align="right">To&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Fare&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <StyledTableRow
                key={row.name}
                className="something"
                key={row.passenger_id}
                onClick={() => {
                  something(row.passenger_id);
                }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.customer_name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.fromi}</StyledTableCell>
                <StyledTableCell align="right">{row.toi}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">{row.fare}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data ? data : null}
    </>
  );
}
const mapStateToProps = (state) => ({
  list: state.getuserreducer.list,
});
export default connect(mapStateToProps, { getdata })(List);
