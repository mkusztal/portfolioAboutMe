import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../../redux/userRedux';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const user = useSelector(getUser);
  return (
    <Navbar bg="warning" variant="dark" className={styles.root}>
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Nav className="me-right">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/aboutme">
            About me
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
          {!user && (
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
          )}

          {!user && (
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          )}

          {user && (
            <Nav.Link as={NavLink} to="/logout">
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
