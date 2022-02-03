import React from "react";

import { Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Appointments = () => (
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
        Appointments
      </Card.Title>
    </Card.Header>
    <Card.Body className="d-flex">
      <ul className="timeline">
        <li className="timeline-item">
          <strong>Chat with Carl and Ashley</strong>
          <span className="float-end text-muted text-sm">30m ago</span>
          <p>
            Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
            imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
            mauris...
          </p>
        </li>
        <li className="timeline-item">
          <strong>The big launch</strong>
          <span className="float-end text-muted text-sm">2h ago</span>
          <p>
            Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
            consectetuer eget, posuere ut, mauris. Praesent adipiscing.
            Phasellus ullamcorper ipsum rutrum nunc...
          </p>
        </li>
        <li className="timeline-item">
          <strong>Coffee break</strong>
          <span className="float-end text-muted text-sm">3h ago</span>
          <p>
            Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
            imperdiet, leo. Maecenas malesuada...
          </p>
        </li>
        <li className="timeline-item">
          <strong>Chat with team</strong>
          <span className="float-end text-muted text-sm">4h ago</span>
          <p className="mb-0">
            Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
            imperdiet nec, imperdiet iaculis, ipsum...
          </p>
        </li>
      </ul>
    </Card.Body>
  </Card>
);

export default Appointments;
