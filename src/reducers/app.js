import {
  SET_TEXT,
  SET_PROFILES,
  SET_GENDER,
  SET_NATION
} from "../types";

const initialState = {
  text: "",
  gender: "",
  nation: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.text
      };
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.profiles
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.gender
      };
    case SET_NATION:
      return {
        ...state,
        nation: action.nation
      };
  }
  return state;
}