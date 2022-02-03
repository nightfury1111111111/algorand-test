import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../assets/img/photos/unsplash-3.jpg";

const SlidesOnly = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Slides only</Card.Title>
        <h6 className="card-subtitle text-muted">
          Here’s a carousel with slides only. Note the presence of the{" "}
          <code>.d-block</code> and <code>.w-100</code> on carousel images to
          prevent browser default image alignment.
        </h6>
      </Card.Header>
      <Card.Body className="pt-0">
        <Carousel indicators={false} controls={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

const WithControls = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">With controls</Card.Title>
        <h6 className="card-subtitle text-muted">
          Adding in the previous and next controls.
        </h6>
      </Card.Header>
      <Card.Body className="pt-0">
        <Carousel indicators={false} controls={true}>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

const WithIndicators = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">With indicators</Card.Title>
        <h6 className="card-subtitle text-muted">
          You can also add the indicators to the carousel, alongside the
          controls, too.
        </h6>
      </Card.Header>
      <Card.Body className="pt-0">
        <Carousel indicators={true} controls={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

const WithCaptions = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">With captions</Card.Title>
        <h6 className="card-subtitle text-muted">
          Add captions to your slides easily with the{" "}
          <code>.carousel-caption</code> element within any{" "}
          <code>.carousel-item</code>.
        </h6>
      </Card.Header>
      <Card.Body className="pt-0">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="text-white">First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash2} alt="Second slide" />

            <Carousel.Caption>
              <h3 className="text-white">Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash3} alt="Third slide" />

            <Carousel.Caption>
              <h3 className="text-white">Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

const CrossFade = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Crossfade</Card.Title>
        <h6 className="card-subtitle text-muted">
          Add <code>.carousel-fade</code> to your carousel to animate slides
          with a fade transition instead of a slide.
        </h6>
      </Card.Header>
      <Card.Body className="pt-0">
        <Carousel indicators={false} controls={true} fade={true}>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={unsplash3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

const CarouselComponent = () => (
  <React.Fragment>
    <Helmet title="Carousel" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Carousel</h1>

      <Row>
        <Col lg="6">
          <SlidesOnly />
        </Col>
        <Col lg="6">
          <WithControls />
        </Col>
        <Col lg="6">
          <WithIndicators />
        </Col>
        <Col lg="6">
          <WithCaptions />
        </Col>
        <Col lg="6">
          <CrossFade />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default CarouselComponent;
