import store from "../store";

import {
  SET_TEXT,
  SET_PROFILES,
  SET_GENDER,
  SET_NATION,
  SET_SEARCH
} from "../types";

export const setText = (text) => {
  store.dispatch({
    type: SET_TEXT,
    text: text
  });
}

export const setGender = (gender) => {
  store.dispatch({
    type: SET_GENDER,
    gender: gender
  });
}

export const setNation = (nation) => {
  store.dispatch({
    type: SET_NATION,
    nation: nation
  });
}

export const setProfiles = (profiles) => {
  store.dispatch({
    type: SET_PROFILES,
    profiles: profiles
  });
}

export const setSearch = (search) => {
  store.dispatch({
    type: SET_SEARCH,
    search: search
  });
}

export const fetchProfiles = async (gender, nation) => {
  return await fetch(`https://randomuser.me/api/?results=99&nat=${nation}&gender=${gender}`, {
    method: "GET",
    credentials: "same-origin"
  })  
    .then(res => res.json())
    .then(res => {
      setTimeout(() => {
        setProfiles(res.results);
      }, 1000);  
    });  
};    