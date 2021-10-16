import React from "react";

import { Link } from "react-router-dom";

import "./about.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialMediaLinks from "../components/SocialMediaLinks";

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
              <h1>Your dream transformers</h1>
              <p>
                We are small in number, but our dedication is absolute and
                expertise is vast.
              </p>
            </div>
            <div className="about-hero-content">
              <p>
                Just great websites that work. Every business needs a quality
                web presence that doesn't need to be flamboiant or extravagant,
                just well built and written to carry out its intended purpose:
                to win over customers.
              </p>

              <img src={responsive} alt="responsive design" width={"500px"} />
            </div>
          </div>

          <div className="card-container">
            <div className="card-container-flip">
              <div className="card-container-card card-container-card--card1">
                <h2>Horia Surdu</h2>
              </div>
              <div className="card-container-card-backside">
                <div className="card-container-card-backside-title">
                  <h2>Horia Surdu</h2>
                  <p>CEO, Designer and developer</p>
                </div>
                <p>
                  I am a self tought web developer and web designer. I build
                  websites with passion, this gives me the power to provide
                  exceptional experiences for you and your customers.
                </p>
                <div className="card-container-contact">
                  <Link to="#" className="card-container-card-link">
                    horia@eithiria.com
                  </Link>
                  <SocialMediaLinks className_socialIcon="icon_card" />
                </div>
              </div>
            </div>
            <div className="card-container-flip">
              <div className="card-container-card card-container-card--card2">
                <h2>Mihai Musat</h2>
              </div>
              <div className="card-container-card-backside">
                <div className="card-container-card-backside-title">
                  <h2>Mihai Musat</h2>
                  <p>CEO, Technology Recruiting Specialist and designer</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, repudiandae quasi velit dicta odit, ea, ratione
                  blanditiis sit quia aut quos atque esse maxime possimus
                  voluptatibus porro sed cumque tempore?
                </p>
                <div className="card-container-contact">
                  <Link to="#" className="card-container-card-link">
                    mihai@eithiria.com
                  </Link>
                  <SocialMediaLinks className_socialIcon="icon_card" />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <Footer />
      </Fade>
    </div>
  );
}

export default About;
