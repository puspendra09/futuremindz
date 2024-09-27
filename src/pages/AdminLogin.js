// src/Login.js
import React, { useState } from "react";
import "../assests/css/login.css"; // Create this CSS file for styling
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (email && !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email is invalid";
    if (password && password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (email === "admin@futuremindz.com" && password === "admin@123") {
        setErrorMessage("");
        navigate("/admin/job-post");
        localStorage.setItem("userEmail", email);
      } else {
        setErrorMessage("Invalid username and password");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
