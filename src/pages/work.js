import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

import Fade from "react-reveal/Fade";

import "./work.scss";
import strawberry from "../images/SecretStrawberry.png";
import jerigah from "../images/jerigha.png";

function Work() {
  return (
    <div className="work">
      <Header className_prop="contact_header" />

      <section className="work-content">
        <Fade bottom>
          <div className="work-content-title">
            <h1>Our design work</h1>
            <p>Just a few of our creations</p>
          </div>
          <div className="work-content-card work-content-card--card1">
            <div className="work-content-card-text">
              <div className="work-content-card-title">
                <h2>SecretStrawberry</h2>
                <p>Presentation page</p>
              </div>
              <div className="work-content-card-paragraphs">
                <p>
                  We created here a presentation page for a freelancer web
                  developer.
                </p>
                <br />
                <p>
                  The freelancer is me , so I made this page for myself.
                </p>{" "}
                <br />
                <p>
                  I made a clean and modern Page, easy to read and to
                  understand, with some nice animations.
                </p>
                <br />
                <p>
                  This page is developed with HTML5, CSS and JavaScript only. No
                  frameworks where used during making of this product.
                </p>
              </div>
            </div>
            <div className="work-content-card-image">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://secretstrawberry.com/"
              >
                <img
                  src={strawberry}
                  alt="site presentation"
                  className="work-content-card-image-actualImage"
                />
              </a>
            </div>
          </div>
        </Fade>
        {/* /////////////////////////////////////card 2 /////////////////////////////////////////// */}
        <Fade bottom>
          <div className="work-content-card work-content-card--card1">
            <div className="work-content-card-text">
              <div className="work-content-card-title">
                <h2>Jerigah Chronicles</h2>
                <p>Game presentation page</p>
              </div>
              <div className="work-content-card-paragraphs">
                <p>
                  A new game developer want to share hes new creation. So we
                  made for him the presentation page that make his game come
                  forward.
                </p>
                <br />
                <p>
                  Clean and undestandeble design, colors that represent the game
                  and smooth animations.
                </p>
                <br />
                <p>
                  Attractive navigation gives the impression that your actualy
                  in the game menu.
                </p>
                <br />
                <p>
                  The characthers are present here to give the user a deeper
                  undestanding of the game.
                </p>
              </div>
            </div>
            <div className="work-content-card-image">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://jerigah.netlify.app/"
              >
                <img
                  src={jerigah}
                  alt="site presentation"
                  className="work-content-card-image-actualImage-2"
                />
              </a>
            </div>
          </div>
        </Fade>
      </section>
      <Fade bottom>
        <CallToAction />
        <Footer />
      </Fade>
    </div>
  );
}

export default Work;
