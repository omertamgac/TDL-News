import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#181a1b" }}>
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "2rem",
            color: "#444",
          }}
          href="/"
          className="text-white ms-5"
        >TDL NEWS</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{
            fontSize: "1rem",
          }}
          className="bg-light"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.1rem",
              color: "#444",
            }}
            className="d-flex justify-content-center w-100"
          >
            <NavLink to="/category?category=business"className="text-white me-3 text-decoration-none">
              Business
            </NavLink>

            <NavLink to="/category?category=sports" className="text-white me-3 text-decoration-none">
              Sport
            </NavLink>

            <NavLink to="/category?category=health"className="text-white me-3 text-decoration-none">
              Health
            </NavLink>
           
            <NavLink to="/category?category=science"className="text-white me-3 text-decoration-none" >
              Science
            </NavLink>

            <NavLink to="/category?category=politics"className="text-white me-3 text-decoration-none">
              Politics
            </NavLink>
            
            <NavLink to="/category?category=technology"className="text-white me-3 text-decoration-none">
              Technology
            </NavLink>
            
            <NavLink to="/category?category=world"className="text-white me-3 text-decoration-none">
              World
            </NavLink>

            <NavLink to="/category?category=entertainment"className="text-white me-3 text-decoration-none">
             Entertainment
            </NavLink>
          </Nav>
          
          <Form className="d-flex mx-auto me-1" style={{ maxWidth: "400px" }}>
            <Form.Control
              type="search"
              placeholder="Search for news"
              className="me-3"
              aria-label="Search"
              style={{ width: "200px" }}
            />
            <Button variant="outline-light me-5">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
