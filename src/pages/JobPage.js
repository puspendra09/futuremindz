import React from "react";
import { useParams } from "react-router-dom";
import "../assests/css/carrer.css";
import { useNavigate } from "react-router-dom";
import jobsData from "../assests/json/jobs.json";

function JobPage() {
  const { alias } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find((job) => job.alias === alias);

  const handleClick = () => {
    navigate("/career-page", { state: { job } });
  };

  return (
    <div className="mainjobPage">
      <h2>{job?.title}</h2>
      <div
        className="profession-tag"
        style={{ display: "inline-block", marginTop: 10 }}
      >
        <p>{job.industry}</p>
      </div>
      <br />
      <div
        className="salary-tag"
        style={{ display: "inline-block", margin: "20px 0px" }}
      >
        <p>{job.salary}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
      <button className="applyBtn" onClick={handleClick}>
        Apply Now
      </button>
    </div>
  );
}

export default JobPage;
