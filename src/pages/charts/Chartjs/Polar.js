import React from "react";
import { Polar } from "react-chartjs-2";

import { Card } from "react-bootstrap";

import usePalette from "../../../hooks/usePalette";

const PolarChart = () => {
  const palette = usePalette();

  const data = {
    labels: ["Speed", "Reliability", "Comfort", "Safety", "Efficiency"],
    datasets: [
      {
        label: "Model S",
        data: [35, 38, 65, 70, 24],
        backgroundColor: [
          palette.primary,
          palette.success,
          palette.danger,
          palette.warning,
          "#5b7dff",
        ],
      },
    ],
  };

  const options = { maintainAspectRatio: false };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Polar Area Chart</Card.Title>
        <h6 className="card-subtitle text-muted">
          Polar area charts are similar to pie charts, but each segment has the
          same angle.
        </h6>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Polar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PolarChart;
