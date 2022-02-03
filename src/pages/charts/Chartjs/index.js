import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Line from "./Line";
import Bar from "./Bar";
import Doughnut from "./Doughnut";
import Pie from "./Pie";
import Radar from "./Radar";
import Polar from "./Polar";

const Chartjs = () => (
  <React.Fragment>
    <Helmet title="Chart.js" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Chart.js</h1>

      <Row>
        <Col lg="6">
          <Line />
        </Col>
        <Col lg="6">
          <Bar />
        </Col>
        <Col lg="6">
          <Doughnut />
        </Col>
        <Col lg="6">
          <Pie />
        </Col>
        <Col lg="6">
          <Radar />
        </Col>
        <Col lg="6">
          <Polar />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Chartjs;
