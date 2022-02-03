import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";

const Embed21By9 = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Responsive embed video 21:9</Card.Title>
      <h6 className="card-subtitle text-muted">21:9 aspect ratio</h6>
    </Card.Header>
    <Card.Body className="pt-0">
      <div className="ratio ratio-21x9">
        <iframe
          title="Responsive embed video 21:9"
          src="https://www.youtube.com/embed/hi4pzKvuEQM?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
    </Card.Body>
  </Card>
);

const Embed16By9 = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Responsive embed video 16:9</Card.Title>
      <h6 className="card-subtitle text-muted">16:9 aspect ratio</h6>
    </Card.Header>
    <Card.Body className="pt-0">
      <div className="ratio ratio-16x9">
        <iframe
          title="Responsive embed video 16:9"
          src="https://www.youtube.com/embed/hi4pzKvuEQM?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
    </Card.Body>
  </Card>
);

const Embed1By1 = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Responsive embed video 1:1</Card.Title>
      <h6 className="card-subtitle text-muted">1:1 aspect ratio</h6>
    </Card.Header>
    <Card.Body className="pt-0">
      <div className="ratio ratio-1x1">
        <iframe
          title="Responsive embed video 1:1"
          src="https://www.youtube.com/embed/hi4pzKvuEQM?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
    </Card.Body>
  </Card>
);

const Embed4By3 = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Responsive embed video 4:3</Card.Title>
      <h6 className="card-subtitle text-muted">4:3 aspect ratio</h6>
    </Card.Header>
    <Card.Body className="pt-0">
      <div className="ratio ratio-4x3">
        <iframe
          title="Responsive embed video 4:3"
          src="https://www.youtube.com/embed/hi4pzKvuEQM?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
    </Card.Body>
  </Card>
);

const EmbedVideo = () => (
  <React.Fragment>
    <Helmet title="Embed Video" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Embed Video</h1>

      <Row>
        <Col lg="6">
          <Embed21By9 />
        </Col>
        <Col lg="6">
          <Embed16By9 />
        </Col>
        <Col lg="6">
          <Embed1By1 />
        </Col>
        <Col lg="6">
          <Embed4By3 />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default EmbedVideo;
