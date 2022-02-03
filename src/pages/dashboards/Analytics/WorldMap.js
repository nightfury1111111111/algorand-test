import React, { useEffect } from "react";
import { VectorMap } from "react-jvectormap";

import { Card, Dropdown } from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

import usePalette from "../../../hooks/usePalette";

function WorldMap() {
  const palette = usePalette();

  const options = {
    map: "world_mill",
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
        latLng: [31.230391, 121.473701],
        name: "Shanghai",
      },
      {
        latLng: [39.904202, 116.407394],
        name: "Beijing",
      },
      {
        latLng: [28.70406, 77.102493],
        name: "Delhi",
      },
      {
        latLng: [6.524379, 3.379206],
        name: "Lagos",
      },
      {
        latLng: [39.343357, 117.361649],
        name: "Tianjin",
      },
      {
        latLng: [24.860735, 67.001137],
        name: "Karachi",
      },
      {
        latLng: [41.00824, 28.978359],
        name: "Istanbul",
      },
      {
        latLng: [35.689487, 139.691711],
        name: "Tokyo",
      },
      {
        latLng: [23.12911, 113.264381],
        name: "Guangzhou",
      },
      {
        latLng: [19.075983, 72.877655],
        name: "Mumbai",
      },
      {
        latLng: [40.7127837, -74.0059413],
        name: "New York",
      },
      {
        latLng: [34.052235, -118.243683],
        name: "Los Angeles",
      },
      {
        latLng: [41.878113, -87.629799],
        name: "Chicago",
      },
      {
        latLng: [29.760427, -95.369804],
        name: "Houston",
      },
      {
        latLng: [33.448376, -112.074036],
        name: "Phoenix",
      },
      {
        latLng: [51.507351, -0.127758],
        name: "London",
      },
      {
        latLng: [48.856613, 2.352222],
        name: "Paris",
      },
      {
        latLng: [55.755825, 37.617298],
        name: "Moscow",
      },
      {
        latLng: [40.416775, -3.70379],
        name: "Madrid",
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 250);
  }, [palette]);

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
          Real-Time
        </Card.Title>
      </Card.Header>
      <Card.Body className="p-2">
        <div className="map-container" style={{ height: 279 }}>
          <VectorMap {...options} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default WorldMap;
