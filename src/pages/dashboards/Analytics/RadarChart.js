import React from "react";
import { Radar } from "react-chartjs-2";

import { Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const RadarChart = () => {
  const data = {
    labels: ["Technology", "Sports", "Media", "Gaming", "Arts"],
    datasets: [
      {
        label: "Interests",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "#2979ff",
        pointBackgroundColor: "#2979ff",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#2979ff",
        data: [70, 53, 82, 60, 33],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
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
          Interests
        </Card.Title>
      </Card.Header>
      <Card.Body className="d-flex">
        <div className="align-self-center w-100">
          <div className="chart">
            <Radar data={data} options={options} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RadarChart;
