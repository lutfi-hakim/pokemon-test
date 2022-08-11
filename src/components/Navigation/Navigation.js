import { Navbar, Nav, Container } from "react-bootstrap";
import "./index.scss";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect fixed="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"
            alt=""
            className="brand-p"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="btn-list">
              Home
            </Nav.Link>
            <Nav.Link href="/list" className="btn-list">
              List Pokemon
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
