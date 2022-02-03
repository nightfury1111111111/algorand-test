import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Card, Col, Container, Row, Alert } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const colors = ["primary", "secondary", "success", "danger", "warning", "info"];

const DefaultAlerts = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Default alerts</Card.Title>
      <h6 className="card-subtitle text-muted">
        Alerts with contextual background color.
      </h6>
    </Card.Header>
    <Card.Body>
      {colors.map((color, key) => (
        <Alert variant={color} key={key} dismissible>
          <div className="alert-message">
            <strong>Hello there!</strong> A simple {color} alert—check it out!
          </div>
        </Alert>
      ))}
    </Card.Body>
  </Card>
);

const IconAlerts = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Icon alerts</Card.Title>
      <h6 className="card-subtitle text-muted">
        Alerts with icon and background color.
      </h6>
    </Card.Header>
    <Card.Body>
      {colors.map((color, key) => (
        <Alert variant={color} key={key} dismissible>
          <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </div>
          <div className="alert-message">
            <strong>Hello there!</strong> A simple {color} alert—check it out!
          </div>
        </Alert>
      ))}
    </Card.Body>
  </Card>
);

const OutlineAlerts = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Outline alerts</Card.Title>
      <h6 className="card-subtitle text-muted">
        Alerts with contextual icon background.
      </h6>
    </Card.Header>
    <Card.Body>
      {colors.map((color, key) => (
        <Alert variant={color} className="alert-outline" key={key} dismissible>
          <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </div>
          <div className="alert-message">
            <strong>Hello there!</strong> A simple {color} alert—check it out!
          </div>
        </Alert>
      ))}
    </Card.Body>
  </Card>
);

const ColouredOutlineAlerts = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Colored outline alerts</Card.Title>
      <h6 className="card-subtitle text-muted">
        Alerts with contextual outline color.
      </h6>
    </Card.Header>
    <Card.Body>
      {colors.map((color, key) => (
        <Alert
          variant={color}
          className="alert-outline-coloured"
          key={key}
          dismissible
        >
          <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </div>
          <div className="alert-message">
            <strong>Hello there!</strong> A simple {color} alert—check it out!
          </div>
        </Alert>
      ))}
    </Card.Body>
  </Card>
);

const AdditionalContentAlerts = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Alerts with additonal content</Card.Title>
      <h6 className="card-subtitle text-muted">Alerts with large contents.</h6>
    </Card.Header>
    <Card.Body>
      <Alert variant="primary" dismissible>
        <div className="alert-message">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </div>
      </Alert>
      <Alert variant="primary" className="alert-outline" dismissible>
        <div className="alert-message">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </div>
      </Alert>
    </Card.Body>
  </Card>
);

const AlertsWithButtons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Alerts with buttons</Card.Title>
      <h6 className="card-subtitle text-muted">Alerts with actions.</h6>
    </Card.Header>
    <Card.Body>
      <Alert variant="primary" dismissible>
        <div className="alert-message">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <div className="btn-list">
            <Button variant="light" className="me-1">
              Okay
            </Button>
            <Button variant="secondary">No, thanks</Button>
          </div>
        </div>
      </Alert>
      <Alert variant="primary" className="alert-outline" dismissible>
        <div className="alert-message">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <div className="btn-list">
            <Button variant="success" className="me-1">
              Okay
            </Button>
            <Button variant="danger">No, thanks</Button>
          </div>
        </div>
      </Alert>
    </Card.Body>
  </Card>
);

const Alerts = () => (
  <React.Fragment>
    <Helmet title="Alerts" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Alerts</h1>

      <Row>
        <Col lg="6">
          <DefaultAlerts />
        </Col>
        <Col lg="6">
          <IconAlerts />
        </Col>
        <Col lg="6">
          <OutlineAlerts />
        </Col>
        <Col lg="6">
          <ColouredOutlineAlerts />
        </Col>
        <Col lg="6">
          <AdditionalContentAlerts />
        </Col>
        <Col lg="6">
          <AlertsWithButtons />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Alerts;
