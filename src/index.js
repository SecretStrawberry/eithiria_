import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Contact from "./pages/contact";
import About from "./pages/about";
import Work from "./pages/work";
import ScrollToTop from "./helpers/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
