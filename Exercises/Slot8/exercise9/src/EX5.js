import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

const EX5 = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "50vh" }}>
      <header className="bg-warning text-center py-4">
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto">
              <img
                src="/logofpt.jpg"
                alt="FPT Logo"
                className="img-fluid"
                style={{ maxHeight: "200px" }}
              />
            </Col>
          </Row>

          <Row className="justify-content-center mt-3">
            <Col xs="auto">
              <Nav className="justify-content-center">
                <Nav.Link href="#" className="text-white mx-2">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="text-white mx-2">
                  About
                </Nav.Link>
                <Nav.Link href="#" className="text-white mx-2">
                  Contact
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </header>

      <main className="flex-grow-1 bg-white py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <h2 className="fw-bold text-dark mb-3">About</h2>
              <p className="text-muted mb-5">
                This is the about section of the website.
              </p>

              <h2 className="fw-bold text-dark mb-3">Contact</h2>
              <p className="text-muted">
                For any inquiries, please contact us at example@example.com.
              </p>
            </Col>
          </Row>
        </Container>
      </main>

      <footer
        style={{ backgroundColor: "#f2ca81", color: "white" }}
        className=" py-3"
      >
        <Container>
          <Row>
            <Col className="text-center">
              <p className="text-dark mb-0">
                © 2023 Website. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default EX5;
