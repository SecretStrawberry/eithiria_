import React from "react";

import "./ContactSection.scss";

import SocialMediaLinks from "./SocialMediaLinks";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section-field">
        <div className="contact-section-field-title">
          <h2>Contact us</h2>
        </div>
        <hr />
        <div className="contact-section-field-contactData">
          <p>455 74 975</p>
          <p>welcome@eithiria.com</p>
        </div>
      </div>
      <div className="contact-section-field">
        <div className="contact-section-field-title">
          <h2>Folow us</h2>
        </div>
        <hr />
        <div className="contact-section-field-contactData">
          <SocialMediaLinks
            className_socialIcon="contact_media-icon"
            className_contactLink_pos="contact-links"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
