import {Modal,Container}from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import Quote from '../quote/Quote';



function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClose = () => setModalIsOpen(false);
  const handleShow = () => setModalIsOpen(true);
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top header">
      <Container>
        <Navbar.Brand as={Link} to='Solar_project/' className="brand-name">Getin Solar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="Solar_project/">Home</Nav.Link>
            <Nav.Link as={Link} to="About/">About Us</Nav.Link>
            <NavDropdown title="Venue" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/venue/residential'>Residential</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/venue/smallbusiness">Small Business</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/venue/commercial">Commercial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="career/">Careers</Nav.Link>
            <Nav.Link as={Link} to="contact/">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="quote">7032541991</Nav.Link>
            <button  className="quote" onClick={handleShow}>Get A Quote</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={modalIsOpen} onHide={handleClose}>
      <Quote setModalIsOpen={setModalIsOpen}/>
    </Modal>
    </Navbar>
  );
}

export default Header;
