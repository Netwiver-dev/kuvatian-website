import React from "react";
import "../../assets/css/components/KeyPrograms.css";
const programs = [
  {
    title: "Education",
    description:
      "Supporting schools and young professionals through coaching, sponsorship links, and programs aimed at fighting illiteracy and school dropouts among disadvantaged children.",
    icon: "📚",
  },
  {
    title: "Health",
    description:
      "Improving maternal and child health through the creation of health centers, education on hygiene, and support for vulnerable communities.",
    icon: "🏥",
  },
  {
    title: "Women's Empowerment",
    description:
      "Empowering women through savings and microfinance programs, enabling them to support their families and gain economic independence.",
    icon: "👩‍💼",
  },
  {
    title: "Youth Empowerment",
    description:
      "Helping young people acquire vocational skills and participate in community development through fairs, training, and self-care activities.",
    icon: "🧑‍🔧",
  },
  {
    title: "Child Care & Protection",
    description:
      "Ensuring the safety and education of unaccompanied children through cooperative learning, sponsorship, and advocacy.",
    icon: "🧒",
  },
];

const KeyPrograms = () => {
  return (
    <section id="programs" className="key-programs">
      <h2>Key Programs</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <div className="program-icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default KeyPrograms;
