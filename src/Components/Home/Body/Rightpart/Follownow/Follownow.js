import React from 'react';
import './Follownow.css';
import pic from '../../../../images/profile.png';

const Follownow = () => {
  return (
    <div className="follownow-main">
      <h6 className="text-left follownow-heading">Follow Now</h6>
      <div className="d-flex justify-content-between follownow-child align-items-center p-1">
        <div className="d-flex ">
          {' '}
          <img className="pic" src={pic} alt="" />
          <div className="mt-3">Jahidul Haq</div>
        </div>
       
        <button className="follow-btn">Follow</button>
      </div>
      <div className="d-flex justify-content-between follownow-child align-items-center p-1">
        <div className="d-flex ">
          {' '}
          <img className="pic" src={pic} alt="" />
          <div className="mt-3">Jahidul Haq</div>
        </div>
       
        <button className="follow-btn">Follow</button>
      </div>
      <div className="d-flex justify-content-between follownow-child align-items-center p-1">
        <div className="d-flex ">
          {' '}
          <img className="pic" src={pic} alt="" />
          <div className="mt-3">Jahidul Haq</div>
        </div>
       
        <button className="follow-btn">Follow</button>
      </div>
      <div className="d-flex justify-content-between follownow-child align-items-center p-1">
        <div className="d-flex ">
          {' '}
          <img className="pic" src={pic} alt="" />
          <div className="mt-3">Jahidul Haq</div>
        </div>
       
        <button className="follow-btn">Follow</button>
      </div>
      <div className="d-flex justify-content-between follownow-child align-items-center p-1">
        <div className="d-flex ">
          {' '}
          <img className="pic" src={pic} alt="" />
          <div className="mt-3">Jahidul Haq</div>
        </div>
       
        <button className="follow-btn">Follow</button>
      </div>
      
      <div className="showmore-heading">
        <h6 className="text-left showmore ">Show More</h6>{' '}
      </div>
    </div>
  );
};

export default Follownow;
