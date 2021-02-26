import React from 'react';
import './Profile.scss';

export default ({ firstName, lastName, cell, picture, mail, country }) => {
  return(
    <div className="profile">
      <div className="profile__image">
        <img src={picture} alt=""/>
      </div>
      <div className="divider"></div>
      <div className="profile__content">
        <div>
          <p><span className="profile__content--title">{firstName} {lastName}</span> {country}</p>
        </div>
        <div>
          <a href={`mailto:${mail}`}>{mail}</a>
        </div>
        <div>
          <p>{cell}</p>
        </div>
      </div>
    </div>
  )
}