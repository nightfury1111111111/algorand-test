import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      The package includes an implementation of React Router DOM, using the
      programmatic routing model.
    </p>
  </div>
);

const HowToAddRoutes = () => (
  <div className="mb-5">
    <h3>How to add routes</h3>
    <p className="text-lg">
      Open <code>/src/routes.js</code> and add your new route to the{" "}
      <code>routes</code> variable. The example below will result in the{" "}
      <code>{`<NewPage />`}</code> element being called on the{" "}
      <code>http://localhost:3000/pages/new</code> route.
    </p>

    <Code>{`import DashboardLayout from "./layouts/Dashboard";
import NewPage from "./pages/NewPage";

const routes = [
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
];

export default routes;`}</Code>
  </div>
);

const HowToAddALink = () => (
  <div className="mb-5">
    <h3>How to add a link</h3>
    <p className="text-lg">Learn how to add a link to a component.</p>

    <Code>{`import { Link } from "react-router-dom";

function ExampleComponent() {
  return (
    <Link to="pages/new">
      New page
    </Link>
  );
}

export default ExampleComponent;`}</Code>
  </div>
);

const HowToNavigateProgrammatically = () => (
  <div className="mb-5">
    <h3>How to navigate programmatically</h3>
    <p className="text-lg">
      The example code below includes an example on how to navigate
      programmatically using the <code>useNavigate</code> hook.
    </p>

    <Code>{`import { useNavigate } from "react-router-dom";

function ExampleComponent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/pages/new");
  };

  return (
    <form onSubmit={handleSubmit}>
      ...
    </form>
  );
}

export default ExampleComponent;
`}</Code>
  </div>
);

const Routing = () => (
  <React.Fragment>
    <Helmet title="Routing" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Routing</h1>
          <hr className="my-4" />
          <Intro />
          <HowToAddRoutes />
          <HowToAddALink />
          <HowToNavigateProgrammatically />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Routing;
