import React from "react";
import "./Footer.scss";
import Case from "./icons/briefcase_white.svg";
import soc1 from "./icons/social1.svg" ;
import soc2 from "./icons/social2.svg";
import soc3 from "./icons/social3.svg";
import soc4 from "./icons/social4.svg";

const Footer = () => (
    <div className="footers">
  <footer className="footer">
    <div className="footer-info">
    <div className="footer-section">
        <div className="title-icon">
            <img src={Case} alt="" />
            <h3 className="footer-title">Jobpilot</h3>
        </div>
      <p>Call now: (319) 555-0115</p>
      <p>6381 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
    </div>

    <div className="footer-section">
      <h3 className="footer-title">Quick Link</h3>
      <ul>
        <li><a href="#!">About</a></li>
        <li><a href="#!">Contact</a></li>
        <li><a href="#!">Pricing</a></li>
        <li><a href="#!">Blog</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3 className="footer-title">Candidate</h3>
      <ul>
        <li><a href="#!">Browse Jobs</a></li>
        <li><a href="#!">Browse Employers</a></li>
        <li><a href="#!">Candidate Dashboard</a></li>
        <li><a href="#!">Saved Jobs</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3 className="footer-title">Employers</h3>
      <ul>
        <li><a href="#!">Post a Job</a></li>
        <li><a href="#!">Browse Candidates</a></li>
        <li><a href="#!">Employers Dashboard</a></li>
        <li><a href="#!">Applications</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3 className="footer-title">Support</h3>
      <ul>
        <li><a href="#!">FAQs</a></li>
        <li><a href="#!">Privacy Policy</a></li>
        <li><a href="#!">Terms & Conditions</a></li>
      </ul>
    </div>
    </div>
    <div className="footer-icons">
        <div className="terms">
            <p>© 2021 Jobpilot - Job Portal. All rights reserved</p>
        </div>
        <div className="icon_social">
            <img src={soc1} alt="" />
            <img src={soc2} alt="" />
            <img src={soc3} alt="" />
            <img src={soc4} alt="" />
        </div>
    </div>
  </footer>
  </div>
);

export default Footer;