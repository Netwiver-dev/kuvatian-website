import { useState } from "react";
import "../../assets/css/components/ContactUs.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cta: "",
  });

  const handleChange = (e) => {
    const { fullName, value } = e.target;
    setFormData({ ...formData, [fullName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, cta } = formData;

    // Create the email subject and body
    const subject = `Contact from ${fullName}`;
    const body = `
      Full Name: ${fullName}
      Email: ${email}
      CTA: ${cta.replace(/\n/g, "%0A")}
    `;

    // Create mailto link
    const mailToLink = `mailto:kivutianfraternity@gmail.com
?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailToLink;

    setFormData({ fullName: "", email: "", cta: "" });
  };

  return (
    <section className="contact-us" id="contact">
      <div className="contactUs-container">

        <h2 className="main-title"> Contact Us </h2>

        <div className="contact-content">
          <div className="contact-details">

            <div className="contact-info">
              <FaPhone className="icon" />
              <p> <strong> UK: </strong> (+44) 7305289070   <br />
                <strong> DR Congo: </strong> (+243) 979343766
              </p>
            </div>

            <div className="contact-info">
              <FaEnvelope className="icon" />
              <p>
                <a href="mailto:kivutianfraternity@gmail.com"> kivutianfraternity@gmail.com </a>
              </p>
            </div>

            <div className="contact-info">
              <FaMapMarkerAlt className="icon" />
              <p>  <br />
                <strong> USA Office: </strong> 29 Sea Oaks Dr, St Augustine, Florida, USA.
                <br />
                <strong> DR Congo Office: </strong> 2854 Avenue Mutombo Q. Gambela, Commune de Lubumbashi.
              </p>
            </div>
          </div>

          <div className="form-style">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name"> Full Name </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"> Email </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message"> CTA </label>
                <textarea
                  name="cta"
                  id="cta"
                  placeholder="Send us a message"
                  value={formData.cta}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="btn-container">
                <button type="submit"> Contact Us </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;