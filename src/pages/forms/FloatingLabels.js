import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Card,
  Col,
  Container,
  Form,
  FloatingLabel,
  Row,
} from "react-bootstrap";

const InputComponent = () => (
  <Card>
    <Card.Header className="pb-0">
      <Card.Title tag="h5" className="mb-0">
        Input
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email address">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          defaultValue="name@example.com"
        />
      </FloatingLabel>
    </Card.Body>
  </Card>
);

const TextareaComponent = () => (
  <Card>
    <Card.Header className="pb-0">
      <Card.Title tag="h5" className="mb-0">
        Textarea
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </Card.Body>
  </Card>
);

const SelectComponent = () => (
  <Card>
    <Card.Header className="pb-0">
      <Card.Title tag="h5" className="mb-0">
        Select
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <FloatingLabel controlId="floatingSelect" label="Works with selects">
        <Form.Select aria-label="Floating label select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </FloatingLabel>
    </Card.Body>
  </Card>
);

const Layout = () => (
  <Card>
    <Card.Header className="pb-0">
      <Card.Title tag="h5" className="mb-0">
        Layout
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              defaultValue="name@example.com"
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Works with selects"
          >
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const ReadOnly = () => (
  <Card>
    <Card.Header className="pb-0">
      <Card.Title tag="h5" className="mb-0">
        Read only
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <FloatingLabel controlId="floatingInput" label="Readonly input">
        <Form.Control readOnly type="text" defaultValue="Contents" />
      </FloatingLabel>
    </Card.Body>
  </Card>
);

const FloatingLabels = () => (
  <React.Fragment>
    <Helmet title="Floating Labels" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Floating Labels</h1>

      <Row>
        <Col lg="6">
          <InputComponent />
          <TextareaComponent />
        </Col>
        <Col lg="6">
          <SelectComponent />
          <Layout />
          <ReadOnly />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default FloatingLabels;
