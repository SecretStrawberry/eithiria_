import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

import PortofolioCard from "../components/ProtofolioCard";

import Fade from "react-reveal/Fade";

import "./work.scss";

import secretStrawberry from "../images/SecretStrawberry.png";
import jerigah from "../images/jerigha.png";
import mobileSecretStrawberry from "../images/strawberryPhone.png";
import mobileJerigah from "../images/jerigahPhone.png";

import { Breakpoint, BreakpointProvider } from "react-socks";

function Work() {
  return (
    <BreakpointProvider>
      <div className="work">
        <Header className_prop="contact_header" />

        <section className="work-content">
          <Fade bottom>
            <div className="work-content-title">
              <h1>Our design work</h1>
              <p>Just a few of our creations</p>
            </div>
            <PortofolioCard
              portofolioLink="https://secretstrawberry.com/"
              cardTitle="SecretStrawberry"
              cardTitleParagraph="Presentation page"
              textBody_p1="We created here a presentation page for a freelancer web developer."
              textBody_p2="The freelancer is me, so I made this page for myself."
              textBody_p3="I made a clean and modern Page, easy to read and to understand, with some nice animations."
              textBody_p4="This page is developed with HTML5, CSS, and JavaScript only.
                           No frameworks were used during the making of this product."
              image={secretStrawberry}
              mobileImage={mobileSecretStrawberry}
            />
          </Fade>
          <Fade bottom>
            <PortofolioCard
              portofolioLink="https://jerigah.netlify.app/"
              className_portofolioCardRight="card_right"
              className_cardText="right_card_text"
              className_cardImage="right_card_image"
              className_cardImageResponsive="responsive_image_right"
              cardTitle="Jerigah Chronicles"
              cardTitleParagraph="Concept game presentation page"
              textBody_p1="A new game developer wants to share his new creation.
                           So we made for him the presentation page that make his game come forward."
              textBody_p2="Clean and understandable design, colors that represent the game, and smooth animations."
              textBody_p3="Attractive navigation gives the impression that you are
                           actually in the game menu."
              textBody_p4="The characters are present here to give the user a deeper
                           understanding of the game."
              image={jerigah}
              mobileImage={mobileJerigah}
            />
          </Fade>
        </section>
        <Fade bottom>
          <CallToAction />
          <Breakpoint customQuery="(min-width: 1000px)">
            <Footer />
          </Breakpoint>
        </Fade>
      </div>
    </BreakpointProvider>
  );
}

export default Work;
