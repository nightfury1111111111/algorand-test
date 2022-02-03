import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import Timeline from "./Timeline";
import User from "./User";
import Following from "./Following";
import Activities from "./Activities";

const Social = () => (
  <React.Fragment>
    <Helmet title="Social Dashboard" />
    <Container className="p-0">
      <Row>
        <Col lg="8">
          <Timeline />
        </Col>
        <Col lg="4">
          <User />
          <Following />
          <Activities />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Social;
