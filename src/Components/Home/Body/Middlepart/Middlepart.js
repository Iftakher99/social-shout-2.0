import React from 'react';
import './Middlepart.css';
import profileImg from '../../../images/profile.png';
import {
  faCalendarPlus,
  faChartBar,
  faFile,
  faGift,
  faPhotoVideo,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopFriends from './TopFriends/TopFriends';
import Postsection from './Postsection/Postsection';
const Middlepart = () => {
  return (
    <div>
      <div className="post-creation">
        <div className="d-flex post-section">
          <img
            style={{ margin: '0' }}
            className="profile-pic"
            src={profileImg}
            alt=""
          />
          <h5 className="mt-4 ml-2">What are you thinking,Ariful?</h5>
        </div>
        <div className="d-flex justify-content-around">
          <div style={{ fontSize: '22px' }}>
            <FontAwesomeIcon className="mx-2" icon={faPhotoVideo} />
            <FontAwesomeIcon className="mx-2" icon={faFile} />
            <FontAwesomeIcon className="mx-2" icon={faGift} />
            <FontAwesomeIcon className="mx-2" icon={faSmile} />
            <FontAwesomeIcon className="mx-2" icon={faChartBar} />
            <FontAwesomeIcon className="mx-2" icon={faCalendarPlus} />
          </div>
          <div>
            <button className="home-post-button">Post</button>
          </div>
        </div>
      </div>
      <TopFriends />
      <Postsection />
    </div>
  );
};

export default Middlepart;
