import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import FooterPage from '../FooterPage/FooterPage';
import './Profile.css';


const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="profileContainer">
        Insert Profile Design 
      </div>
      {/* Other content for the Quote page */}
      <FooterPage />
    </div>
  );
}

export default Profile;
