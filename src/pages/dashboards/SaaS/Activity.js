import React from "react";

import { Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Activity = () => (
  <Card className="flex-fill w-100">
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
        Order Activity
      </Card.Title>
    </Card.Header>
    <Card.Body className="d-flex">
      <ul className="timeline m-3">
        <li className="timeline-item">
          <strong>Delivered</strong>
          <p className="text-sm">2 hours ago</p>
        </li>
        <li className="timeline-item">
          <strong>Pick Up</strong>
          <p className="text-sm">6 hours ago</p>
        </li>
        <li className="timeline-item">
          <strong>In Transit</strong>
          <p className="text-sm">1 days ago</p>
        </li>
        <li className="timeline-item">
          <strong>Dispatched</strong>
          <p className="text-sm">3 days ago</p>
        </li>
        <li className="timeline-item">
          <strong>Order Received</strong>
          <p className="text-sm mb-0">4 days ago</p>
        </li>
      </ul>
    </Card.Body>
  </Card>
);

export default Activity;
