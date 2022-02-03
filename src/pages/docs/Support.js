import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

const Support = () => (
  <React.Fragment>
    <Helmet title="Support" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Support</h1>
          <hr className="my-4" />
          <p className="text-lg">
            Our support mainly covers pre-sale questions, basic theme questions
            and bug reports through our support email:{" "}
            <a href="mailto:support@bootlab.io">support@bootlab.io</a>. To be
            eligible to request the technical support you must have purchased
            the theme and have at least one license.
          </p>
          <p className="text-lg">
            When you send a support request please do describe your issue with
            as much detail as possible. If you can provide a link to your
            developing site then this can help us to solve your issue faster.
            Upon submitting a bug report, we will take it as a high priority
            case and we will release the fix with upcoming releases or we can
            send the fix to a customer via email if the customer needs the fix
            urgently.
          </p>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Support;
