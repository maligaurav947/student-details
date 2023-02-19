import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://sjrit.ac.in/assets/images/logo.png"
              style={{
                width: "150px",
              }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://sjrit.ac.in/" target="_blank">
              Collage Web
            </Nav.Link>
            <Nav.Link>
              <Link to="/addmission">Addmission</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/candidates">Candidates</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/add">Add Candidate</Link>
            </Nav.Link>

            <Nav.Link eventKey={2}>
              <Link to="/about"> About</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
