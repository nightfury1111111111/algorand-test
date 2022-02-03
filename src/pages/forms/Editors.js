import React from "react";
import ReactQuill from "react-quill";
import { Helmet } from "react-helmet-async";
import { Card, Container } from "react-bootstrap";

const Quill = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Quill</Card.Title>
      <h6 className="card-subtitle text-muted">
        Modern WYSIWYG editor built for compatibility and extensibility.
      </h6>
    </Card.Header>
    <Card.Body>
      <ReactQuill placeholder="Type something" />
    </Card.Body>
  </Card>
);

const Bubble = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Bubble</Card.Title>
      <h6 className="card-subtitle text-muted">
        Bubble is a simple tooltip based theme for Quill.
      </h6>
    </Card.Header>
    <Card.Body>
      <ReactQuill theme="bubble" placeholder="Compase an epic..." />
    </Card.Body>
  </Card>
);

const Editors = () => (
  <React.Fragment>
    <Helmet title="Editors" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Editors</h1>

      <Quill />
      <Bubble />
    </Container>
  </React.Fragment>
);

export default Editors;
