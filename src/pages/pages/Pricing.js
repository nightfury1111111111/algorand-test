import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
  Tab,
} from "react-bootstrap";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <React.Fragment>
      <Helmet title="Plans & Pricing" />

      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Plans & Pricing</h1>

        <Row>
          <Col md="10" xl="8" className="mx-auto">
            <h1 className="text-center">We have a plan for everyone</h1>
            <p className="lead text-center mb-4">
              Whether you're a business or an individual, 14-day trial no credit
              card required.
            </p>

            <Tab.Container id="pricing-tabs" activeKey={activeTab}>
              <Row className="justify-content-center mt-3 mb-2">
                <Col xs="auto">
                  <ButtonGroup>
                    <Button
                      variant="outline-primary"
                      onClick={() => setActiveTab("monthly")}
                      className={activeTab === "monthly" ? "active" : ""}
                    >
                      Monthly billing
                    </Button>
                    <Button
                      variant="outline-primary"
                      onClick={() => setActiveTab("annual")}
                      className={activeTab === "annual" ? "active" : ""}
                    >
                      Annual billing
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>

              <Tab.Content>
                <Tab.Pane eventKey="monthly">
                  <Row className="py-4">
                    <Col sm="4" className="mb-3 mb-md-0">
                      <Card className="text-center h-100">
                        <Card.Body className="d-flex flex-column">
                          <div className="mb-4">
                            <h5>Free</h5>
                            <span className="display-4">$0</span>
                          </div>
                          <h6>Includes:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">1 users</li>
                            <li className="mb-2">5 projects</li>
                            <li className="mb-2">5 GB storage</li>
                          </ul>
                          <div className="mt-auto">
                            <Button size="lg" variant="outline-primary">
                              Sign up
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4" className="mb-3 mb-md-0">
                      <Card className="text-center h-100">
                        <Card.Body className="d-flex flex-column">
                          <div className="mb-4">
                            <h5>Standard</h5>
                            <span className="display-4">$19</span>
                            <span>/mo</span>
                          </div>
                          <h6>Includes:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">5 users</li>
                            <li className="mb-2">50 projects</li>
                            <li className="mb-2">50 GB storage</li>
                            <li className="mb-2">Security policy</li>
                            <li className="mb-2">Weekly backups</li>
                          </ul>
                          <div className="mt-auto">
                            <Button size="lg" variant="primary">
                              Try it for free
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4" className="mb-3 mb-md-0">
                      <Card className="text-center h-100">
                        <Card.Body className="d-flex flex-column">
                          <div className="mb-4">
                            <h5>Plus</h5>
                            <span className="display-4">$39</span>
                            <span>/mo</span>
                          </div>
                          <h6>Includes:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">Unlimited users</li>
                            <li className="mb-2">Unlimited projects</li>
                            <li className="mb-2">250 GB storage</li>
                            <li className="mb-2">Priority support</li>
                            <li className="mb-2">Security policy</li>
                            <li className="mb-2">Daily backups</li>
                            <li className="mb-2">Custom CSS</li>
                          </ul>
                          <div className="mt-auto">
                            <Button size="lg" variant="outline-primary">
                              Try it for free
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="annual">
                  <Row className="py-4">
                    <Col sm="4" className="mb-3 mb-md-0">
                      <Card className="text-center h-100">
                        <Card.Body className="d-flex flex-column">
                          <div className="mb-4">
                            <h5>Free</h5>
                            <span className="display-4">$0</span>
                          </div>
                          <h6>Includes:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">1 users</li>
                            <li className="mb-2">5 projects</li>
                            <li className="mb-2">5 GB storage</li>
                          </ul>
                          <div className="mt-auto">
                            <Button size="lg" variant="outline-primary">
                              Sign up
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4" className="mb-3 mb-md-0">
                      <Card className="text-center h-100">
                        <Card.Body className="d-flex flex-column">
                          <div className="mb-4">
                            <h5>Standard</h5>
                            <span className="display-4">$199</span>
                            <span>/mo</span>
                          </div>
                          <h6>Includes:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">5 users</li>
                            <li className="mb-2">50 projects</li>
                            <li className="mb-2">50 GB storage</li>
                            <li className="mb-2">Security policy</li>
                            <li className="mb-2">Weekly backups</li>
                          </ul>
                          <div className="mt-auto">
                            <Button size="lg" variant="primary">
                              Try it for free
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm="4" className="mb-3 mb-md-0">
                      <Card className="text-center h-100">
                        <Card.Body className="d-flex flex-column">
                          <div className="mb-4">
                            <h5>Plus</h5>
                            <span className="display-4">$399</span>
                            <span>/mo</span>
                          </div>
                          <h6>Includes:</h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">Unlimited users</li>
                            <li className="mb-2">Unlimited projects</li>
                            <li className="mb-2">250 GB storage</li>
                            <li className="mb-2">Priority support</li>
                            <li className="mb-2">Security policy</li>
                            <li className="mb-2">Daily backups</li>
                            <li className="mb-2">Custom CSS</li>
                          </ul>
                          <div className="mt-auto">
                            <Button size="lg" variant="outline-primary">
                              Try it for free
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            <hr />

            <div className="text-center my-4">
              <h2>Frequently asked questions</h2>
            </div>
            <Row>
              <Col sm="6" md="5" className="ms-auto">
                <Card>
                  <Card.Body>
                    <Card.Title tag="h5">
                      Do I need a credit card to sign up?
                    </Card.Title>
                    <p className="mb-0">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam semper libero, sit amet adipiscing sem
                      neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" md="5" className="me-auto">
                <Card>
                  <Card.Body>
                    <Card.Title tag="h5">Do you offer a free trial?</Card.Title>
                    <p className="mb-0">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam semper libero, sit amet adipiscing sem
                      neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" md="5" className="ms-auto">
                <Card>
                  <Card.Body>
                    <Card.Title tag="h5">
                      What if I decide to cancel my plan?
                    </Card.Title>
                    <p className="mb-0">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam semper libero, sit amet adipiscing sem
                      neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" md="5" className="me-auto">
                <Card>
                  <Card.Body>
                    <Card.Title tag="h5">Can I cancel at anytime?</Card.Title>
                    <p className="mb-0">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam semper libero, sit amet adipiscing sem
                      neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Pricing;
