import React from "react";
import "../assests/css/carrer-page.css";
import Logo from "../assests/images/FuturemindzLogo.svg";

function CareerPage() {
  return (
    <>
      <div className="container">
        <h1 className="career-header">
          <p>
            Whether you are a seasoned professional or a new graduate, we
            definitely have existing and upcoming projects to pique your
            interest. Get in touch with one of our recruiters today to find out
            more.
          </p>
        </h1>
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
            <p>
              For visa holders, our in-house legal team ensures that you are
              always in compliance with US guidelines on immigration and labor.
            </p>
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
              for growth, please scroll through our Career Opportunities page to
              find out more about our current job openings. We definitely have
              existing and upcoming projects to pique your interest.
            </p>
          </div>
        </div>
        <h5 className="upload-header">Upload Your Resume</h5>
        <form className="job-seeker-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
              required=""
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email ID"
              required=""
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Phone No"
              required=""
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              className="form-control"
              rows={3}
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              id="resume"
              className="form-control file-input"
              accept=".pdf,.doc,.docx"
              required=""
            />
            <small className="form-text text-muted">No file chosen</small>
            {/* "No file chosen" text */}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CareerPage;
