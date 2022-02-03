import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Col, Card, Row } from "react-bootstrap";

import { DollarSign, ShoppingBag } from "react-feather";

import illustration from "../../../assets/img/illustrations/customer-support.png";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <Row>
      <Col md="6" xl className="d-flex">
        <Card className="illustration flex-fill">
          <Card.Body className="p-0 d-flex flex-fill">
            <Row className="g-0 w-100">
              <Col xs="6">
                <div className="illustration-text p-3 m-1">
                  <h4 className="illustration-text">
                    {t("Welcome back")}, Chris!
                  </h4>
                  <p className="mb-0">AppStack Dashboard</p>
                </div>
              </Col>
              <Col xs={6} className="align-self-end text-end">
                <img
                  src={illustration}
                  alt="Customer Support"
                  className="img-fluid illustration-img"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6" xl className="d-flex">
        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">$ 24.300</h3>
                <p className="mb-2">Total Earnings</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +5.35%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <DollarSign className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6" xl className="d-flex">
        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">43</h3>
                <p className="mb-2">Pending Orders</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-danger me-2">
                    -4.25%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <ShoppingBag className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6" xl className="d-flex">
        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">$ 18.700</h3>
                <p className="mb-2">Total Revenue</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +8.65%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <DollarSign className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Statistics;
