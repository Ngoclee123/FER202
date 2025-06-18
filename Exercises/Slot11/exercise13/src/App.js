import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidatedInput from "./components/ValidatedInput";
import LoginForm from "./components/LoginForm";
import ComplexForm from "./components/ComplexForm";

function App() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">
        Exercise 13: Form Validation with useEffect
      </h1>

      <Row>
        {/* Exercise 4: Basic Input Validation */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>Exercise 4: Basic Input Validation</Card.Header>
            <Card.Body>
              <ValidatedInput />
            </Card.Body>
          </Card>
        </Col>

        {/* Exercise 5: Login Form Validation */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>Exercise 5: Login Form Validation</Card.Header>
            <Card.Body>
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>

        {/* Exercise 6: Complex Form Validation */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>Exercise 6: Complex Form Validation</Card.Header>
            <Card.Body>
              <ComplexForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
