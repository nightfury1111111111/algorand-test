import React, { useState } from "react";
import { Alert } from "react-bootstrap";

import Default from "../dashboards/Default";

function ProtectedPage() {
  const [show, setShow] = useState(true);

  return (
    <React.Fragment>
      {!!show && (
        <Alert
          className="mb-3"
          variant="primary"
          dismissible
          onClose={() => setShow(false)}
        >
          <div className="alert-message">
            This page is only visible by authenticated users.
          </div>
        </Alert>
      )}

      <Default />
    </React.Fragment>
  );
}

export default ProtectedPage;
