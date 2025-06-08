import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MenuItem() {
    return (
        <Col lg={12} className="mb-5">
            <Container>
                <Row>
                    <h2>Our Menu</h2>
                    {[1, 2, 3, 4].map((_, i) => (
                        <Col md={3} key={i}>
                            <Card className="position-relative">
                                {(i === 0 || i === 2 || i === 3) && (
                                    <div
                                        className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1"
                                        style={{ fontWeight: "bold", fontSize: "12px", width: "100px", textAlign: "center" }}>
                                        {i === 2 ? "New" : "SALE"}
                                    </div>
                                )}
                                <Card.Img variant="top" src={`../menu${i + 1}.jpg`} alt="Pizza" />
                                <Card.Body className="text-center">
                                    <Card.Title>{['Margherita Pizza', 'Mushroom Pizza', 'HaWaiian Pizza', 'Pesto Pizza'][i]}</Card.Title>
                                    <p>
                                        {i === 0 || i === 3 ? (
                                            <>
                                                <span className="text-muted text-decoration-line-through me-2" style={{ float: "left" }}>$ {i === 0 ? 40 : 59}.00</span>
                                                <span className="text-warning fw-bold" style={{ float: "left" }}>$ {i === 0 ? 24 : 30}.00</span>
                                            </>
                                        ) : (
                                            <span className="text-muted" style={{ float: "left" }}>$ {i === 1 ? 25 : 30}.00</span>
                                        )}
                                    </p>
                                    <Button variant="dark" className="w-100">Buy</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Col>
    );
}

export default MenuItem;