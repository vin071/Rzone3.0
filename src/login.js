import './App.css';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  return (
    <div className="Login">
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

    );
}

export default Login;

