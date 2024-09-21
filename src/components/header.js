import React from "react";
import '../assests/css/ProjectStyles.css'
import Logo from "../assests/images/logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              alt="Futuremindz"
              height={118}
              width={121}
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {" "}
              {/* Aligns links to the right */}
              <a className="nav-link " href="/">
                Home
              </a>
              <a className="nav-link" href="/service">
                Services
              </a>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Careers
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/career-page">
                      Job Seekers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/career">
                      Career Opportunities
                    </a>
                  </li>
                </ul>
              </div>
              <a className="nav-link" href="/contact-us" target="_self">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Header;
