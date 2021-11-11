import React from "react";

import { Breakpoint } from "react-socks";

import "./about.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PeopleCards from "../components/PeopleCards";
import CallToAction from "../components/CallToAction";

import responsive from "../images/resposive_design.svg";

import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="about">
      <Header className_prop="about_header" />
      <div className="about-content">
        <Fade bottom>
          <div className="about-hero">
            <div className="about-hero-title">
              <h1>Our web developers</h1>
              <p>
                We are small in number, but our dedication is absolute and our
                expertise is vast.
              </p>
            </div>
            <div className="about-hero-content">
              <p>
                Just great websites that work. Every business needs a quality
                web presence that doesn't need to be flamboyant or extravagant,
                just well built and written to carry out its intended purpose:
                to win over customers.
              </p>

              <img
                src={responsive}
                alt="responsive design"
                className="about-hero-content-img"
              />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="card-container">
            <PeopleCards
              frontTitle="Horia Surdu"
              frontSubtitle="Web designer & developer"
              backsideTitle="Horia Surdu"
              backsideSubtitle="CEO, Designer and developer"
              backsideParagraph="I am a self tought web developer and web designer. I build websites
          with passion, this gives me the power to provide exceptional
          experiences for you and your customers."
              backsideEmail="horia@eithiria.com"
              card_image="horia-image"
            />
            <PeopleCards
              frontTitle="Mihai Musat"
              frontSubtitle="IT Recruitment Partner & web designer"
              backsideTitle="Mihai Musat"
              backsideSubtitle="CEO, Designer & IT Recruitment Partner"
              backsideParagraph="Human Resources Business
                                 Partner successful at planning business
                                 strategies, integrating policies and improving 
                                 performance. Focused on implementing 
                                 updates to increase employee morale, business efficiency and cost savings."
              backsideEmail="mihai@eithiria.com"
              card_image="mihai-image"
            />
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <CallToAction />
        <Breakpoint customQuery="(min-width: 1000px)">
          <Footer />
        </Breakpoint>
      </Fade>
    </div>
  );
}

export default About;
