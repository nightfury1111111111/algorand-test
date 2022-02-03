import React from "react";
import { Helmet } from "react-helmet-async";
import { Card } from "react-bootstrap";

import SignUp from "../../components/auth/SignUp";

const SignUpPage = () => (
  <React.Fragment>
    <Helmet title="Sign Up" />
    <div className="text-center mt-4">
      <h1 className="h2">Get started</h1>
      <p className="lead">
        Start creating the best possible user experience for you customers.
      </p>
    </div>

    <Card>
      <Card.Body>
        <div className="m-sm-4">
          <SignUp />
        </div>
      </Card.Body>
    </Card>
  </React.Fragment>
);

export default SignUpPage;
