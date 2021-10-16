import React from "react";
import { Link } from "react-router-dom";
import "./CallToAction.scss";
import start from "../images/start.svg";

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="call-to-action-container">
        <div className="call-to-action-title">
          <h1>Are you ready to start your new awesome site?</h1>
          <p>
            Take the first step towards the next chapter of your buisiness and
            write us a few words about what you do, and we will reach out to get
            your project started.
          </p>
          <Link
            className="main-navigation-contact call-to-action-btn"
            to="/contact"
          >
            Contact
          </Link>
        </div>

        <img src={start} alt="laptop" width={"45%"} />
      </div>
    </section>
  );
}

export default CallToAction;
