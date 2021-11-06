import React from "react";

import { Link } from "react-router-dom";

import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";

import "./SocialMediaLinks.scss";

function SocialMediaLinks(props) {
  return (
    <>
      <ul className={`social_links ${props.className_contactLink_pos}`}>
        <li>
          <a
            href="https://www.facebook.com/Eithiria/"
            rel="noreferrer"
            target="_blank"
            className="social-link"
          >
            <ImFacebook
              className={`social-icon social-link-icon-facebook ${props.className_socialIcon}`}
            />
          </a>
        </li>
        <li>
          <Link to="#" className="social-link">
            <ImTwitter
              className={`social-icon social-link-icon-twitter ${props.className_socialIcon}`}
            />
          </Link>
        </li>
        <li>
          <Link to="#" className="social-link">
            <ImLinkedin2
              className={`social-icon social-link-icon-linkedin ${props.className_socialIcon}`}
            />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default SocialMediaLinks;
