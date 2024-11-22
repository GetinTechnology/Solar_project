import React from 'react';
import './footer.css';
import { Row, Col, Container,Modal } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Quote from '../quote/Quote';

function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClose = () => setModalIsOpen(false);
  const handleShow = () => setModalIsOpen(true);
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
              <li><h2>Our Links</h2></li>
                <li><Link to='Solar_project/' className='footer-link'>Home</Link></li>
                <li><Link to='About/' className='footer-link'>About Us</Link></li>
                <li><Link to='/venue/residential' className='footer-link'>Residential</Link></li>
                <li><Link to='/venue/smallbusiness/' className='footer-link'>Small Business</Link></li>
                <li><Link to='/venue/commercial/' className='footer-link'>Commercial</Link></li>
                <li><Link to='career/' className='footer-link'>Career</Link></li>
                <li><Link to='contact/' className='footer-link'>Contact</Link></li>
              </ul>
            </Col>

 

            <Col className='footer-section' md={3} lg={3}>
              <ul className='footer-locations'>
                <li><h2>Our Location</h2></li>
                <li><Link to='/location/chennai' className='footer-link'>Chennai</Link></li>
                <li><Link to='/location/bengaluru' className='footer-link'>Bengaluru</Link></li>
                <li><Link to='/location/coimbatore' className='footer-link'>Coimbatore</Link></li>
                <li><Link to='/location/madurai' className='footer-link'>Madurai</Link></li>
                <li><Link to='/location/kovilpatti' className='footer-link'>Kovilpatti</Link></li>
                <li><Link to='/location/virudhunagar' className='footer-link'>Virudhunagar</Link></li>
                <li><Link to='/location/thirunelveli' className='footer-link'>Thirunelveli</Link></li>
                <li><Link to='/location/kanniyakumari' className='footer-link'>Kanniyakumari</Link></li>
              </ul>
            </Col>
            <Col className='footer-section' md={3} lg={3}>
              <button className="quote-button" onClick={handleShow}>Get a Quote</button>
              <ul className='footer-contact'>
                <li><LocalPhoneIcon /> +91 89258 31826</li>
                <li><EmailIcon /> enquiry@getintech.in</li>
                <li><LocationOnIcon /> 971G/6, Kalki Street, Manthithoppu Road,  Krishna Nagar, Kovilpatti – 628502</li>
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
        <p ><Link to='termsofpolicy/'>Terms of Use</Link> | <Link to='disclaimer/'>Disculaimer</Link> | <Link to='privacy/'>Privacy Policy</Link>   </p>
        <p className="footer-copyright">
          &copy; 2024 Getin Solar | All Rights Reserved | Developed by Ramaussys Technologies
        </p>
      </Container>
      <Modal show={modalIsOpen} onHide={handleClose}>
      <Quote setModalIsOpen={setModalIsOpen}/>
    </Modal>
    </footer>
  );
}

export default Footer;
