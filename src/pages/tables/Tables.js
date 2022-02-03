import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row, Table } from "react-bootstrap";

import { Edit2, Trash } from "react-feather";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";

const BasicTable = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Basic Table</Card.Title>
      <h6 className="card-subtitle text-muted">
        Using the most basic table markup, here’s how .table-based tables look
        in Bootstrap.
      </h6>
    </Card.Header>
    <Table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ashley Briggs</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Carl Jenkins</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Bertha Martin</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Stacie Hall</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const StripedRows = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Striped Rows</Card.Title>
      <h6 className="card-subtitle text-muted">
        Use <code>striped</code> to add zebra-striping to any table row within
        the <code>&#x3C;tbody&#x3E;</code>.
      </h6>
    </Card.Header>
    <Table striped>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ashley Briggs</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Carl Jenkins</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Bertha Martin</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Stacie Hall</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const CondensedTable = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Condensed Table</Card.Title>
      <h6 className="card-subtitle text-muted">
        Add <code>size="sm"</code> to make tables more compact by cutting cell
        padding in half.
      </h6>
    </Card.Header>
    <Table size="sm" striped>
      <thead>
        <tr>
          <th>Operation System</th>
          <th className="text-end">Users</th>
          <th className="text-end">Share</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Windows</td>
          <td className="text-end">8.232</td>
          <td className="text-end">40%</td>
        </tr>
        <tr>
          <td>Mac OS</td>
          <td className="text-end">3.322</td>
          <td className="text-end">20%</td>
        </tr>
        <tr>
          <td>Linux</td>
          <td className="text-end">4.232</td>
          <td className="text-end">34%</td>
        </tr>
        <tr>
          <td>FreeBSD</td>
          <td className="text-end">1.121</td>
          <td className="text-end">12%</td>
        </tr>
        <tr>
          <td>Chrome OS</td>
          <td className="text-end">1.331</td>
          <td className="text-end">15%</td>
        </tr>
        <tr>
          <td>Android</td>
          <td className="text-end">2.301</td>
          <td className="text-end">20%</td>
        </tr>
        <tr>
          <td>iOS</td>
          <td className="text-end">1.162</td>
          <td className="text-end">14%</td>
        </tr>
        <tr>
          <td>Windows Phone</td>
          <td className="text-end">562</td>
          <td className="text-end">7%</td>
        </tr>
        <tr>
          <td>Other</td>
          <td className="text-end">1.181</td>
          <td className="text-end">14%</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);
const HoverableRows = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Hoverable Rows</Card.Title>
      <h6 className="card-subtitle text-muted">
        Add <code>hover</code> to enable a hover state on table rows within a{" "}
        <code>&#x3C;tbody&#x3E;</code>.
      </h6>
    </Card.Header>
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src={avatar4}
              width="48"
              height="48"
              className="rounded-circle me-2"
              alt="Avatar"
            />{" "}
            Stacie Hall
          </td>
          <td>864-348-0485</td>
          <td>June 21, 1961</td>
        </tr>
        <tr>
          <td>
            <img
              src={avatar1}
              width="48"
              height="48"
              className="rounded-circle me-2"
              alt="Avatar"
            />{" "}
            Chris Wood
          </td>
          <td>914-939-2458</td>
          <td>May 15, 1948</td>
        </tr>
        <tr>
          <td>
            <img
              src={avatar2}
              width="48"
              height="48"
              className="rounded-circle me-2"
              alt="Avatar"
            />{" "}
            Carl Jenkins
          </td>
          <td>704-993-5435</td>
          <td>September 14, 1965</td>
        </tr>
        <tr>
          <td>
            <img
              src={avatar3}
              width="48"
              height="48"
              className="rounded-circle me-2"
              alt="Avatar"
            />{" "}
            Bertha Martin
          </td>
          <td>765-382-8195</td>
          <td>April 2, 1971</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const BorderedTable = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Bordered Table</Card.Title>
      <h6 className="card-subtitle text-muted">
        Add <code>bordered</code> for borders on all sides of the table and
        cells.
      </h6>
    </Card.Header>
    <Table bordered>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ashley Briggs</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Carl Jenkins</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Bertha Martin</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Stacie Hall</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const ContextualClasses = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Contextual Classes</Card.Title>
      <h6 className="card-subtitle text-muted">
        Use contextual classes to color table rows or individual cells.
      </h6>
    </Card.Header>
    <Table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ashley Briggs</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr className="table-primary">
          <td>Carl Jenkins</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Bertha Martin</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr className="table-success">
          <td>Stacie Hall</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <Edit2 className="align-middle me-1" size={18} />
            <Trash className="align-middle" size={18} />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const ResponsiveTable = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Always responsive</Card.Title>
      <h6 className="card-subtitle text-muted">
        Across every breakpoint, use <code>responsive</code> for horizontally
        scrolling tables.
      </h6>
    </Card.Header>
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const Tables = () => (
  <React.Fragment>
    <Helmet title="Tables" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Tables</h1>

      <Row>
        <Col lg="6">
          <BasicTable />
        </Col>
        <Col lg="6">
          <StripedRows />
        </Col>
        <Col lg="6">
          <CondensedTable />
        </Col>
        <Col lg="6">
          <HoverableRows />
        </Col>
        <Col lg="6">
          <BorderedTable />
        </Col>
        <Col lg="6">
          <ContextualClasses />
        </Col>
        <Col lg="12">
          <ResponsiveTable />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Tables;
