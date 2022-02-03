import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

import dragula from "react-dragula";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";

const Lane = ({ name, children, onContainerLoaded }) => {
  const handleContainerLoaded = (container) => {
    if (container) {
      onContainerLoaded(container);
    }
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">{name}</Card.Title>
        <h6 className="card-subtitle text-muted">
          Nam pretium turpis et arcu. Duis arcu.
        </h6>
      </Card.Header>
      <Card.Body>
        <div ref={handleContainerLoaded}>{children}</div>
        <div className="d-grid">
          <Button variant="primary">Add new task</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const Task = ({ id, checked, text, avatar }) => (
  <Card className="mb-3 bg-light cursor-grab border">
    <Card.Body className="p-3">
      <div className="float-end">
        <Form.Check
          type="checkbox"
          id={"exampleCustomCheckbox" + id}
          defaultChecked={checked ? true : false}
        />
      </div>
      <p>{text}</p>
      <div className="float-end mt-n1">
        <img
          src={avatar}
          width="32"
          height="32"
          className="rounded-circle"
          alt="Avatar"
        />
      </div>
      <Button variant="primary" size="sm">
        View
      </Button>
    </Card.Body>
  </Card>
);

const containers = [];

const Tasks = () => {
  const onContainerReady = (container) => {
    containers.push(container);
  };

  useEffect(() => {
    dragula(containers);
  }, []);

  return (
    <React.Fragment>
      <Helmet title="Tasks" />
      <Container fluid className="p-0">
        <Button variant="primary" className="float-end mt-n1">
          <FontAwesomeIcon icon={faPlus} /> New task
        </Button>
        <h1 className="h3 mb-3">Tasks</h1>

        <Row>
          <Col lg="6" xl="4">
            <Lane name="Upcoming" onContainerLoaded={onContainerReady}>
              <Task
                id="1"
                avatar={avatar1}
                text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
                checked
              />
              <Task
                id="2"
                avatar={avatar2}
                text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
                checked
              />
              <Task
                id="3"
                avatar={avatar3}
                text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
              />
              <Task
                id="4"
                avatar={avatar4}
                text="In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique."
              />
              <Task
                id="5"
                avatar={avatar2}
                text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
              />
            </Lane>
          </Col>
          <Col lg="6" xl="4">
            <Lane name="In Progress" onContainerLoaded={onContainerReady}>
              <Task
                id="6"
                avatar={avatar1}
                text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
              />
              <Task
                id="7"
                avatar={avatar3}
                text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
              />
              <Task
                id="8"
                avatar={avatar2}
                text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
              />
            </Lane>
          </Col>
          <Col lg="6" xl="4">
            <Lane name="Completed" onContainerLoaded={onContainerReady}>
              <Task
                id="13"
                avatar={avatar2}
                text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
              />
              <Task
                id="14"
                avatar={avatar4}
                text="In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique."
              />
              <Task
                id="15"
                avatar={avatar3}
                text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
              />
              <Task
                id="16"
                avatar={avatar1}
                text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
              />
              <Task
                id="17"
                avatar={avatar3}
                text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
              />
            </Lane>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Tasks;
