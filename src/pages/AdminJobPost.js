import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import "../assests/css/jobPost.css"; // Your custom CSS
import { useNavigate } from "react-router-dom";

function AdminJobPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    jobDescription: "",
    salary: "",
    location: "",
    industry: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, jobDescription: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.company) newErrors.company = "Company name is required";
    if (!formData.jobDescription || formData.jobDescription === '<p><br></p>') {
      newErrors.jobDescription = "Job description is required";
    }
    if (!formData.salary) newErrors.salary = "Salary is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.industry) newErrors.industry = "Industry is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Job Data Submitted:", formData);
      // Add API submission logic here
      setErrors({});
      // Reset the form if needed
      setFormData({
        jobTitle: "",
        company: "",
        jobDescription: "",
        salary: "",
        location: "",
        industry: "",
      });
    }
  };

  return (
    <div className="mainAdminPost">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          {errors.jobTitle && <p style={{ color: "red" }}>{errors.jobTitle}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          {errors.company && <p style={{ color: "red" }}>{errors.company}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="jobDescription">Job Description:</label>
          <ReactQuill
            value={formData.jobDescription}
            onChange={handleEditorChange}
            modules={AdminJobPost.modules} // Custom modules for the toolbar
            formats={AdminJobPost.formats} // Formats allowed
            placeholder="Enter job description here..."
          />
          {errors.jobDescription && (
            <p style={{ color: "red" }}>{errors.jobDescription}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
          {errors.salary && <p style={{ color: "red" }}>{errors.salary}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          {errors.location && <p style={{ color: "red" }}>{errors.location}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="industry">Industry:</label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
          {errors.industry && <p style={{ color: "red" }}>{errors.industry}</p>}
        </div>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

// Quill modules for toolbar customization
AdminJobPost.modules = {
  toolbar: [
    [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

// Quill formats allowed in the editor
AdminJobPost.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default AdminJobPost;
