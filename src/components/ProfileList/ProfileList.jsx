import React, { useEffect } from 'react';
import './ProfileList.scss';
import { Profile } from '../index';

export default ({ profiles, text }) => {
  let key = 0

  // if(profiles) {
  //   profiles.name.first.sort( item =>  {
  //     if(item === text) {
  //       return item
  //     }
  //   })
  // }

  // console.log(profiles.name.first)

  // console.log(profiles.name.first.search('Meral'))

  return(
    <div className="profileList">
      {
        profiles && profiles.length > 0
          ? profiles.map(profile => {
            // {console.log(profile)}
            // {console.log(profile.name.first.search('Meral'))}
            return (
              <Profile
                key={key++}
                firstName={profile.name.first}
                lastName={profile.name.last}
                country={profile.location.country}
                cell={profile.phone}
                mail={profile.email}
                picture={profile.picture.large}
                className={text != "" && profile.name.first.search(text) ? 'show' : 'dontShow'}
              />
            )
          })
          : <div className="giphyList__standby">
            <div className="giphyList__standby--searching">
              Searching...
                </div>
          </div>
      }




      {
        // profiles.map(p => {
        //   <Profile
        //     // key={key}
        //     firstName="hej"
        //     // lastName={p.name.last}
        //     // cell={p.cell}
        //   />
        // })
      }
    </div>
  )
}