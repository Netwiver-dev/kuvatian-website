import React from "react";
import "../assets/css/Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://facebook.com/profile.php?id=61550623551815"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/kivutian_fraternity/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
   
        </div>
        <div className="legal-links">
          <a href="#donate">Donate</a>
        </div>
        {/*
        <div className="partner-logos">
          <img src="/path/to/partner1-logo.png" alt="Partner 1" />
          <img src="/path/to/partner2-logo.png" alt="Partner 2" />
          <img src="/path/to/partner3-logo.png" alt="Partner 3" />
        </div> */}
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Kivutian Fraternity. All rights reserved.
        <div className="developers">
          Website Developed by
          <a href="//netwiver.com" className="devs">
            {" "}
            Netwiver Technologies
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
