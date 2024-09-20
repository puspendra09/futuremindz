import React from "react";
import "../assests/css/ProjectStyles.css";
import Logo from "../assests/images/FuturemindzLogo.svg";
import Homepage from "../assests/images/Homepage.png";
import Spotlight from "../assests/images/technologySpotlight.png"

function home() {
  return (
    <>
      <main>
        <section>
          <h1>FUTUREMINDZ</h1>
          <h1></h1>
          <h5>Visualize. Transform. Succeed.</h5>
          <button>
            <a href="/contact-us" target="_self">
              Learn More
            </a>
          </button>
        </section>
        <section id="img-section">
          <img
            className="section1_img"
            src={Homepage}
            alt="Responsive Design Example"
            loading="lazy"
          />
        </section>
      </main>
      <main className="">
        <section id="home-section">
          <div className="homepage-container">
            {/* Embed your current homepage content here */}
            <h1>Welcome to FutureMindz</h1>
            <p>Your partner in IT Consulting and Digital Transformation.</p>
            <button>Explore Our Services</button>
          </div>
        </section>
        <section className="content-section">
          <div className="divider-about">
            <span className="divider-about-separator" />
            <h2 style={{ fontWeight: "bolder" }}>About Us</h2>
          </div>
          <div className="description">
            <p>
              FutureMindz LLC is an IT Consulting Services company established
              in 2016. We specialize in providing scalable implementation and
              production support services to support Enterprise Resource
              Planning (ERP) adoption projects in mid-level to large
              organizations. Headquartered in New Jersey, our team drives
              digital transformation for companies nationwide in the United
              States through partnerships with prime vendors. Need more
              information? Please don’t hesitate to contact us and set up an
              exploratory call to identify how our consulting services can help
              your business needs.
            </p>
          </div>
          <button>Learn More</button>
        </section>
      </main>
      <main className="Technology-Spotlight">
        <section className="content-section">
          <div className="divider">
            <span className="divider-separator" />
            <h4 style={{ fontWeight: "bolder" }}>TECHNOLOGY SPOTLIGHT</h4>
          </div>
          <div className="description">
            <h5>
              In addition to ERP adoption, we also provide consulting services
              by experienced professionals in Data Analytics, Cybersecurity,
              Software Development and Testing and AWS. Our full cycle services
              delivered by top-notch experts are laser focused on scalability,
              configuration, information security, and maintainability in all
              enterprise software application projects.
            </h5>
          </div>
          <div className="checkbox-container">
            <div className="checkbox-group">
              <label className="mylabel">
                <input type="checkbox" disabled="" />
                WORKDAY
              </label>
              <label className="mylabel">
                <input type="checkbox" disabled="" />
                AWS
              </label>
              <label className="mylabel">
                <input type="checkbox" disabled="" />
                DATA SCIENCE
              </label>
              <label className="mylabel">
                <input type="checkbox" disabled="" />
                PYTHON
              </label>
              <label className="mylabel">
                <input type="checkbox" disabled="" />
                DEVOPS
              </label>
            </div>
            <div className="checkbox-group">
              <label className="mylabel">
                <input type="checkbox" disabled="" />
                BUSINESS ANALYSIS
              </label>
              <label className="mylabel">
                <input type="checkbox" disabled="" />
                SALESFORCE
              </label>
              <label className="mylabel">
                <input type="checkbox" disabled="" />
                JAVA
              </label>
            </div>
          </div>
        </section>
        <section id="img-section">
          <img
            src={Spotlight}
            alt="Responsive Design Example"
            loading="lazy"
          />
        </section>
      </main>
    </>
  );
}

export default home;
