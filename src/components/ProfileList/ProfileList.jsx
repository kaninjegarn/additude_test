import React, { useEffect } from 'react';
import './ProfileList.scss';
import { Profile } from '../index';

export default ({ profiles, text }) => {

  // if(profiles) {
  //   profiles.name.first.sort( item =>  {
  //     if(item === text) {
  //       return item
  //     }
  //   })
  // }

  // console.log(profiles.name.first)

  return(
    <div className="profileList">
      {
        profiles && profiles.length > 0
          ? profiles.map(profile => {
            // {console.log(profile)}
            return (
              <Profile
                firstName={profile.name.first}
                lastName={profile.name.last}
                country={profile.location.country}
                cell={profile.phone}
                mail={profile.email}
                picture={profile.picture.large}
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