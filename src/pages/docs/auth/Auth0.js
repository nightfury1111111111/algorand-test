import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      Auth0 is an easy to implement, adaptable authentication and authorization
      platform. Rapidly integrate authentication and authorization for web,
      mobile, and legacy applications so you can focus on your core business.
    </p>
  </div>
);

const QuickStart = () => (
  <div className="mb-5">
    <h3>Quick start</h3>
    <p className="text-lg">
      Follow these steps if you want to enable Auth0 authentication in your
      application.
    </p>
    <h4>1. Enable AuthProvider</h4>
    <p className="text-lg">
      Enable Auth0's <code>AuthProvider</code> in <code>/src/App.js</code>.
    </p>
    <Code>{`import { AuthProvider } from "./contexts/Auth0Context";
        
function App() {
  return (
    <AuthProvider>
      {content}
    </AuthProvider>;
  )
}`}</Code>

    <h4>2. Enable useAuth hook</h4>

    <p className="text-lg">
      Enable Auth0's <code>useAuth</code> hook in{" "}
      <code>/src/hooks/useAuth.js</code>.
    </p>

    <Code>{`import { AuthContext } from "../contexts/Auth0Context";
        
const useAuth = () => {
  return useContext(AuthContext);
};`}</Code>
  </div>
);

const HowToUse = () => (
  <div className="mb-5">
    <h3>How to use</h3>
    <p className="text-lg">
      Learn how to use Auth0 authentication. There are multiple examples
      included, including sign in, sign up and sign out.
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

const Auth0 = () => (
  <React.Fragment>
    <Helmet title="Auth0" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Auth0</h1>
          <hr className="my-4" />
          <Intro />
          <QuickStart />
          <HowToUse />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Auth0;
