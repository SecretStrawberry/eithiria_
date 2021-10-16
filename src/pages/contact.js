import "./contact.scss";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RequestSiteForm from "../components/RequestSiteForm";
import ContactSection from "../components/ContactSection";

import Fade from "react-reveal/Fade";

import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <Header className_prop="contact_header" />
      <Fade bottom>
        <RequestSiteForm
          className_form_container="contact-form-container"
          className_request_form="contact_request_form"
          className_form_title="contact_form_title"
          className_label="form_label"
          className_send_message_btn="contact_btn"
          h2="Contact us"
          p1="If you are ready to have your website done, just use the form below to get things going."
        />

        <ContactSection />
        <Footer />
      </Fade>
    </div>
  );
}

export default Contact;
