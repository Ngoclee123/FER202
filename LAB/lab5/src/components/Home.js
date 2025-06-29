import React from "react";
import { Carousel, Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-4">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/banner.png")}
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/banner2.jpg")}
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../images/banner3.jpg")}
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
      <h2 className="mt-4 text-center">This is Home Page</h2>
    </Container>
  );
}
export default Home;
