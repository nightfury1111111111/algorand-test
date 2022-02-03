import React from "react";
import { Col, Card, Badge, Row } from "react-bootstrap";

import { Activity, ShoppingBag, ShoppingCart } from "react-feather";

import illustration from "../../../assets/img/illustrations/social.png";

const Statistics = () => (
  <Row>
    <Col md="6" className="col-xxl-3 d-flex">
      <Card className="flex-fill">
        <Card.Body>
          <Row>
            <Col className="mt-0">
              <h5 className="card-title">Income</h5>
            </Col>

            <Col xs="auto">
              <div className="stat stat-sm">
                <ShoppingBag className="align-middle" />
              </div>
            </Col>
          </Row>
          <span className="h1 d-inline-block mt-1 mb-3">$37.500</span>
          <div className="mb-0">
            <Badge bg="" className="badge-soft-success me-2">
              6.25%
            </Badge>
            <span className="text-muted">Since last week</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
    <Col md="6" className="col-xxl-3 d-flex">
      <Card className="flex-fill">
        <Card.Body>
          <Row>
            <Col className="mt-0">
              <h5 className="card-title">Orders</h5>
            </Col>

            <Col xs="auto">
              <div className="stat stat-sm">
                <ShoppingCart className="align-middle" />
              </div>
            </Col>
          </Row>
          <span className="h1 d-inline-block mt-1 mb-3">3.282</span>
          <div className="mb-0">
            <Badge bg="" className="badge-soft-danger me-2">
              -4.65%{" "}
            </Badge>
            <span className="text-muted">Since last week</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
    <Col md="6" className="col-xxl-3 d-flex">
      <Card className="flex-fill">
        <Card.Body>
          <Row>
            <Col className="mt-0">
              <h5 className="card-title">Activity</h5>
            </Col>

            <Col xs="auto">
              <div className="stat stat-sm">
                <Activity className="align-middle" />
              </div>
            </Col>
          </Row>
          <span className="h1 d-inline-block mt-1 mb-3">19.312</span>
          <div className="mb-0">
            <Badge bg="" className="badge-soft-success me-2">
              8.35%
            </Badge>
            <span className="text-muted">Since last week</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
    <Col md="6" className="col-xxl-3 d-flex">
      <Card className="illustration flex-fill">
        <Card.Body className="p-0 d-flex flex-fill">
          <Row className="g-0 w-100">
            <Col xs="6">
              <div className="illustration-text p-3 m-1">
                <h4 className="illustration-text">Welcome Back, Chris!</h4>
                <p className="mb-0">AppStack Dashboard</p>
              </div>
            </Col>
            <Col xs="6" className="align-self-end text-end">
              <img
                src={illustration}
                alt="Social"
                className="img-fluid illustration-img"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Statistics;
