import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="parent-footer">
        <div className="child child1">
          <h1>Lets Get Social</h1>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="child child2">
          <h4>Sign up for our newsletter</h4>
          <input type="text" placeholder="Email Addresh*" />
          <button className="btn">SUBSCRIBE</button>
        </div>
        <div className="child child3">
          <div className="footer-child-3">
            <h3>Support</h3>
            <ul>
              <li>
                <Link to="/warranty-Check">Warranty Check</Link>
              </li>
              <li>
                <Link to="/help-center">Help center</Link>
              </li>
              <li>
                <Link to="/download-center">Download Center</Link>
              </li>
              <li>
                <Link to="/service-Request">Service Request</Link>
              </li>
            </ul>
          </div>
          <div className="footer-child-3">
            <h3>Get to know us</h3>
            <ul>
              <li>
                <Link to="/headlines">Headlines</Link>
              </li>
              <li>
                <Link to="/insights">Insights</Link>
              </li>
              <li>
                <Link to="/company">Company</Link>
              </li>
            </ul>
          </div>
          <div className="footer-child-3">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="#">Contact-Us</Link>
              </li>
              <li>
                <Link to="#">Privacy-Policy</Link>
              </li>
              <li>
                <Link to="#">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="footer-child-3">
            <h3>Latest Blogs</h3>
            <ul>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="#">Contact-Us</Link>
              </li>
              <li>
                <Link to="#">Privacy-Policy</Link>
              </li>
              <li>
                <Link to="#">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="parent-footer2">
        <div className="footer-child">
          <ul>
            <li><a href=""><i class="fa-solid fa-users"></i>Join Us</a></li>
            <li><a href=""><i class="fa-solid fa-magnifying-glass-location"></i>Partner</a></li>
            <li><a href=""><i class="fa-solid fa-circle-info"></i>Help center</a></li>
          </ul>
        </div>
        <div className="footer-child footer-child-1">
          <p>Copyright © 2024 DeltaView Technologies Pvt Ltd. All Rights Reserved.</p>
        </div>
        <div className="footer-child footer-child-2">
          <p>For queries contact us: DeltaView Technologies Pvt Ltd. Head Office: SCO-38, 3rd <br />Floor, Old Judicial Complex Civil Lines Rd, Civil Lines, Gurugram, Haryana - 122001</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
