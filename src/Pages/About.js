import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import CSS file

const AboutSection = () => {
    return (
        <section className="about-section container">
            <h2 className="about-title pb-5 text-center">
                About Us <span className="line"></span>
            </h2>

            <div className="row align-items-center">
                {/* Video Section */}
                <div className="col-lg-6 col-md-12 text-center">
                    <div className="video-container">
                        <video className="about-video w-100" autoPlay loop muted>
                            <source src={`${process.env.PUBLIC_URL}/img/logovideo.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Text Section */}
                <div className="col-lg-6 col-md-12">
                    <p className="about-text">
                        LEARNENG EDUCATION is your trusted partner in enhancing language education.
                        With a strong commitment to language proficiency, we proudly serve schools in
                        Cuddalore and Coimbatore. We are also proud to be registered with
                        the Ministry of MSME, Government of India, a testament to our dedication to quality education.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
