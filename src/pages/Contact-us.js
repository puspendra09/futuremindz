import React, { useState } from "react";
import "../assests/css/ProjectStyles.css";
import Logo from "../assests/images/FuturemindzLogo.svg";
import contactus2 from "../assests/images/contactus2.png";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Function to validate the form
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.company) formErrors.company = "Company is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = "Valid email is required";
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      formErrors.mobile = "Valid 10-digit mobile number is required";
    }

    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);

    // If no errors, form is valid
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "https://www.futuremindz.com/apisend-email",
          formData
        );
        setResponseMessage("Message sent successfully!");
      } catch (error) {
        setResponseMessage("An error occurred while sending the message.");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <div>
        <div className="contact-header">
          <h1>Contact Us</h1>
        </div>
        <div className="background-image">
          <div className="flex-container">
            <div className="text-box1">
              <h4>Partner with FutureMindz</h4>
            </div>
            <div className="text-box2">
              <h4>Become a Consultant</h4>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="image-container">
            <img src={contactus2} alt="Placeholder Image" />
          </div>
          <div className="form-container">
            <h1>LET’S CHAT</h1>
            <p>
              Fill out the form below and we’ll get in touch with you right
              away!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group sendmsg">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>
                <div className="form-group sendmsg">
                  <label htmlFor="company">Your Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {errors.company && (
                    <span className="error-message">{errors.company}</span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group sendmsg">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
                <div className="form-group sendmsg">
                  <label htmlFor="mobile">Your Mobile No</label>
                  <input
                    type="tel"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {errors.mobile && (
                    <span className="error-message">{errors.mobile}</span>
                  )}
                </div>
              </div>
              <div className="form-group sendmsg">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>
              <button type="submit" id="sendmsg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {responseMessage && <p>{responseMessage}</p>}
            </form>
            <div id="general-message-box" className="message-box hidden">
              One or more fields have an error. Please check and try again.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
