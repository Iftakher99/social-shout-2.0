import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import profilePic from '../../images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
  return (
    <div className="main-nav">
      <Navbar collapseOnSelect expand="lg">
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <img style={{ width: '50px' }} src={profilePic} alt="" />
        <FontAwesomeIcon icon={faSearch} />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse> */}
        <button className="home-btn mx-auto ">Home </button>
      </Navbar>
    </div>
  );
};

export default Header;
