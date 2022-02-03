import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Button } from "react-bootstrap";

const Page404 = () => (
  <React.Fragment>
    <Helmet title="404 Error" />
    <div className="text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="h1">Page not found.</p>
      <p className="h2 fw-normal mt-3 mb-4">
        The page you are looking for might have been removed.
      </p>
      <Link to="/dashboard/default">
        <Button variant="primary" size="lg">
          Return to website
        </Button>
      </Link>
    </div>
  </React.Fragment>
);

export default Page404;
