import React from "react";
import "../assests/css/service.css";
import Logo from "../assests/images/FuturemindzLogo.svg";
import Datascience from "../assests/images/datascience.jpg";
import AWSImg from "../assests/images/AWS.png";
import Workday from "../assests/images/workday.png";
import PythonImg from "../assests/images/python.jpg";
import DevopsImg from "../assests/images/devops.jpg";
import BusinessAnalyst from "../assests/images/Business_Analyst.jpg";
import SalesforceImg from "../assests/images/salesforce.png";
import JavaImg from "../assests/images/java.jpg";

function service() {
  return (
    <>
      <h1>SERVICES</h1>
      <div className="service">
        <img src={Workday} alt="Workday" />
        <div>
          <h1>WORKDAY</h1>
          <p>
            Futuremindz consultants are proven industry experts who can bring
            best practices knowledge and subject matter expertise to your
            full-cycle Workday Implementation or post-production support
            projects. Most of them have worked in multiple successful
            implementation projects for various Workday HCM and Financial
            modules. Trust us with your Workday needs today!
          </p>
        </div>
      </div>
      <div className="service">
        <img src={AWSImg} alt="AWS" />
        <div>
          <h1>AWS</h1>
          <p>
            Amazon Web Services (AWS) is a cloud-based platform that provides
            businesses across a wide range of industries with the tools for data
            storage, migration, analytics and management. AWS provides superior
            scalability, cost-effectiveness and top-notch information security.
            Our consultants bring with them years of proven software expertise,
            certification and the discipline to deploy an AWS project to
            successful completion and maintenance.
          </p>
        </div>
      </div>
      <div className="service">
        <img src={Datascience} alt="Data Science" />
        <div>
          <h1>Data Science</h1>
          <p>
            The demand for data practitioners has increased exponentially in the
            last decade. Data scientists are widely regarded as huge assets to
            any organization. Our consultants have knowledge and expertise in
            drawing actionable metrics from vast amounts of data. You can rely
            on us to redefine your organization’s data needs.
          </p>
        </div>
      </div>
      <div className="service">
        <img src={PythonImg} alt="Python" />
        <div>
          <h1>Python</h1>
          <p>
            Our consultants are the ultimate industry experts who can help you
            with all your Python programming needs. With Futuremindz, we’ll
            provide you a dedicated team of experts for your project. They’ll
            work with you through consultation, development, reporting, delivery
            and updates to ensure that your project remains scalable and easy to
            use.
          </p>
        </div>
      </div>
      <div className="service">
        <img src={DevopsImg} alt="DevOps" />
        <div>
          <h1>DevOps</h1>
          <p>
            The demand for data practitioners has increased exponentially in the
            last decade. Data scientists are widely regarded as huge assets to
            any organization. Our consultants have knowledge and expertise in
            drawing actionable metrics from vast amounts of data. You can rely
            on us to redefine your organization’s data needs.
          </p>
        </div>
      </div>
      <div className="service">
        <img src={BusinessAnalyst} alt="Business Analysis" />
        <div>
          <h1>Business Analysis</h1>
          <p>
            Our team has skilled Business Analysts well versed in the IIBA
            BABOK. They also have industry specializations in healthcare,
            pharmacy, financial and insurance services. Our Business Analysts
            are skilled in core Business Analysis Architecture and design
            disciplines who work with you to understand and define your business
            goals to derive meaningful requirements to further your corporate
            strategy.
          </p>
        </div>
      </div>
      <div className="service">
        <img src={SalesforceImg} alt="Salesforce" />
        <div>
          <h1>Salesforce</h1>
          <p>
            Our Salesforce admins and developers are certified and industry
            proven – guaranteed to take any Salesforce challenge and turn it
            into a success story!
          </p>
        </div>
      </div>
      <div className="service">
        <img src={JavaImg} alt="Java" />
        <div>
          <h1>Java</h1>
          <p>
            Our consultants are able to analyze and design scalable Java
            applications. We help organizations deliver their applications on
            time, every time! Our developers and architects come with
            unparalleled expertise and are the best in class!
          </p>
        </div>
      </div>
      <div className="Find-top">
      <h1>
      Find a top-quality, specialized consultant today.
      </h1>
      <button>Contact Us</button>
      </div>
     
    </>
  );
}

export default service;
