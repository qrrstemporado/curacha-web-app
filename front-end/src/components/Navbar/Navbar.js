import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo-curacha.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <a href="#home" className="menuItem">Customize Order</a>
        <a href="#about" className="menuItem">Items</a>
        <a href="#services" className="menuItem">Services</a>
        <a href="#contact" className="menuItem">Login</a>
      </div>
    </div>
  );
}

export default NavBar;
