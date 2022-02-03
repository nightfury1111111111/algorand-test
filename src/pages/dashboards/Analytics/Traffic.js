import React from "react";

import { Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Traffic = () => (
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
        Traffic
      </Card.Title>
    </Card.Header>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Source</th>
          <th className="text-end">Users</th>
          <th className="d-none d-xl-table-cell text-end">Sessions</th>
          <th className="d-none d-xl-table-cell text-end">Bounce Rate</th>
          <th className="d-none d-xl-table-cell text-end">
            Avg. Session Duration
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google</td>
          <td className="text-end">1023</td>
          <td className="d-none d-xl-table-cell text-end">1265</td>
          <td className="d-none d-xl-table-cell text-end text-success">
            27.23%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:06:25</td>
        </tr>
        <tr>
          <td>Bing</td>
          <td className="text-end">504</td>
          <td className="d-none d-xl-table-cell text-end">623</td>
          <td className="d-none d-xl-table-cell text-end text-danger">
            66.76%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:04:42</td>
        </tr>
        <tr>
          <td>Twitter</td>
          <td className="text-end">462</td>
          <td className="d-none d-xl-table-cell text-end">571</td>
          <td className="d-none d-xl-table-cell text-end text-success">
            31.53%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:08:05</td>
        </tr>
        <tr>
          <td>Pinterest</td>
          <td className="text-end">623</td>
          <td className="d-none d-xl-table-cell text-end">770</td>
          <td className="d-none d-xl-table-cell text-end text-danger">
            52.81%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:03:10</td>
        </tr>
        <tr>
          <td>Facebook</td>
          <td className="text-end">812</td>
          <td className="d-none d-xl-table-cell text-end">1003</td>
          <td className="d-none d-xl-table-cell text-end text-success">
            24.83%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:05:56</td>
        </tr>
        <tr>
          <td>DuckDuckGo</td>
          <td className="text-end">693</td>
          <td className="d-none d-xl-table-cell text-end">856</td>
          <td className="d-none d-xl-table-cell text-end text-success">
            37.36%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:09:12</td>
        </tr>
        <tr>
          <td>GitHub</td>
          <td className="text-end">713</td>
          <td className="d-none d-xl-table-cell text-end">881</td>
          <td className="d-none d-xl-table-cell text-end text-success">
            38.09%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:06:19</td>
        </tr>
        <tr>
          <td>Instagram</td>
          <td className="text-end">412</td>
          <td className="d-none d-xl-table-cell text-end">508</td>
          <td className="d-none d-xl-table-cell text-end text-success">
            17.09%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:04:23</td>
        </tr>
        <tr>
          <td>Direct</td>
          <td className="text-end">872</td>
          <td className="d-none d-xl-table-cell text-end">1077</td>
          <td className="d-none d-xl-table-cell text-end text-success">
            32.70%
          </td>
          <td className="d-none d-xl-table-cell text-end">00:09:18</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Traffic;
