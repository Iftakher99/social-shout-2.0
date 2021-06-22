import React from 'react';
import profilePic from '../../../images/profile.png';
import './Leftpart.css';
import Fakedata from '../../FakeData/Fakedata.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
const icons = require('@fortawesome/free-solid-svg-icons');

const Leftpart = () => {
  return (
    <div className="mx-auto my-auto">
      <img className="profile-pic" src={profilePic} alt="" />

      <div className="menu-items">
        {Fakedata.menu.map((item, i) => (
          <div className="d-flex h6" key={i}>
            {<FontAwesomeIcon icon={icons[item.logo]} />}
            <h6 className="mx-3"> {item.name}</h6>
          </div>
        ))}
      </div>

      <button className="post-button ">Post </button>
      <div className="d-flex justify-content-between align-self-center account-info">
        <img className="profile-pic" src={profilePic} alt="" />
        <h6>
          Name <br /> @Username
        </h6>
        <FontAwesomeIcon icon={faCommentDots} />
      </div>
    </div>
  );
};

export default Leftpart;
