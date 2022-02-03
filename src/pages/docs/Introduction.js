import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      Hello, I hope you find this template useful. AppStack React has been
      crafted on top of Bootstrap 5 and React. The included docs don't replace
      the official ones, but provide a clear view of all extended styles and new
      components that this template provides on top of Bootstrap 5.
    </p>

    <p className="text-lg">
      The docs includes information to understand how the theme is organized,
      how to make changes to the source code, and how to compile and extend it
      to fit your needs.
    </p>
  </div>
);

const TableOfContents = () => (
  <div className="mb-5">
    <h3>Table of Contents</h3>
    <ul className="text-lg">
      <li>
        <Link to="/docs/getting-started">Getting started</Link>
      </li>
      <li>
        <Link to="/docs/environment-variables">Environment Variables</Link>
      </li>
      <li>
        <Link to="/docs/routing">Routing</Link>
      </li>
      <li>
        <Link to="/docs/auth/auth0">Auth0 Authentication</Link>
      </li>
      <li>
        <Link to="/docs/auth/firebase">Firebase Authentication</Link>
      </li>
      <li>
        <Link to="/docs/auth/jwt">JWT Authentication</Link>
      </li>
      <li>
        <Link to="/docs/guards">Guards</Link>
      </li>
      <li>
        <Link to="/docs/deployment">Deployment</Link>
      </li>
      <li>
        <Link to="/docs/api-calls">API Calls</Link>
      </li>
      <li>
        <Link to="/docs/redux">Redux</Link>
      </li>
      <li>
        <Link to="/docs/internationalization">Internationalization</Link>
      </li>
      <li>
        <Link to="/docs/eslint-and-prettier">ESLint & Prettier</Link>
      </li>
      <li>
        <Link to="/docs/migrating-to-next-js">Migrating to Next.js</Link>
      </li>
      <li>
        <Link to="/docs/support">Support</Link>
      </li>
      <li>
        <Link to="/docs/changelog">Changelog</Link>
      </li>
    </ul>
  </div>
);

const SomethingMissing = () => (
  <div className="mb-5">
    <h3>Something missing?</h3>
    <p className="text-lg">
      If something is missing in the documentation or if you found some part
      confusing, please send us an email (
      <a href="mailto:support@bootlab.io">support@bootlab.io</a>) with your
      suggestions for improvement. We love hearing from you!
    </p>
  </div>
);

const Introduction = () => (
  <React.Fragment>
    <Helmet title="Introduction" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Documentation</h1>
          <hr className="my-4" />
          <Intro />
          <TableOfContents />
          <SomethingMissing />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Introduction;
