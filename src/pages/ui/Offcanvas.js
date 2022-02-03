import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Card, Col, Container, Row, Offcanvas, Button } from "react-bootstrap";

const OffcanvasDefault = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Offcanvas</Card.Title>
        <h6 className="card-subtitle text-muted">
          Build hidden sidebars into your project for navigation, shopping
          carts, and more with a few classes and our JavaScript plugin.
        </h6>
      </Card.Header>
      <Card.Body className="text-center">
        <Button variant="primary" onClick={handleShow}>
          Toggle offcanvas
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Card.Body>
    </Card>
  );
};

const OffcanvasPlacementSingle = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const OffcanvasPlacement = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Offcanvas placement</Card.Title>
      <h6 className="card-subtitle text-muted">
        There’s no default placement for offcanvas components, so you must set
        the <code>placement</code> parameter.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      {["start", "end", "top", "bottom"].map((placement, idx) => (
        <OffcanvasPlacementSingle
          key={idx}
          placement={placement}
          name={`Toggle ${placement} offcanvas`}
        />
      ))}
    </Card.Body>
  </Card>
);

const OffcanvasBackdropSingle = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const options = [
  {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  },
  {
    name: "Disable backdrop",
    scroll: false,
    backdrop: false,
  },
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

const OffcanvasBackdrop = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Offcanvas backdrop</Card.Title>
      <h6 className="card-subtitle text-muted">
        Scrolling the <code>&#x3C;body&#x3E;</code> element is disabled when an
        offcanvas and its backdrop are visible. Use the <code>scroll</code>{" "}
        parameter to toggle <code>&#x3C;body&#x3E;</code> scrolling and{" "}
        <code>backdrop</code> parameter to toggle the backdrop.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      {options.map((props, idx) => (
        <OffcanvasBackdropSingle key={idx} {...props} />
      ))}
    </Card.Body>
  </Card>
);

const OffcanvasComponent = () => (
  <React.Fragment>
    <Helmet title="Offcanvas" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Offcanvas</h1>

      <Row>
        <Col lg="6">
          <OffcanvasDefault />
        </Col>
        <Col lg="6">
          <OffcanvasPlacement />
        </Col>
        <Col lg="6">
          <OffcanvasBackdrop />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default OffcanvasComponent;
