import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const InputComponent = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Input
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Control type="text" name="input" placeholder="Input" />
    </Card.Body>
  </Card>
);

const TextareaComponent = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Textarea
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Control as="textarea" name="input" placeholder="Textarea" />
    </Card.Body>
  </Card>
);

const Checkboxes = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Checkboxes
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Group className="mb-2">
        <Form.Check
          label="Option one is this and that—be sure to
          include why it's great"
          type="checkbox"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Check label="Option two is disabled" type="checkbox" disabled />
      </Form.Group>

      <Form>
        <Form.Check inline label="1" type="checkbox" />
        <Form.Check inline label="2" type="checkbox" />
        <Form.Check inline label="3" type="checkbox" disabled />
      </Form>
    </Card.Body>
  </Card>
);

const Sizes = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Sizes
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Control
        type="text"
        placeholder="Large input"
        size="lg"
        className="mb-3"
      />
      <Form.Control type="text" placeholder="Medium input" className="mb-3" />
      <Form.Control type="text" placeholder="Small input" size="sm" />
    </Card.Body>
  </Card>
);

const Radios = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Radios
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Group className="mb-2">
        <Form.Check
          label="Option one is this and that—be sure to include why it's great"
          type="radio"
          name="radios-example"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Check
          label="Option two can be something else and selecting it will deselect option one"
          type="radio"
          name="radios-example"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Check
          label="Option two is disabled"
          type="radio"
          disabled
          name="radios-example"
        />
      </Form.Group>

      <Form>
        <Form.Check inline label="1" type="radio" name="radios-example-2" />
        <Form.Check inline label="2" type="radio" name="radios-example-2" />
        <Form.Check
          inline
          label="3"
          type="radio"
          name="radios-example-2"
          disabled
        />
      </Form>
    </Card.Body>
  </Card>
);

const Switches = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Switches
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Check
        type="switch"
        id="exampleCustomSwitch"
        name="customSwitch"
        label="Toggle this switch element"
      />
      <Form.Check
        type="switch"
        id="exampleCustomSwitch1"
        label="Disabled switch element"
        disabled
      />
    </Card.Body>
  </Card>
);

const Selects = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Selects
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Select
        id="exampleCustomSelect"
        name="customSelect"
        className="mb-3"
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </Form.Select>

      <Form.Select
        id="exampleCustomSelectMultiple"
        name="customSelectMultiple"
        multiple
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </Form.Select>
    </Card.Body>
  </Card>
);

const Disabled = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Disabled
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledInput">Disabled input</Form.Label>
        <Form.Control
          type="text"
          name="disabledInput"
          id="disabledInput"
          placeholder="Disabled input"
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
        <Form.Select name="disabledSelect" id="disabledSelect" disabled>
          <option value="">Disabled select</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Check label="Can't check this" type="checkbox" disabled />
      </Form.Group>
    </Card.Body>
  </Card>
);

const ReadOnly = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Read only
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form.Control
        type="text"
        name="readonlyInput"
        id="readonlyInput"
        placeholder="Readonly input"
        readOnly
      />
    </Card.Body>
  </Card>
);

const BasicInputs = () => (
  <React.Fragment>
    <Helmet title="Basic Inputs" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Basic Inputs</h1>

      <Row>
        <Col lg="6">
          <InputComponent />
          <TextareaComponent />
          <Checkboxes />
          <Sizes />
        </Col>
        <Col lg="6">
          <Radios />
          <Switches />
          <Selects />
          <Disabled />
          <ReadOnly />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default BasicInputs;
