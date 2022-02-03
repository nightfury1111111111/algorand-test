import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      Your project can consume variables declared in your environment as if they
      were declared locally in your JS files. By default you will have{" "}
      <code>NODE_ENV</code> defined for you, and any other environment variables
      starting with <code>REACT_APP_</code>.
    </p>
  </div>
);

const Adding = () => (
  <div className="mb-5">
    <h3>Adding environment variables</h3>
    <p className="text-lg">
      To define permanent environment variables, create a file called{" "}
      <code>.env</code> in the root of your project:
    </p>

    <Code>REACT_APP_NOT_SECRET_CODE=abcdef</Code>

    <p className="text-lg">
      Note: You need to restart the development server after changing{" "}
      <code>.env</code> files.
    </p>
  </div>
);

const Accessing = () => (
  <div className="mb-5">
    <h3>Accessing environment variables</h3>
    <p className="text-lg">
      Environment variables will be defined for you on <code>process.env</code>.
      For example, having an environment variable named{" "}
      <code>REACT_APP_NOT_SECRET_CODE</code>
      will be exposed in your JS as{" "}
      <code>process.env.REACT_APP_NOT_SECRET_CODE</code>.
    </p>

    <Code>{`if (process.env.NODE_ENV !== 'production') {
  // do something
}`}</Code>

    <Code>{`<title>{process.env.REACT_APP_WEBSITE_NAME}</title>`}</Code>

    <p className="text-lg">
      Note: You need to restart the development server after changing{" "}
      <code>.env</code> files.
    </p>
  </div>
);
const LearnMore = () => (
  <div className="mb-5">
    <h3>Learn more</h3>
    <p className="text-lg">
      To learn more about environment variables,{" "}
      <a
        href="https://create-react-app.dev/docs/adding-custom-environment-variables/"
        target="_blank"
        rel="noopener noreferrer"
      >
        click here
      </a>
      .
    </p>
  </div>
);

const EnvironmentVariables = () => (
  <React.Fragment>
    <Helmet title="Environment Variables" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Environment Variables</h1>
          <hr className="my-4" />
          <Intro />
          <Adding />
          <Accessing />
          <LearnMore />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default EnvironmentVariables;
