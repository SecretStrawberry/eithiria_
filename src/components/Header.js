import React from "react";
import Navigation from "./Navigation";
import "./Header.scss";
import { Link } from "react-router-dom";
// import logo from "../images/logoEithiria1.png";
// import logo2 from "../images/logoEithiria2.png";
// import logo3 from "../images/logoEithiria3.png";
// import logo4 from "../images/logoEithiria4.png";
// import logo5 from "../images/logoEithiria5.png";
// import logo6 from "../images/logoEithiria6.png";
import logo from "../images/logo-v1.png";

function Header(props) {
  return (
    // passing as a prop className_prop so i can pass
    // another className from the scss file that i am calling the component from
    <header className={`header ${props.className_prop}`}>
      <Link to="/">
        <img src={logo} alt="Eithiria logo" className="logo" />
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
