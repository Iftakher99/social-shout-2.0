import React from 'react';
import Leftpart from './Leftpart/Leftpart';
import Middlepart from './Middlepart/Middlepart';
import Rightpart from './Rightpart/Rightpart';
import './Body.css'
const Body = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-direction-column  ">
        <div
          style={{ backgroundColor: '#DEDEDE', height: '100vh' }}
          className="col-3 "
        >
          <Leftpart />
        </div>
        <div style={{ padding: 0 }} className="col-6">
          <Middlepart />
        </div>
        <div
          style={{ backgroundColor: '#DEDEDE', height: '100vh' }}
          className="col-3"
        >
          <Rightpart className="rightpart"/>
        </div>
      </div>
    </div>
  );
};

export default Body;
