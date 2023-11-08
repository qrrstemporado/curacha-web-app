import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-curacha.svg';
import { Link } from 'react-router-dom';
//import icon from '../../assets/profile icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import ReqQuote from '../ReqQuote/ReqQuote';

function NavBar() {
  const [showReqQuote, setShowReqQuote] = useState(false);

  const handleShowReqQuote = () => {
    setShowReqQuote(true);
  };

  const handleCloseReqQuote = () => {
    setShowReqQuote(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" onClick={() => { window.location.href = '/' }} />
      <div className="menu">
        <Link to="/quote" className="menuItem" onClick={handleCloseReqQuote}>Request Quote</Link>
        <Link to="/items" className="menuItem">Items</Link>
        <Link to="/services" className="menuItem">Services</Link>
        <Link to="/login" className="menuItem">Login</Link>
        <FontAwesomeIcon icon={faCircleUser} className="icon" onClick={() => { window.location.href = '/profile' }} />

        <button className="nav-btn nav-close-btn" onClick={handleCloseReqQuote}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <button className="nav-btn" onClick={handleShowReqQuote}>
      <Link to="/profile" className="profile-icon">
        <FontAwesomeIcon icon={faCircleUser} />
        </Link>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {showReqQuote && <ReqQuote />}
    </div>
  );
}

export default NavBar;
