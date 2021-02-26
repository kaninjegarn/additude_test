import store from "../store";

import {
  SET_GIPHYS,
  SET_TEXT,
  SET_PROFILES,
  SET_GENDER,
  SET_NATION
} from "../types";

export const setText = (text) => {
  store.dispatch({
    type: SET_TEXT,
    text: text
  });
}

export const fetchProducts = (text) => {
  return fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=MjgkUj0dMaonudO8GyRj77d9xaLXI9Sk&limit=25`, {
    method: "GET",
    credentials: "same-origin"
  })
    .then(res => res.json())
    .then(res => {
      setGiphys(res.data);
    });
};

export const setGiphys = (giphys) => {
  store.dispatch({
    type: SET_GIPHYS,
    giphys: giphys
  });
}

/////////////////////////////////////////////////////////////////////

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

export const fetchProfiles = async (gender, nation) => {
  // return fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=MjgkUj0dMaonudO8GyRj77d9xaLXI9Sk&limit=25`, {
  // return await fetch(`https://randomuser.me/api/?results=99&exc=login&gender=${gender}`, {
  return await fetch(`https://randomuser.me/api/?results=99&nat=${nation}&gender=${gender}&exc=login`, {
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

export const setProfiles = (profiles) => {
  store.dispatch({
    type: SET_PROFILES,
    profiles: profiles
  });
}

