import React from 'react'
import './footer.css'
import { Row,Col,Container} from 'react-bootstrap'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <>
        <div className='footer'>
        <Container>
            <div className="footer-one">
                <Row>
                    <Col className='foot-col'>
                        <h1>Getin Solar</h1>
                    </Col>
                    <Col className='foot-col'>
                        <ul className='foot-links'>
                            <li>Home</li>
                            <li>about us</li>
                            <li>Residential</li>
                            <li>commercial</li>
                            <li>carrer</li>
                            <li>contact</li>
                        </ul>
                    </Col>
                    <Col className='foot-col'>
                        <div>
                            <button>Get a Quote</button>
                            <ul className='foot-links'>
                                <li><LocalPhoneIcon></LocalPhoneIcon>798754453729</li>
                                <li><EmailIcon></EmailIcon>Email@gmail.com</li>
                                <li><LocationOnIcon></LocationOnIcon>Freyr Energy Services Pvt Ltd
                                301, 3rd Floor, KKR Square, Kavuri Hills, Phase I, Road no. 36 Hyderabad, India - 500033</li>
                            </ul>
                            <div className='foot-social'>
                            <InstagramIcon></InstagramIcon>
                            <FacebookIcon></FacebookIcon>
                            <XIcon></XIcon>
                            <LinkedInIcon></LinkedInIcon>
                            </div>
                        </div>
                    </Col>
                    <Col className='foot-col'>
                        <ul>
                            <li>chennai</li>
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
            <p>Copyright © 2024 Getin solar | All Rights Reserved.| Developed by Ramaussys Technologies</p>
        </Container>
    </div>
    </>
    
  )
}

export default Footer