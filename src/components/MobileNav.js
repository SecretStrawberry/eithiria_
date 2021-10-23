import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { DetectOutsideClick } from "../helpers/DetectOutsideClick";
import { IoMenuOutline } from "react-icons/io5";

import "./MobileNav.scss";

function MobileNav() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = DetectOutsideClick(dropDownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <nav className="mobile_nav">
      <div className="mobile_menu-icon_container" onClick={onClick}>
        <IoMenuOutline className="mobile_menu-icon" />
      </div>
      <ul
        className={`mobile_menu ${isActive ? "active_mob" : "inactive_mob"}`}
        ref={dropDownRef}
      >
        <li>
          <Link to="/" className="mobile_link">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/work" className="mobile_link">
            WORK
          </Link>
        </li>
        <li>
          <Link to="/about" className="mobile_link">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact" className="mobile_link">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
