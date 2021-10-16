import React from "react";

import "./ContactSection.scss";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section-field">
        <div className="contact-section-field-title">
          <h2>Horia Surdu</h2>
          <p>Web designer & developer</p>
        </div>
        <div className="contact-section-field-contactData">
          <p>Email: surduhori@gmail.com</p>
        </div>
      </div>
      <div className="contact-section-field">
        <div className="contact-section-field-title">
          <h2>Mihai Musat</h2>
          <p>Technology Recruiting Specialist</p>
        </div>
        <div className="contact-section-field-contactData">
          <p>Email: mihai@eithiria.com</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
