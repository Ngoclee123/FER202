import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Footer = () => {
  return (
    <Col lg={12}>
      <Container>
        <Row>
          <h2 className="text-center">Book your table</h2>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="First name"
                aria-label="First name"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last name"
                aria-label="Last name"
              />
            </Col>
            <Col>
              <Form.Select id="inputState">
                <option>Choose...</option>
                <option>Ngoc</option>
                <option>Lee</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Please write your comment"
                aria-label="Please write your comment"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="btn-warning" type="submit">
                Send me
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </Col>
  );
};
