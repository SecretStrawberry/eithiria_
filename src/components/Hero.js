import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
// import laptopwithcoffee from "../images/laptopwithcoffee.jpg";
function Hero() {
  return (
    <>
      <Fade bottom>
        <section className="hero">
          <h1>We transform your dreams into websites</h1>
          <div className="hero-body">
            <p>
              Websites for startups are our bread <span>&</span> butter.
              Practical and fully custom.
              {/* Websites for startups are our bread <span>&</span> butter.
              Practical. Fully custom. Designed to bring customers to your
              virtual door. */}
              {/* We design and develop experiences that make people's life simple.
              Have your website made in the right way: practical, clear, secure,
              and 100% tailored for you. We the Eithiria web design team, know
              how to bring customers to your virtual door. */}
            </p>
            <Link className="main-navigation-contact" to="/work">
              SEE OUR WORK
            </Link>
          </div>
        </section>
      </Fade>
    </>
  );
}

export default Hero;
