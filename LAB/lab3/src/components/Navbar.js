import React from "react";
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';

function NavigationBar() {
    return (
        <Col lg={12}>
            <Container>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Pizza House</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About us</Nav.Link>
                                <Nav.Link href="#">Contact</Nav.Link>
                            </Nav>
                            <Form className="d-flex" role="search">
                                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                <Button variant="danger"><i className="fa fa-search"></i></Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </Col>
    );
}
export { NavigationBar };