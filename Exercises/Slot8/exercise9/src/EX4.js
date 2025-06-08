import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";

const Logo = () => {
  return (
    <div className="mb-2">
      <img
        src="/logofpt.jpg"
        alt="FPT Education Logo"
        className="img-fluid"
        style={{ height: "100px" }}
      />
    </div>
  );
};

const UniversityTitle = ({ text }) => {
  return (
    <Card.Title className="text-warning fw-bold fs-3 mb-2">{text}</Card.Title>
  );
};

const ContactInfo = ({ name, mobile }) => {
  return (
    <div className="text-end">
      <Card.Text className="fw-bold text-dark mb-1">{name}</Card.Text>
      <Card.Text className="text-muted small mb-0">Mobile: {mobile}</Card.Text>
    </div>
  );
};

const SimpleCard = ({ item }) => {
  return (
    <Card
      className="border-secondary-subtle shadow-sm"
      style={{ maxWidth: "600px" }}
    >
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-start">
          <div className="flex-grow-1">
            <Logo />
            <UniversityTitle text={item.universityName} />
          </div>
          <ContactInfo name={item.contactName} mobile={item.mobile} />
        </div>
      </Card.Body>
    </Card>
  );
};

const EX4 = () => {
  const cardData = {
    contactName: "Hoai Nguyen - FPT DaNang",
    mobile: "098282763",
  };

  return (
    <Container fluid className="min-vh-100 bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h1 className="text-center text-dark fw-bold mb-5">
              Bài 4: Simple Card Component
            </h1>
            <Row className="justify-content-center">
              <Col xs="auto">
                <SimpleCard item={cardData} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default EX4;
