import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import FooterPage from '../FooterPage/FooterPage';
import './Items.css';


const Items = () => {
  return (
    <div>
      <NavBar />
      <div className="itemsContainer">
        Insert Items Design 
      </div>
      {/* Other content for the Quote page */}
      <FooterPage />
    </div>
  );
}

export default Items;
