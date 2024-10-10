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
                              }<ul><li>Message: ${formData.message}</li></ul>
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

        const response = await fetch("https://futuremindz.com/api/send-email", {
          method: "POST",
          body: postAdminData,
        });

        let contentUserMessage = `<p>Dear ${formData.name},</p>
        <p>Thank you for submitting your CV through our website for the at FutureMindz. We have received your application and will review it carefully to assess your suitability for the position.</p>
        <p>Here are the details we have received from you:</p>
        <ul><li>Name: ${formData.name}</li></ul>
        <ul><li>Email: ${formData.email}</li></ul>
        <ul><li>Mobile No: ${formData.mobile}</li></ul>
        <ul><li>Message: ${formData.message}</li></ul>
        <p>Our recruitment team will be in touch if your profile matches the requirements of the role. In the meantime, if you have any questions or need further information, feel free to reach out to us at info@futuremindzllc.com</p>
        <p>We appreciate your interest in joining FutureMindz and wish you the best of luck with your application!</p>
        <p>Best regards,</p>
        <p>FutureMindz</p>`;
        let postUserData = {
          email: formData.email,
          name: "Futuremindz Team",
          subject: `Thank You for Submitting Your CV, ${formData.name}`,
          message: contentUserMessage,
        };

        await fetch("https://futuremindz.com/api/send-email", {
          method: "POST",
          body: postUserData,
        });

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
      <p className="career-header">
        Whether you are a seasoned professional or a new graduate, we definitely
        have existing and upcoming projects to pique your interest. Get in touch
        with one of our recruiters today to find out more.
      </p>
      {!job && (
        <div className="career-container">
          <div className="career-item career-section new-job-seeker">
            <h2 className="career-subheader">New Job Seekers</h2>
            <p>
              Are you a recent college graduate looking for a place to start? We
              provide training services on some of the most high-demand
              technologies in the market. Our trainers are industry experts
              themselves, so you get to learn a new technology with the aid of
              real-time on-the-job scenarios and use cases. All students are
              asked to participate in a capstone project at the end of their
              training to further solidify their knowledge. Once training is
              completed, our Bench Sales team works to place you in appropriate
              positions where you can best practice your skills and advance in
              your chosen career.
            </p>
            <br />
            <p>
              For visa holders, our in-house legal team ensures that you are
              always in compliance with US guidelines on immigration and labor.
            </p>
            <br />
            <p>
              Upload your resume below so that one of our recruiters can reach
              out to answer any questions you might have. We look forward to
              hearing from you!
            </p>
          </div>
          <div className="career-item career-section seasoned-professional">
            <h2 className="career-subheader">Seasoned Professionals</h2>
            <p>
              We are constantly welcoming new employees to our team. If you are
              a consultant with expertise in Workday, Salesforce, Data
              Analytics, AWS, or Cybersecurity, looking for new opportunities
              for growth, please scroll through our{" "}
              <strong>
                <a href="/career" style={{ color: "#015A9C" }}>
                  Career Opportunities
                </a>
              </strong>{" "}
              page to find out more about our current job openings. We
              definitely have existing and upcoming projects to pique your
              interest.
            </p>
          </div>
        </div>
      )}
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
