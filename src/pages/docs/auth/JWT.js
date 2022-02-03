import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      JSON web token (JWT) is an open standard that defines a compact and
      self-contained way for securely transmitting information between parties
      as a JSON object.
    </p>
  </div>
);

const QuickStart = () => (
  <div className="mb-5">
    <h3>Quick start</h3>
    <p className="text-lg">
      Follow these steps if you want to enable JWT authentication in your
      application.
    </p>
    <h4>1. Enable AuthProvider</h4>
    <p className="text-lg">
      Enable JWT's <code>AuthProvider</code> in <code>/src/App.js</code>.
    </p>
    <Code>{`import { AuthProvider } from "./contexts/JWTContext";
        
function App() {
  return (
    <AuthProvider>
      {content}
    </AuthProvider>;
  )
}`}</Code>

    <h4>2. Enable useAuth hook</h4>

    <p className="text-lg">
      Enable JWT's <code>useAuth</code> hook in{" "}
      <code>/src/hooks/useAuth.js</code>.
    </p>

    <Code>{`import { AuthContext } from "../contexts/JWTContext";
        
const useAuth = () => {
  return useContext(AuthContext);
};`}</Code>
  </div>
);

const HowToUse = () => (
  <div className="mb-5">
    <h3>How to use</h3>
    <p className="text-lg">
      Learn how to use JWT authentication. There are multiple examples included,
      including sign in, sign up and sign out.
    </p>
    <h4>Retrieve user info</h4>
    <Code>{`import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};`}</Code>
    <h4>Execute actions</h4>
    <Code>{`import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
};`}</Code>
  </div>
);

const JWT = () => (
  <React.Fragment>
    <Helmet title="JSON Web Token" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>JSON Web Token</h1>
          <hr className="my-4" />
          <Intro />
          <QuickStart />
          <HowToUse />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default JWT;
