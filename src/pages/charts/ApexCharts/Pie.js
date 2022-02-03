import React from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

import usePalette from "../../../hooks/usePalette";

const PieChart = () => {
  const palette = usePalette();

  const data = [44, 55, 13, 33];

  const options = {
    dataLabels: {
      enabled: false,
    },
    colors: [
      palette.primary,
      palette.success,
      palette.warning,
      palette.danger,
      palette.info,
    ],
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Pie Chart</Card.Title>
        <h6 className="card-subtitle text-muted">
          Pie charts are an instrumental visualization tool useful in expressing
          data and information in terms of percentages, ratio.
        </h6>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart options={options} series={data} type="donut" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PieChart;
