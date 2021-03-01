import React from "react";
import { setSearch, setText } from "../../actions";
import { GenderSearch, NationSearch } from '../index';
import './Input.scss';

export default ({ text, search }) => {
  const handleCLick = () => {
    setSearch(search = !search)
    console.log(search)

  }

  return (
    <div className="searchPanel">
      <div className="searchPanel__container">
        <input 
          className="searchPanel__input"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="search profile..."
        />
        <div className="searchButton" onClick={handleCLick}>Search</div>
      </div>
      <div className="sortingPanel">
          <GenderSearch />
          <NationSearch />
      </div>
    </div>
  );
}