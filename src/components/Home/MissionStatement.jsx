import React from "react";
import "../../assets/css/components/MissionStatement.css";
function MissionStatement() {
  return (
    <section id="mission" className="mission-statement">
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create workshops around the world to promote
          know-how, cooperation, and lifelong learning. We contribute to the
          supply of drinking water, health services, and provide socio-economic
          support to marginalized groups.
        </p>
        <ul className="key-points">
          <li>Train local communities in new information technologies</li>
          <li>
            Promote livestock farming through veterinary input supply projects
          </li>
          <li>Mobilize funds to educate unaccompanied or orphaned children</li>
        </ul>
      </div>
      <div className="mission-image">
        {/* Replace with actual images */}
        <div className="image-collage">
          <img src="./assets/images/collage-1.jpg" alt="Students learning" />
          <img src="./assets/images/collage-2.jpg" alt="Clean water supply" />
        </div>
      </div>
    </section>
  );
}

export default MissionStatement;
