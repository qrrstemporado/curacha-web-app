import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import FooterPage from '../FooterPage/FooterPage';
import './Profile.css';

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="profileContainer">
        <div className="quote-container">
          <div className="quote-header">
            <h2>Welcome Back, Alexia Roque!</h2>
            <p>Email: roquealexia09@gmail.com</p>
          </div>
          <div className="quote-body">
            <div className="quote-section">
              <div className="quote-section-header">QUOTATION 1</div>
              <div className="quote-detail">Title: D1</div>
              <div className="quote-detail">Product Type: Delivery Receipt</div>
              <div className="quote-detail">Quantity: 100</div>
              {/* ... other details */}
              <div className="quote-price">
                Unit Price: P134.50
                <br />
                Total: P13,450.00
              </div>
            </div>
            <div className="quote-section">
              <div className="quote-section-header">QUOTATION 2</div>
              <div className="quote-detail">Title: D1</div>
              <div className="quote-detail">Product Type: Delivery Receipt</div>
              <div className="quote-detail">Quantity: 100</div>
              <div className="quote-price">
                Unit Price: P134.50
                <br />
                Total: P13,450.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

export default Profile;
