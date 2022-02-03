import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";

import NotyfContext from "../../contexts/NotyfContext";

const Notifications = () => {
  const notyf = useContext(NotyfContext);

  const [message, setMessage] = useState("");
  const [type, setType] = useState("default");
  const [duration, setDuration] = useState("2500");
  const [ripple, setRipple] = useState(true);
  const [dismissible, setDismissible] = useState(false);
  const [positionX, setPositionX] = useState("right");
  const [positionY, setPositionY] = useState("top");

  return (
    <React.Fragment>
      <Helmet title="Notifications" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Notifications</h1>

        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title tag="h5">Toast notifications</Card.Title>
                <h6 className="card-subtitle text-muted">
                  Notyf is a minimalistic JavaScript library for toast
                  notifications.
                </h6>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md="8">
                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter a message"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Type</Form.Label>
                      <Form.Select
                        className="mb-3"
                        defaultValue="default"
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="default">Default</option>
                        <option value="success">Success</option>
                        <option value="warning">Warning</option>
                        <option value="danger">Danger</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Duration</Form.Label>
                      <Form.Select
                        className="mb-3"
                        defaultValue="5000"
                        onChange={(e) => setDuration(e.target.value)}
                      >
                        <option value="2500">2.5s</option>
                        <option value="5000">5s</option>
                        <option value="7500">7.5s</option>
                        <option value="10000">10s</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Check
                      type="checkbox"
                      label="With ripple"
                      defaultChecked={true}
                      onChange={() => setRipple(!ripple)}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Dismissible"
                      defaultChecked={false}
                      onChange={() => setDismissible(!dismissible)}
                    />
                  </Col>
                  <Col md="4">
                    <Form.Group className="mb-3">
                      <Form.Label>Position X</Form.Label>
                      <Form.Check
                        type="radio"
                        name="positionX"
                        label="Left"
                        value="left"
                        onChange={() => setPositionX("left")}
                        checked={positionX === "left"}
                      />
                      <Form.Check
                        type="radio"
                        name="positionX"
                        label="Center"
                        value="center"
                        onChange={() => setPositionX("center")}
                        checked={positionX === "center"}
                      />
                      <Form.Check
                        type="radio"
                        name="positionX"
                        label="Right"
                        value="right"
                        onChange={() => setPositionX("right")}
                        checked={positionX === "right"}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Position Y</Form.Label>
                      <Form.Check
                        type="radio"
                        name="positionY"
                        label="Top"
                        value="top"
                        onChange={() => setPositionY("top")}
                        checked={positionY === "top"}
                      />
                      <Form.Check
                        type="radio"
                        name="positionY"
                        label="Bottom"
                        value="bottom"
                        onChange={() => setPositionY("bottom")}
                        checked={positionY === "bottom"}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <Button
                  onClick={() =>
                    notyf.open({
                      type,
                      message: message
                        ? message
                        : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                      duration,
                      ripple,
                      dismissible,
                      position: {
                        x: positionX,
                        y: positionY,
                      },
                    })
                  }
                >
                  Show notification
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Notifications;
