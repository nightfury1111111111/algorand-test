import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";

const colors = [
  {
    name: "Primary",
    value: "primary",
  },
  {
    name: "Success",
    value: "success",
  },
  {
    name: "Danger",
    value: "danger",
  },
  {
    name: "Warning",
    value: "warning",
  },
];

const sizes = [
  {
    name: "Small",
    value: "sm",
  },
  {
    name: "Medium",
    value: "md",
  },
  {
    name: "Large",
    value: "lg",
  },
];

const DefaultModal = () => {
  const initOpenModals = () => {
    let modals = {};

    colors.forEach((color, index) => {
      modals = Object.assign({}, modals, { [index]: false });
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = (index) => {
    // Toggle selected element
    setOpenModals((openModals) =>
      Object.assign({}, openModals, { [index]: !openModals[index] })
    );
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Default modal</Card.Title>
        <h6 className="card-subtitle text-muted">Default Bootstrap modal.</h6>
      </Card.Header>
      <Card.Body className="text-center">
        <p>
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>

        {colors.map((color, index) => (
          <React.Fragment key={index}>
            <Button
              variant={color.value}
              onClick={() => toggle(index)}
              className="me-1"
            >
              {color.name}
            </Button>
            <Modal show={openModals[index]} onHide={() => toggle(index)}>
              <Modal.Header closeButton>Modal</Modal.Header>
              <Modal.Body className="text-center m-3">
                <p className="mb-0">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to your
                  site for lightboxes, user notifications, or completely custom
                  content.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => toggle(index)}>
                  Close
                </Button>{" "}
                <Button variant={color.value} onClick={() => toggle(index)}>
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
        ))}
      </Card.Body>
    </Card>
  );
};

const ColoredModal = () => {
  const initOpenModals = () => {
    let modals = {};

    colors.forEach((color, index) => {
      modals = Object.assign({}, modals, { [index]: false });
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = (index) => {
    // Toggle selected element
    setOpenModals((openModals) =>
      Object.assign({}, openModals, { [index]: !openModals[index] })
    );
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Colored modal</Card.Title>
        <h6 className="card-subtitle text-muted">Colored Bootstrap modal.</h6>
      </Card.Header>
      <Card.Body className="text-center">
        <p>
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>

        {colors.map((color, index) => (
          <React.Fragment key={index}>
            <Button
              variant={color.value}
              onClick={() => toggle(index)}
              className="me-1"
            >
              {color.name}
            </Button>
            <Modal
              show={openModals[index]}
              onHide={() => toggle(index)}
              className={"modal-colored modal-" + color.value}
            >
              <Modal.Header closeButton className="text-white">
                Colored modal
              </Modal.Header>
              <Modal.Body className="text-center m-3">
                <p className="mb-0 text-white">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to your
                  site for lightboxes, user notifications, or completely custom
                  content.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="light" onClick={() => toggle(index)}>
                  Close
                </Button>{" "}
                <Button variant="light" onClick={() => toggle(index)}>
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
        ))}
      </Card.Body>
    </Card>
  );
};

const CenteredModal = () => {
  const initOpenModals = () => {
    let modals = {};

    colors.forEach((color, index) => {
      modals = Object.assign({}, modals, { [index]: false });
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = (index) => {
    // Toggle selected element
    setOpenModals((openModals) =>
      Object.assign({}, openModals, { [index]: !openModals[index] })
    );
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Centered modal</Card.Title>
        <h6 className="card-subtitle text-muted">Vertically centered modal.</h6>
      </Card.Header>
      <Card.Body className="text-center">
        <p>
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>

        {colors.map((color, index) => (
          <React.Fragment key={index}>
            <Button
              variant={color.value}
              onClick={() => toggle(index)}
              className="me-1"
            >
              {color.name}
            </Button>
            <Modal
              show={openModals[index]}
              onHide={() => toggle(index)}
              centered
            >
              <Modal.Header closeButton>Centered modal</Modal.Header>
              <Modal.Body className="text-center m-3">
                <p className="mb-0">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to your
                  site for lightboxes, user notifications, or completely custom
                  content.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => toggle(index)}>
                  Close
                </Button>{" "}
                <Button variant={color.value} onClick={() => toggle(index)}>
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
        ))}
      </Card.Body>
    </Card>
  );
};

const ModalSizes = () => {
  const initOpenModals = () => {
    let modals = {};

    sizes.forEach((color, index) => {
      modals = Object.assign({}, modals, { [index]: false });
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = (index) => {
    // Toggle selected element
    setOpenModals((openModals) =>
      Object.assign({}, openModals, { [index]: !openModals[index] })
    );
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Modal sizes</Card.Title>
        <h6 className="card-subtitle text-muted">
          These sizes kick in at certain breakpoints to avoid scrollbars on
          smaller viewports.
        </h6>
      </Card.Header>
      <Card.Body className="text-center">
        <p>
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>

        {sizes.map((size, index) => (
          <React.Fragment key={index}>
            <Button
              variant="primary"
              onClick={() => toggle(index)}
              className="me-1"
            >
              {size.name}
            </Button>
            <Modal
              show={openModals[index]}
              onHide={() => toggle(index)}
              size={size.value}
            >
              <Modal.Header closeButton>{size.name} modal</Modal.Header>
              <Modal.Body className="text-center m-3">
                <p className="mb-0">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to your
                  site for lightboxes, user notifications, or completely custom
                  content.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => toggle(index)}>
                  Close
                </Button>{" "}
                <Button variant="primary" onClick={() => toggle(index)}>
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
        ))}
      </Card.Body>
    </Card>
  );
};

const Modals = () => (
  <React.Fragment>
    <Helmet title="Modals" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Modals</h1>

      <Row>
        <Col lg="6">
          <DefaultModal />
        </Col>
        <Col lg="6">
          <ColoredModal />
        </Col>
        <Col lg="6">
          <CenteredModal />
        </Col>
        <Col lg="6">
          <ModalSizes />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Modals;
