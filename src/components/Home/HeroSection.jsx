import React from "react";
import "../../assets/css/components/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Promoting Cooperation, Education, and Health for All</h1>
        <p>
          Kivutian Fraternity is a non-profit organization dedicated to
          alleviating the suffering of isolated populations and promoting the
          culture of living together and health for all!
        </p>
        <div className="cta-buttons">
          <a href="#volunteer" className="cta-button primary">
            Join Us
          </a>
          <a href="#donate" className="cta-button secondary">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
