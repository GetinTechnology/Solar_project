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
import { Link } from 'react-router-dom';

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
                <li><Link to='Solar_project/' className='footer-link'>Home</Link></li>
                <li><Link to='About/' className='footer-link'>About Us</Link></li>
                <li><Link to='residential/' className='footer-link'>Residential</Link></li>
                <li><Link to='smallbusiness/' className='footer-link'>Small Business</Link></li>
                <li><Link to='commercial/' className='footer-link'>Commercial</Link></li>
                <li><Link to='career/' className='footer-link'>Career</Link></li>
                <li><Link to='contact/' className='footer-link'>Contact</Link></li>
              </ul>
            </Col>

 

            <Col className='footer-section' md={3} lg={3}>
              <ul className='footer-locations'>
                <li><h2>Our Loaction</h2></li>
                <li><Link to='/location/chennai' className='footer-link'>Chennai</Link></li>
                <li><Link to='/location/bengaluru' className='footer-link'>Bengaluru</Link></li>
                <li><Link to='/location/coimbatore' className='footer-link'>coimbatore</Link></li>
                <li><Link to='/location/madurai' className='footer-link'>Madurai</Link></li>
                <li><Link to='/location/kovilpatti' className='footer-link'>Kovil Patti</Link></li>
                <li><Link to='/location/Thirunelveli' className='footer-link'>Thirunelveli</Link></li>
                <li><Link to='/location/Kanniyakumari' className='footer-link'>Kanniyakumari</Link></li>
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
