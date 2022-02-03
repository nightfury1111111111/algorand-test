import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      A common use case for code actions is to make API calls to external
      services. AppStack includes{" "}
      <a
        href="https://github.com/axios/axios"
        target="_blank"
        rel="noreferrer noopener"
      >
        Axios
      </a>{" "}
      for making XMLHttpRequests from the browser.{" "}
      <a
        href="https://github.com/ctimmerm/axios-mock-adapter#readme"
        target="_blank"
        rel="noreferrer noopener"
      >
        Axios Mock Adapter
      </a>{" "}
      is also included to mock those requests.{" "}
      <a
        href="https://github.com/axios/axios"
        target="_blank"
        rel="noreferrer noopener"
      >
        Learn more
      </a>
      .
    </p>
  </div>
);

const Axios = () => (
  <div className="mb-5">
    <h3>Axios</h3>
    <p className="text-lg">Performing a GET request:</p>
    <Code>{`axios.get('/api/user?id=12345')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`}</Code>
    <p className="text-lg">Performing a POST request:</p>
    <Code>{`axios.post('/api/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`}</Code>
  </div>
);

const AxiosMockAdapter = () => (
  <div className="mb-5">
    <h3>Axios Mock Adapter</h3>
    <p className="text-lg">
      Axios adapter that allows to easily mock requests.{" "}
      <a
        href="https://github.com/ctimmerm/axios-mock-adapter#readme"
        target="_blank"
        rel="noreferrer noopener"
      >
        Learn more
      </a>
      .
    </p>
    <p className="text-lg">Mocking a GET request:</p>
    <Code>{`mock.onGet("/api/user").reply((config) => {
  return [
    200,
    {
      users: [{ id: 12345, firstName: "Fred", lastName: "Flintstone" }],
    },
  ];
});`}</Code>
    <p className="text-lg">Mocking a POST request:</p>
    <Code>
      {`mock.onPost("/api/user").reply((config) => {
  const { firstName, lastName } = JSON.parse(config.data);

  if (firstName && lastName) {
    return [200, {
      id: "12345",
      firstName: "Fred",
      lastName: "Flintstone",
    };];
  }

  return [400, { message: "Looks like you didn't provide the required data." }];
});`}
    </Code>
  </div>
);

const APICalls = () => (
  <React.Fragment>
    <Helmet title="API Calls" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>API Calls</h1>
          <hr className="my-4" />
          <Intro />
          <Axios />
          <AxiosMockAdapter />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default APICalls;
