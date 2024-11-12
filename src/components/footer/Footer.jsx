import React from 'react';
import './footer.css';
import { Row, Col, Container } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <div className="footer-content">
          <Row>
            <Col className='footer-section' md={2} lg={2}>
              <h2>Getin Solar</h2>
            </Col>

            <Col className='footer-section' md={3} lg={3}>
              <ul className='footer-links'>
                <li>Home</li>
                <li>About Us</li>
                <li>Residential</li>
                <li>Commercial</li>
                <li>Career</li>
                <li>Contact</li>
              </ul>
            </Col>

            <Col className='footer-section' md={3} lg={3}>
              <button className="quote-button">Get a Quote</button>
              <ul className='footer-contact'>
                <li><LocalPhoneIcon /> 798754453729</li>
                <li><EmailIcon /> Email@gmail.com</li>
                <li><LocationOnIcon /> Freyr Energy Services Pvt Ltd, 301, 3rd Floor, KKR Square, Kavuri Hills, Phase I, Road no. 36 Hyderabad, India - 500033</li>
              </ul>
              <div className='footer-social'>
                <InstagramIcon />
                <FacebookIcon />
                <XIcon />
                <LinkedInIcon />
              </div>
            </Col>

            <Col className='footer-section' md={3} lg={3}>
              <ul className='footer-locations'>
                <li><h2>Our Loaction</h2></li>
                <li>Chennai</li>
                <li>Bengaluru</li>
                <li>Coimbatore</li>
                <li>Madurai</li>
                <li>Virudhunagar</li>
                <li>Kovilpatti</li>
                <li>Thirunelveli</li>
                <li>Kanniyakumari</li>
              </ul>
            </Col>
          </Row>
        </div>
        <hr />
        <p className="footer-copyright">
          &copy; 2024 Getin Solar | All Rights Reserved | Developed by Ramaussys Technologies
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
