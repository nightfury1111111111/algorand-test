import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import World from "./World";
import Africa from "./Africa";
import Asia from "./Asia";
import Europe from "./Europe";
import NorthAmerica from "./NorthAmerica";
import Oceania from "./Oceania";
import SouthAmerica from "./SouthAmerica";
import USA from "./USA";
import China from "./China";

const VectorMaps = () => (
  <React.Fragment>
    <Helmet title="Vector Maps" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Vector Maps</h1>

      <World />
      <Row>
        <Col lg="6">
          <Africa />
        </Col>
        <Col lg="6">
          <Asia />
        </Col>
        <Col lg="6">
          <Europe />
        </Col>
        <Col lg="6">
          <NorthAmerica />
        </Col>
        <Col lg="6">
          <Oceania />
        </Col>
        <Col lg="6">
          <SouthAmerica />
        </Col>
        <Col lg="6">
          <USA />
        </Col>
        <Col lg="6">
          <China />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default VectorMaps;
