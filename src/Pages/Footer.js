import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css'
export default function Footer() {
    return (
        <div>

            <div>
                <footer
                    className="footer-section py-4"
                    id="contact"
                >
                    <Container>
                        <Row className="gap-4 gap-md-0">
                            <Col
                                md={3}
                                className="text-start text-white d-flex flex-column align-items-start mb-4 mb-md-0"
                            >
                                <div className="logo-circle">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/logo.png`}
                                        alt="Logo"
                                        className="footer-logo"
                                    />
                                </div>
                                <p className="text-start mt-3">
                                LEARNENG EDUCATION – Your trusted partner in language learning, empowering schools in Cuddalore & Coimbatore. Proudly registered with the Ministry of MSME, Govt. of India.
                                </p>
                            </Col>
                            <Col md={3} className="text-start text-white mb-4 mb-md-0">
                                <h5 className="footer-heading">Useful Links</h5>
                                <ul className="list-unstyled d-flex flex-column gap-3 align-items-start">
                                    <li>
                                        <Link to="/" className="text-white text-decoration-none">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service" className="text-white text-decoration-none">
                                            Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="text-white text-decoration-none">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={3} className="text-start text-white">
                                <h5 className="footer-heading">Contact Us</h5>

                                {/* Phone */}
                                <p className="d-flex align-items-center justify-text">
                                    <FaPhone className="me-2 calls flex-shrink-0" />
                                    <a
                                        href="tel:+918870173384"
                                        className="text-white ps-1 text-decoration-none"
                                    >
                                        +91 8870173384
                                    </a>
                                </p>

                                {/* Email */}
                                <p className="d-flex align-items-center justify-text">
                                    <FaEnvelope className="me-2 flex-shrink-0" />
                                    <a
                                        href="mailto:learnengedupvt@gmail.com "
                                        className="text-white ps-2 text-decoration-none"
                                    >
                                        learnengedupvt@gmail.com 
                                    </a>
                                </p>

                                {/* Address */}
                                <p className="d-flex align-items-start justify-text">
                                    <FaMapMarkerAlt className="me-2 flex-shrink-0 mt-1" />
                                    <span className="ps-2">
                                    10, Nethaji co-operative nagar, old vandipalayam,Cuddalore-607004
                                    </span>
                                </p>
                            </Col>

                            <Col md={3} className="text-start text-white">
                                <h5 className="footer-heading">Follow Us</h5>
                                <div className="social-icons d-flex gap-3">
                                    <a
                                        href="https://www.instagram.com/chinna_cleaning_facility?igsh=dWR2MTd1OG9yN3Bq"
                                        target="_blank"
                                        without
                                        rel="noreferrer"
                                        className="text-white"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/img/instagram.png`}
                                            alt="Instagram"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/share/163a4sovT5"
                                        target="_blank"
                                        without
                                        rel="noreferrer"
                                        className="text-white"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/img/facebook.png`}
                                            alt="Facebook"
                                            target="_blank"
                                            without
                                            rel="noreferrer"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                    
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="mt-4">
                            <Col className="text-center text-white">
                                <p className="mb-0 footer-bottom">
                                    &copy; {new Date().getFullYear()}
                                    <a
                                        href="https://bmtechx.in"
                                        target="_blank"
                                        without
                                        rel="noreferrer"
                                        className="text-white text-decoration-none ms-1"
                                    >
                                        BMTECHx
                                    </a>
                                    . All Rights Reserved.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </footer>


            </div>

        </div>
    )
}