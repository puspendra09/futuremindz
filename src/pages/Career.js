import React, { useState, useEffect } from "react";
import "../assests/css/carrer.css";
import { useNavigate } from "react-router-dom";
import jobsData from "../assests/json/jobs.json";
import jobImage from "../assests/images/job.png";
import axios from "axios";

function Career() {
  const navigate = useNavigate();
  const [sortedJobs, setSortedJobs] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null); // New state for location

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const response = await axios.get("https://futuremindz.com/api/jobs");
    if (response.status === 200) {
      setSortedJobs(response?.data);
    }
  };

  function sortJobs(criteria) {
    let sortedArray = [...sortedJobs];
    if (criteria === "listDateAsc") {
      sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (criteria === "lastUpdateDesc") {
      sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === "listingId") {
      sortedArray.sort((a, b) => a.id - b.id);
    }
    setSortedJobs(sortedArray);
  }

  function filterByIndustry(industry) {
    setSelectedIndustry(industry);
    setSelectedLocation(null); // Reset location when filtering by industry
    const filteredJobs = sortedJobs.filter((job) => job.industry === industry);
    setSortedJobs(filteredJobs);
  }

  function filterByLocation(location) {
    setSelectedLocation(location);
    setSelectedIndustry(null); // Reset industry when filtering by location
    const filteredJobs = sortedJobs.filter((job) => job.location === location);
    setSortedJobs(filteredJobs);
  }

  return (
    <>
      <h1 className="text-center title">Join Us</h1>
      <div className="job-container-toggle">
        <div className="button-container">
          <button onClick={() => sortJobs("listDateAsc")}>List Date</button>
          <button onClick={() => sortJobs("lastUpdateDesc")}>
            Last Update
          </button>
          <button onClick={() => sortJobs("listingId")}>Listing ID</button>
        </div>
      </div>

      {selectedIndustry && (
        <h2 className="text-center">{`Jobs in ${selectedIndustry}`}</h2>
      )}
      {selectedLocation && (
        <h2 className="text-center">{`Jobs in ${selectedLocation}`}</h2>
      )}

      <div className="center-container">
        <div className="job-listing">
          {sortedJobs && sortedJobs.length > 0 ? (
            sortedJobs.map((job, index) => (
              <div className="job-container" key={index}>
                <span className="dummy-photo">
                  {job.image ? (
                    <img src={`/images/${job.image}`} alt="Profile Photo" />
                  ) : (
                    <img src={jobImage} alt="Profile Photo" />
                  )}
                </span>
                <div className="service-flex">
                  <div
                    className="position-title"
                    onClick={() => navigate(`/listings/${job.alias}`)}
                  >
                    {job.title}
                  </div>
                  <div className="details">{job.shortDescription}</div>
                  <div className="d-flex align-items-center">
                    {job.salary && (
                      <div className="salary-tag">{job.salary}</div>
                    )}
                    <div
                      className="profession-tag"
                      onClick={() => filterByIndustry(job.industry)}
                      style={{ cursor: "pointer" }}
                    >
                      {job.industry}
                    </div>
                  </div>
                  <div
                    className="location-tag"
                    onClick={() => filterByLocation(job.location)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginTop: "20px",
                    }}
                  >
                    {job.location}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No job listings available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Career;
