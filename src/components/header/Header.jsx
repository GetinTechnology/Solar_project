import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'

function Header() {
  return (
<Navbar collapseOnSelect expand="lg" className="fixed-top header">
  <Container>
    <Navbar.Brand href="#home">Getin solar</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">about us</Nav.Link>
        <NavDropdown title="venue" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Residencial</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">commercial</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Small Business</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#pricing">Carrers</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">7032541991</Nav.Link>
        <Nav.Link eventKey={2} href="#memes" className='quote'>Get A Quote</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Header;