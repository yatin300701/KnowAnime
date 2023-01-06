import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import "../style/navbar.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <Navbar bg="dark" className='navbar-dark d-flex justify-content-between' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className='fw-bold'>KnowAnime</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between m-auto'>

            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light border-0">Search</Button>
              </Form>
              <Nav
                className="ms-auto my-2 my-lg-0 "
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

                <NavDropdown title="Genres" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/genres/action">Action</NavDropdown.Item>
                  <NavDropdown.Item href="/genres/comedy">
                    Comedy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/genres/horror">
                    Horror
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/genres/school">
                    School
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/genres/music">
                    Music
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/genres/sports">
                    Sports
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Types" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/types/movie">Movies</NavDropdown.Item>
                  <NavDropdown.Item href="/types/tv">
                    TV Series
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/types/special">
                    Specials
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/types/music">
                    Music
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/">Newest</Nav.Link>
                                
                
              </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;