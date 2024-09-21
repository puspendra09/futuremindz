import React from "react";
import "../assests/css/ProjectStyles.css";
import { useNavigate } from "react-router-dom";
import Homepage from "../assests/images/Homepage.png";
import Homeround from "../assests/images/Ellipse-85.png";
import HomeDot from "../assests/images/Dot.png";
import AboutBG from "../assests/images/About-BG.png";
import Spotlight from "../assests/images/technologySpotlight.png";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <main className="futureminds">
        <section className="futureminds-button">
          <h1>FUTUREMINDZ</h1>
          <h5>Visualize. Transform. Succeed.</h5>
          <button onClick={() => navigate('contact-us')}>Learn More</button>
        </section>
        <section className="futureminds-images">
          <img
            className="section1_img"
            src={Homepage}
            alt="Responsive Design Example"
            loading="lazy"
          />
          <img
            className="round"
            src={Homeround}
            alt="Responsive Design Example"
            loading="lazy"
          />
          <img
            className="round Dot-images"
            src={HomeDot}
            alt="Responsive Design Example"
            loading="lazy"
          />
        </section>
      </main>
      <main className="about-main">
        <section className="about-main-img">
          <img
            className="round Dot-images"
            src={AboutBG}
            alt="Responsive Design Example"
            loading="lazy"
          />
        </section>
        <section className="content-section">
          <div className="elementor-element-populated">
            <div className="divider-about">
              <div className="elementor-divider-separator"></div>
              <h2> About Us</h2>
            </div>
            <div className="description">
              <p>
                FutureMindz LLC is a IT Consulting Services company established
                in 2016. We specialize in providing scalable Implementation and
                Production support services to support Enterprise Resource
                Planning (ERP) adoption projects in mid-level to large
                organizations.
              </p>
              <p>
                Headquartered in New Jersey, our team drives digital
                transformation for companies nationwide in the United States
                through partnerships with prime vendors.
              </p>
              <p>
                Need more information? Please don’t hesitate to contact us and
                set up an exploratory call to identify how our consulting
                services can help your business needs.
              </p>
            </div>
            <button onClick={() => navigate("/contact-us")}>Learn More</button>
          </div>
        </section>
      </main>
      <main className="Technology-Spotlight">
        <section className="Technology-Spotlight-data">
          <div className="divider">
            <span className="divider-separator" />
            <h4>TECHNOLOGY SPOTLIGHT</h4>
          </div>
          <div className="description1">
            <p>
              In addition to ERP adoption, we also provide consulting services
              by experienced professionals in Data Analytics, Cybersecurity,
              Software Development and Testing and AWS. Our full cycle services
              delivered by top-notch experts are laser focused on scalability,
              configuration, information security, and maintainability in all
              enterprise software application projects.
            </p>
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
        <section className="Technology-Spotlight-img">
          <img src={Spotlight} alt="Responsive Design Example" loading="lazy" />
        </section>
      </main>
    </>
  );
}

export default Home;
