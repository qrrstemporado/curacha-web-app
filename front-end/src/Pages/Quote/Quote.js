import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import FooterPage from '../FooterPage/FooterPage';
import './Quote.css';


const Quote = () => {
  return (
    <div>
      <NavBar />
      <div className="quoteContainer">
        Insert Quote Design 
      </div>
      {/* Other content for the Quote page */}
      <FooterPage />
    </div>
  );
}

export default Quote;
