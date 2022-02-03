import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      AppStack React is built using Create Rect App. Follow the steps below to
      migrate to Next.js Migrating to Next.js allows you to use SSR, API Routes
      and more.
    </p>
  </div>
);

const OfficialGuide = () => (
  <div className="mb-5">
    <h3>Official Guide</h3>
    <p className="text-lg">
      The official guide on how to migrate from Create React App to Next.js can
      be found{" "}
      <a
        href="https://nextjs.org/docs/migrating/from-create-react-app"
        target="_blank"
        rel="noreferrer noopener"
      >
        here
      </a>
      .
    </p>
  </div>
);

const UpdateDependencies = () => (
  <div className="mb-5">
    <h3>Update dependencies</h3>

    <p className="text-lg">
      The first step towards migrating to Next.js is to update package.json and
      dependencies.
    </p>

    <p className="text-lg">
      Remove the <code>react-scripts</code> and <code>react-router-dom</code>{" "}
      dependencies.
    </p>
    <Code>{`npm uninstall react-scripts craco react-router-dom`}</Code>

    <p className="text-lg">
      Install the <code>next.js</code> dependency.
    </p>
    <Code>{`npm install next --save`}</Code>

    <p className="text-lg">
      Open the <code>package.json</code> file and replace the{" "}
      <code>scripts</code> with:
    </p>
    <Code>{`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}`}</Code>
  </div>
);

const UpdateEntryFile = () => (
  <div className="mb-5">
    <h3>Update entry file</h3>

    <p className="text-lg">
      Create React App uses the public directory for the entry HTML file (
      <code>public/index.html</code>), whereas Next.js uses a custom file (
      <code>/src/pages/_document.js</code>).
    </p>
    <p className="text-lg">
      All code in the <code>{`<head>`}</code> section of the{" "}
      <code>public/index.html</code> file should be moved to the{" "}
      <code>/src/pages/_document.js</code> file. Learn more{" "}
      <a
        href="https://nextjs.org/docs/advanced-features/custom-document"
        target="_blank"
        rel="noreferrer noopener"
      >
        here
      </a>
      .
    </p>
  </div>
);

const UpdateSharedLayout = () => (
  <div className="mb-5">
    <h3>Update shared layout</h3>

    <p className="text-lg">
      Create React App uses the <code>/src/index.js</code> file as an entry
      point, whereas Next.js requires a custom <code>/src/_app.js</code> file.
      You may want to move logic to the new <code>_app.js</code> file. Learn
      more{" "}
      <a
        href="https://nextjs.org/docs/advanced-features/custom-app"
        target="_blank"
        rel="noreferrer noopener"
      >
        here
      </a>
      .
    </p>
  </div>
);

const UpdateRoutes = () => (
  <div className="mb-5">
    <h3>Update routes</h3>

    <p className="text-lg">
      With Create React App, you're likely using React Router. Instead of using
      a third-party library, Next.js includes its own file-system based routing.
    </p>
    <ul className="text-lg">
      <li>
        Convert all Route components to new files in the <code>src/pages</code>{" "}
        directory. It is recommended to rename the files using{" "}
        <code>dash-case</code>.
      </li>
      <li>
        Remove <code>useRoutes</code> from the <code>/src/App.js</code> file.
      </li>
      <li>
        Replace the Link component from <code>react-router-dom</code> with the
        Link component from <code>next/link</code>.
      </li>
    </ul>
    <p className="text-lg">
      For more information, see{" "}
      <a
        href="https://nextjs.org/docs/migrating/from-react-router"
        target="_blank"
        rel="noreferrer noopener"
      >
        Migrating from React Router
      </a>
      .
    </p>
  </div>
);

const MigratingToNextJS = () => (
  <React.Fragment>
    <Helmet title="Migrating to Next.js" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Migrating to Next.js</h1>
          <hr className="my-4" />
          <Intro />
          <OfficialGuide />
          <UpdateDependencies />
          <UpdateEntryFile />
          <UpdateSharedLayout />
          <UpdateRoutes />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default MigratingToNextJS;
