import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      To format code automatically, we've included a basic ESLint & Prettier
      configuration. ESLint statically analyzes your code to quickly find
      problems. Prettier is used to automatically format the code you write to
      ensure a consistent code style withing your projects.
    </p>
    <p className="text-lg">Included ESLint configuration:</p>

    <Code>{`{
  "extends": ["react-app", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}`}</Code>
  </div>
);

const Usage = () => (
  <div className="mb-5">
    <h3>Usage</h3>
    <p className="text-lg">Format all source files in the /src folder:</p>

    <Code>npm run lint</Code>
  </div>
);

const VSCodeIntegration = () => (
  <div className="mb-5">
    <h3>VSCode integration</h3>
    <p className="text-lg">
      To use ESLint & Prettier in combination with VSCode, we suggest installing
      the{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
      >
        VSCode ESLint extension
      </a>
      . After installing the extension, the code will automatically be
      formatted. The following configuration is included, which can be
      enabled/disabled or adjusted to your needs.
    </p>

    <Code>{`{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}`}</Code>
  </div>
);

const ESLintAndPrettier = () => (
  <React.Fragment>
    <Helmet title="Support" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>ESLint &amp; Prettier</h1>
          <hr className="my-4" />
          <Intro />
          <Usage />
          <VSCodeIntegration />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default ESLintAndPrettier;
