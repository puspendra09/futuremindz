import React, { useState } from "react";
import "../assests/css/carrer-page.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

function CareerPage() {
  const location = useLocation();
  const job = location.state?.job;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "name") setErrors({ ...errors, name: "" });
    if (id === "email") setErrors({ ...errors, email: "" });
    if (id === "phone") setErrors({ ...errors, phone: "" });
    if (id === "message") setErrors({ ...errors, message: "" });
    if (files) setErrors({ ...errors, resume: null });

    setFormData({
      ...formData,
      [id]: id === "resume" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.resume) newErrors.resume = "Resume is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValid = validateForm();

    if (formValid) {
      setLoading(true); // Start loading

      try {
        const adminContent = `<p>Dear [FutureMindz/HR Team],</p>
                              <p>We wanted to inform you that a new application has been submitted through the website ${
                                job?.title
                                  ? " for the position of " + job?.title
                                  : ""
                              }.</p>
                              <p>Here are the details of the applicant:</p>
                              <ul><li>Name: ${formData.name}</li></ul>
                              <ul><li>Email: ${formData.email}</li></ul>
                              <ul><li>Phone Number: ${formData.phone}</li></ul>
                              ${
                                job?.title
                                  ? "<ul><li>Position Applied For: " +
                                    job?.title +
                                    "</li></ul>"
                                  : ""
                              }
                              <ul><li>Please find attached CV</li></ul><br />
                              <p>Best regards,</p>
                              <p>${formData.name}</p>`;

        const postAdminData = new FormData();
        postAdminData.append("resume", formData.resume);
        postAdminData.append("name", formData.name);
        postAdminData.append(
          "email",
          "Druna@futuremindzllc.com, prathima@futuremindzllc.com"
        );
        postAdminData.append(
          "subject",
          `New CV Submission: ${formData.name} Applied`
        );
        postAdminData.append("message", adminContent);

        const response = await fetch(
          "https://www.futuremindz.com/apisend-email",
          {
            method: "POST",
            body: postAdminData,
          }
        );

        if (response.ok) {
          alert("Your application has been submitted successfully!");
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            resume: null,
          });
          document.getElementById("resume").value = "";
          setErrors({});
        } else {
          alert("Failed to submit the form. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "An error occurred while submitting the form. Please try again later."
        );
      } finally {
        setLoading(false); // End loading
      }
    } else {
      e.target.reportValidity();
    }
  };

  return (
    <div className="container">
      {/* Form Content */}
      <h5 className="upload-header">Upload Your Resume</h5>
      <div className="job-seeker-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span className="text-danger">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <textarea
            id="message"
            className="form-control"
            rows={3}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className="text-danger">{errors.message}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="file"
            id="resume"
            className="form-control file-input"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
          {errors.resume && (
            <span className="text-danger">{errors.resume}</span>
          )}
          {!formData.resume ? (
            <span className="form-text text-muted">No file chosen</span>
          ) : (
            <span className="form-text text-muted">{formData.resume.name}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="btn submitBtn"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default CareerPage;
