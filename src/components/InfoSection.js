import React from "react";
import "./InfoSection.scss";
import design from "../images/resposive_design.svg";
import Fade from "react-reveal/Fade";

function InfoSection() {
  return (
    <>
      <Fade bottom>
        <section className="info-section">
          <div className="info-section-text">
            <h2>Your website done the right way</h2>
            <p>
              Whether you are starting from scratch or redoing an existing site,
              we will not cut corners or use generic templates. We will design
              your website with a great user experience that takes your brand
              and business to the next level.
            </p>
          </div>

          <img
            src={design}
            alt="responsive design"
            // width={"45%"}
            className="info-section-img"
          />
        </section>
      </Fade>
    </>
  );
}

export default InfoSection;
