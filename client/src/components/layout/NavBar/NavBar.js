import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Container>
        <Navbar.Brand href="/">Ads Board</Navbar.Brand>
        <Nav className="me-right">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/register">
            Register
          </Nav.Link>

          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>

          <Nav.Link as={NavLink} to="/logout">
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
};

export default NavBar;
