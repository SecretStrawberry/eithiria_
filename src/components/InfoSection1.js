import React from "react";
import "./InfoSection.scss";
import design from "../images/pic1.svg";
import Fade from "react-reveal/Fade";

function InfoSection1() {
  return (
    <>
      <Fade bottom>
        <section className="info-section info-section-media">
          <img
            src={design}
            alt="responsive design"
            width={"40%"}
            className="info-section-img1"
          />
          <div className="info-section-text">
            <h2>Responsive design</h2>
            <p>
              Being present on every device is important. We make your website
              look good on mobile devices, so your reach is wider.
            </p>
          </div>
        </section>
      </Fade>
    </>
  );
}

export default InfoSection1;
