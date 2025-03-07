import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaImages, FaPhone } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const MyOffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="shadow py-2 main-navbar fixed-top">
        <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand as={Link} to="/" className="fw-bold navbar-brand">
  <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="logo" height="80" />
  <div className="navbar-text text-center pt-3">
    <p className="mb-0">LEARNENG EDUCATION</p>
    <span className="mb-0 two-span">"The Shine of Communicative English"</span>
    <span className="mb-0 three-span">Regd: Under Ministry of MSME, Government of India.</span>
  </div>
</Navbar.Brand>




          <Nav className="ms-auto d-none gap-4 d-lg-flex align-items-center">
            <NavLink to="/" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Home</NavLink>
            <NavLink to="/service" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Service</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Contact</NavLink>
          </Nav>

          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            onClick={handleShow}
            className="d-lg-none d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <HiOutlineBars3BottomRight size={30} color="#227ec1" />
          </motion.div>
        </Container>

      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaHome className="me-2" /> Home
            </NavLink>
            <NavLink to="/service" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaImages className="me-2" /> service
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaPhone className="me-2" /> Contact
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyOffcanvas;
