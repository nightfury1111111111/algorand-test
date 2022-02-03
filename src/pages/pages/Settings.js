import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import avatar1 from "../../assets/img/avatars/avatar.jpg";

const Navigation = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Profile Settings
      </Card.Title>
    </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item tag="a" href="#" action active>
        Account
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Password
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Privacy and safety
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Email notifications
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Web notifications
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Widgets
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Your data
      </ListGroup.Item>
      <ListGroup.Item tag="a" href="#" action>
        Delete account{" "}
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

const PublicInfo = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Public info
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form>
        <Row>
          <Col md="8">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputUsername">Username</Form.Label>
              <Form.Control
                type="text"
                id="inputUsername"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputBio">Biography</Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                id="inputBio"
                placeholder="Tell something about yourself"
              />
            </Form.Group>
          </Col>
          <Col md="4">
            <div className="text-center">
              <img
                alt="Chris Wood"
                src={avatar1}
                className="rounded-circle img-responsive mt-2"
                width="128"
                height="128"
              />
              <div className="mt-2">
                <Button variant="primary">
                  <FontAwesomeIcon icon={faUpload} /> Upload
                </Button>
              </div>
              <small>
                For best results, use an image at least 128px by 128px in .jpg
                format
              </small>
            </div>
          </Col>
        </Row>

        <Button variant="primary">Save changes</Button>
      </Form>
    </Card.Body>
  </Card>
);

const PrivateInfo = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Private info
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="firstName">First name</Form.Label>
              <Form.Control
                type="text"
                name="text"
                id="firstName"
                placeholder="First name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="lastName">Last name</Form.Label>
              <Form.Control
                type="text"
                name="text"
                id="lastName"
                placeholder="Last name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            id="address"
            placeholder="1234 Main St"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="address2">Address 2</Form.Label>
          <Form.Control
            type="text"
            name="address2"
            id="address2"
            placeholder="Apartment, studio, or floor"
          />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="city">City</Form.Label>
              <Form.Control type="text" name="city" id="city" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="state">State</Form.Label>
              <Form.Select name="state" id="state">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="zipcode">Zip</Form.Label>
              <Form.Control type="text" name="zip" id="zipcode" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary">Save changes</Button>
      </Form>
    </Card.Body>
  </Card>
);

const Settings = () => (
  <React.Fragment>
    <Helmet title="Settings" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Settings</h1>

      <Row>
        <Col md="3" xl="2">
          <Navigation />
        </Col>
        <Col md="9" xl="10">
          <PublicInfo />
          <PrivateInfo />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Settings;
