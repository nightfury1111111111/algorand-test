import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./Header";
import Appointments from "./Appointments";
import BarChart from "./BarChart";
import Calendar from "./Calendar";
import Feed from "./Feed";
import PieChart from "./PieChart";
import Projects from "./Projects";
import Statistics from "./Statistics";

const Default = () => (
  <React.Fragment>
    <Helmet title="Default Dashboard" />
    <Container fluid className="p-0">
      <Header />
      <Statistics />
      <Row>
        <Col lg="8" className="d-flex">
          <BarChart />
        </Col>
        <Col lg="4" className="d-flex">
          <Feed />
        </Col>
      </Row>
      <Row>
        <Col lg="6" xl="4" className="d-flex">
          <Calendar />
        </Col>
        <Col lg="6" xl="4" className="d-flex">
          <PieChart />
        </Col>
        <Col lg="6" xl="4" className="d-flex">
          <Appointments />
        </Col>
      </Row>
      <Projects />
    </Container>
  </React.Fragment>
);

export default Default;
