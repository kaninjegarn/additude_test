import React from "react";
import './style.scss';

export default () => {
  return (
    <div className="header">
      <h1 className="header__title">
        <span className="header__title--pink">Epic </span>
        <span className="header__title--green">Gihpy </span>
        <span className="header__title--orange">Page</span>
        <div className="header__divider">
          <span></span>
        </div>
      </h1>
    </div>
  );
}