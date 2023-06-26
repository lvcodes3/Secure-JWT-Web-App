// Dependencies //
import { LinkContainer } from "react-router-bootstrap";
// Bootstrap //
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// React Icons //
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Secure JWT Web App</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaSignInAlt /> Log In
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register">
                <Nav.Link>
                  <FaUserPlus /> Register
                </Nav.Link>
              </LinkContainer>
              {/*
              <LinkContainer to="/logout">
                <Nav.Link>
                  <FaSignOutAlt /> Log Out
                </Nav.Link>
              </LinkContainer>
              */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
