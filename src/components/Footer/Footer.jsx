import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 ShopX. All rights reserved.</p>
      <p>
        <Link to="/about">About Us</Link>
      </p>
    </footer>
  );
};

export default Footer;
