import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "../../assets/css/components/GetInvolved.css";

const GetInvolved = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    address: "",
    tel: "",
    email: "",
    currentSituation: "",
    otherSituation: "",
    mainSkills: "",
    volunteerMission: "",
    expectations: "",
    investmentDuration: "",
    tempDuration: "",
    sensitiveActivities: "",
    availability: {
      monday: { morning: false, afternoon: false },
      tuesday: { morning: false, afternoon: false },
      wednesday: { morning: false, afternoon: false },
      thursday: { morning: false, afternoon: false },
      friday: { morning: false, afternoon: false },
      saturday: { morning: false, afternoon: false },
      sunday: { morning: false, afternoon: false },
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (day, time) => {
    setFormData((prevState) => ({
      ...prevState,
      availability: {
        ...prevState.availability,
        [day]: {
          ...prevState.availability[day],
          [time]: !prevState.availability[day][time],
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
    alert("Thank you for volunteering! We will contact you soon.");
    setIsModalOpen(false);
  };

  return (
    <section id="get-involved" className="get-involved">
      <h2>Get Involved</h2>
      <div className="involvement-options">
        <div className="volunteer-section" id="volunteer">
          <h3>Volunteer</h3>
          <p>
            Become a volunteer and contribute to the community! You can help by
            teaching, organizing events, or supporting local initiatives.
          </p>
          <button className="cta-button" onClick={() => setIsModalOpen(true)}>
            Sign Up to Volunteer
          </button>
        </div>
        <div className="donate-section">
          <h3>Donate</h3>
          <p>
            Support our mission by donating to provide clean water, education,
            and healthcare to isolated populations.
          </p>
          <button className="cta-button">Donate Now</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <h3>Volunteer Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="tel">Tel:</label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentSituation">Current Situation:</label>
                <select
                  id="currentSituation"
                  name="currentSituation"
                  value={formData.currentSituation}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="active">Active</option>
                  <option value="lookingForJob">Looking for a job</option>
                  <option value="inactive">Inactive</option>
                  <option value="student">Student</option>
                  <option value="retired">Retired</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {formData.currentSituation === "other" && (
                <div className="form-group">
                  <label htmlFor="otherSituation">Specify Other:</label>
                  <input
                    type="text"
                    id="otherSituation"
                    name="otherSituation"
                    value={formData.otherSituation}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="mainSkills">Main Skills:</label>
                <textarea
                  id="mainSkills"
                  name="mainSkills"
                  value={formData.mainSkills}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="volunteerMission">Volunteer Mission:</label>
                <textarea
                  id="volunteerMission"
                  name="volunteerMission"
                  value={formData.volunteerMission}
                  onChange={handleInputChange}
                  required
                  placeholder="Educational monitor, Bible lover, fair trade and sales lover, sports lover, music and dance lover, cooking lover, donation collection lover, etc."
                />
              </div>
              <div className="form-group">
                <label htmlFor="expectations">
                  What are your expectations?
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  For how long do you want to invest in our association?
                </label>
                <div>
                  <input
                    type="radio"
                    id="longTerm"
                    name="investmentDuration"
                    value="longTerm"
                    checked={formData.investmentDuration === "longTerm"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="longTerm">Long term</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="temporary"
                    name="investmentDuration"
                    value="temporary"
                    checked={formData.investmentDuration === "temporary"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="temporary">Temporarily or punctually</label>
                </div>
              </div>
              {formData.investmentDuration === "temporary" && (
                <div className="form-group">
                  <label htmlFor="tempDuration">Specify duration:</label>
                  <input
                    type="text"
                    id="tempDuration"
                    name="tempDuration"
                    value={formData.tempDuration}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="sensitiveActivities">
                  Which activity(ies) or project(s) by our association are you
                  most sensitive to?
                </label>
                <textarea
                  id="sensitiveActivities"
                  name="sensitiveActivities"
                  value={formData.sensitiveActivities}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Indicate the times of the week when you are available:
                </label>
                <table className="availability-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Morning</th>
                      <th>Afternoon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(formData.availability).map(
                      ([day, times]) => (
                        <tr key={day}>
                          <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
                          <td>
                            <input
                              type="checkbox"
                              checked={times.morning}
                              onChange={() =>
                                handleCheckboxChange(day, "morning")
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              checked={times.afternoon}
                              onChange={() =>
                                handleCheckboxChange(day, "afternoon")
                              }
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetInvolved;
