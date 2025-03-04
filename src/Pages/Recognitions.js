import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../App.css';

const Recognitions = () => {
    return (
        <div>
            <h2 className="about-title pb-5 text-center">
                Our Recognitions
            </h2>
            <Container className="py-5">
                <Row className="align-items-center">
                    {/* Left Column */}
                    <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0 px-lg-5">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/msme.png`}
                            alt="MSME Certification"
                            className="iso-image"
                        />
                        <p className="about-text">
                            LEARNENG EDUCATION has achieved a major milestone! We're thrilled to
                            share that our organization is now registered with the Ministry of
                            Micro, Small and Medium Enterprises (MSME), Government of India, and
                            has also received the prestigious ISO 9001:2015 certification, acknowledging our commitment to quality management and customer satisfaction.<br /><br />
                            This achievement reinforces our dedication to delivering exceptional quality, customer experience, and continuous improvement, while supporting the nation's economic growth.
                        </p>
                    </Col>


                    {/* Right Column */}
                    <Col lg={6} className="text-center text-lg-start px-lg-5">
                        <Image
                            src={`${process.env.PUBLIC_URL}/img/iso.jpg`}
                            alt="ISO Certification"
                            className="iso-image"
                        />
                        <p className="about-text">
                            At LearnEng Education, we take pride in being ISO-certified, ensuring the highest standards in language education. Our certification reflects our commitment to quality, consistency, and excellence. With globally recognized standards, we provide structured learning programs that enhance language proficiency. This certification reinforces our dedication to best practices, continuous improvement, and innovation. Institutions and students can trust us for reliable learning solutions, making us a trusted partner in academic success.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Recognitions;
