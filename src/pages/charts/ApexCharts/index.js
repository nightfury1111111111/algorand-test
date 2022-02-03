import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Line from "./Line";
import Area from "./Area";
import Bar from "./Bar";
import Column from "./Column";
import Pie from "./Pie";
import Heatmap from "./Heatmap";
import Mixed from "./Mixed";
import Candlestick from "./Candlestick";

const ApexCharts = () => {
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }, []);

  return (
    <React.Fragment>
      <Helmet title="ApexCharts" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">ApexCharts</h1>

        <Row>
          <Col lg="6">
            <Line />
          </Col>
          <Col lg="6">
            <Area />
          </Col>
          <Col lg="6">
            <Bar />
          </Col>
          <Col lg="6">
            <Column />
          </Col>
          <Col lg="6">
            <Pie />
          </Col>
          <Col lg="6">
            <Heatmap />
          </Col>
          <Col lg="6">
            <Mixed />
          </Col>
          <Col lg="6">
            <Candlestick />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ApexCharts;
