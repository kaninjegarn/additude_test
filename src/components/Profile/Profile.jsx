import React, { useEffect, useState } from 'react';
import './Profile.scss';

export default ({ key, firstName, lastName, cell, picture, mail, country, className, text, search }) => {
  // console.log(className)
  const [show, setShow] = useState(true)

  // let show = false;
  // useEffect(() => {
  //   // console.log("works")
    
  //   // if (text === "" || text == "" || text != undefined || firstName.toLowerCase().includes(text)) {
  //   //   // console.log(firstName, text)
  //   //   // show = true
  //   //   setShow(false)
  //   //   console.log(show, firstName, text)
  //   // }
  //   // const sortingFunc = firstName.toLowerCase().includes(text);
  //   // sortingFunc()
  //   if(text === "" && text) {
  //     setShow(true)
  //   }
  // }, [text]);


  // useEffect(() => {
  //   // if(search === "") {

  //     if (search !== "" && text === "" || text == "" || text == undefined || firstName.toLowerCase().includes(text)) {
  //       // console.log(firstName, text)
  //       // show = true
  //       setShow(false)
  //       console.log(show, firstName, text)
  //     } else {
  //       setShow(true)
  //     }
  //   // }
      
  //   // console.log("hello from useeffect")
  //   if (text !== "" && firstName.toLowerCase().includes(text)) {
  //     console.log("works", firstName + text)
  //     setShow(true);

  //   }
  // }, [search])


  
  useEffect(() => {
    if(text || text === "") {
      setShow(true);
    }
  }, [text])


  useEffect(() => {
    if (search &&text.toLowerCase() !== firstName.toLowerCase() && text !== undefined && search !== undefined) {
      setShow(false)
      console.log(text, firstName)
    }
  }, [search])

  return(
    <div className={`profile ${show ? 'show': 'dontShow'}`} key={key}>
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