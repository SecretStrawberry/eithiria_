import React from "react";

import { Link } from "react-router-dom";

import FooterNavigation from "./FooterNavigation";
import logo from "../images/logo-v1.png";

import SocialMediaLinks from "./SocialMediaLinks";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="upper-container">
        <Link to="/">
          <img src={logo} alt="ethiria logo" className="logo" />
        </Link>
        <FooterNavigation />
      </div>
      <hr className="horizontal-rule" />
      <div className="lower-container">
        <SocialMediaLinks />
        <p>We are on the Web. A totally online company.</p>
      </div>
    </footer>
  );
}

export default Footer;
