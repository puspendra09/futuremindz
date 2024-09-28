import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../assests/css/jobPost.css"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminJobPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    salary: "",
    location: "",
    industry: "",
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);

  // Check user authentication
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      navigate("/admin");
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle rich text editor changes
  const handleEditorChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Job title is required";
    if (!formData.company) newErrors.company = "Company name is required";
    if (!formData.description || formData.description === "<p><br></p>") {
      newErrors.description = "Job description is required";
    }
    if (!formData.salary) newErrors.salary = "Salary is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.industry) newErrors.industry = "Industry is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const formErrors = validate();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Stop further execution if there are errors
    }

    try {
      // Make API call to post job
      await axios.post("https://futuremindz.com/api/jobs", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Clear errors and show success message
      setErrors({});
      setError(null);
      alert("Job posted successfully!");
      window.location.reload();
      setFormData({
        title: "",
        company: "",
        description: "",
        salary: "",
        location: "",
        industry: "",
      });
      
    } catch (err) {
      // Handle error from API call
      setError(err.response?.data?.message || err.message || "An error occurred while posting the job.");
    }
  };

  return (
    <div className="mainAdminPost">
      <h2>Post a Job</h2>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
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
          <label htmlFor="description">Job Description:</label>
          <ReactQuill
            value={formData.description}
            onChange={handleEditorChange}
            modules={AdminJobPost.modules}
            formats={AdminJobPost.formats}
            placeholder="Enter job description here..."
          />
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description}</p>
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
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

// Quill formats allowed in the editor
AdminJobPost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default AdminJobPost;