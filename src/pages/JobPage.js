import React from "react";
import { useParams } from "react-router-dom";
import "../assests/css/carrer.css";
import jobsData from "../assests/json/jobs.json";

function JobPage() {
  const { alias } = useParams();
  const job = jobsData.find((job) => job.alias === alias);

  return (
    <div className="mainjobPage">
      <h2>{job.title}</h2>
      <div className="profession-tag" style={{ display: "inline-block", marginTop: 10 }}>
        <p>{job.industry}</p>
      </div>
      <br />
      <div className="salary-tag" style={{ display: "inline-block", margin: "20px 0px" }}>
        <p>{job.salary}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
      <button className="applyBtn">Apply Now</button>
    </div>
  );
}

export default JobPage;
