import React from "react";
import { Radar } from "react-chartjs-2";

import { Card } from "react-bootstrap";

import usePalette from "../../../hooks/usePalette";

const RadarChart = () => {
  const palette = usePalette();

  const data = {
    labels: ["Speed", "Reliability", "Comfort", "Safety", "Efficiency"],
    datasets: [
      {
        label: "Model X",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: palette.primary,
        pointBackgroundColor: palette.primary,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: palette.primary,
        data: [70, 53, 82, 60, 33],
      },
      {
        label: "Model S",
        backgroundColor: "rgba(220, 53, 69, 0.2)",
        borderColor: palette.danger,
        pointBackgroundColor: palette.danger,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: palette.danger,
        data: [35, 38, 65, 85, 84],
      },
    ],
  };

  const options = { maintainAspectRatio: false };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Radar Chart</Card.Title>
        <h6 className="card-subtitle text-muted">
          A radar chart is a way of showing multiple data points and the
          variation between them.
        </h6>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Radar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RadarChart;
