import React from "react";
import "./InfoSection.scss";
import design from "../images/server.svg";
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
            <h2>
              We offer deployment guidance
              {/* Easy deployment solutions */}
            </h2>
            <p>
              We can guide you to a variety of hosting solutions, that perfectly
              match your website needs.
              {/* We offer a variety of hosting solutions, that perfectly match your
              website needs. */}
            </p>
          </div>
        </section>
      </Fade>
    </>
  );
}

export default InfoSection1;
