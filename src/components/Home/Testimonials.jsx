import React from "react";
import "../../assets/css/components/Testimonials.css";

const testimonials = [
  {
    quote: "Kivutian Fraternity transformed our community. Through their educational support, my children are now attending school regularly.",
    author: "Marie",
    location: "DR Congo"
  },
  {
    quote: "The microfinance initiative gave me the opportunity to start my own business and support my family.",
    author: "Fatima",
    location: "Volunteer in Tanzania"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Hear It From Our Clients</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">- {testimonial.author}, {testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
