// App.jsx
import React from "react";
import {
  Hero,
  Navbar,
  CTA,
  Features,
  MeetOurTeam,
  ContactUs,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="snap-container" id="hero">
        <Hero />
      </div>
      <div className="snap-container" id="features">
        <Features />
      </div>
      <div className="snap-container" id="team">
        <MeetOurTeam />
      </div>
      <div className="snap-container" id="cta">
        <CTA />
      </div>
      <div className="snap-container" id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default App;
