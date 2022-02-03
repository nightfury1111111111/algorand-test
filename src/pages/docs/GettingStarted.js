import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const QuickStart = () => (
  <div className="mb-5">
    <h3>Installation</h3>
    <p className="text-lg">
      This project was bootstrapped with{" "}
      <a href="https://github.com/facebook/create-react-app">
        Create React App
      </a>
      . You'll need to install <a href="https://nodejs.org/en/">Node.js</a>{" "}
      before using Appstack React.
    </p>

    <p className="text-lg mb-3">
      Once Node.js is installed, run <code>npm install</code> to install the
      rest of AppStack React's dependencies. All dependencies will be downloaded
      to the <code>node_modules</code> directory.
    </p>
    <Code>npm install</Code>

    <p className="text-lg mb-3">
      Now you're ready to modify the source files and generate new{" "}
      <code>build/</code> files. AppStack is using webpack and webpack-serve to
      automatically detect file changes and start a local webserver at{" "}
      <code>http://localhost:3000</code>.
    </p>
    <Code>npm start</Code>
  </div>
);

const BuildTools = () => (
  <div className="mb-5">
    <h3>Build tools</h3>
    <p className="text-lg mb-3">
      Start a local webserver at <code>http://localhost:3000</code> and detect
      file changes:
    </p>
    <Code>npm start</Code>

    <p className="text-lg mb-3">
      Compile, optimize, minify and uglify all source files to{" "}
      <code>build/</code>:
    </p>
    <Code>npm run build</Code>
  </div>
);

const Contents = () => (
  <div className="mb-5">
    <h3>Contents</h3>
    <p className="text-lg mb-3">
      Inside the zip-file you'll find the following directories and files. Both
      compiled and minified distrubution files, as well as the source files are
      included in the package.
    </p>

    <Code>{`theme/
  ├── .eslintrc
  ├── .gitignore
  ├── .prettierrc
  ├── package.json
  ├── package-lock.json
  ├── README.md
  ├── build/
  ├── public/
  │   ├── favicon.ico
  │   └── index.html
  └── src/
      ├── assets/
      │   ├── img/
      │   └── scss/
      ├── components/
      ├── contexts/
      ├── helpers/
      ├── hooks/
      ├── layouts/
      ├── pages/
      ├── App.js
      ├── constants.js
      ├── routes.js
      └── index.js
      `}</Code>
  </div>
);

const GettingStarted = () => (
  <React.Fragment>
    <Helmet title="Getting Started" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Getting Started</h1>
          <hr className="my-4" />
          <QuickStart />
          <BuildTools />
          <Contents />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default GettingStarted;
