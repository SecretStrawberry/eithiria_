import "./RequestSiteForm.scss";
import "../pages/contact.scss";

import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";

init("xxxxxxxxxxx");

function RequestSiteForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  // setting useState so i can change the className of input fields if they are not vaild
  // to indicate which field needs the user attention
  const [isNameFieldValid, setNameIsfieldVlaid] = useState("input-field");
  const [isEmailFieldValid, setEmailIsfieldVlaid] = useState("input-field");
  const [isPhoneFieldValid, setPhoneIsfieldVlaid] = useState("input-field");
  const [isMessageFieldValid, setMessageIsfieldVlaid] = useState("input-field");

  // checking if email is valid
  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  // checking if phone is valid and if it has enough numbers to be a phone number
  const checkPhone = (phone) => {
    const regex = /^[+-]?\d*(?:[.,]\d*)?$/;

    const [...phoneArray] = phone;

    if (phoneArray.length >= 6) return regex.test(String(phone));
  };

  // validating if input fields have data in them
  const validateField = (name, field) => {
    !name ? field("input-error") : field("input-field");
  };

  const Submit = (e) => {
    e.preventDefault();

    if (name && email && phone && message && isValidEmail(email)) {
      const serviceId = "xxxxxxxxxxx";
      const templateId = "xxxxxxxxxxxxx";
      const userId = "xxxxxxxxxxxx";
      const templateParams = {
        name,
        email,
        phone,
        company,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCompany("");
      setEmailSent(true);
    }

    //calling validateField on submit for each input field separatly
    validateField(name, setNameIsfieldVlaid);
    validateField(isValidEmail(email), setEmailIsfieldVlaid);
    validateField(checkPhone(phone), setPhoneIsfieldVlaid);
    validateField(message, setMessageIsfieldVlaid);
  };

  return (
    <div className={`${props.className_form_container}`}>
      <div
        className={`form-title ${props.className_form_title}`}
        id="contact-page-form-title"
      >
        <h2>{props.h2}</h2>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
      </div>
      <form className={`request-form ${props.className_request_form}`}>
        <div className="credentials">
          <div className="input-fields">
            <label htmlFor="name" className={`label ${props.className_label}`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              className={isNameFieldValid}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-fields">
            <label htmlFor="email" className={`label ${props.className_label}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={isEmailFieldValid}
            />
          </div>
          <div className="input-fields">
            <label htmlFor="phone" className={`label ${props.className_label}`}>
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={isPhoneFieldValid}
            />
          </div>
          <div className="input-fields">
            <label
              htmlFor="company"
              className={`label ${props.className_label}`}
            >
              Company / Organisation (if any)
            </label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="input-field"
            />
          </div>
        </div>
        <div className="textarea-fields">
          <label htmlFor="message" className={`label ${props.className_label}`}>
            Message
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={isMessageFieldValid}
          ></textarea>
        </div>
        <button
          className={`send-message-btn ${props.className_send_message_btn}`}
          onClick={Submit}
        >
          Send Message
        </button>
        <span className={emailSent ? "visible" : "invisible"}>
          Thank you for your message, we will be in touch in no time!
        </span>
      </form>
    </div>
  );
}
export default RequestSiteForm;
