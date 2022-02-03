import React from "react";

import { Button, Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../../assets/img/avatars/avatar-2.jpg";
import avatar4 from "../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../assets/img/avatars/avatar-5.jpg";

import unsplash1 from "../../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../../assets/img/photos/unsplash-2.jpg";

const Activities = () => (
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
        Activities
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
        <div className="flex-grow-1 ms-3">
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
        <div className="flex-grow-1 ms-3">
          <small className="float-end text-navy">30m ago</small>
          <strong>Chris Wood</strong> posted something on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 7:21 pm</small>
          <div className="border text-sm text-muted p-2 mt-1">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam..
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
        <div className="flex-grow-1 ms-3">
          <small className="float-end text-navy">1h ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Today 6:35 pm</small>
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar2}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Carl Jenkins"
        />
        <div className="flex-grow-1 ms-3">
          <small className="float-end text-navy">3h ago</small>
          <strong>Carl Jenkins</strong> posted two photos on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 5:12 pm</small>
          <div className="row no-gutters mt-1">
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash1} className="img-fluid pe-2" alt="Unsplash" />
            </div>
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash2} className="img-fluid pe-2" alt="Unsplash" />
            </div>
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
        <div className="flex-grow-1 ms-3">
          <small className="float-end text-navy">1d ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Yesterday 2:43 pm</small>
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
        <div className="flex-grow-1 ms-3">
          <small className="float-end text-navy">1d ago</small>
          <strong>Chris Wood</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Yesterdag 1:51 pm</small>
        </div>
      </div>

      <hr />
      <div className="d-grid">
        <Button variant="primary">Load more</Button>
      </div>
    </Card.Body>
  </Card>
);

export default Activities;
