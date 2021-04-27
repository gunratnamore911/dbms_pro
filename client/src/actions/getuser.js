import axios from "axios";

import { ADD_DATA, GET_DATA } from "./types";
import store from "../store";
export const getuser = (formdata) => async (dispatch) => {
  console.log(formdata);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/data/in", formdata, config);
    store.dispatch({
      type: ADD_DATA,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getdata = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get("/receive/data", null, config);
    console.log(res);
    store.dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
