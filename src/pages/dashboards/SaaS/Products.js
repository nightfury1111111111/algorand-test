import React from "react";

import { Badge, Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Products = () => (
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
        Top Selling Products
      </Card.Title>
    </Card.Header>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-xl-table-cell">Tech</th>
          <th className="d-none d-xl-table-cell">License</th>
          <th className="d-none d-xl-table-cell">Tickets</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abel Theme</td>
          <td>
            <Badge bg="danger">Angular</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">80</td>
          <td className="d-none d-xl-table-cell">150</td>
        </tr>
        <tr>
          <td>Ada Theme</td>
          <td>
            <Badge bg="info">Vue</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">60</td>
          <td className="d-none d-xl-table-cell">610</td>
        </tr>
        <tr>
          <td>AppStack Theme</td>
          <td>
            <Badge bg="success">HTML</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">50</td>
          <td className="d-none d-xl-table-cell">720</td>
        </tr>
        <tr>
          <td>Libre Theme</td>
          <td>
            <Badge bg="warning">React</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">30</td>
          <td className="d-none d-xl-table-cell">280</td>
        </tr>
        <tr>
          <td>Material Blog Theme</td>
          <td>
            <Badge bg="info">Vue</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">10</td>
          <td className="d-none d-xl-table-cell">480</td>
        </tr>
        <tr>
          <td>Milo Theme</td>
          <td>
            <Badge bg="warning">React</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">40</td>
          <td className="d-none d-xl-table-cell">280</td>
        </tr>
        <tr>
          <td>Spark Theme</td>
          <td>
            <Badge bg="success">HTML</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">20</td>
          <td className="d-none d-xl-table-cell">480</td>
        </tr>
        <tr>
          <td>Von Theme</td>
          <td>
            <Badge bg="danger">Angular</Badge>
          </td>
          <td className="d-none d-xl-table-cell">Single license</td>
          <td className="d-none d-xl-table-cell">50</td>
          <td className="d-none d-xl-table-cell">350</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Products;
