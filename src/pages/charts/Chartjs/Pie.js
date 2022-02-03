import React from "react";
import { Pie } from "react-chartjs-2";

import { Card } from "react-bootstrap";

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
        borderColor: "transparent",
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
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Pie Chart</Card.Title>
        <h6 className="card-subtitle text-muted">
          Pie charts are excellent at showing the relational proportions between
          data.
        </h6>
      </Card.Header>
      <Card.Body>
        <div className="chart chart-sm">
          <Pie data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PieChart;
