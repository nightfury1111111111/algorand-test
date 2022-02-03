import React from "react";
import { Helmet } from "react-helmet-async";
import { useTable, usePagination } from "react-table";

import {
  Card,
  Container,
  Table,
  Pagination,
  Row,
  Col,
  Form,
} from "react-bootstrap";

import { tableData, tableColumns } from "./data.js";

const PaginationTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Pagination</Card.Title>
        <h6 className="card-subtitle text-muted">Pagination by react-table</h6>
      </Card.Header>
      <Card.Body>
        <Table striped bordered {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Row>
          <Col md="6">
            <span className="mx-2">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span className="ms-3 me-2">Show:</span>
            <Form.Select
              className="d-inline-block w-auto"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </Form.Select>

            <span className="ms-3 me-2">Go to page:</span>
            <Form.Control
              className="d-inline-block"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "75px" }}
            />
          </Col>
          <Col md="6">
            <Pagination className="float-end">
              <Pagination.First
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              />
              <Pagination.Prev
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              />
              <Pagination.Next
                onClick={() => nextPage()}
                disabled={!canNextPage}
              />
              <Pagination.Last
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              />
            </Pagination>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const PaginationPage = () => (
  <React.Fragment>
    <Helmet title="Pagination" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Pagination</h1>

      <PaginationTable columns={tableColumns} data={tableData} />
    </Container>
  </React.Fragment>
);

export default PaginationPage;
