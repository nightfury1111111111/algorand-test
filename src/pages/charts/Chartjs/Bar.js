import React from "react";
import { Bar } from "react-chartjs-2";

import { Card } from "react-bootstrap";

import usePalette from "../../../hooks/usePalette";

const BarChart = () => {
  const palette = usePalette();

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Last year",
        backgroundColor: palette.primary,
        borderColor: palette.primary,
        hoverBackgroundColor: palette.primary,
        hoverBorderColor: palette.primary,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
      {
        label: "This year",
        backgroundColor: "#E8EAED",
        borderColor: "#E8EAED",
        hoverBackgroundColor: "#E8EAED",
        hoverBorderColor: "#E8EAED",
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          stacked: false,
          ticks: {
            stepSize: 20,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          gridLines: {
            color: "transparent",
          },
        },
      ],
    },
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Bar Chart</Card.Title>
        <h6 className="card-subtitle text-muted">
          A bar chart provides a way of showing data values represented as
          vertical bars.
        </h6>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
