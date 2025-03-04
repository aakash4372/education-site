import React from "react";
import "../App.css"; // Create a separate CSS file for custom styling
// Ensure the correct path for your image

const Mission = () => {
    return (
        <section className="mission-section container py-3">
            <h2 className="about-title  text-center">
            Our Mission
            </h2>
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-lg-6 col-md-12">
                    <p className="about-text mission-text">
                        Our mission is to transform students into confident and effective
                        communicators.We understand that English proficiency is not just a subject;
                        it's a fundamental skill for success in today's globalized world.
                    </p>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 col-md-12 text-center">
                    <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="LearnEng Education" className=" mt-0 mission-image img-fluid" />
                </div>
            </div>
        </section>
    );
};

export default Mission;
