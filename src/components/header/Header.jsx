import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
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
              <NavDropdown.Item href="#action/3.1">Residential</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Commercial</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Small Business</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="career/">Careers</Nav.Link>
            <Nav.Link as={Link} to="contact/">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="quote">7032541991</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="quote">Get A Quote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
