import React from "react";
import { Card } from "react-bootstrap";

import GoogleMapReact from "google-map-react";

const Default = () => {
  const getMapOptions = (maps) => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.ROADMAP,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: true,
    };
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Default Map</Card.Title>
        <h6 className="card-subtitle text-muted">
          Displays the default road map view.
        </h6>
      </Card.Header>
      <Card.Body>
        <div style={{ height: 300, width: "100%" }}>
          <GoogleMapReact
            options={getMapOptions}
            bootstrapURLKeys={{
              key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4",
            }}
            defaultCenter={{
              lat: 40.712784,
              lng: -74.005941,
            }}
            defaultZoom={14}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Default;
