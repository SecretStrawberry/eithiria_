import React from "react";
import "./FooterNavigation.scss";
import { Link } from "react-router-dom";

function FooterNavigation() {
  return (
    <nav className="footer-nav">
      <ul>
        <li>
          <Link to="/work" className="footer-link">
            Work
          </Link>
        </li>
        <li>
          <Link to="/about" className="footer-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNavigation;
