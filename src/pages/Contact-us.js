import React from "react";
import "../assests/css/ProjectStyles.css";
import Logo from "../assests/images/FuturemindzLogo.svg";
import contactus2 from "../assests/images/contactus2.png"

function ContactUs() {
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
            <p>Fill out the form below and we’ll get in touch with you right away!</p>
            <form id="contact-form">
              <div className="form-row">
                <div className="form-group sendmsg">
                  <label htmlFor="name">Your name</label>
                  <input type="text" id="name" required="" />
                  <span className="error-message hidden">
                    The field is required.
                  </span>
                </div>
                <div className="form-group sendmsg">
                  <label htmlFor="company">Your Company</label>
                  <input type="text" id="company" required="" />
                  <span className="error-message hidden">
                    The field is required.
                  </span>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group sendmsg">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" required="" />
                  <span className="error-message hidden">
                    The field is required.
                  </span>
                </div>
                <div className="form-group sendmsg">
                  <label htmlFor="mobile">Your Mobile No</label>
                  <input type="tel" id="mobile" required="" />
                  <span className="error-message hidden">
                    The field is required.
                  </span>
                </div>
              </div>
              <div className="form-group sendmsg">
                <label htmlFor="message">Your message</label>
                <textarea id="message" required="" defaultValue={""} />
                <span className="error-message hidden">
                  The field is required.
                </span>
              </div>
              <button id="sendmsg">
                Send Message
              </button>
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
