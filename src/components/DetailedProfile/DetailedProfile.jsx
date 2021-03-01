import React from 'react';
import './DetailedProfile.scss';
import { Link } from "react-router-dom";

export default (props) => {
  return(
    <div className={`detailedProfile`}>
      <div className="detailedProfile__container">
        <div className="detailedProfile__imgContainer">
          <img className="detailedProfile__imgContainer" src={props.picture} alt=""/>
        </div>

        <div className="detailedProfile__content">
          <div className="detailedProfile__content--name">
            <h1>{props.title} {props.firstName} {props.lastName}</h1>
          </div>
          <div className="detailedProfile__content--contact">
            <div>
              <h2 className="detailedProfile__content--title">Contact:</h2>
              <p>Work cell: {props.cell}</p>
              <p>{props.mail}</p>
              <p>{props.age} years old</p>
            </div>
            <div className="detailedProfile__divider"></div>
            <div>
              <h2 className="detailedProfile__content--title">Location:</h2>
              <p>{props.state}</p>
              <p>{props.street.name} {props.street.number} - {props.country}</p>
            </div>
          </div>
        </div>
        <Link className="detailedProfile__content--back" to="/">Take me back</Link>
      </div>
    </div>
  )
}
