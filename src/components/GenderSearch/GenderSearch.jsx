import React, { useEffect, useState } from 'react';
import { fetchProfiles, setGender } from '../../actions';
import './GenderSearch.scss';

export default ({gender, nation}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  // With every gender change update fetchProfiles
  useEffect(() => {
    fetchProfiles(gender, nation);
  }, [gender]);

  return(
    <div
      className="genderSearch"
      onClick={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      sort by Gender
      <div
        className={`genderSearch__dropDown${showDropDown ? '--active': ''}`}>
        <div className="genderSearch__dropDown--male" onClick={() => setGender("male")}>Male</div>
        <div className="genderSearch__dropDown--female" onClick={() => setGender("female")}>Female</div>
      </div>
    </div>
  );
}