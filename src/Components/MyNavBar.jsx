import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand href="#" className="text-white ms-5">TDR NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="d-flex justify-content-center w-100">
            <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-white">General</Nav.Link>
            <Nav.Link href="#action3" className="text-white">Business</Nav.Link>
            <Nav.Link href="#action4" className="text-white">Sport</Nav.Link>
            <Nav.Link href="#action5" className="text-white">Health</Nav.Link>
            <Nav.Link href="#action6" className="text-white">Science</Nav.Link>
            <Nav.Link href="#action7" className="text-white">Technology</Nav.Link>
            <Nav.Link href="#action8" className="text-white">Entertainment</Nav.Link>
          </Nav>
          <Form className="d-flex mx-auto me-5" style={{ maxWidth: '400px' }}>
            <Form.Control
              type="search"
              placeholder="Search for news"
              className="me-2"
              aria-label="Search"
              style={{ width: '500px' }}
            />
            <Button variant="outline-light me-5">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
