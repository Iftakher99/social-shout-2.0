import React from 'react';
import profile from '../../../../images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faComments,
  faFileAlt,
  faHeart,
  faMehRollingEyes,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import './Postsection.css';
const Postsection = () => {
  return (
    <div>
      <div className="d-flex justify-content-around mt-2 align-items-center">
        <div>
          {' '}
          <img
            style={{ margin: '0 0 0 ' }}
            className="profile-pic"
            src={profile}
            alt=""
          />
        </div>
        <div> </div>
        <h5>Name</h5>
        <div className="d-flex ">
          <h5 className="mx-2">Time</h5>
          <FontAwesomeIcon className="mx-3" icon={faSearch} />
        </div>{' '}
      </div>
      <p className="post-article">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid
        deserunt voluptatibus, amet non quas nisi cupiditate animi obcaecati
        culpa ex rerum cumque aliquam labore nihil, voluptas neque maiores,
        pariatur iste. quaerat ea, provident sequi optio eaque possimus vel
        harum veritatis.
      </p>
      <div className="post-reaction d-flex justify-content-between">
        <FontAwesomeIcon icon={faComments} />
        <FontAwesomeIcon icon={faChartBar} />
        <FontAwesomeIcon style={{ color: 'red' }} icon={faMehRollingEyes} />
        <FontAwesomeIcon style={{ color: 'red' }} icon={faHeart} />
        <FontAwesomeIcon icon={faFileAlt} />
      </div>
      <hr />
      <div className="d-flex justify-content-around mt-2 align-items-center">
        <div>
          {' '}
          <img
            style={{ margin: '0 0 0 ' }}
            className="profile-pic"
            src={profile}
            alt=""
          />
        </div>
        <div> </div>
        <h5>Name</h5>
        <div className="d-flex ">
          <h5 className="mx-2">Time</h5>
          <FontAwesomeIcon className="mx-3" icon={faSearch} />
        </div>{' '}
      </div>
      <p className="post-article">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed
        is assumenda eligendi, illo quos esse aliquam. Numquam soluta culpa
        voluptas architecto. Enim, quod.
      </p>
      <img
        className="post-img"
        src="https://images.firstpost.com/wp-content/uploads/2020/01/masteer-1200.jpg"
        alt=""
      />

      <div className="post-reaction d-flex justify-content-between font-">
        <FontAwesomeIcon icon={faComments} />
        <FontAwesomeIcon icon={faChartBar} />
        <FontAwesomeIcon style={{ color: 'red' }} icon={faMehRollingEyes} />
        <FontAwesomeIcon style={{ color: 'red' }} icon={faHeart} />
        <FontAwesomeIcon icon={faFileAlt} />
      </div>
      <hr />
    </div>
  );
};

export default Postsection;
