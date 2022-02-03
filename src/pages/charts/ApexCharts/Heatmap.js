import React from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

const HeatmapChart = () => {
  const generateData = (count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  };

  const data = [
    {
      name: "Metric1",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric5",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric6",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric7",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric8",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric9",
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ];

  const options = {
    dataLabels: {
      enabled: false,
    },
    colors: ["#008FFB"],
    xaxis: {
      type: "category",
    },
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Heatmap Chart</Card.Title>
        <h6 className="card-subtitle text-muted">
          Heatmap is a visualization tool that employs color the way a bar chart
          employs height and width in representing data.
        </h6>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Chart options={options} series={data} type="heatmap" height="350" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default HeatmapChart;
