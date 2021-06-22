import React from 'react';
import './Rightpart.css';

import Searchbox from './Searchbox/Searchbox';
import Follownow from './Follownow/Follownow';
import Trandingnow from './Trandingnow/Trandingnow';
import Footer from './Footer/Footer';
const Rightpart = () => {
  return (
    <div className="right-section">
      <div>
        <Searchbox />
        <Follownow />
        <Trandingnow />
        <Footer />
      </div>
    </div>
  );
};

export default Rightpart;
