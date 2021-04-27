import { ADD_DATA, GET_DATA } from "../actions/types";

const intialState = {
  list: [],
  auth: false,
};

export default function videosreducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DATA:
      return state;
    case GET_DATA:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
}
