import React from "react";
import { Helmet } from "react-helmet-async";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const BasicForm = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Basic form</Card.Title>
      <h6 className="card-subtitle text-muted">
        Default Bootstrap form layout.
      </h6>
    </Card.Header>
    <Card.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Textarea</Form.Label>
          <Form.Control
            as="textarea"
            name="textarea"
            placeholder="Textarea"
            rows="1"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>File input</Form.Label>
          <Form.Control type="file" name="file" />
          <Form.Text className="text-muted">
            Example block-level help text here.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" id="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary">Submit</Button>
      </Form>
    </Card.Body>
  </Card>
);

const HorizontalForm = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Horizontal form</Card.Title>
      <h6 className="card-subtitle text-muted">Horizontal Bootstrap layout.</h6>
    </Card.Header>
    <Card.Body>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-sm-right">
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" name="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-sm-right">
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-sm-right">
            Textarea
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              name="textarea"
              placeholder="Textarea"
              rows="3"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-sm-right pt-sm-0">
            Radios
          </Form.Label>
          <Col sm={10}>
            <div className="custom-controls-stacked">
              <Form.Check
                type="radio"
                id="radio1"
                name="customRadio"
                label="Default radio"
                className="mb-2"
                defaultChecked
              />
              <Form.Check
                type="radio"
                id="radio2"
                name="customRadio"
                label="Second default radio"
                className="mb-2"
              />
              <Form.Check
                type="radio"
                id="radio3"
                label="Disabled radio"
                disabled
              />
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-sm-right pt-sm-0">
            Checkbox
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              id="checkbox"
              label="Check me out"
              disabled
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ size: 10, offset: 2 }}>
            <Button variant="primary">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </Card.Body>
  </Card>
);

const FormRow = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Form row</Card.Title>
      <h6 className="card-subtitle text-muted">Bootstrap column layout.</h6>
    </Card.Header>
    <Card.Body>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Email" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" placeholder="1234 Main St" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
          />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select name="state">
                <option />
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" name="zip" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="checkbox"
            label="Check me out"
            disabled
          />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </Card.Body>
  </Card>
);

const Layouts = () => (
  <React.Fragment>
    <Helmet title="Form Layouts" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Form Layouts</h1>

      <Row>
        <Col lg="6">
          <BasicForm />
        </Col>
        <Col lg="6">
          <HorizontalForm />
        </Col>
        <Col lg="12">
          <FormRow />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Layouts;
