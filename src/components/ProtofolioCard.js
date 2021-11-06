import React from "react";

import "./PortofolioCard.scss";

function PortofolioCard(props) {
  return (
    <a
      href="https://secretstrawberry.netlify.app/"
      target="_blank"
      rel="noreferrer"
      className="portofolioLink"
    >
      <div className={`portofolio_card ${props.className_portofolioCardRight}`}>
        <div className={`portofolio_card-text ${props.className_cardText}`}>
          <div className="portofolio_card-text-title">
            <h1>{props.cardTitle}</h1>
            <p>{props.cardTitleParagraph}</p>
          </div>
          <div className="portofolio_card-text-body">
            <p>{props.textBody_p1}</p>
            <br />
            <p>{props.textBody_p2}</p>
            <br />
            <p>{props.textBody_p3}</p>
            <br />
            <p>{props.textBody_p4}</p>
          </div>
        </div>
        <div className={`portofolio_card-image1 ${props.className_cardImage}`}>
          <img src={props.image} alt="Secret Starwberry site" />
        </div>
        <div
          class={`portofolio_card-responsive-image ${props.className_cardImageResponsive}`}
        >
          <img src={props.mobileImage} alt="strawberry mobile" />
        </div>
      </div>
    </a>
  );
}
export default PortofolioCard;
