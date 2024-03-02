// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import './Footer.css'; // Import your custom CSS file

const Footer = () => {
  const iconProps = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(20px)' },
  });

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h4 className="text-uppercase">Your Company Name</h4>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel turpis et justo sodales porta.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase">Contact Us</h5>
            <address className="footer-text">
              <p><FaEnvelope /> <a href="mailto:info@example.com" className="footer-link">info@example.com</a></p>
              <p><FaPhone /> +1 (123) 456-7890</p>
            </address>
            <div className="social-icons">
              <animated.a
                href="#"
                className="footer-link icon"
                style={iconProps}
              >
                <FaFacebook />
              </animated.a>
              <animated.a
                href="#"
                className="footer-link icon"
                style={iconProps}
              >
                <FaTwitter />
              </animated.a>
              <animated.a
                href="#"
                className="footer-link icon"
                style={iconProps}
              >
                <FaInstagram />
              </animated.a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
