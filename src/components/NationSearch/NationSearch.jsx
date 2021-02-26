import React, { useEffect, useState } from 'react';
import { fetchProfiles, setNation } from '../../actions';
import './NationSearch.scss';

export default ({nation, gender}) => {
  const [showDropDown, setShowDropDown] = useState(false)
  // Added current list of useble nations
  const nationArray = [
        "au","br", "ca",
        "ch", "de", "dk",
        "es", "fi", "fr",
        "gb", "ie", "ir",
        "no", "nl", "nz",
        "tr", "us"];
        
  // With every nation change update fetchProfiles
  useEffect(() => {
    fetchProfiles(gender, nation);
  }, [nation]);

  return(
    <div
      className="nationSearch"
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      sort by Nation
      <div
        className={`nationSearch__dropDown${showDropDown ? '--active' : ''}`}>
          {nationArray.map(item => {
            return(
              <div className="nationSearch__dropDown--item" onClick={() => setNation(item)}>{item}</div>
            )
          })}
      </div>
    </div>
  )
}