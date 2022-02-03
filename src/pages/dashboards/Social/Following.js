import React from "react";
import { Button, Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

import avatar2 from "../../../assets/img/avatars/avatar-2.jpg";
import avatar4 from "../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../assets/img/avatars/avatar-5.jpg";

const Following = () => (
  <Card className="flex-fill mb-3">
    <Card.Header>
      <div className="card-actions float-end">
        <Dropdown align="end">
          <Dropdown.Toggle as="a" bsPrefix="-">
            <MoreHorizontal />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another Action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Card.Title tag="h5" className="mb-0">
        Following
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <div className="d-flex">
        <img
          src={avatar5}
          width="56"
          height="56"
          className="rounded-circle me-2"
          alt="Chris Wood"
        />
        <div className="flex-grow-1 ms-3">
          <p className="my-1">
            <strong>Ashley Briggs</strong>
          </p>
          <Button variant="outline-primary" size="sm">
            Unfollow
          </Button>
        </div>
      </div>

      <hr className="my-2" />

      <div className="d-flex">
        <img
          src={avatar2}
          width="56"
          height="56"
          className="rounded-circle me-2"
          alt="Carl Jenkins"
        />
        <div className="flex-grow-1 ms-3">
          <p className="my-1">
            <strong>Carl Jenkins</strong>
          </p>
          <Button variant="outline-primary" size="sm">
            Unfollow
          </Button>
        </div>
      </div>

      <hr className="my-2" />

      <div className="d-flex">
        <img
          src={avatar4}
          width="56"
          height="56"
          className="rounded-circle me-2"
          alt="Stacie Hall"
        />
        <div className="flex-grow-1 ms-3">
          <p className="my-1">
            <strong>Stacie Hall</strong>
          </p>
          <Button variant="outline-primary" size="sm">
            Unfollow
          </Button>
        </div>
      </div>
    </Card.Body>
  </Card>
);

export default Following;
