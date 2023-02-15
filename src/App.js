
import './App.css';
import { Container, Button, Row, Col, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div>
      <Navbar bg="light" fixed="sticky">
        <Navbar.Brand href="#home">RZone</Navbar.Brand>
          <Nav className="me-auto d-flex justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>
    </div>
    <body className="App-body">
    <div className="App">
      <Container className="mb-50 fluid">
          <img alt='rzone'></img>
        </Container>
        <Container className="mb-3">
          <Row className="px-100 gx-100">
          <Col md>
            <Row className="d-flex justify-content-start mb-3">RZone 3.0 Sign-In</Row>
            <Form>
              <Form.Group className="mb-3" controlId="formNUSNETID">
                <Form.Control type="text" placeholder="NUSNET ID"></Form.Control>
                <Form.Text className="mh-25 text-muted d-flex justify-content-end">e0123456</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formNUSNETPassword">
                <Form.Control type="password" placeholder="NUSNET Password"></Form.Control>
              </Form.Group>
                <Button type="submit" variant="primary" className="d-flex justify-content-end">LOGIN</Button>
            </Form>
          </Col>
          <Col md className="mb-3 bg-light">
            <Row className="text-light ml-auto bg-primary p-3">
              Announcements
            </Row>
            <Row className="text-dark ml-auto p-3">
              Lorem ipsum dolores
            </Row>
          </Col>
          </Row>
        </Container>
    </div>
    </body>
    </div>
  );
}

export default App;
