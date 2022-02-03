import React from "react";
import { Line } from "react-chartjs-2";

import { Card } from "react-bootstrap";

import usePalette from "../../../hooks/usePalette";

const LineChart = () => {
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
        label: "Sales ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: palette.primary,
        data: [
          2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917,
          3327,
        ],
      },
      {
        label: "Orders",
        fill: true,
        backgroundColor: "transparent",
        borderColor: palette["primary-dark"],
        borderDash: [4, 4],
        data: [
          958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      intersect: false,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500,
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff",
          },
        },
      ],
    },
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Line Chart</Card.Title>
        <h6 className="card-subtitle text-muted">
          A line chart is a way of plotting data points on a line.
        </h6>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Line data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default LineChart;
