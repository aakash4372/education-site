import React from "react";
import "../App.css"; // Import CSS
import AboutSection from "./About";
import Mission from "./Mission";
import Recognitions from "./Recognitions";

const HomeSection = () => {
  return (
    <div>
        <section className="home-section d-flex align-items-center justify-content-center">
      <div className="text-center text-white">
        <h1>LEARN<span className="home-span">E</span>NG  EDUCATION </h1>
        <p>"THE SHINE OF COMMUNICATIVE ENGLISH"</p>
      </div>

    </section>
    <AboutSection/>
    <Mission/>
    <Recognitions/>
    </div>
  );
};

export default HomeSection;
