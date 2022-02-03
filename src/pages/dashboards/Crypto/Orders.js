import React from "react";
import { Card, Col, Dropdown, Row, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Orders = () => (
  <Row>
    <Col lg="6">
      <Card className="flex-fill">
        <Card.Header>
          <div className="card-actions float-end">
            <Dropdown>
              <Dropdown.Menu tag="a">
                <MoreHorizontal />
              </Dropdown.Menu>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Card.Title tag="h5" className="mb-0">
            Sell Orders
          </Card.Title>
        </Card.Header>
        <Table size="sm" striped className="my-0">
          <thead>
            <tr>
              <th>Price</th>
              <th className="d-none d-xl-table-cell">ETH</th>
              <th className="d-none d-xl-table-cell">BTC</th>
              <th>Sum(BTC)</th>
            </tr>
          </thead>
          <tbody className="text-end">
            <tr>
              <td>0.03892501</td>
              <td className="d-none d-xl-table-cell">32.07831558</td>
              <td className="d-none d-xl-table-cell">1.24864875</td>
              <td>1.26329659</td>
            </tr>
            <tr>
              <td>0.03893754</td>
              <td className="d-none d-xl-table-cell">4.97546187</td>
              <td className="d-none d-xl-table-cell">0.19373225</td>
              <td>1.45702884</td>
            </tr>
            <tr>
              <td>0.03895189</td>
              <td className="d-none d-xl-table-cell">0.00288098</td>
              <td className="d-none d-xl-table-cell">0.00011222</td>
              <td>1.45714106</td>
            </tr>
            <tr>
              <td>0.03896593</td>
              <td className="d-none d-xl-table-cell">1.37722262</td>
              <td className="d-none d-xl-table-cell">0.05366476</td>
              <td>1.51080582</td>
            </tr>
            <tr>
              <td>0.03897932</td>
              <td className="d-none d-xl-table-cell">7.91612747</td>
              <td className="d-none d-xl-table-cell">0.30856527</td>
              <td>1.81937109</td>
            </tr>
            <tr>
              <td>0.03897933</td>
              <td className="d-none d-xl-table-cell">0.32745500</td>
              <td className="d-none d-xl-table-cell">0.01276398</td>
              <td>1.83213507</td>
            </tr>
            <tr>
              <td>0.03899180</td>
              <td className="d-none d-xl-table-cell">0.00758003</td>
              <td className="d-none d-xl-table-cell">0.00029556</td>
              <td>1.83243063</td>
            </tr>
            <tr>
              <td>0.03899784</td>
              <td className="d-none d-xl-table-cell">2.05272745</td>
              <td className="d-none d-xl-table-cell">0.08005194</td>
              <td>1.91248257</td>
            </tr>
            <tr>
              <td>0.03899998</td>
              <td className="d-none d-xl-table-cell">2.59143162</td>
              <td className="d-none d-xl-table-cell">0.10106578</td>
              <td>2.01354835</td>
            </tr>
            <tr>
              <td>0.03899999</td>
              <td className="d-none d-xl-table-cell">3.00000000</td>
              <td className="d-none d-xl-table-cell">0.11699997</td>
              <td>2.13054832</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Col>
    <Col lg="6">
      <Card className="flex-fill">
        <Card.Header>
          <div className="card-actions float-end">
            <Dropdown>
              <Dropdown.Menu tag="a">
                <MoreHorizontal />
              </Dropdown.Menu>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Card.Title tag="h5" className="mb-0">
            Buy Orders
          </Card.Title>
        </Card.Header>
        <Table size="sm" striped className="my-0">
          <thead>
            <tr>
              <th>Price</th>
              <th className="d-none d-xl-table-cell">ETH</th>
              <th className="d-none d-xl-table-cell">BTC</th>
              <th>Sum(BTC)</th>
            </tr>
          </thead>
          <tbody className="text-end">
            <tr>
              <td>0.03892000</td>
              <td className="d-none d-xl-table-cell">0.22446452</td>
              <td className="d-none d-xl-table-cell">0.00873616</td>
              <td>0.00873616</td>
            </tr>
            <tr>
              <td>0.03890500</td>
              <td className="d-none d-xl-table-cell">66.39390000</td>
              <td className="d-none d-xl-table-cell">2.58305468</td>
              <td>2.59179084</td>
            </tr>
            <tr>
              <td>0.03890132</td>
              <td className="d-none d-xl-table-cell">56.55334798</td>
              <td className="d-none d-xl-table-cell">2.19999989</td>
              <td>4.79179073</td>
            </tr>
            <tr>
              <td>0.03890053</td>
              <td className="d-none d-xl-table-cell">0.08285351</td>
              <td className="d-none d-xl-table-cell">0.00322305</td>
              <td>4.79501378</td>
            </tr>
            <tr>
              <td>0.03889706</td>
              <td className="d-none d-xl-table-cell">15.61516705</td>
              <td className="d-none d-xl-table-cell">0.60738409</td>
              <td>5.40239787</td>
            </tr>
            <tr>
              <td>0.03888117</td>
              <td className="d-none d-xl-table-cell">12.84070897</td>
              <td className="d-none d-xl-table-cell">0.49926179</td>
              <td>5.90165966</td>
            </tr>
            <tr>
              <td>0.03885500</td>
              <td className="d-none d-xl-table-cell">0.99800000</td>
              <td className="d-none d-xl-table-cell">0.03877729</td>
              <td>5.94043695</td>
            </tr>
            <tr>
              <td>0.03884325</td>
              <td className="d-none d-xl-table-cell">0.20552300</td>
              <td className="d-none d-xl-table-cell">0.00798318</td>
              <td>5.94842013</td>
            </tr>
            <tr>
              <td>0.03883474</td>
              <td className="d-none d-xl-table-cell">7.58480860</td>
              <td className="d-none d-xl-table-cell">0.29455407</td>
              <td>6.24297420</td>
            </tr>
            <tr>
              <td>0.03881616</td>
              <td className="d-none d-xl-table-cell">0.25000000</td>
              <td className="d-none d-xl-table-cell">0.00970404</td>
              <td>6.25267824</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Col>
  </Row>
);

export default Orders;
