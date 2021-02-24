import {
  SET_TEXT,
  SET_GIPHYS,
} from "../types";

const initialState = {
  text: "",
  giphys: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.text
      };
    case SET_GIPHYS:
      return {
        ...state,
        giphys: action.giphys
      };
  }
  return state;
}