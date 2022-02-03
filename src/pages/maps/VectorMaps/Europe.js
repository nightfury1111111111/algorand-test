import React from "react";
import { VectorMap } from "react-jvectormap";
import { Card } from "react-bootstrap";

import usePalette from "../../../hooks/usePalette";

function Europe() {
  const palette = usePalette();

  const options = {
    map: "europe_mill",
    regionStyle: {
      initial: {
        fill: palette["gray-200"],
      },
    },
    backgroundColor: "transparent",
    containerStyle: {
      width: "100%",
      height: "100%",
    },
    zoomOnScroll: false,
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5" className="mb-0">
          Europe Map
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="map-container" style={{ height: 300 }}>
          <VectorMap {...options} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Europe;
