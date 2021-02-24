import React from "react";
import { setText } from "../../actions";
import './style.scss';

export default ({ text }) => {
  return (
    <div className="searchPanel">
      <input 
        className="searchPanel__input"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="search gif..."
      />
    </div>
  );
}