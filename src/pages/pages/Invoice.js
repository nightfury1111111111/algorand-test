import React from "react";
import { Helmet } from "react-helmet-async";

import { Button, Container, Row, Col, Card, Table } from "react-bootstrap";

const Invoice = () => (
  <React.Fragment>
    <Helmet title="Invoice" />

    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Invoice</h1>

      <Card>
        <Card.Body className="m-sm-3 m-md-5">
          <div className="mb-4">
            Hello <strong>Chris Wood</strong>,
            <br /> This is the receipt for a payment of <strong>
              $268.00
            </strong>{" "}
            (USD) you made to AppStack.
          </div>

          <Row>
            <Col md="6">
              <div className="text-muted">Payment No.</div>
              <strong>741037024</strong>
            </Col>
            <Col md="6" className="text-md-right">
              <div className="text-muted">Payment Date</div>
              <strong>October 2, 2018 - 03:45 pm</strong>
            </Col>
          </Row>

          <hr className="my-4" />

          <Row className="mb-4">
            <Col md="6">
              <div className="text-muted">Client</div>
              <strong>Chris Wood</strong>
              <p>
                4183 Forest Avenue <br /> New York City <br /> 10011 <br /> USA{" "}
                <br />
                <a href="mailto:chris.wood@gmail.com">chris.wood@gmail.com</a>
              </p>
            </Col>
            <Col md="6" className="text-md-right">
              <div className="text-muted">Payment To</div>
              <strong>AppStack LLC</strong>
              <p>
                354 Roy Alley <br /> Denver <br /> 80202 <br /> USA <br />
                <a href="mailto:info@appstack.com">info@appstack.com</a>
              </p>
            </Col>
          </Row>

          <Table size="sm">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th className="text-end">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AppStack Theme Customization</td>
                <td>2</td>
                <td className="text-end">$150.00</td>
              </tr>
              <tr>
                <td>Monthly Subscription </td>
                <td>3</td>
                <td className="text-end">$25.00</td>
              </tr>
              <tr>
                <td>Additional Service</td>
                <td>1</td>
                <td className="text-end">$100.00</td>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <th>Subtotal </th>
                <th className="text-end">$275.00</th>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <th>Shipping </th>
                <th className="text-end">$8.00</th>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <th>Discount </th>
                <th className="text-end">5%</th>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <th>Total </th>
                <th className="text-end">$268.85</th>
              </tr>
            </tbody>
          </Table>

          <div className="text-center">
            <p className="text-sm">
              <strong>Extra note:</strong> Please send all items at the same
              time to the shipping address. Thanks in advance.
            </p>

            <Button variant="primary">Print this receipt</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  </React.Fragment>
);

export default Invoice;
