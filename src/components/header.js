import React from "react";
import '../assests/css/header.css'
import Logo from "../assests/images/logo.png";

function Header() {
  return (
    <div className="header-inner">
      <div className="site-branding show-logo">
        <div className="site-logo show">
          <a
            href="http://www.futuremindz.com/"
            className="custom-logo-link"
            rel="home"
            aria-current="page"
          >
            <img
              width={184}
              height={121}
              src={Logo}
              className="custom-logo"
              alt="Futuremindz"
              decoding="async"
            />
          </a>{" "}
        </div>
      </div>
      <nav className="site-navigation show" aria-label="Main menu">
        <ul id="menu-main-menu" className="menu">
          <li
            id="menu-item-162"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-38 current_page_item menu-item-162"
          >
            <a href="http://www.futuremindz.com/" aria-current="page">
              Home
            </a>
          </li>
          <li
            id="menu-item-300"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-300"
          >
            <a href="http://www.futuremindz.com/service/">Services</a>
          </li>
          <li
            id="menu-item-164"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-164"
          >
            <a href="#">Careers</a>
            <ul className="sub-menu">
              <li
                id="menu-item-1159"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1159"
              >
                <a href="http://www.futuremindz.com/career-page/">
                  Job Seekers
                </a>
              </li>
              <li
                id="menu-item-1160"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1160"
              >
                <a href="http://www.futuremindz.com/career/">
                  Career Opportunities
                </a>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-1207"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1207"
          >
            <a href="http://www.futuremindz.com/contact-us/">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className="site-navigation-toggle-holder show">
        <button type="button" className="site-navigation-toggle">
          <span className="site-navigation-toggle-icon" />
          <span className="screen-reader-text">Menu</span>
        </button>
      </div>
      <nav
        className="site-navigation-dropdown show"
        aria-label="Mobile menu"
        aria-hidden="true"
        inert=""
      >
        <ul id="menu-main-menu-1" className="menu">
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-38 current_page_item menu-item-162">
            <a href="http://www.futuremindz.com/" aria-current="page">
              Home
            </a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-300">
            <a href="http://www.futuremindz.com/service/">Services</a>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-164">
            <a href="#">Careers</a>
            <ul className="sub-menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1159">
                <a href="http://www.futuremindz.com/career-page/">
                  Job Seekers
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1160">
                <a href="http://www.futuremindz.com/career/">
                  Career Opportunities
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1207">
            <a href="http://www.futuremindz.com/contact-us/">Contact us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
