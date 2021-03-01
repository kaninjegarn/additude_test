import React, { useEffect, useState } from 'react';
import './Profile.scss';
import { Switch, Route, Link } from "react-router-dom";
import { DetailedProfile } from '../index';

export default ({ link, key, firstName, lastName, cell, picture, mail, country, text, title, state, street, postCode, age }) => {
  const [show, setShow] = useState(true)
  // components props that will be used when rendering the detailed profile.
  const detailedProfileProps = () => {
    return <DetailedProfile 
      firstName={firstName}
      lastName={lastName}
      cell={cell}
      picture={picture}
      mail={mail}
      country={country}
      title={title}
      state={state}
      street={street}
      postCode={postCode}
      age={age}
    />
  }
  // whenever you clear the input -> show all profiles again.
  useEffect(() => {
    let fullName = (firstName+lastName);

    // whenever you clear the input -> show all profiles again
    if(text || text === "") {
      setShow(true);
    }

    // if fullname(firstName+lastName) doesnt include text -> dont show it
    if (text && !fullName.toLowerCase().includes(text)) {
      setShow(false)
    }
  }, [text])
  return(
    <div className={`profile ${show ? 'show': 'dontShow'} ${link}`} key={key}>
      <div className="profile__image">
      <Link to={`/${link}`}>
          <img src={picture} alt=""/>
      </Link>
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
    <Switch>
        <Route path={`/${link}`} component={detailedProfileProps} />
    </Switch>
    </div>
  )
}