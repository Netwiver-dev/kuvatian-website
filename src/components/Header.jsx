import React, { useState } from "react";
import "../assets/css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Kivutian Fraternity</div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#mission">Mission</a>
          </li>
          <li>
            <a href="#programs">Programs</a>
          </li>
          <li>
            <a href="#impact">Impact</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
