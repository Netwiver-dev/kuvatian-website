import React, { useState, useEffect } from "react";
import "../../assets/css/components/OurImpact.css";

const impactData = [
  { metric: "Children Educated", value: 2500, suffix: "+" },
  { metric: "Women Empowered", value: 1200, suffix: "+" },
  { metric: "Community Wells Built", value: 50, suffix: "+" },
  { metric: "Vocational Schools Established", value: 30, suffix: "+" },
];

const OurImpact = () => {
  const [counts, setCounts] = useState(impactData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          const target = impactData[index].value;
          const increment = Math.ceil(target / 100);
          return count + increment > target ? target : count + increment;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="impact" className="impact">
      <h2>Our Impact</h2>
      <p>Together, we've made a significant impact!</p>
      <div className="impact-grid">
        {impactData.map((item, index) => (
          <div key={index} className="impact-item">
            <h3>
              {counts[index]}
              {item.suffix}
            </h3>
            <p>{item.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
