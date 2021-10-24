import React from "react";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../components/SocialMediaLinks";

import "./PeopleCards.scss";
// import peoplePic from "../images/horia.jpg";

function PeopleCards(props) {
  return (
    <div className="card-container-flip">
      <div className={`card-front card-front-${props.card_image}`}>
        <h2>
          {props.frontTitle} <br />
          <span>{props.frontSubtitle}</span>
        </h2>
      </div>
      <div className="card-backside">
        <div className="card-backside-title">
          <h2>{props.backsideTitle}</h2>
          <p>{props.backsideSubtitle}</p>
        </div>
        <p>{props.backsideParagraph}</p>
        <div className="card-contact">
          <Link to="#" className="card-link">
            {props.backsideEmail}
          </Link>
          <SocialMediaLinks className_socialIcon="icon_card" />
        </div>
      </div>
    </div>
  );
}

export default PeopleCards;
