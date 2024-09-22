import React from "react";
import "../assests/css/carrer.css";
import Datascience from "../assests/images/datascience.jpg";
import JavaImg from "../assests/images/java.jpg";
import Workday from "../assests/images/workday.png";
import PythonImg from "../assests/images/python.jpg";
import SalesforceImg from "../assests/images/salesforce.png";

function Career() {
  function toggleJobs(group) {
    const jobGroups = document.querySelectorAll(".job-listing");
    jobGroups.forEach((g) => (g.style.display = "none")); // Hide all groups
    document.getElementById(group).style.display = "block"; // Show selected group
  }

  return (
    <>
      <h1 className="text-center title">Join Us</h1>
      <div className="job-container-toggle">
        <div className="button-container">
          <button onclick="toggleJobs('group1')">List Date</button>
          <button onclick="toggleJobs('group2')">Last Update</button>
          <button onclick="toggleJobs('group3')">Listing ID</button>
        </div>
      </div>
      <div className="center-container">
        <div id="group1" className="job-listing" style={{ display: "block" }}>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={Datascience} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">NETWORK ENGINEER</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Florida
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> London
                </span>
              </div>
            </div>
          </div>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={JavaImg} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">NETWORK ENGINEER</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Los
                  Angeles
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Madrid
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> New York
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Paris
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Rome
                </span>
              </div>
            </div>
          </div>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={Workday} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">DATABASE ADMINISTRATORS</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Florida
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> London
                </span>
              </div>
            </div>
          </div>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={PythonImg} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">SOFTWARE ENGINEER</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Florida
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> London
                </span>
              </div>
            </div>
          </div>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={SalesforceImg} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">
                Software Developer – Paramus, NJ and various unanticipated US
                locations
              </div>
              <div className="details">
                Job Overview: Design/develop software systems using
                UNIX/SQL/Oracle/PLSQL/Java/C# etc. Testing/validation and
                programming. Travel/relocate ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$142,563</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> NJ
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="group2" className="job-listing">
          <div className="job-container">
            <span className="dummy-photo">
              <img src={Workday} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">NETWORK ENGINEER</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Florida
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> London
                </span>
              </div>
            </div>
          </div>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={PythonImg} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">SOFTWARE ENGINEER</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Florida
                </span>
              </div>
            </div>
          </div>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={JavaImg} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">NETWORK ENGINEER</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Los
                  Angeles
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Madrid
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> New York
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Paris
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Rome
                </span>
              </div>
            </div>
          </div>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={SalesforceImg} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">DATABASE ADMINISTRATORS</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Florida
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> London
                </span>
              </div>
            </div>
          </div>
          <div className="job-container">
            <span className="dummy-photo">
              <img src={PythonImg} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">
                Software Developer – Paramus, NJ and various unanticipated US
                locations
              </div>
              <div className="details">
                Job Overview: Design/develop software systems using
                UNIX/SQL/Oracle/PLSQL/Java/C# etc. Testing/validation and
                programming. Travel/relocate ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$142,563</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> NJ
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="group3" className="job-listing">
          <div className="job-container">
            <span className="dummy-photo">
              <img src={SalesforceImg} alt="Profile Photo" />
            </span>
            <div className="service-flex">
              <div className="position-title">SOFTWARE ENGINEER</div>
              <div className="details">
                Design, Install and configure LAN, WAN management, Internet and
                network security and ...
              </div>
              <div className="d-flex align-items-center">
                <div className="salary-tag">$3,222 - $3,222</div>
                <div className="profession-tag">IT</div>
              </div>
              <div className="details">
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> Florida
                </span>
                <span>
                  <i className="fas fa-map-marker-alt location-icon" /> London
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
