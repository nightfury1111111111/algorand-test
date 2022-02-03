import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Button } from "react-bootstrap";

const Page500 = () => (
  <React.Fragment>
    <Helmet title="500 Error" />
    <div className="text-center">
      <h1 className="display-1 fw-bold">500</h1>
      <p className="h1">Internal server error.</p>
      <p className="h2 fw-normal mt-3 mb-4">
        The server encountered something unexpected that didn't allow it to
        complete the request.
      </p>
      <Link to="/dashboard/default">
        <Button variant="primary" size="lg">
          Return to website
        </Button>
      </Link>
    </div>
  </React.Fragment>
);

export default Page500;
