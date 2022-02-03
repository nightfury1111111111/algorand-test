import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Card } from "react-bootstrap";

import usePalette from "../../../hooks/usePalette";

const DoughnutChart = () => {
  const palette = usePalette();

  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          palette.primary,
          palette.success,
          palette.warning,
          "#E8EAED",
        ],
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 65,
    legend: {
      display: false,
    },
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Doughnut Chart</Card.Title>
        <h6 className="card-subtitle text-muted">
          Doughnut charts are excellent at showing the relational proportions
          between data.
        </h6>
      </Card.Header>
      <Card.Body>
        <div className="chart chart-sm">
          <Doughnut data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DoughnutChart;
