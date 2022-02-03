import React from "react";

import { Card, Dropdown, Table, ProgressBar } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Languages = () => (
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
        Languages
      </Card.Title>
    </Card.Header>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Language</th>
          <th className="text-end">Users</th>
          <th className="d-none d-xl-table-cell w-75">% Users</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>en-us</td>
          <td className="text-end">735</td>
          <td className="d-none d-xl-table-cell">
            <ProgressBar variant="primary" now={43} label="43%" />
          </td>
        </tr>
        <tr>
          <td>en-gb</td>
          <td className="text-end">223</td>
          <td className="d-none d-xl-table-cell">
            <ProgressBar variant="primary" now={27} label="27%" />
          </td>
        </tr>
        <tr>
          <td>fr-fr</td>
          <td className="text-end">181</td>
          <td className="d-none d-xl-table-cell">
            <ProgressBar variant="primary" now={22} label="22%" />
          </td>
        </tr>
        <tr>
          <td>es-es</td>
          <td className="text-end">132</td>
          <td className="d-none d-xl-table-cell">
            <ProgressBar variant="primary" now={16} label="16%" />
          </td>
        </tr>
        <tr>
          <td>de-de</td>
          <td className="text-end">118</td>
          <td className="d-none d-xl-table-cell">
            <ProgressBar variant="primary" now={15} label="15%" />
          </td>
        </tr>
        <tr>
          <td>ru-ru</td>
          <td className="text-end">98</td>
          <td className="d-none d-xl-table-cell">
            <ProgressBar variant="primary" now={13} label="13%" />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Languages;
