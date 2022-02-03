import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

const Loader = () => (
  <Container fluid className="vh-50 d-flex">
    <Row className="justify-content-center align-self-center w-100 text-center">
      <Spinner variant="primary" />
    </Row>
  </Container>
);

export default Loader;
