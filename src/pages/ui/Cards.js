import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../assets/img/photos/unsplash-3.jpg";

const CardWithImageAndLinks = () => (
  <Card>
    <Card.Img width="100%" src={unsplash1} alt="Card image cap" />
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Card with image and links
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Card.Link href="#">Card link</Card.Link>
      <Card.Link href="#">Another link</Card.Link>
    </Card.Body>
  </Card>
);

const CardWithImageAndButton = () => (
  <Card>
    <Card.Img width="100%" src={unsplash2} alt="Card image cap" />
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Card with image and button
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button href="#" variant="primary">
        Go somewhere
      </Button>
    </Card.Body>
  </Card>
);

const CardWithImageAndList = () => (
  <Card>
    <Card.Img width="100%" src={unsplash3} alt="Card image cap" />
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Card with image and list
      </Card.Title>
    </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  </Card>
);

const CardWithLinks = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Card with links
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Card.Link href="#">Card link</Card.Link>
      <Card.Link href="#">Another link</Card.Link>
    </Card.Body>
  </Card>
);

const CardWithButton = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Card with button
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button href="#" variant="primary">
        Go somewhere
      </Button>
    </Card.Body>
  </Card>
);

const CardWithList = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Card with list
      </Card.Title>
    </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  </Card>
);

const Cards = () => (
  <React.Fragment>
    <Helmet title="Cards" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Cards</h1>

      <Row>
        <Col md="6" lg="4">
          <CardWithImageAndLinks />
        </Col>
        <Col md="6" lg="4">
          <CardWithImageAndButton />
        </Col>
        <Col md="6" lg="4">
          <CardWithImageAndList />
        </Col>
        <Col md="6" lg="4">
          <CardWithLinks />
        </Col>
        <Col md="6" lg="4">
          <CardWithButton />
        </Col>
        <Col md="6" lg="4">
          <CardWithList />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Cards;
