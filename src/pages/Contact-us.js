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
      let contentAdminMessage = `<p>Dear Futuremindz,</p>
                          <p>I hope this message finds you well. I recently came across your website and would like to inquire about product, service…etc.</p>
                          <p>Here are my details as requested:</p>
                          <ul><li>Name: ${formData.name}</li></ul>
                          <ul><li>Company: ${formData.company}</li></ul>
                          <ul><li>Email: ${formData.email}</li></ul>
                          <ul><li>Mobile No: ${formData.mobile}</li></ul>
                          <ul><li>Message: ${formData.message}</li></ul>`;
      let postAdminData = {
        email: "Druna@futuremindzllc.com, prathima@futuremindzllc.com",
        name: formData.name,
        subject: `Inquiry from ${formData.company}`,
        message: contentAdminMessage,
      };
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "https://www.futuremindz.com/apisend-email",
          postAdminData
        );
        let contentUserMessage = `<p>Dear ${formData.name},</p>
        <p>Thank you for reaching out to us. We have received your message and our team will review your inquiry shortly. We will get back to you as soon as possible, usually within 24 hours.</p>
        <p>Here are the details we received from you:</p>
        <ul><li>Name: ${formData.name}</li></ul>
        <ul><li>Company: ${formData.company}</li></ul>
        <ul><li>Email: ${formData.email}</li></ul>
        <ul><li>Mobile No: ${formData.mobile}</li></ul>
        <ul><li>Message: ${formData.message}</li></ul>
        <p>If you need any immediate assistance, feel free to contact us directly at +1 (718) 213-7876 or info@futuremindzllc.com</p>
        <p>We appreciate your interest and look forward to assisting you soon!</p>`;
        let postUserData = {
          email: formData.email,
          name: "Futuremindz Team",
          subject: `Thank You for Contacting Us, ${formData.name}`,
          message: contentUserMessage,
        };
        setIsSubmitting(true);
        try {
          const response = await axios.post(
            "https://www.futuremindz.com/apisend-email",
            postUserData
          );
        } catch (error) {
          console.error(error);
        }
        setFormData({
          name: "",
          company: "",
          email: "",
          mobile: "",
          message: "",
        });
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
