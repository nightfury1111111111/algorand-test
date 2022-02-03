import React from "react";

import { Badge, Button, Card } from "react-bootstrap";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";
import avatar4 from "../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../assets/img/avatars/avatar-5.jpg";

const Feed = () => (
  <Card className="flex-fill w-100">
    <Card.Header>
      <Badge bg="info" className="float-end">
        Today
      </Badge>
      <Card.Title tag="h5" className="mb-0">
        Daily feed
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <div className="d-flex">
        <img
          src={avatar5}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Ashley Briggs"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">5m ago</small>
          <strong>Ashley Briggs</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Today 7:51 pm</small>
          <br />
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar1}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Chris Wood"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">30m ago</small>
          <strong>Chris Wood</strong> posted something on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 7:21 pm</small>
          <div className="border text-sm text-muted p-2 mt-1">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing...
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar4}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Stacie Hall"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">1h ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Today 6:35 pm</small>
        </div>
      </div>

      <hr />
      <div className="d-grid">
        <Button variant="primary">Load more</Button>
      </div>
    </Card.Body>
  </Card>
);

export default Feed;
