import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";

const GridText = ({ children }) => (
  <Card className="bg-light py-2 py-md-3 text-center border">
    <Card.Body>{children}</Card.Body>
  </Card>
);

const Grid = () => (
  <React.Fragment>
    <Helmet title="Grid" />

    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Grid</h1>

      <Card>
        <Card.Header>
          <Card.Title tag="h5">Grid system</Card.Title>
          <h6 className="card-subtitle text-muted">
            Powerful mobile-first flexbox grid
          </h6>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md="12">
              <GridText>.col-md-12</GridText>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <GridText>.col-md-6</GridText>
            </Col>
            <Col md="6">
              <GridText>.col-md-6</GridText>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <GridText>.col-md-4</GridText>
            </Col>
            <Col md="4">
              <GridText>.col-md-4</GridText>
            </Col>
            <Col md="4">
              <GridText>.col-md-4</GridText>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <GridText>.col-md-3</GridText>
            </Col>
            <Col md="3">
              <GridText>.col-md-3</GridText>
            </Col>
            <Col md="3">
              <GridText>.col-md-3</GridText>
            </Col>
            <Col md="3">
              <GridText>.col-md-3</GridText>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <GridText>.col-md-2</GridText>
            </Col>
            <Col md="2">
              <GridText>.col-md-2</GridText>
            </Col>
            <Col md="2">
              <GridText>.col-md-2</GridText>
            </Col>
            <Col md="2">
              <GridText>.col-md-2</GridText>
            </Col>
            <Col md="2">
              <GridText>.col-md-2</GridText>
            </Col>
            <Col md="2">
              <GridText>.col-md-2</GridText>
            </Col>
          </Row>
          <Row>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
            <Col md="1">
              <GridText>.col-md-1</GridText>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <GridText>.col-md-8</GridText>
            </Col>
            <Col md="4">
              <GridText>.col-md-4</GridText>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <GridText>.col-md-3</GridText>
            </Col>
            <Col md="6">
              <GridText>.col-md-6</GridText>
            </Col>
            <Col md="3">
              <GridText>.col-md-3</GridText>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  </React.Fragment>
);

export default Grid;
