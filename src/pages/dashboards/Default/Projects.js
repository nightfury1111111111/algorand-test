import React from "react";

import { Badge, Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Projects = () => (
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
        Latest Projects
      </Card.Title>
    </Card.Header>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-xl-table-cell">Start Date</th>
          <th className="d-none d-xl-table-cell">End Date</th>
          <th>Status</th>
          <th className="d-none d-md-table-cell">Assignee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Project Apollo</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Carl Jenkins</td>
        </tr>
        <tr>
          <td>Project Fireball</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="danger">Cancelled</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>Project Hades</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Stacie Hall</td>
        </tr>
        <tr>
          <td>Project Nitro</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="warning">In progress</Badge>
          </td>
          <td className="d-none d-md-table-cell">Carl Jenkins</td>
        </tr>
        <tr>
          <td>Project Phoenix</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>Project Romeo</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Ashley Briggs</td>
        </tr>
        <tr>
          <td>Project Wombat</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="warning">In progress</Badge>
          </td>
          <td className="d-none d-md-table-cell">Bertha Martin</td>
        </tr>
        <tr>
          <td>Project Zircon</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="danger">Cancelled</Badge>
          </td>
          <td className="d-none d-md-table-cell">Stacie Hall</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Projects;
