import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      Guards can be used to protect private or public routes based on the
      current user role.
    </p>
  </div>
);

const AuthGuard = () => (
  <div className="mb-5">
    <h3>Auth Guard</h3>
    <p className="text-lg">
      The AuthGuard component can be used to protect a private route from
      unauthenticated users.
    </p>
    <Code>{`import AuthGuard from "../components/guards/AuthGuard";
        
function Component() {
  return (
    <AuthGuard>
      <PrivateExampleComponent />
    </AuthGuard>
  )
}`}</Code>
  </div>
);

const GuestGuard = () => (
  <div className="mb-5">
    <h3>Guest Guard</h3>
    <p className="text-lg">
      The GuestGuard component can be used to protect a route from authenticated
      users.
    </p>
    <Code>{`import GuestGuard from "../components/guards/GuestGuard";
        
function Component() {
  return (
    <GuestGuard>
      <PublicExampleComponent />
    </GuestGuard>
  )
}`}</Code>
  </div>
);

const Guards = () => (
  <React.Fragment>
    <Helmet title="Guards" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Guards</h1>
          <hr className="my-4" />
          <Intro />
          <AuthGuard />
          <GuestGuard />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Guards;
