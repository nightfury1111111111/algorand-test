import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";

const Blank = () => (
  <React.Fragment>
    <Helmet title="Blank Page" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Blank Page</h1>

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title tag="h5" className="mb-0">
                Empty card
              </Card.Title>
            </Card.Header>
            <Card.Body>&nbsp;</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Blank;
