import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import iconsSolid from "./iconsSolid";
import iconsRegular from "./iconsSolid";
import iconsBrands from "./iconsSolid";

const Icon = ({ icon }) => (
  <Col md="6" lg="3">
    <div className="mb-2">
      <FontAwesomeIcon
        className="align-middle me-2"
        icon={icon.icon}
        fixedWidth
      />
      <span className="align-middle">{icon.name}</span>
    </div>
  </Col>
);

const FontAwesomeIcons = () => (
  <React.Fragment>
    <Helmet title="Font Awesome" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Font Awesome</h1>

      <Card>
        <Card.Header>
          <Card.Title tag="h5">Font Awesome Icons</Card.Title>
          <h6 className="card-subtitle text-muted">
            The web’s most popular icon set and toolkit
          </h6>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <h6 className="card-subtitle mb-2 text-muted">Solid icons</h6>
            <Row>
              {iconsSolid.map((icon, iconKey) => (
                <Icon icon={icon} key={iconKey} />
              ))}
            </Row>
          </div>
          <hr />
          <div className="mb-3">
            <h6 className="card-subtitle mb-2 text-muted">Regular icons</h6>
            <Row>
              {iconsRegular.map((icon, iconKey) => (
                <Icon icon={icon} key={iconKey} />
              ))}
            </Row>
          </div>
          <hr />
          <div>
            <h6 className="card-subtitle mb-2 text-muted">Brand icons</h6>
            <Row>
              {iconsBrands.map((icon, iconKey) => (
                <Icon icon={icon} key={iconKey} />
              ))}
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Container>
  </React.Fragment>
);

export default FontAwesomeIcons;
