import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon
import "../App.css"; // Import CSS file

const Ceo = () => {
    return (
        <div>

            <h2 className="about-title pt-5 pb-4 text-center">
            CEO & Director
            </h2>
            <Container className="py-5">
                <Row className="align-items-center">
                    {/* Left: Image Section */}
                    <Col lg={6} className="d-flex justify-content-center">
                        <div className="image-container">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/Haridoss.jpg`}
                                alt="Expert Training"
                                className="img-fluid ceo-image"
                            />
                        </div>
                    </Col>

                    {/* Right: Content Section */}
                    <Col lg={6}>
                        <div className="content-list">
                            <div className="content-item">
                                <h4><FaArrowRight className="arrow-icon" /> Expert Language Training</h4>
                                <p>Our experienced educators and comprehensive curriculum ensure high-quality language training.</p>
                            </div>

                            <div className="content-item">
                                <h4><FaArrowRight className="arrow-icon" /> Focus on Communicative English</h4>
                                <p>We emphasize practical communication skills that empower students to express themselves effectively.</p>
                            </div>

                            <div className="content-item">
                                <h4><FaArrowRight className="arrow-icon" /> Supportive Learning Environment</h4>
                                <p>We provide a nurturing atmosphere that fosters confident language development.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Ceo;
