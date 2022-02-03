import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import Chart from "./Chart";
import Header from "./Header";
import Markets from "./Markets";
import Orders from "./Orders";
import Tickers from "./Tickers";

const Crypto = () => (
  <React.Fragment>
    <Helmet title="Crypto Dashboard" />
    <Container fluid className="p-0">
      <Header />
      <Tickers />
      <Row>
        <Col lg="5" className="d-flex col-xxl-4">
          <Markets />
        </Col>
        <Col lg="7" className="d-flex col-xxl-8">
          <Chart />
        </Col>
      </Row>
      <Orders />
    </Container>
  </React.Fragment>
);

export default Crypto;
