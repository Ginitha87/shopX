// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = ({ onBtnClick }) => {
  const handleCloseModal = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="hero">
      <div className="hero-video-overlay"></div>
      <video className="hero-video" autoPlay muted loop playsInline>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to ShopX</h1>
        <p>Your one-stop shop for the best deals online!</p>
        <button onClick={onBtnClick} className="cta-button">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;
