import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


export const Slide = () => (
    <Col lg={12} className="mb-5">
        <Row>
            <Carousel>
                {[1, 2, 3, 4, 5].map((n, idx) => (
                    <Carousel.Item key={n} interval={3000} className={idx === 0 ? "active" : ""}>
                        <img src={`../pizza${n}.jpg`} className="d-block w-100" alt={`Slide ${n}`} />
                        <Carousel.Caption>
                            <h5>{`Slide ${n} label`}</h5>
                            <p>Some representative placeholder content for the slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Row>
    </Col>
);