import React, { useState } from "react";
import "../assests/css/carrer-page.css";
function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    console.log(id);
    console.log(value);
    console.log(files);
    if (id === "name") {
      setErrors({ ...errors, name: "" });
    }
    if (id === "email") {
      setErrors({ ...errors, email: "" });
    }
    if (id === "phone") {
      setErrors({ ...errors, phone: "" });
    }
    if (id === "message") {
      setErrors({ ...errors, message: "" });
    }
    if (files) {
      setErrors({ ...errors, resume: null });
    }

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
      try {
        const formDataAPI = new FormData();
        formDataAPI.append("resume", formData.resume);
        formDataAPI.append("name", formData.name);
        formDataAPI.append("email", formData.email);
        formDataAPI.append("subject", `Need Assistance Finding Relevant Job Listings`);
        formDataAPI.append("message", formData.message);

        const response = await fetch("https://www.futuremindz.com/apisend-email", {
          method: "POST",
          body: formDataAPI,
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
          setErrors({});
        } else {
          alert("Failed to submit the form. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "An error occurred while submitting the form. Please try again later."
        );
      }
    } else {
      // Trigger browser's built-in validation UI
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
      <div className="career-container">
        <div className="career-item career-section new-job-seeker">
          <h2 className="career-subheader">New Job Seekers</h2>
          <p>
            Are you a recent college graduate looking for a place to start? We
            provide training services on some of the most high-demand
            technologies in the market. Our trainers are industry experts
            themselves, so you get to learn a new technology with the aid of
            real-time on-the-job scenarios and use cases. All students are asked
            to participate in a capstone project at the end of their training to
            further solidify their knowledge. Once training is completed, our
            Bench Sales team works to place you in appropriate positions where
            you can best practice your skills and advance in your chosen career.
          </p>
          <br />
          <p>
            For visa holders, our in-house legal team ensures that you are
            always in compliance with US guidelines on immigration and labor.
          </p>
          <br />
          <p>
            Upload your resume below so that one of our recruiters can reach out
            to answer any questions you might have. We look forward to hearing
            from you!
          </p>
        </div>
        <div className="career-item career-section seasoned-professional">
          <h2 className="career-subheader">Seasoned Professionals</h2>
          <p>
            We are constantly welcoming new employees to our team. If you are a
            consultant with expertise in Workday, Salesforce, Data Analytics,
            AWS, or Cybersecurity, looking for new opportunities for growth,
            please scroll through our{" "}
            <strong>
              <a href="/career" style={{ color: "#015A9C" }}>
                Career Opportunities
              </a>
            </strong>{" "}
            page to find out more about our current job openings. We definitely
            have existing and upcoming projects to pique your interest.
          </p>
        </div>
      </div>
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
        <button type="button" onClick={handleSubmit} className="btn submitBtn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CareerPage;
