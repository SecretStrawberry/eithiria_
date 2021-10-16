import React from "react";
import "./Navigation.scss";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  //////////////////////////////////////////////////////
  // need to toggle together if i click on a link, that link need to have red line,
  // if i click another link this new link has a red line and the previous link dose not have a red line
  // NEED TO MAKE A FUNCTION FOR ONCLICK
  ///////////////////////////

  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink className="main-navigation-link" to="/work">
            WORK
          </NavLink>
        </li>
        <li>
          <NavLink className="main-navigation-link" to="/jobs">
            JOBS
          </NavLink>
        </li>
        <li>
          <NavLink className="main-navigation-link" to="/about">
            ABOUT
          </NavLink>
        </li>
        <li>
          <Link className="main-navigation-contact" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
