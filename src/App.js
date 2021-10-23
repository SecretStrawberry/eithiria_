import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import InfoSection1 from "./components/InfoSection1";
import RequestSiteForm from "./components/RequestSiteForm";
import Footer from "./components/Footer";

import Fade from "react-reveal/Fade";
import { Breakpoint, BreakpointProvider } from "react-socks";

function App(props) {
  return (
    <BreakpointProvider>
      <div className="App">
        <Header />

        <Hero />
        <InfoSection />
        <InfoSection1 />
        <Fade bottom>
          <RequestSiteForm
            h2="Make your dream come true today"
            p1="Are you ready for you new website?"
            p2="Tell us a little about your business and we will reach out to get
          things going."
          />
        </Fade>
        <Fade bottom>
          <Breakpoint customQuery="(min-width: 1000px)">
            <Footer />
          </Breakpoint>
        </Fade>
      </div>
    </BreakpointProvider>
  );
}

export default App;
