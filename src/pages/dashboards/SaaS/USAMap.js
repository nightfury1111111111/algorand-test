import React from "react";
import { VectorMap } from "react-jvectormap";

import { Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

import usePalette from "../../../hooks/usePalette";

function USAMap() {
  const palette = usePalette();

  const options = {
    map: "us_aea",
    normalizeFunction: "polynomial",
    hoverOpacity: 0.7,
    hoverColor: false,
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: palette["gray-200"],
      },
    },
    containerStyle: {
      width: "100%",
      height: "100%",
    },
    markerStyle: {
      initial: {
        r: 9,
        fill: palette.primary,
        "fill-opacity": 0.9,
        stroke: palette.white,
        "stroke-width": 7,
        "stroke-opacity": 0.4,
      },
      hover: {
        fill: palette.primary,
        "fill-opacity": 0.9,
        stroke: palette.primary,
        "stroke-width": 7,
        "stroke-opacity": 0.4,
      },
    },
    backgroundColor: "transparent",
    markers: [
      {
        latLng: [37.77, -122.41],
        name: "San Francisco: 375",
      },
      {
        latLng: [40.71, -74.0],
        name: "New York: 350",
      },
      {
        latLng: [39.09, -94.57],
        name: "Kansas City: 250",
      },
      {
        latLng: [36.16, -115.13],
        name: "Las Vegas: 275",
      },
      {
        latLng: [32.77, -96.79],
        name: "Dallas: 225",
      },
    ],
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
          Sales by State
        </Card.Title>
      </Card.Header>
      <Card.Body className="p-2">
        <div className="map-container" style={{ height: 294 }}>
          <VectorMap {...options} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default USAMap;
