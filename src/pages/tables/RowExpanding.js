import React from "react";
import { Helmet } from "react-helmet-async";
import { useTable, useExpanded } from "react-table";

import { Card, Container, Table } from "react-bootstrap";
import { PlusCircle, MinusCircle } from "react-feather";

import { tableData, tableColumns } from "./data.js";

const RowExpandingTable = ({ columns: userColumns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: userColumns,
        data,
      },
      useExpanded // Use the useExpanded plugin hook
    );

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Row Expanding</Card.Title>
        <h6 className="card-subtitle text-muted">
          Expandable rows by react-table
        </h6>
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
            {rows.map((row, i) => {
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
      </Card.Body>
    </Card>
  );
};

const tableColumnsExpandable = [
  {
    // Build our expander column
    id: "expander", // Make sure it has an ID
    Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
      <span {...getToggleAllRowsExpandedProps()}>
        {isAllRowsExpanded ? (
          <MinusCircle className="feather" />
        ) : (
          <PlusCircle className="feather" />
        )}
      </span>
    ),
    Cell: ({ row }) =>
      // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
      // to build the toggle for expanding a row
      row.canExpand ? (
        <span
          {...row.getToggleRowExpandedProps({
            style: {
              // We can even use the row.depth property
              // and paddingLeft to indicate the depth
              // of the row
              paddingLeft: `${row.depth * 2}rem`,
            },
          })}
        >
          {row.isExpanded ? (
            <MinusCircle className="feather" />
          ) : (
            <PlusCircle className="feather" />
          )}
        </span>
      ) : null,
  },
  ...tableColumns,
];

const RowExpanding = () => (
  <React.Fragment>
    <Helmet title="Row Expanding" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Row Expanding</h1>

      <RowExpandingTable
        columns={tableColumnsExpandable}
        data={tableData.slice(0, 10)}
      />
    </Container>
  </React.Fragment>
);

export default RowExpanding;
