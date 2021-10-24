import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { DetectOutsideClick } from "../helpers/DetectOutsideClick";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import "./MobileNav.scss";

function MobileNav() {
  const dropDownRef = useRef(null);

  // toggleing the icons on mobile to be active or inactive
  const closeIconRef = useRef(null);
  const [closeIcon, setCloseIcon] = useState(false);
  const closeToggle = () => setCloseIcon(!closeIcon);

  // toggleing the menu
  const [isActive, setIsActive] = DetectOutsideClick(dropDownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <nav className="mobile_nav">
      <div className="mobile_menu-icon_container">
        <IoMenuOutline onClick={onClick} className="mobile-icon-active" />
      </div>
      <ul
        className={`mobile_menu ${isActive ? "active_mob" : "inactive_mob"}`}
        ref={dropDownRef}
      >
        <IoCloseOutline
          onClick={(closeToggle, onClick)}
          className={`${
            closeIcon
              ? "mobile-icon-close-inactive"
              : "mobile-icon-close-active"
          }`}
          ref={closeIconRef}
        />
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
