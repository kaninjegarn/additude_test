import store from "../store";

import {
  SET_GIPHYS,
  SET_TEXT,
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