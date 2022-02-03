import React from "react";
import { Helmet } from "react-helmet-async";

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import { Home, Settings, MessageSquare } from "react-feather";

const TabsWithTextLabel = ({ name, className }) => (
  <div className={"tab " + className}>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="first">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Messages</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h4 className="tab-title">{name} tabs</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
            massa. Cum sociis natoque penatibus et magnis neque dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h4 className="tab-title">Another one</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
            massa. Cum sociis natoque penatibus et magnis neque dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <h4 className="tab-title">One more</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
            massa. Cum sociis natoque penatibus et magnis neque dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </div>
);

const TabsWithIconLabel = ({ name, className }) => (
  <div className={"tab " + className}>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="first">
            <Home />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">
            <Settings />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">
            <MessageSquare />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h4 className="tab-title">{name} tabs</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
            massa. Cum sociis natoque penatibus et magnis neque dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h4 className="tab-title">Another one</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
            massa. Cum sociis natoque penatibus et magnis neque dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <h4 className="tab-title">One more</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
            massa. Cum sociis natoque penatibus et magnis neque dis parturient
            montes, nascetur ridiculus mus.
          </p>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </div>
);

const TabsComponent = () => (
  <React.Fragment>
    <Helmet title="Tabs" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Tabs</h1>

      <Row>
        <Col lg="6">
          <TabsWithTextLabel name="Default" />
        </Col>
        <Col lg="6">
          <TabsWithTextLabel name="Colored" className="tab-primary" />
        </Col>

        <Col lg="6">
          <TabsWithIconLabel name="Icon" />
        </Col>
        <Col lg="6">
          <TabsWithIconLabel name="Colored icon" className="tab-success" />
        </Col>
        <Col lg="6">
          <TabsWithIconLabel name="Vertical icon" className="tab-vertical" />
        </Col>
        <Col lg="6">
          <TabsWithIconLabel
            name="Colored vertical icon"
            className="tab-danger tab-vertical"
          />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default TabsComponent;
