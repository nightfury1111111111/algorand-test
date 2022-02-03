import React from "react";
import { Pie } from "react-chartjs-2";

import { Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

import usePalette from "../../../hooks/usePalette";

const PieChart = () => {
  const palette = usePalette();

  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          palette.primary,
          palette.warning,
          palette.danger,
          "#E8EAED",
        ],
        borderWidth: 5,
        borderColor: palette.white,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    legend: {
      display: false,
    },
  };

  return (
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
          Source / Medium
        </Card.Title>
      </Card.Header>
      <Card.Body className="d-flex">
        <div className="align-self-center w-100">
          <div className="py-3">
            <div className="chart chart-xs">
              <Pie data={data} options={options} />
            </div>
          </div>

          <Table className="mb-0">
            <thead>
              <tr>
                <th>Source</th>
                <th className="text-end">Revenue</th>
                <th className="text-end">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                  Direct
                </td>
                <td className="text-end">$ 2602</td>
                <td className="text-end text-success">+43%</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                  Affiliate
                </td>
                <td className="text-end">$ 1253</td>
                <td className="text-end text-success">+13%</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSquare} className="text-danger" />{" "}
                  E-mail
                </td>
                <td className="text-end">$ 541</td>
                <td className="text-end text-success">+24%</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSquare} className="text-dark" />{" "}
                  Other
                </td>
                <td className="text-end">$ 1465</td>
                <td className="text-end text-success">+11%</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PieChart;
