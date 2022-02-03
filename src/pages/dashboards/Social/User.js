import React from "react";
import { Button, Card } from "react-bootstrap";

import { MessageSquare } from "react-feather";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";

const User = () => (
  <Card className="flex-fill mb-3">
    <Card.Body className="text-center">
      <img
        src={avatar1}
        alt="Chris Wood"
        className="img-fluid rounded-circle mb-2"
        width="128"
        height="128"
      />
      <Card.Title tag="h5" className="mb-0">
        Chris Wood
      </Card.Title>
      <div className="text-muted mb-2">UX Engineer</div>

      <div>
        <Button variant="primary" size="sm">
          Follow
        </Button>{" "}
        <Button variant="primary" size="sm">
          <MessageSquare width={16} height={16} /> Message
        </Button>
      </div>
    </Card.Body>
  </Card>
);

export default User;
