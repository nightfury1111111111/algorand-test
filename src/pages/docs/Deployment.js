import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      <code>npm run build</code> creates a build directory with a production
      build of your app. Set up your favorite HTTP server so that a visitor to
      your site is served index.html, and requests to static paths like{" "}
      <code>{`/static/js/main.<hash>.js`}</code> are served with the contents of
      the <code>{`/static/js/main.<hash>.js`}</code> file.
    </p>
  </div>
);

const StaticServer = () => (
  <div className="mb-5">
    <h3>Static Server</h3>
    <p className="text-lg">
      For environments using{" "}
      <a
        href="https://nodejs.org/en/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Node
      </a>
      , the easiest way to handle this would be to install{" "}
      <a
        href="https://github.com/zeit/serve"
        target="_blank"
        rel="noreferrer noopener"
      >
        serve
      </a>{" "}
      and let it handle the rest:
    </p>
    <Code>{`npm install -g serve
serve -s build`}</Code>

    <p className="text-lg">
      The last command shown above will serve your static site on the port 5000.
      Like many of
      <a
        href="https://github.com/vercel/serve"
        target="_blank"
        rel="noreferrer noopener"
      >
        serve
      </a>
      ’s internal settings, the port can be adjusted using the <code>-l</code>{" "}
      or <code>--listen</code> flags:
    </p>
    <Code>serve -s build -l 4000</Code>

    <p className="text-lg">
      Run this command to get a full list of the options available:
    </p>
    <Code>serve -h</Code>
  </div>
);

const OtherSolutions = () => (
  <div className="mb-5">
    <h3>Other Solutions</h3>
    <p className="text-lg">
      You don’t necessarily need a static server in order to run a Create React
      App project in production. It also works well when integrated into an
      existing server side app.
    </p>
  </div>
);

const Express = () => (
  <div className="mb-5">
    <h4>Express</h4>
    <p className="text-lg">
      Express is a fast, unopinionated, minimalist web framework for Node.js.
      Here’s a programmatic example:
    </p>
    <Code>{`const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);`}</Code>
  </div>
);

const Netlify = () => (
  <div className="mb-5">
    <h4>Netlify</h4>
    <p className="text-lg">
      Deploy modern static websites with Netlify. Get CDN, Continuous
      deployment, 1-click HTTPS, and all the services you need.
    </p>
    <p className="text-lg">To do a manual deploy to Netlify’s CDN:</p>
    <Code>{`npm install netlify-cli -g
netlify deploy`}</Code>

    <p className="text-lg">
      Choose <code>build</code> as the path to deploy.
    </p>
    <p className="text-lg">
      To setup continuous delivery:
      <br />
      With this setup Netlify will build and deploy when you push to git or open
      a pull request:
    </p>
    <ol className="text-lg">
      <li>
        <a
          href="https://app.netlify.com/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start a new netlify project
        </a>
      </li>
      <li>Pick your Git hosting service and select your repository</li>
      <li>
        Click <code>Build your site</code>
      </li>
    </ol>
  </div>
);

const Deployment = () => (
  <React.Fragment>
    <Helmet title="Deployment" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Deployment</h1>
          <hr className="my-4" />
          <Intro />
          <StaticServer />
          <OtherSolutions />
          <Express />
          <Netlify />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Deployment;
