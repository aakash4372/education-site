import React, { useEffect, useState } from "react";
import "../App.css"; // Import CSS
import AboutSection from "./About";
import Mission from "./Mission";
import Recognitions from "./Recognitions";
import Speaker from "./Speaker";
import Ceo from "./Ceo";
import ImageSlider from "./Imageslider";
import "aos/dist/aos.css"; // Import AOS CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import AOS from "aos";
import Advisor from "./Advisor";
import CourseSlider from "./Homecard";


const HomeSection = () => {
  const [index, setIndex] = useState(0); // Track active slide index

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex); // Update index on slide change
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div >
    <div className="carousel-container">
      <Carousel
        indicators={false}
        fade={true} // Enables fade transition
        interval={4000} // Slide stays for 4 seconds
        nextIcon={<NextButton />}
        prevIcon={<PrevButton />}
        pause={false} // Prevent pause on hover
        onSelect={handleSelect} // Detect slide changes
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={`${process.env.PUBLIC_URL}/child/1.jpg`} alt="First slide" />
          <Carousel.Caption>
            <h3>
              {index === 0 && ( // Typewriter starts only when this slide is active
                <Typewriter
                  options={{
                    strings: ["Empowering Minds, Transforming Futures."],
                    autoStart: true,
                    loop: false, // Stops after typing once
                    delay: 40, // Typing speed
                  }}
                />
              )}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={`${process.env.PUBLIC_URL}/child/h.JPG`} alt="Second slide" />
          <Carousel.Caption>
            <h3>
              {index === 1 && (
                <Typewriter
                  options={{
                    strings: ["Learn Today, Lead Tomorrow"],
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                />
              )}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={`${process.env.PUBLIC_URL}/child/g.jpg`} alt="Third slide" />
          <Carousel.Caption>
            <h3>
              {index === 2 && (
                <Typewriter
                  options={{
                    strings: ["Unlock Your Potential with Quality Education"],
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                />
              )}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>


      <AboutSection />
      <CourseSlider/>
      <Mission />
      <Recognitions />
      <Speaker />
      <Ceo />
      <Advisor/>
      <ImageSlider />

    </div>
  );
};

const NextButton = () => (
  <motion.span
    className="carousel-control-next-icon"
    whileHover={{ scale: 1.3, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  />
);

const PrevButton = () => (
  <motion.span
    className="carousel-control-prev-icon"
    whileHover={{ scale: 1.3, rotate: -10 }}
    whileTap={{ scale: 0.9 }}
  />
);


export default HomeSection;
